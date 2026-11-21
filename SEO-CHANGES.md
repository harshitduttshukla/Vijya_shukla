# SEO Changes Log

## Batch 1: 21 November 2026

### Done
| Change | Files | Why |
|---|---|---|
| "Get a Scaffolding Quote" buttons now say **"Call +91 99873 17357"** (header, homepage hero, every page hero). WhatsApp is the second link. | Header.jsx, Hero.jsx, SeoPage.jsx | Owner request; a phone CTA converts better on mobile |
| Homepage title, H1 and meta now target **"scaffolding in Mumbai"**, add "on rent" and mention 10+ years and the full product range | index.html, Hero.jsx | Fixes cannibalisation with the rental page (GSC: homepage at pos 7.0, 588 impressions) |
| Rental page retitled **"Scaffolding on Rent in Mumbai"**. Added a "Rental services" table, new products (aluminium towers, MS pipes and clamps, props, jacks, shuttering), and 2 FAQs (rent price, years in business). Now about 1,640 words. | seoPages.js | GSC: pos 10.0, 1.1% CTR. This page now owns every "rent/rental" keyword. |
| `/types-of-scaffolding/` title changed to **"8 Types of Scaffolding (With Pictures & Names)"**. Added a numbered answer, a real-photo gallery, a names list and a "used in construction" table. 903 → 1,330 words. | seoPages.js | GSC: 2,470 impressions, only 1.3% CTR |
| H-frame title now answers **"What is H-frame scaffolding?"** | seoPages.js | GSC: 256 impressions, 0.4% CTR |
| **New page:** `/aluminium-scaffolding-on-rent-mumbai/` (about 1,430 words, 7 FAQs, FAQ, Service and Breadcrumb schema) | seoPages.js | Targets "aluminium scaffolding on rent in Mumbai" (pos 25.4) and "mobile scaffolding rental near me" (no page before) |
| Long titles shortened to under 60 characters (6 pages) | seoPages.js | They were being truncated in Google |
| Schema: `HomeAndConstructionBusiness`, plus description, slogan and knowsAbout, and 2 new Service entries (aluminium tower; pipes/props/shuttering) | index.html, prerender.mjs | More precise business type |
| Gallery support (lazy-loaded, width/height, alt) for content sections | SeoPage.jsx, seo-fixes.css | Needed for "with pictures" queries |
| New page linked from the footer, rental page, types page, aluminium guide and mobile guide | Footer.jsx, seoPages.js | No orphan pages |
| Sitemap regenerated (16 URLs); audit script expectations updated | sitemap.xml, seo-audit.mjs | — |

`npm run build` and `npm run audit:seo` both pass with 0 errors.

## Batch 2: 21 November 2026 (blog)

| Change | Files |
|---|---|
| New blog section: a `/blog/` listing page plus 6 posts at `/blog/<slug>/`, each with author (Vijay Shukla, Proprietor), published date, read time, a table of contents, and FAQ, BlogPosting and Breadcrumb schema | src/content/blogPosts.js (new), seoPages.js, SeoPage.jsx, prerender.mjs, seo-fixes.css |
| Posts: rent price factors, aluminium vs MS, Cuplock vs H-frame, rent vs buy, society painting, rental checklist | blogPosts.js |
| "Blog" link added to the header nav and footer; rental page links to 3 posts; every post links back to the rental and service pages | Header.jsx, Footer.jsx, seoPages.js |
| Sitemap now has 23 URLs; audit script supports blog pages (0 errors) | generate-sitemap.mjs, seo-audit.mjs |

No rates are published anywhere. The price post explains the cost factors and sends readers to Call/WhatsApp.
Posts are about 650–1,100 words of unique content each, which is shorter than the brief's 1,000–1,800. They can be expanded later with real site examples.

## Batch 3: 21 November 2026 (location pages)

| Change | Files |
|---|---|
| 4 new location pages: `/scaffolding-on-rent-andheri/`, `-powai/`, `-thane/`, `-navi-mumbai/`. Each is written around that area's geography, building types, the route from the Sakinaka yard, and local delivery points. There are no fake projects, reviews or prices. | src/content/locationPages.js (new), seoPages.js |
| The homepage "Areas We Serve" list now links to these 4 pages; footer and rental-page links added | ServiceAreas.jsx, Footer.jsx, seoPages.js |

Each page has about 500–600 words of unique content plus a shared "what we provide" block. The owner confirmed the same service everywhere (scaffolding on rent plus erection/dismantling labour, for any type of work), so more area pages were not made, to avoid near-duplicate doorway pages.

## Batch 4: 21 November 2026 (large projects outside Mumbai)

| Change | Files |
|---|---|
| New page `/scaffolding-supplier-pune-ahmedabad/`. It states honestly that the business is Mumbai-based and takes **large** contracts in Pune, Ahmedabad, Surat, Vadodara and Nashik. Keywords: scaffolding on rent in Pune, scaffolding supplier Ahmedabad, bulk scaffolding supplier. The Service schema `areaServed` includes these cities. | src/content/outstationPages.js (new), seoPages.js, prerender.mjs |
| New blog post `/blog/hiring-mumbai-scaffolding-supplier-outside-mumbai/` | outstationPages.js |
| Footer link "Large Projects: Pune & Ahmedabad" | Footer.jsx |

No per-city pages were made (there are no offices there). The homepage and LocalBusiness schema stay Mumbai-focused.

### Placeholders and info still needed
- ~~Manufacturing~~: confirmed **no**. The site stays "supplier", and no manufacturer page will be made.
- ~~Opening hours~~: **8 AM–11 PM daily**. This has been added to the schema and the footer.
- **Google Business Profile link**, plus IndiaMART, Justdial and Facebook links (for `sameAs`)
- **Exact map pin** (latitude/longitude) of the Sakinaka office, for `geo` and a map embed
- Photos: all site photos are the owner's own work photos (confirmed). No new photos for now.

### Next batches (planned)
2. Blog section, with 8–10 posts (rent price guide, aluminium vs MS, cuplock vs H-frame, rent vs buy, society painting scaffolding, rental checklist, and so on)
3. Location pages (only where the content can be genuinely unique)
4. Expand thin pages (material-mumbai, H-frame, cuplock) and add a map embed

### Off-site to-do (owner)
- After deploying, resubmit `sitemap.xml` in GSC and request indexing for the 3 changed pages and the new page.
- Google Business Profile: add every product as a Service, add photos weekly, and ask happy clients for reviews.
- List the business on IndiaMART, Justdial and Sulekha with the **same** name, address and phone (NAP).
- A note in GSC: `http://shuklascaffolding.com/` (non-www, http) showed 1 impression. Check in Vercel that it 301-redirects to `https://www.`.
