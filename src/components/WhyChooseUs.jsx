export default function WhyChooseUs() {
  return (
    <section className="section why" id="why-preeti-scaffolding">
      <div className="container split">
        <div>
          <span className="eyebrow">Why Choose Us</span>
          <h2>
            Why Choose{' '}<br />
            <em>Preeti Scaffolding</em>
          </h2>
          <p>
            Direct local coordination for scaffolding rental, material sales and labour requirements from Sakinaka and Kurla West.
          </p>
          <div className="why-list">
            <article>
              <b>₹</b>
              <div>
                <h3>Project-Specific Quotations</h3>
                <p>Pricing is prepared for the requested material, duration, labour scope and site location.</p>
              </div>
            </article>
            <article>
              <b>✓</b>
              <div>
                <h3>Safety-Focused Coordination</h3>
                <p>Site access and scaffold requirements are discussed before material and labour are arranged.</p>
              </div>
            </article>
            <article>
              <b>★</b>
              <div>
                <h3>Rent, Sale &amp; Labour</h3>
                <p>Customers can arrange scaffolding material and erection or dismantling labour through one provider.</p>
              </div>
            </article>
          </div>
        </div>
        <img
          className="why-image"
          src="/assets/images/gate-scaffolding-installation-mumbai.webp"
          alt="Scaffolding framework installed above an entrance in Mumbai"
          width="1000"
          height="750"
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  );
}
