import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { lastModified, seoPages, siteUrl } from '../src/content/seoPages.js';

const root = process.cwd();
const htmlPath = resolve(root, 'dist/index.html');
const serverEntry = resolve(root, '.ssr-dist/entry-server.js');

const [{ render }, template] = await Promise.all([
  import(pathToFileURL(serverEntry)),
  readFile(htmlPath, 'utf8'),
]);

const pageUrl = (pathname) => pathname === '/' ? `${siteUrl}/` : `${siteUrl}${pathname}/`;

const business = {
  '@type': ['LocalBusiness', 'GeneralContractor'],
  '@id': `${siteUrl}/#business`,
  name: 'Preeti Scaffolding',
  url: `${siteUrl}/`,
  telephone: ['+91-9987317357', '+91-9324293900'],
  email: 'vijayshukla301@gmail.com',
  taxID: '27MAAPS9233F1ZA',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'A 4/8, Jai Hind Society, Khadi No. 03, 90 Ft Road, Sakinaka, Kurla West',
    addressLocality: 'Mumbai',
    addressRegion: 'Maharashtra',
    postalCode: '400072',
    addressCountry: 'IN',
  },
};

function breadcrumbSchema(page) {
  const items = [{ name: 'Home', item: pageUrl('/') }];
  if (page.kind === 'article') {
    items.push({ name: 'Scaffolding Guide', item: pageUrl('/scaffolding-guide') });
  }
  items.push({ name: page.h1, item: pageUrl(page.path) });

  return {
    '@type': 'BreadcrumbList',
    '@id': `${pageUrl(page.path)}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };
}

function faqSchema(page) {
  return {
    '@type': 'FAQPage',
    '@id': `${pageUrl(page.path)}#faq`,
    mainEntity: page.faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

function pageSchema(page) {
  const canonical = pageUrl(page.path);
  const common = [business, breadcrumbSchema(page), faqSchema(page)];

  if (page.kind === 'service') {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        ...common,
        {
          '@type': 'WebPage',
          '@id': `${canonical}#webpage`,
          url: canonical,
          name: page.title,
          description: page.description,
          inLanguage: 'en-IN',
          breadcrumb: { '@id': `${canonical}#breadcrumb` },
          about: { '@id': `${siteUrl}/#business` },
        },
        {
          '@type': 'Service',
          '@id': `${canonical}#service`,
          name: page.h1,
          serviceType: page.serviceType,
          description: page.directAnswer,
          url: canonical,
          provider: { '@id': `${siteUrl}/#business` },
          areaServed: [
            { '@type': 'City', name: 'Mumbai' },
            { '@type': 'City', name: 'Thane' },
            { '@type': 'City', name: 'Navi Mumbai' },
          ],
        },
      ],
    };
  }

  if (page.kind === 'hub') {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        ...common,
        {
          '@type': 'CollectionPage',
          '@id': `${canonical}#collection`,
          url: canonical,
          name: page.title,
          description: page.description,
          inLanguage: 'en-IN',
          breadcrumb: { '@id': `${canonical}#breadcrumb` },
          mainEntity: {
            '@type': 'ItemList',
            itemListElement: seoPages
              .filter((item) => item.kind !== 'hub')
              .map((item, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                name: item.h1,
                url: pageUrl(item.path),
              })),
          },
        },
      ],
    };
  }

  return {
    '@context': 'https://schema.org',
    '@graph': [
      ...common,
      {
        '@type': 'Article',
        '@id': `${canonical}#article`,
        mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
        headline: page.h1,
        description: page.description,
        image: `${siteUrl}${page.image}`,
        datePublished: lastModified,
        dateModified: lastModified,
        inLanguage: 'en-IN',
        author: { '@id': `${siteUrl}/#business` },
        publisher: { '@id': `${siteUrl}/#business` },
        about: page.secondaryKeywords.map((name) => ({ '@type': 'Thing', name })),
      },
    ],
  };
}

function setMeta(html, page) {
  const canonical = pageUrl(page.path);
  const image = `${siteUrl}/assets/images/preeti-scaffolding-mumbai-social.jpg`;
  const escapeHtml = (value) => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const title = escapeHtml(page.title);
  const description = escapeHtml(page.description);
  let output = html;

  output = output.replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`);
  output = output.replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${description}" />`);
  output = output.replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${canonical}" />`);
  output = output.replace(/<link rel="alternate" hreflang="en-IN" href="[^"]*" \/>/, `<link rel="alternate" hreflang="en-IN" href="${canonical}" />`);
  output = output.replace(/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${canonical}" />`);
  output = output.replace(/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${title}" />`);
  output = output.replace(/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${description}" />`);
  output = output.replace(/<meta property="og:image" content="[^"]*" \/>/, `<meta property="og:image" content="${image}" />`);
  output = output.replace(/<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${title}" />`);
  output = output.replace(/<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${description}" />`);
  output = output.replace(/<meta name="twitter:image" content="[^"]*" \/>/, `<meta name="twitter:image" content="${image}" />`);
  output = output.replace(/<link rel="preload" as="image" href="[^"]*" fetchpriority="high" \/>/, `<link rel="preload" as="image" href="${page.image}" fetchpriority="high" />`);
  output = output.replace(
    /<script id="structured-data" type="application\/ld\+json">[\s\S]*?<\/script>/,
    `<script id="structured-data" type="application/ld+json">\n${JSON.stringify(pageSchema(page), null, 2)}\n  </script>`
  );
  return output;
}

function withAppHtml(html, pathname) {
  const appHtml = render(pathname);
  const output = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
  if (output === html) throw new Error(`Prerender failed for ${pathname}: root mount point was not found.`);
  return output;
}

await writeFile(htmlPath, withAppHtml(template, '/'), 'utf8');

for (const page of seoPages) {
  const routeHtml = withAppHtml(setMeta(template, page), page.path);
  const outputPath = resolve(root, 'dist', page.path.slice(1), 'index.html');
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, routeHtml, 'utf8');
}

console.log(`Prerendered homepage and ${seoPages.length} SEO routes.`);
