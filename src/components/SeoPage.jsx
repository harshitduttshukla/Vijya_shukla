import { guidePages, seoPageByPath, servicePages } from '../content/seoPages';

function Breadcrumbs({ page }) {
  const isGuideChild = page.kind === 'article';

  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol>
        <li><a href="/">Home</a></li>
        {isGuideChild && <li><a href="/scaffolding-guide/">Scaffolding Guide</a></li>}
        <li aria-current="page">{page.h1}</li>
      </ol>
    </nav>
  );
}

function PageCard({ item }) {
  return (
    <article className="seo-link-card">
      <span>{item.kind === 'service' ? 'Mumbai Service' : 'Scaffolding Guide'}</span>
      <h3><a href={`${item.path}/`}>{item.h1}</a></h3>
      <p>{item.directAnswer}</p>
      <a className="seo-card-link" href={`${item.path}/`}>Read {item.kind === 'service' ? 'service details' : 'the guide'} →</a>
    </article>
  );
}

function ContentSection({ section }) {
  return (
    <section className="seo-content-section" id={section.id}>
      <h2>{section.heading}</h2>
      {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      {section.bullets && (
        <ul>
          {section.bullets.map((item) => <li key={item}>{item}</li>)}
        </ul>
      )}
      {section.table && (
        <div className="seo-table-wrap" role="region" aria-label={`${section.heading} comparison table`} tabIndex="0">
          <table>
            <thead>
              <tr>{section.table.headers.map((header) => <th key={header} scope="col">{header}</th>)}</tr>
            </thead>
            <tbody>
              {section.table.rows.map((row) => (
                <tr key={row.join('|')}>
                  {row.map((cell, index) => index === 0
                    ? <th key={cell} scope="row">{cell}</th>
                    : <td key={cell}>{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

function RelatedContent({ page }) {
  const related = page.relatedPaths
    .map((path) => seoPageByPath.get(path))
    .filter(Boolean);

  if (!related.length) return null;

  return (
    <section className="seo-related" aria-labelledby="related-heading">
      <span className="eyebrow">Continue Reading</span>
      <h2 id="related-heading">Related Scaffolding Resources</h2>
      <div className="seo-related-grid">
        {related.map((item) => (
          <a href={`${item.path}/`} key={item.path}>
            <span>{item.kind === 'service' ? 'Service' : 'Guide'}</span>
            <strong>{item.h1}</strong>
            <small>Read more →</small>
          </a>
        ))}
      </div>
    </section>
  );
}

export default function SeoPage({ page }) {
  const hubGuidePages = guidePages.filter((item) => item.path !== page.path);

  return (
    <main className="seo-page" id="main-content">
      <div className="seo-page-hero">
        <div className="container">
          <Breadcrumbs page={page} />
          <div className="seo-hero-grid">
            <div>
              <span className="eyebrow">{page.eyebrow}</span>
              <h1>{page.h1}</h1>
              <p className="seo-direct-answer">{page.directAnswer}</p>
              <div className="seo-hero-actions">
                <a className="btn" href="/#contact">Request a Project Quote</a>
                <a className="text-link seo-phone-link" href="tel:+919987317357">Call +91 99873 17357 →</a>
              </div>
            </div>
            <figure>
              <img
                src={page.image}
                alt={page.imageAlt}
                width={page.imageWidth}
                height={page.imageHeight}
                fetchpriority="high"
                decoding="async"
              />
              <figcaption>Preeti Scaffolding project photography from Mumbai work sites.</figcaption>
            </figure>
          </div>
        </div>
      </div>

      <article className="container seo-article">
        <div className="seo-article-meta">
          <span>Reviewed: 25 August 2026</span>
          <span>Topic: {page.primaryKeyword}</span>
        </div>

        <div className="seo-article-body">
          {page.sections.map((section) => <ContentSection section={section} key={section.heading} />)}
        </div>

        {page.kind === 'hub' && (
          <section className="seo-hub-section" aria-labelledby="guide-articles-heading">
            <span className="eyebrow">Learn by Topic</span>
            <h2 id="guide-articles-heading">Scaffolding Guides</h2>
            <div className="seo-link-grid">
              {hubGuidePages.map((item) => <PageCard item={item} key={item.path} />)}
            </div>
          </section>
        )}

        {page.kind === 'hub' && (
          <section className="seo-hub-section seo-service-hub" aria-labelledby="mumbai-services-heading">
            <span className="eyebrow">Commercial Services</span>
            <h2 id="mumbai-services-heading">Scaffolding Services in Mumbai</h2>
            <div className="seo-link-grid">
              {servicePages.map((item) => <PageCard item={item} key={item.path} />)}
            </div>
          </section>
        )}

        {page.sources && (
          <section className="seo-sources" aria-labelledby="sources-heading">
            <h2 id="sources-heading">Authoritative Safety References</h2>
            <p>These references support the general principles above. Mumbai projects must also confirm current Indian, client, manufacturer and site-specific requirements.</p>
            <ul>
              {page.sources.map((source) => (
                <li key={source.href}>
                  <a href={source.href} target="_blank" rel="noopener noreferrer">{source.label}</a>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="seo-faq" aria-labelledby="page-faq-heading">
          <span className="eyebrow">Practical Answers</span>
          <h2 id="page-faq-heading">Frequently Asked Questions</h2>
          <div className="accordion">
            {page.faqs.map((item, index) => (
              <details key={item.question} open={index === 0}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="seo-cta" aria-labelledby="seo-cta-heading">
          <span className="eyebrow light">Mumbai Scaffolding Enquiry</span>
          <h2 id="seo-cta-heading">Need Material or Labour for a Mumbai Project?</h2>
          <p>Preeti Scaffolding provides material on rent and sale with erection and dismantling labour. Share the site location, working height, required system and expected duration for a project-specific quotation.</p>
          <div>
            <a className="btn" href="https://wa.me/919987317357">WhatsApp Your Requirement</a>
            <a className="text-link" href="mailto:vijayshukla301@gmail.com">Email Preeti Scaffolding →</a>
          </div>
        </section>

        <RelatedContent page={page} />
      </article>
    </main>
  );
}
