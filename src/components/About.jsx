export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container split">
        <div className="image-stack">
          <img
            src="/assets/project-images/project-02.jpg"
            alt="Preeti Scaffolding completed project"
            loading="lazy"
            decoding="async"
          />
          <div className="experience">
            <strong>100%</strong>
            <span>
              Site Safety<br />Commitment
            </span>
          </div>
        </div>
        <div className="content">
          <span className="eyebrow">About Us</span>
          <h2>
            Welcome to<br />
            <em>Preeti Scaffolding</em>
          </h2>
          <p className="lead">
            Specialists in labour work and scaffolding material supply on a sales and rental basis.
          </p>
          <p>
            Preeti Scaffolding provides safe, dependable scaffolding services and quality materials for residential, commercial and industrial projects throughout Mumbai.
          </p>
          <p>
            Led by Vijay Shukla, our team supports every project with reliable labour, timely execution, strong materials and a clear commitment to work-site safety.
          </p>
          <a className="btn" href="#contact">Discover More</a>
        </div>
      </div>
    </section>
  );
}
