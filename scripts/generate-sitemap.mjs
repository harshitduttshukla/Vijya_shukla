import { writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { lastModified, seoPages, siteUrl } from '../src/content/seoPages.js';

const entries = [
  { path: '/', priority: '1.0', changefreq: 'monthly' },
  ...seoPages.map((page) => ({
    path: page.path,
    priority: page.kind === 'hub' || page.kind === 'service' ? '0.9' : '0.8',
    changefreq: page.kind === 'service' ? 'monthly' : 'yearly',
  })),
];

const pageUrl = (pathname) => pathname === '/' ? `${siteUrl}/` : `${siteUrl}${pathname}/`;

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.map((entry) => `  <url>
    <loc>${pageUrl(entry.path)}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`).join('\n')}
</urlset>
`;

await writeFile(resolve(process.cwd(), 'public/sitemap.xml'), sitemap, 'utf8');
console.log(`Generated sitemap with ${entries.length} URLs.`);
