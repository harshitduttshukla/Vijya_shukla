const servicesData = [
  {
    num: '01',
    img: '/assets/project-images/project-03.jpg',
    alt: 'Aluminium scaffolding project',
    title: (
      <>
        Aluminium Scaffolding<br />(Narrow Model)
      </>
    ),
    desc: 'Lightweight, strong access solutions with quick installation and reliable stability.',
  },
  {
    num: '02',
    img: '/assets/project-images/project-04.jpg',
    alt: 'Stairway scaffolding project',
    title: (
      <>
        Aluminium Scaffolding<br />(Stairway Model)
      </>
    ),
    desc: 'Safe non-slip access, strong construction and easy assembly for demanding sites.',
  },
  {
    num: '03',
    img: '/assets/project-images/project-05.jpg',
    alt: 'H-frame scaffolding project',
    title: 'M.S H-Frame',
    desc: 'High-load, durable platforms for residential, commercial and industrial projects.',
  },
  {
    num: '04',
    img: '/assets/project-images/project-06.jpg',
    alt: 'Cuplock scaffolding project',
    title: 'Cuplock Scaffolding',
    desc: 'Fast modular access systems with minimal components and enhanced site safety.',
  },
  {
    num: '05',
    img: '/assets/project-images/project-07.jpg',
    alt: 'Access scaffolding project',
    title: 'Aluminium Ladders',
    desc: 'Lightweight, corrosion-resistant ladders with secure anti-slip steps.',
  },
  {
    num: '06',
    img: '/assets/project-images/project-08.jpg',
    alt: 'Scaffolding materials on site',
    title: 'Scaffolding Accessories',
    desc: 'Quality clamps, couplers, base plates, jacks and essential safety fittings.',
  },
];

export default function Services() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">Our Products</span>
            <h2>Built strong. <em>Built safe.</em></h2>
          </div>
          <p>Professional scaffolding solutions for construction, maintenance and industrial work.</p>
        </div>
        <div className="cards">
          {servicesData.map((item) => (
            <article className="card" key={item.num}>
              <img src={item.img} alt={item.alt} loading="lazy" decoding="async" />
              <div>
                <span>{item.num}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <a href="#contact">Learn More →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
