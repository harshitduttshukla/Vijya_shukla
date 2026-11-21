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
        <span className="eyebrow light">10+ Years in Mumbai • Safety • Speed</span>
        <h1>
          Scaffolding in Mumbai:{' '}<br />
          <em>On Rent, Sale &amp; Labour</em>
        </h1>
        <p>
          Scaffolding on rent in Mumbai for over 10 years: H-Frame, MS H-Frame, Cuplock, aluminium mobile towers (all heights), MS pipes and clamps, props, shuttering and jacks, with erection and dismantling labour from Sakinaka and Kurla West.
        </p>
        <div className="hero-actions">
          <a className="btn" href="tel:+919987317357">Call +91 99873 17357</a>
          <a className="text-link" href="https://wa.me/919987317357?text=Hello%20Shukla%20Scaffolding%2C%20I%20need%20scaffolding%20on%20rent%20in%20Mumbai.">
            WhatsApp for a Quote <span>→</span>
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
