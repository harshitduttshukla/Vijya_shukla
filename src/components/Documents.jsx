export default function Documents() {
  return (
    <section className="documents" id="company-document">
      <div className="container document-card">
        <div>
          <span className="eyebrow light">Company Document</span>
          <h2>Official Letterhead</h2>
          <p>
            View or download the official Preeti Scaffolding letterhead containing our registered business details and GST number.
          </p>
        </div>
        <a
          className="btn document-btn"
          href="/assets/documents/preeti-scaffolding-letterhead.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Official Letterhead
        </a>
      </div>
    </section>
  );
}
