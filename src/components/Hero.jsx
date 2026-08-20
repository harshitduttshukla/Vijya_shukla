export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg"></div>
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <span className="eyebrow light">Safety • Strength • Speed</span>
        <h1>
          Scaffolding Rental &<br />
          <em>Labour Services in Mumbai</em>
        </h1>
        <p>
          Scaffolding materials on rent and sale with skilled installation labour for projects across Mumbai.
        </p>
        <div className="hero-actions">
          <a className="btn" href="#services">Explore Products</a>
          <a className="text-link" href="#about">
            Discover our story <span>→</span>
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
