const galleryImages = [
  { src: '/assets/project-images/project-10.jpg', alt: 'Completed scaffolding work' },
  { src: '/assets/project-images/project-11.jpg', alt: 'Scaffolding installation' },
  { src: '/assets/project-images/project-12.jpg', alt: 'Indoor scaffolding' },
  { src: '/assets/project-images/project-13.jpg', alt: 'Mobile scaffold setup' },
  { src: '/assets/project-images/project-14.jpg', alt: 'Exterior scaffolding' },
  { src: '/assets/project-images/project-15.jpg', alt: 'Commercial scaffolding' },
  { src: '/assets/project-images/project-16.jpg', alt: 'Scaffold platform' },
  { src: '/assets/project-images/project-17.jpg', alt: 'Building access scaffold' },
  { src: '/assets/project-images/project-18.jpg', alt: 'Facade scaffolding' },
  { src: '/assets/project-images/project-19.jpg', alt: 'Interior event scaffolding' },
  { src: '/assets/project-images/project-20.jpg', alt: 'Commercial interior scaffold' },
  { src: '/assets/project-images/project-21.jpg', alt: 'Protected access scaffold' },
  { src: '/assets/project-images/project-22.jpg', alt: 'Large scaffold framework' },
  { src: '/assets/project-images/project-23.jpg', alt: 'Workers on scaffold' },
  { src: '/assets/project-images/project-24.jpg', alt: 'Industrial scaffold structure' },
  { src: '/assets/project-images/project-25.jpg', alt: 'Residential scaffolding' },
];

export default function Gallery() {
  return (
    <section className="section gallery" id="gallery">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">Our Gallery</span>
            <h2>Work that <em>stands tall</em></h2>
          </div>
        </div>
        <div className="gallery-grid">
          {galleryImages.map((img, idx) => (
            <img
              key={idx}
              src={img.src}
              alt={img.alt}
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
