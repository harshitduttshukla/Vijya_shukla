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
              Scaffolding Services{' '}<br />
              <em>Across Mumbai</em>
            </h2>
          </div>
          <p>
            Based in Sakinaka and Kurla West, we coordinate scaffolding material, erection labour and dismantling support throughout Mumbai and nearby project areas.
          </p>
        </div>
        <div className="area-layout">
          <div className="area-copy">
            <h3>Local scaffolding rental near your Mumbai project</h3>
            <p>
              Preeti Scaffolding supports residential renovation, commercial building, industrial maintenance, façade and construction work. Service availability is confirmed according to the project location, material requirement and labour scope.
            </p>
            <p>
              View our <a href="#h-frame-scaffolding">H-Frame scaffolding</a>, <a href="#cuplock-scaffolding">Cuplock scaffolding</a> and <a href="#aluminium-scaffolding-accessories">aluminium scaffolding and accessories</a>, or ask about <a href="#labour-services">erection and dismantling labour</a>.
            </p>
            <a className="btn" href="tel:+919987317357">Call for Mumbai Service</a>
          </div>
          <ul className="area-list" aria-label="Mumbai service locations">
            {areas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
