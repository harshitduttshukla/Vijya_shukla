export default function WhyChooseUs() {
  return (
    <section className="section why">
      <div className="container split">
        <div>
          <span className="eyebrow">Why Choose Us</span>
          <h2>
            Expertise you can<br />
            <em>trust on site</em>
          </h2>
          <p>
            Reliable solutions, expert support, safe execution and decades of real-world experience.
          </p>
          <div className="why-list">
            <article>
              <b>₹</b>
              <div>
                <h3>Affordable Cost</h3>
                <p>Durable scaffolding at fair, transparent prices.</p>
              </div>
            </article>
            <article>
              <b>✓</b>
              <div>
                <h3>Your Safety, Our Priority</h3>
                <p>Every joint and frame is built to protect.</p>
              </div>
            </article>
            <article>
              <b>★</b>
              <div>
                <h3>Trusted by Professionals</h3>
                <p>Proven quality relied on across industries.</p>
              </div>
            </article>
          </div>
        </div>
        <img
          className="why-image"
          src="/assets/project-images/project-09.jpg"
          alt="Preeti Scaffolding site work"
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  );
}
