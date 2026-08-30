export default function NotFound() {
  return (
    <main className="not-found" id="main-content">
      <section className="container not-found-card" aria-labelledby="not-found-heading">
        <span className="eyebrow">Error 404</span>
        <h1 id="not-found-heading">Page Not Found</h1>
        <p>
          The page you requested does not exist or may have moved. Use one of the links below to continue browsing Preeti Scaffolding.
        </p>
        <div className="not-found-actions">
          <a className="btn" href="/">Return to Home</a>
          <a className="text-link" href="/scaffolding-guide/">Browse Scaffolding Guides →</a>
          <a className="text-link" href="/scaffolding-rental-mumbai/">View Mumbai Rental Services →</a>
        </div>
      </section>
    </main>
  );
}
