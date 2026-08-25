const galleryImages = [
  { src: '/assets/images/scaffolding-labour-site-mumbai.webp', alt: 'Scaffolding worker beside an installed access structure', width: 1000, height: 750 },
  { src: '/assets/images/dense-scaffolding-structure-mumbai.webp', alt: 'Dense scaffolding framework assembled between buildings', width: 562, height: 1000 },
  { src: '/assets/images/indoor-industrial-scaffolding-mumbai.webp', alt: 'Large indoor scaffold installation for maintenance work', width: 1000, height: 750 },
  { src: '/assets/images/mobile-scaffold-platform-mumbai.webp', alt: 'Mobile scaffold work platform installed indoors', width: 750, height: 1000 },
  { src: '/assets/images/narrow-access-scaffolding-mumbai.webp', alt: 'Narrow access scaffolding installed beside a building', width: 750, height: 1000 },
  { src: '/assets/images/facade-access-scaffolding-mumbai.webp', alt: 'Scaffolding providing access to a glass building façade', width: 750, height: 1000 },
  { src: '/assets/images/cuplock-scaffolding-platform-mumbai.webp', alt: 'Cuplock scaffold platform and vertical access frame', width: 750, height: 1000 },
  { src: '/assets/images/wall-access-scaffolding-mumbai.webp', alt: 'Scaffold structure installed for exterior wall access', width: 750, height: 1000 },
  { src: '/assets/images/commercial-facade-scaffolding-mumbai.webp', alt: 'Commercial façade scaffolding installation', width: 750, height: 1000 },
  { src: '/assets/images/event-interior-scaffolding-mumbai.webp', alt: 'Interior scaffolding used for overhead installation work', width: 750, height: 1000 },
  { src: '/assets/images/retail-interior-scaffolding-mumbai.webp', alt: 'Scaffolding inside a commercial retail interior', width: 750, height: 1000 },
  { src: '/assets/images/protected-work-area-scaffolding-mumbai.webp', alt: 'Covered scaffolding protecting an active work area', width: 750, height: 1000 },
  { src: '/assets/images/large-scaffold-framework-mumbai.webp', alt: 'Large interconnected scaffold framework at a project site', width: 750, height: 1000 },
  { src: '/assets/images/scaffolding-workers-installation-mumbai.webp', alt: 'Workers assembling scaffolding at height', width: 750, height: 1000 },
  { src: '/assets/images/industrial-stairway-scaffolding-mumbai.webp', alt: 'Industrial stairway scaffold structure at a construction site', width: 750, height: 1000 },
  { src: '/assets/images/residential-building-scaffolding-mumbai.webp', alt: 'Scaffolding installed along a residential building exterior', width: 1000, height: 750 },
];

export default function Gallery() {
  return (
    <section className="section gallery" id="gallery">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">Our Gallery</span>
            <h2>Real Mumbai{' '}<br /><em>Scaffolding Projects</em></h2>
          </div>
        </div>
        <div className="gallery-grid">
          {galleryImages.map((img, idx) => (
            <img
              key={idx}
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
