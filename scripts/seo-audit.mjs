import { existsSync, readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { seoPages, siteUrl } from '../src/content/seoPages.js';

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const distRoot = resolve(projectRoot, 'dist');
const errors = [];
const warnings = [];
const knownRoutes = new Set(['/', ...seoPages.map((page) => page.path)]);
const pageUrl = (pathname) => pathname === '/' ? `${siteUrl}/` : `${siteUrl}${pathname}/`;

if (!existsSync(resolve(distRoot, 'index.html'))) {
  console.error('SEO audit failed: run npm run build first.');
  process.exit(1);
}

const decode = (value) => value
  .replace(/&amp;/g, '&')
  .replace(/&nbsp;/g, ' ')
  .replace(/&#x27;|&#39;/g, "'")
  .replace(/&quot;/g, '"')
  .replace(/&lt;/g, '<')
  .replace(/&gt;/g, '>');
const textFrom = (value) => decode(value.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
const getAttribute = (tag, name) => {
  const match = tag.match(new RegExp(`\\b${name}=(?:"([^"]*)"|'([^']*)')`, 'i'));
  return decode(match?.[1] ?? match?.[2] ?? '');
};
const hasAttribute = (tag, name) => new RegExp(`\\b${name}(?:\\s*=|\\s|\/?>)`, 'i').test(tag);

function routeFile(pathname) {
  return pathname === '/'
    ? resolve(distRoot, 'index.html')
    : resolve(distRoot, pathname.slice(1), 'index.html');
}

function auditPage(pathname, expected) {
  const file = routeFile(pathname);
  if (!existsSync(file)) {
    errors.push(`${pathname}: prerendered HTML file is missing.`);
    return null;
  }

  const html = readFileSync(file, 'utf8');
  const allTags = (name) => html.match(new RegExp(`<${name}\\b[^>]*>`, 'gi')) ?? [];
  const contentsOf = (name) => [...html.matchAll(new RegExp(`<${name}\\b[^>]*>([\\s\\S]*?)<\\/${name}>`, 'gi'))]
    .map((match) => textFrom(match[1]));
  const metas = allTags('meta');
  const title = contentsOf('title')[0] ?? '';
  const description = getAttribute(metas.find((tag) => getAttribute(tag, 'name').toLowerCase() === 'description') ?? '', 'content');
  const robots = getAttribute(metas.find((tag) => getAttribute(tag, 'name').toLowerCase() === 'robots') ?? '', 'content');
  const ogType = getAttribute(metas.find((tag) => getAttribute(tag, 'property').toLowerCase() === 'og:type') ?? '', 'content');
  const canonical = getAttribute(allTags('link').find((tag) => getAttribute(tag, 'rel').toLowerCase() === 'canonical') ?? '', 'href');
  const h1s = contentsOf('h1');
  const h2s = contentsOf('h2');
  const images = allTags('img');
  const ids = new Set([...html.matchAll(/\bid=(?:"([^"]+)"|'([^']+)')/gi)].map((match) => match[1] ?? match[2]));

  if (title !== expected.title) errors.push(`${pathname}: title does not match the keyword map.`);
  if (description !== expected.description) errors.push(`${pathname}: meta description does not match the keyword map.`);
  if (canonical !== expected.canonical) errors.push(`${pathname}: canonical URL is incorrect.`);
  if (ogType !== expected.ogType) errors.push(`${pathname}: og:type should be ${expected.ogType}.`);
  if (h1s.length !== 1 || h1s[0] !== expected.h1) errors.push(`${pathname}: expected exactly one mapped H1.`);
  if (/noindex/i.test(robots)) errors.push(`${pathname}: robots meta contains noindex.`);
  if (title.length < 45 || title.length > 72) warnings.push(`${pathname}: title length is ${title.length}.`);
  if (description.length < 135 || description.length > 165) warnings.push(`${pathname}: meta description length is ${description.length}.`);
  if (textFrom(html).length < (pathname === '/' ? 10000 : 3500)) errors.push(`${pathname}: prerendered content is unexpectedly thin.`);

  images.forEach((tag, index) => {
    const missing = ['src', 'width', 'height'].filter((attribute) => !getAttribute(tag, attribute));
    if (!hasAttribute(tag, 'alt')) missing.push('alt');
    if (missing.length) errors.push(`${pathname}: image ${index + 1} is missing ${missing.join(', ')}.`);

    const srcSet = getAttribute(tag, 'srcset');
    if (srcSet) {
      srcSet.split(',').forEach((candidate) => {
        const source = candidate.trim().split(/\s+/)[0];
        if (source.startsWith('/') && !existsSync(resolve(distRoot, source.slice(1)))) {
          errors.push(`${pathname}: responsive image candidate ${source} is missing.`);
        }
      });
    }
  });

  const priorityImages = images.filter((tag) => getAttribute(tag, 'fetchpriority').toLowerCase() === 'high');
  if (priorityImages.length !== 1) errors.push(`${pathname}: expected exactly one high-priority hero image.`);
  priorityImages.forEach((tag) => {
    if (!getAttribute(tag, 'srcset') || !getAttribute(tag, 'sizes')) {
      errors.push(`${pathname}: high-priority hero image is missing srcset or sizes.`);
    }
    if (getAttribute(tag, 'loading').toLowerCase() === 'lazy') {
      errors.push(`${pathname}: high-priority hero image must not be lazy loaded.`);
    }
  });

  if (/google-site-verification/i.test(html)) errors.push(`${pathname}: malformed Search Console verification meta remains.`);
  if (/Reviewed:\s*25 August 2026/i.test(html)) errors.push(`${pathname}: misleading hardcoded review date remains.`);

  const hrefs = allTags('a').map((tag) => getAttribute(tag, 'href')).filter(Boolean);
  hrefs.forEach((href) => {
    if (href.startsWith('#') && href.length > 1 && !ids.has(href.slice(1))) {
      errors.push(`${pathname}: missing anchor target ${href}.`);
    }
    if (href.startsWith('/') && !href.startsWith('/assets/')) {
      const [routePath, hash] = href.split('#');
      const normalizedRoute = routePath === '/' || !routePath ? '/' : routePath.replace(/\/+$/, '');
      if (!knownRoutes.has(normalizedRoute)) errors.push(`${pathname}: internal route ${normalizedRoute} does not exist.`);
      if (hash) {
        const targetFile = routeFile(normalizedRoute);
        const targetHtml = existsSync(targetFile) ? readFileSync(targetFile, 'utf8') : '';
        if (!new RegExp(`\\bid=["']${hash}["']`).test(targetHtml)) errors.push(`${pathname}: internal link target ${href} does not exist.`);
      }
    }
  });

  const schemaTypes = [...html.matchAll(/<script\b[^>]*type=(?:"application\/ld\+json"|'application\/ld\+json')[^>]*>([\s\S]*?)<\/script>/gi)]
    .flatMap((match) => {
      try {
        const value = JSON.parse(match[1]);
        const graph = value['@graph'] ?? [value];
        return graph.flatMap((item) => Array.isArray(item['@type']) ? item['@type'] : [item['@type']]).filter(Boolean);
      } catch {
        errors.push(`${pathname}: structured data contains invalid JSON.`);
        return [];
      }
    });

  expected.schemaTypes.forEach((type) => {
    if (!schemaTypes.includes(type)) errors.push(`${pathname}: missing ${type} structured data.`);
  });

  if (!html.includes('Preeti Scaffolding') || !html.includes('vijayshukla301@gmail.com') || !html.includes('99873 17357')) {
    errors.push(`${pathname}: prerendered business identity or contact details are missing.`);
  }

  return {
    path: pathname,
    title,
    description,
    titleLength: title.length,
    descriptionLength: description.length,
    canonical,
    ogType,
    h1: h1s[0],
    h2Count: h2s.length,
    imageCount: images.length,
    schemaTypes: [...new Set(schemaTypes)],
    textCharacters: textFrom(html).length,
  };
}

const homeExpected = {
  title: 'Scaffolding Rental & Labour Services in Mumbai | Preeti Scaffolding',
  description: 'Preeti Scaffolding offers H-Frame, MS H-Frame and Cuplock scaffolding on rent or sale, plus erection and dismantling labour across Mumbai. Get a quote.',
  canonical: `${siteUrl}/`,
  h1: 'Scaffolding Rental & Labour Services in Mumbai',
  ogType: 'website',
  schemaTypes: ['WebSite', 'LocalBusiness', 'GeneralContractor', 'Service', 'FAQPage'],
};

const pageReports = [auditPage('/', homeExpected)];
for (const page of seoPages) {
  const schemaTypes = ['LocalBusiness', 'GeneralContractor', 'BreadcrumbList', 'FAQPage'];
  if (page.kind === 'article') schemaTypes.push('Article');
  if (page.kind === 'service') schemaTypes.push('Service', 'WebPage');
  if (page.kind === 'hub') schemaTypes.push('CollectionPage');
  pageReports.push(auditPage(page.path, {
    title: page.title,
    description: page.description,
    canonical: pageUrl(page.path),
    h1: page.h1,
    ogType: page.kind === 'article' ? 'article' : 'website',
    schemaTypes,
  }));
}

const titles = pageReports.filter(Boolean).map((report) => report.title);
const descriptions = pageReports.filter(Boolean).map((report) => report.description);
if (new Set(titles).size !== titles.length) errors.push('Duplicate page titles were found.');
if (new Set(descriptions).size !== descriptions.length) errors.push('Duplicate meta descriptions were found.');

const requiredFiles = ['404.html', 'robots.txt', 'sitemap.xml', 'favicon.svg', 'logo.svg', 'site.webmanifest', 'llms.txt'];
const missingFiles = requiredFiles.filter((file) => !existsSync(resolve(distRoot, file)));
if (missingFiles.length) errors.push(`Missing production files: ${missingFiles.join(', ')}`);

const sitemap = existsSync(resolve(distRoot, 'sitemap.xml')) ? readFileSync(resolve(distRoot, 'sitemap.xml'), 'utf8') : '';
for (const pathname of knownRoutes) {
  const expectedUrl = pageUrl(pathname);
  if (!sitemap.includes(`<loc>${expectedUrl}</loc>`)) errors.push(`Sitemap is missing ${expectedUrl}.`);
}

const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
if (sitemapUrls.length !== knownRoutes.size) errors.push('Sitemap URL count does not match the canonical route count.');
if (sitemapUrls.some((url) => !url.startsWith('https://www.shuklascaffolding.com/'))) {
  errors.push('Sitemap contains a URL outside the canonical HTTPS www host.');
}
if (sitemapUrls.some((url) => !url.endsWith('/'))) errors.push('Sitemap contains a non-trailing-slash URL.');
if (/<lastmod>/i.test(sitemap)) errors.push('Sitemap contains an unsupported global lastmod date.');
if (/404\.html|page-not-found/i.test(sitemap)) errors.push('Sitemap contains the custom 404 page.');

const notFoundHtml = existsSync(resolve(distRoot, '404.html')) ? readFileSync(resolve(distRoot, '404.html'), 'utf8') : '';
if (!/<h1\b[^>]*>Page Not Found<\/h1>/i.test(notFoundHtml)) errors.push('Custom 404 page is missing its Page Not Found H1.');
if (!/<meta name="robots" content="noindex, follow" \/>/i.test(notFoundHtml)) errors.push('Custom 404 page is missing noindex, follow metadata.');
if (/rel="canonical"/i.test(notFoundHtml)) errors.push('Custom 404 page should not declare the homepage canonical.');
if (/id="structured-data"/i.test(notFoundHtml)) errors.push('Custom 404 page should not inherit homepage structured data.');

try {
  const vercelConfig = JSON.parse(readFileSync(resolve(projectRoot, 'vercel.json'), 'utf8'));
  if (vercelConfig.trailingSlash !== true) errors.push('Vercel trailingSlash must be enabled.');
  const immutableHeader = vercelConfig.headers?.find((entry) => entry.headers?.some((header) =>
    header.key.toLowerCase() === 'cache-control' && header.value === 'public, max-age=31536000, immutable'
  ));
  if (!immutableHeader || !immutableHeader.source.includes('/assets/')) {
    errors.push('Vercel immutable caching for hashed JS/CSS assets is missing.');
  }
} catch {
  errors.push('vercel.json is missing or invalid JSON.');
}

const report = {
  routeCount: pageReports.filter(Boolean).length,
  uniqueTitleCount: new Set(titles).size,
  uniqueDescriptionCount: new Set(descriptions).size,
  requiredFilesPresent: requiredFiles.filter((file) => !missingFiles.includes(file)),
  pages: pageReports.filter(Boolean),
  warnings,
  errors,
};

console.log(JSON.stringify(report, null, 2));
process.exit(errors.length ? 1 : 0);
