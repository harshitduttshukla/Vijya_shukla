export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg"></div>
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
