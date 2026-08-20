export default function FAQ() {
  return (
    <section className="section faq">
      <div className="container split">
        <div>
          <span className="eyebrow">FAQ's</span>
          <h2>
            Questions.<br />
            <em>Answered.</em>
          </h2>
          <p>
            Everything you need to know about our scaffolding rental, sales and labour services in Mumbai.
          </p>
        </div>
        <div className="accordion">
          <details open>
            <summary>Is your scaffolding service safe?</summary>
            <p>
              Yes. We follow strict safety practices using quality materials and trained professionals.
            </p>
          </details>
          <details>
            <summary>Do you provide scaffolding across Mumbai?</summary>
            <p>
              Yes. We serve residential, commercial and industrial projects across Mumbai city and suburban locations.
            </p>
          </details>
          <details>
            <summary>Do you provide materials on rent and sale?</summary>
            <p>
              Yes. We supply scaffolding materials on rental and sales basis, with labour for installation and dismantling.
            </p>
          </details>
          <details>
            <summary>How quickly can scaffolding be installed?</summary>
            <p>
              Installation timing depends on site size and requirements. Contact us for a project-specific estimate.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}
