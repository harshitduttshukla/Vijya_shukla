const questions = [
  {
    question: 'Do you provide scaffolding on rent in Mumbai?',
    answer: 'Yes. Preeti Scaffolding supplies scaffolding material on rent for residential, commercial and industrial work across Mumbai, Thane and Navi Mumbai. Availability is confirmed for each site and rental period.',
  },
  {
    question: 'Do you sell scaffolding materials?',
    answer: 'Yes. H-Frame, MS H-Frame, Cuplock systems, ladders and scaffolding accessories are available for sale as well as rental, based on the required quantity and project needs.',
  },
  {
    question: 'Do you provide scaffolding erection labour?',
    answer: 'Yes. Skilled labour can be arranged for scaffolding erection and site setup. The labour scope is quoted after discussing the height, access conditions, system and project location.',
  },
  {
    question: 'Do you provide scaffolding dismantling services?',
    answer: 'Yes. Dismantling labour can be arranged after the work is completed. Timing and scope depend on the installed system and site access.',
  },
  {
    question: 'Which areas of Mumbai do you serve?',
    answer: 'We are based in Sakinaka and Kurla West and serve project locations across Mumbai city and suburbs, including Andheri, Powai, Ghatkopar, Chembur, Bandra, Goregaon, Malad, Borivali, Thane and Navi Mumbai.',
  },
  {
    question: 'Do you provide H-Frame and MS H-Frame scaffolding?',
    answer: 'Yes. H-Frame and MS H-Frame systems are available for suitable construction, façade, renovation and maintenance work on a rental or sale basis.',
  },
  {
    question: 'Do you provide Cuplock scaffolding?',
    answer: 'Yes. Cuplock components, stairway arrangements and related access equipment are available according to project requirements, along with erection and dismantling labour.',
  },
  {
    question: 'Can scaffolding be rented for residential projects?',
    answer: 'Yes. Rental can be arranged for residential repair, painting, exterior access, renovation and other suitable work after discussing the site and required duration.',
  },
  {
    question: 'Do you support commercial and industrial projects?',
    answer: 'Yes. We supply scaffolding material and labour for suitable commercial and industrial maintenance, construction and access requirements.',
  },
  {
    question: 'How can I request a scaffolding quotation?',
    answer: 'Call or WhatsApp +91 99873 17357, call +91 93242 93900, or email vijayshukla301@gmail.com. Share the site location, required service, working height and expected duration.',
  },
  {
    question: 'How quickly can scaffolding be installed?',
    answer: 'Installation timing depends on the project size, site access, system, material requirement and labour availability. Contact us for a project-specific schedule.',
  },
];

export default function FAQ() {
  return (
    <section className="section faq" id="faq">
      <div className="container split faq-layout">
        <div>
          <span className="eyebrow">Customer Questions</span>
          <h2>
            Frequently Asked{' '}<br />
            <em>Questions</em>
          </h2>
          <p>
            Practical answers about scaffolding rental, material sales and erection or dismantling labour in Mumbai.
          </p>
          <a className="btn" href="#contact">Ask About Your Project</a>
        </div>
        <div className="accordion">
          {questions.map((item, index) => (
            <details key={item.question} open={index === 0}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
