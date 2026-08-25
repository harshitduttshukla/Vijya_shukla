export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container split">
        <div className="image-stack">
          <img
            src="/assets/images/aluminium-mobile-scaffold-mumbai.webp"
            alt="Mobile aluminium scaffold installed at a Mumbai building entrance"
            width="750"
            height="1000"
            loading="lazy"
            decoding="async"
          />
          <div className="experience">
            <strong>Safety</strong>
            <span>
              Focused Site{' '}<br />Support
            </span>
          </div>
        </div>
        <div className="content">
          <span className="eyebrow">About Us</span>
          <h2>
            About{' '}<br />
            <em>Preeti Scaffolding</em>
          </h2>
          <p className="lead">
            Preeti Scaffolding is a Mumbai-based scaffolding service provider offering material on a rental and sale basis along with erection and dismantling labour.
          </p>
          <p>
            From Sakinaka and Kurla West, we support residential, commercial and industrial projects with H-Frame, MS H-Frame, Cuplock systems, ladders and accessories.
          </p>
          <p>
            Proprietor Vijay Shukla coordinates material and labour requirements according to the site, project duration and access needs. Customers can contact us directly for rental pricing, material sales or a labour quotation.
          </p>
          <a className="btn" href="#contact">Contact Preeti Scaffolding</a>
        </div>
      </div>
    </section>
  );
}
