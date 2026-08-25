const servicesData = [
  {
    num: '01',
    id: 'h-frame-scaffolding',
    img: '/assets/images/scaffolding-installation-commercial-mumbai.webp',
    width: 1000,
    height: 750,
    alt: 'H-Frame scaffolding installed around a commercial building in Mumbai',
    title: 'H-Frame Scaffolding',
    desc: 'A modular access system used for building façades, renovation and maintenance work. H-Frame material is available on rent or sale, with erection and dismantling labour for Mumbai sites.',
    linkLabel: 'Read the H-Frame Guide',
    linkHref: '/h-frame-scaffolding/',
  },
  {
    num: '02',
    id: 'cuplock-stairway-scaffolding',
    img: '/assets/images/construction-scaffolding-kurla-mumbai.webp',
    width: 750,
    height: 1000,
    alt: 'Scaffolding stairway and access structure at a construction site',
    title: 'Cuplock Stairway Scaffolding',
    desc: 'Stairway access helps workers move between scaffold levels on active sites. The required layout depends on height and site conditions, so material and labour are quoted after reviewing the project.',
    linkLabel: 'Read the Cuplock Guide',
    linkHref: '/cuplock-scaffolding/',
  },
  {
    num: '03',
    id: 'ms-h-frame-scaffolding',
    img: '/assets/images/exterior-scaffolding-safety-net-mumbai.webp',
    width: 750,
    height: 1000,
    alt: 'MS H-Frame scaffolding with protective netting on a Mumbai building',
    title: 'MS H-Frame Scaffolding',
    desc: 'Mild-steel H-Frames provide structured access for construction and exterior work. Frames, braces and related components can be supplied on rent or sale with setup labour.',
    linkLabel: 'Explore MS H-Frame Systems',
    linkHref: '/h-frame-scaffolding/',
  },
  {
    num: '04',
    id: 'cuplock-scaffolding',
    img: '/assets/images/h-frame-scaffolding-installation-mumbai.webp',
    width: 1000,
    height: 563,
    alt: 'Scaffolding framework assembled for interior construction work',
    title: 'Cuplock Scaffolding',
    desc: 'Cuplock is a modular system used where flexible horizontal and vertical access is required. We provide components, labour and dismantling support for residential, commercial and industrial projects.',
    linkLabel: 'Read the Cuplock Guide',
    linkHref: '/cuplock-scaffolding/',
  },
  {
    num: '05',
    id: 'scaffolding-ladders',
    img: '/assets/images/commercial-entrance-scaffolding-mumbai.webp',
    width: 1000,
    height: 750,
    alt: 'Scaffolding access structure installed at a commercial entrance',
    title: 'Cuplock Ladders',
    desc: 'Scaffolding ladders provide controlled vertical access within a suitable scaffold arrangement. Availability and installation requirements are confirmed according to the site and working height.',
    linkLabel: 'Explore Scaffolding Parts',
    linkHref: '/scaffolding-material-parts/',
  },
  {
    num: '06',
    id: 'aluminium-scaffolding-accessories',
    img: '/assets/images/building-facade-scaffolding-mumbai.webp',
    width: 750,
    height: 1000,
    alt: 'Scaffolding installed along the exterior of a multi-storey building',
    title: 'Aluminium Scaffolding & Accessories',
    desc: 'Aluminium access equipment and scaffolding accessories support maintenance and construction tasks. Contact us with the required height, duration and Mumbai site location for a suitable quotation.',
    linkLabel: 'Read the Aluminium Guide',
    linkHref: '/aluminium-scaffolding/',
  },
];

export default function Services() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">Our Scaffolding Products</span>
            <h2>Scaffolding Materials{' '}<br /><em>on Rent &amp; Sale</em></h2>
          </div>
          <p>H-Frame, MS H-Frame, Cuplock systems, ladders, aluminium equipment and accessories for residential, commercial and industrial work across Mumbai.</p>
        </div>
        <div className="cards">
          {servicesData.map((item) => (
            <article className="card" id={item.id} key={item.num}>
              <img src={item.img} alt={item.alt} width={item.width} height={item.height} loading="lazy" decoding="async" />
              <div>
                <span>{item.num}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <a href={item.linkHref}>{item.linkLabel} →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
