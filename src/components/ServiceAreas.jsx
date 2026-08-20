const areas = [
  'Sakinaka', 'Kurla', 'Andheri', 'Powai', 'Ghatkopar', 'Vikhroli',
  'Bandra', 'BKC', 'Chembur', 'Santacruz', 'Goregaon', 'Malad',
  'Kandivali', 'Borivali', 'Dadar', 'Worli', 'Lower Parel', 'Byculla',
  'Colaba', 'Mulund', 'Bhandup', 'Mumbai Central', 'Navi Mumbai', 'Thane'
];

export default function ServiceAreas() {
  return (
    <section className="section service-areas" id="areas">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">Areas We Serve</span>
            <h2>
              Scaffolding services<br />
              <em>across Mumbai</em>
            </h2>
          </div>
          <p>
            Based in Sakinaka, we provide material delivery, erection labour and dismantling support throughout Mumbai city and the suburbs.
          </p>
        </div>
        <div className="area-layout">
          <div className="area-copy">
            <h3>Local scaffolding rental near your project</h3>
            <p>
              Preeti Scaffolding supports residential renovations, commercial buildings, industrial maintenance, façade work and construction sites. Our Sakinaka location provides convenient access to Central, Western and South Mumbai project locations.
            </p>
            <p>
              Contact us for aluminium scaffolding, M.S H-Frame, Cuplock systems, ladders, accessories and experienced scaffolding labour on rent or sale.
            </p>
            <a className="btn" href="tel:+919987317357">Call for Mumbai Service</a>
          </div>
          <div className="area-list" aria-label="Mumbai service locations">
            {areas.map((area) => (
              <span key={area}>{area}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
