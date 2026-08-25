const guides = [
  {
    href: '/what-is-scaffolding/',
    label: 'Scaffolding Basics',
    title: 'What Is Scaffolding?',
    description: 'Understand how temporary access structures work, their main components and common construction uses.',
  },
  {
    href: '/types-of-scaffolding/',
    label: 'System Comparison',
    title: 'Types of Scaffolding',
    description: 'Compare H-frame, Cuplock, aluminium, mobile, cantilever, suspended and other scaffold arrangements.',
  },
  {
    href: '/scaffolding-safety/',
    label: 'Planning & Inspection',
    title: 'Scaffolding Safety',
    description: 'Review foundations, stability, access, fall protection, inspection and site-control principles.',
  },
];

export default function GuideLinks() {
  return (
    <section className="section home-guides" aria-labelledby="home-guides-heading">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">Scaffolding Knowledge Hub</span>
            <h2 id="home-guides-heading">Plan Your Project with Clear Information</h2>
          </div>
          <p>Learn the terminology, compare systems and prepare a more useful material or labour enquiry.</p>
        </div>
        <div className="home-guide-grid">
          {guides.map((guide) => (
            <article key={guide.href}>
              <span>{guide.label}</span>
              <h3><a href={guide.href}>{guide.title}</a></h3>
              <p>{guide.description}</p>
              <a href={guide.href}>Read the guide →</a>
            </article>
          ))}
        </div>
        <a className="btn home-guide-cta" href="/scaffolding-guide/">Explore All Scaffolding Guides</a>
      </div>
    </section>
  );
}
