import { responsiveImageSrcSet } from '../utils/responsiveImages';

const heroImage = '/assets/images/scaffolding-rental-site-mumbai.webp';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <picture className="hero-bg" aria-hidden="true">
        <source
          type="image/webp"
          srcSet={responsiveImageSrcSet(heroImage, 1600)}
          sizes="100vw"
        />
        <img
          src={heroImage}
          srcSet={responsiveImageSrcSet(heroImage, 1600)}
          sizes="100vw"
          alt=""
          width="1600"
          height="1200"
          fetchpriority="high"
          decoding="async"
        />
      </picture>
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <span className="eyebrow light">Safety • Strength • Speed</span>
        <h1>
          Scaffolding Rental &amp;{' '}<br />
          <em>Labour Services in Mumbai</em>
        </h1>
        <p>
          H-Frame, MS H-Frame, Cuplock systems, ladders and scaffolding materials on rent or sale, with erection and dismantling labour from Sakinaka and Kurla West.
        </p>
        <div className="hero-actions">
          <a className="btn" href="#contact">Get a Scaffolding Quote</a>
          <a className="text-link" href="tel:+919987317357">
            Call +91 99873 17357 <span>→</span>
          </a>
        </div>
      </div>
      <div className="hero-side">
        <span>GST No.</span>
        <strong>27MAAPS9233F1ZA</strong>
      </div>
    </section>
  );
}
