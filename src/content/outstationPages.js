// Pages for large contracts outside Mumbai. The business is based in Mumbai and takes
// outstation work only for large projects, so the copy says exactly that.

const cities = ['Pune', 'Ahmedabad', 'Surat', 'Vadodara', 'Nashik', 'Navi Mumbai and Panvel', 'Other cities in Maharashtra and Gujarat'];

export const outstationPage = {
  path: '/scaffolding-supplier-pune-ahmedabad',
  kind: 'service',
  serviceType: 'Bulk scaffolding rental and supply for large projects outside Mumbai',
  areaServed: ['Mumbai', 'Pune', 'Ahmedabad', 'Surat', 'Vadodara', 'Nashik'],
  title: 'Scaffolding on Rent for Pune, Ahmedabad & Large Projects',
  description: 'Mumbai scaffolding supplier for large projects in Pune, Ahmedabad, Surat, Nashik and beyond. Bulk H-frame, Cuplock, props with labour. Call 99873 17357.',
  eyebrow: 'Large Projects Outside Mumbai',
  h1: 'Scaffolding Supplier for Large Projects in Pune, Ahmedabad & Beyond',
  directAnswer: 'Shukla Scaffolding is based in Mumbai, and Mumbai is our main market. For large contracts we also supply scaffolding on rent or sale, with erection and dismantling labour, to projects in Pune, Ahmedabad, Surat, Vadodara, Nashik and other cities in Maharashtra and Gujarat. If your project needs a big quantity of H-frame, Cuplock, props, jacks, shuttering or pipes and clamps, share the details and we will confirm whether we can take it on.',
  image: '/assets/images/large-scaffold-framework-mumbai.webp',
  imageAlt: 'Large scaffolding framework used on a big construction project',
  imageWidth: 750,
  imageHeight: 1000,
  primaryKeyword: 'scaffolding on rent in Pune',
  secondaryKeywords: ['scaffolding supplier Ahmedabad', 'scaffolding on rent Ahmedabad', 'scaffolding rental Pune', 'bulk scaffolding supplier Maharashtra', 'scaffolding contractor Gujarat'],
  heroCta: 'whatsapp',
  heroCtaLabel: 'WhatsApp Project Details',
  whatsAppMessage: 'Hello Shukla Scaffolding, I have a large project outside Mumbai. City, site address, scope, quantity/area and dates:',
  ctaHeading: 'Have a Large Project Outside Mumbai?',
  ctaText: 'Send the city, site address, type of project, approximate scaffold area or slab area, height, start date and duration. We will tell you quickly whether we can supply it and how.',
  ctaButtonLabel: 'WhatsApp Your Project',
  sections: [
    {
      heading: 'Mumbai is our base; large projects go further',
      paragraphs: [
        'For more than 10 years, Shukla Scaffolding has rented scaffolding from its yard in Sakinaka, Kurla West, mainly to sites across Mumbai, Thane and Navi Mumbai. Over that time we have built up stock and trained erection teams. That means we can also take on bigger contracts outside the city when the size of the job justifies transport and sending a team.',
        'We do not have offices in other cities, and we do not take small outstation jobs, because the transport cost would not make sense for you. For large work, a single experienced supplier with enough material and its own labour can be simpler than managing several local vendors.'
      ]
    },
    {
      heading: 'Cities we can supply for large contracts',
      bullets: cities
    },
    {
      heading: 'What kind of projects we take outside Mumbai',
      table: {
        headers: ['Project type', 'Material usually needed'],
        rows: [
          ['Residential and commercial towers', 'Cuplock, props, base jacks, U-jacks and shuttering'],
          ['Large society or complex repair and painting', 'MS H-frame with safety nets'],
          ['Industrial plants and warehouses', 'MS pipes and clamps, Cuplock, aluminium towers'],
          ['Infrastructure and public buildings', 'Cuplock and heavy-duty supports']
        ]
      }
    },
    {
      heading: 'What we provide',
      bullets: [
        'Bulk scaffolding material on rent or sale',
        'H-frame, MS H-frame and Cuplock systems',
        'Props, jacks and shuttering for slab work',
        'MS pipes, clamps and couplers',
        'Aluminium mobile towers in all heights',
        'Erection and dismantling labour sent from Mumbai',
        'Planning of delivery in phases to match your construction programme'
      ],
      linksLabel: 'More details',
      links: [
        { path: '/scaffolding-rental-mumbai', label: 'scaffolding rental services' },
        { path: '/scaffolding-material-mumbai', label: 'scaffolding material on sale' },
        { path: '/scaffolding-labour-mumbai', label: 'erection and dismantling labour' }
      ]
    },
    {
      heading: 'How an outstation contract works',
      bullets: [
        'Share the city, site address, drawings or photographs, the scope of work and the programme.',
        'We review the quantity and confirm whether the project size suits outstation supply.',
        'We agree the material list, rental period, transport, labour and accommodation arrangements.',
        'Material is dispatched by truck from Mumbai, in phases if the programme needs it.',
        'Our team erects the scaffolding, and later dismantles it and arranges the return.'
      ]
    },
    {
      heading: 'Points to discuss before an outstation order',
      bullets: [
        'Transport cost for each trip, both ways',
        'Labour stay and food arrangements at site',
        'Minimum quantity and minimum rental period',
        'Safe storage at site for material between phases',
        'Who handles local permissions and site security',
        'Payment schedule linked to delivery and erection'
      ],
      linksLabel: 'Read',
      links: [
        { path: '/blog/hiring-mumbai-scaffolding-supplier-outside-mumbai', label: 'hiring a Mumbai scaffolding supplier for outstation projects' },
        { path: '/blog/checklist-before-renting-scaffolding', label: 'checklist before renting scaffolding' }
      ]
    }
  ],
  faqs: [
    { question: 'Do you give scaffolding on rent in Pune?', answer: 'Yes, for large projects. We are based in Mumbai and supply Pune sites when the quantity and duration justify transport and sending our labour team.' },
    { question: 'Do you supply scaffolding in Ahmedabad and Gujarat?', answer: 'Yes, for large contracts in Ahmedabad, Surat, Vadodara and other Gujarat cities. Share the project details and we will confirm.' },
    { question: 'Do you take small jobs outside Mumbai?', answer: 'Generally no. For small outstation jobs, transport makes the cost too high, and a local supplier will usually be better value for you.' },
    { question: 'Will your labour come to the outstation site?', answer: 'Yes. For large contracts, we can send our erection and dismantling team. Stay and food arrangements are agreed in advance.' },
    { question: 'How do I start?', answer: 'WhatsApp +91 99873 17357 with the city, site address, scope, approximate quantity and dates.' }
  ],
  relatedPaths: ['/scaffolding-rental-mumbai', '/cuplock-scaffolding', '/scaffolding-material-mumbai']
};

export const outstationPost = {
  path: '/blog/hiring-mumbai-scaffolding-supplier-outside-mumbai',
  kind: 'blog',
  author: { name: 'Vijay Shukla', role: 'Proprietor, Shukla Scaffolding' },
  datePublished: '2026-11-21',
  readMinutes: 5,
  title: 'Hiring a Mumbai Scaffolding Supplier for Pune or Ahmedabad',
  description: 'When it makes sense to hire a Mumbai scaffolding supplier for a big project in Pune, Ahmedabad or elsewhere, and what to agree on transport and labour.',
  eyebrow: 'Outstation Projects',
  h1: 'Hiring a Mumbai Scaffolding Supplier for Projects in Pune, Ahmedabad & Other Cities',
  directAnswer: 'Hiring a scaffolding supplier from Mumbai for a project in Pune, Ahmedabad or another city makes sense when the job is large: a big quantity of material, a long rental period, or a need for an experienced erection team that local vendors cannot provide. For small jobs, a local supplier is usually cheaper because transport is a large part of the cost.',
  image: '/assets/images/dense-scaffolding-structure-mumbai.webp',
  imageAlt: 'Dense modular scaffolding structure on a large project',
  imageWidth: 562,
  imageHeight: 1000,
  primaryKeyword: 'scaffolding supplier for Pune and Ahmedabad projects',
  secondaryKeywords: ['scaffolding rental Pune', 'scaffolding on rent Ahmedabad', 'bulk scaffolding supplier'],
  sections: [
    {
      heading: 'When an outstation supplier is worth it',
      bullets: [
        'The project needs a large quantity that local suppliers cannot provide at once',
        'The scaffolding will stay on site for several months',
        'You want one supplier to handle material, erection and dismantling',
        'You already work with the supplier in Mumbai and trust their material and team',
        'The job needs Cuplock, props and shuttering in volume for tower construction'
      ]
    },
    {
      heading: 'When a local supplier is better',
      paragraphs: [
        'For small repair, painting or interior jobs lasting a few days or weeks, transport from Mumbai to Pune or Ahmedabad and back can cost more than the rent itself. In such cases, choose a reliable local supplier. A good Mumbai supplier will tell you this honestly instead of taking a job that is not good value for you.'
      ]
    },
    {
      heading: 'Costs to compare for an outstation order',
      table: {
        headers: ['Cost item', 'What to check'],
        rows: [
          ['Material rent', 'Rate basis and minimum period'],
          ['Transport', 'Trucks needed, both ways, and any phased trips'],
          ['Labour', 'Erection and dismantling charges'],
          ['Labour stay', 'Accommodation and food near the site'],
          ['Site storage', 'Safe place to keep material between phases'],
          ['Loss or damage', 'Counting at dispatch and at return']
        ]
      }
    },
    {
      heading: 'Information to send for a quotation',
      bullets: [
        'City and exact site address',
        'Type of project and drawings if available',
        'Scaffold area, building height or slab area',
        'Start date, phases and total duration',
        'Whether labour is required',
        'Site access for trucks and storage space'
      ]
    },
    {
      heading: 'Large projects with Shukla Scaffolding',
      paragraphs: [
        'Mumbai is our main market, but for large contracts we supply scaffolding and labour to Pune, Ahmedabad, Surat, Vadodara, Nashik and other cities. WhatsApp your project details to +91 99873 17357.'
      ],
      linksLabel: 'Details',
      links: [
        { path: '/scaffolding-supplier-pune-ahmedabad', label: 'scaffolding supplier for Pune, Ahmedabad and large projects' }
      ]
    }
  ],
  faqs: [
    { question: 'Can a Mumbai supplier give scaffolding in Pune?', answer: 'Yes, for large projects where the quantity and duration justify transport. Shukla Scaffolding takes such contracts.' },
    { question: 'Is it costly to bring scaffolding from Mumbai?', answer: 'Transport adds cost, so it suits large or long jobs. For small jobs, a local supplier is usually cheaper.' }
  ],
  relatedPaths: ['/scaffolding-supplier-pune-ahmedabad', '/blog/scaffolding-rent-price-mumbai', '/blog/scaffolding-rent-vs-buy']
};
