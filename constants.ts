
import { NavItem, Feature, SpecCategory, FaqItem, GalleryImage, Language } from './types.ts';
import { Truck, ShieldCheck, Home, Gauge, Battery, MapPin, Users, Utensils, Tent, Zap } from 'lucide-react';

export const EXTERNAL_BOOKING_URL = 'https://www.goboony.be/campers/belgie/antwerpen/antwerpen/91963';

export const TRANSLATIONS = {
  en: {
    nav: [
      { label: 'Home', path: '/' },
      { label: 'Details', path: '/details' },
      { label: 'Gallery', path: '/gallery' },
      { label: 'FAQ', path: '/faq' },
      { label: 'Contact', path: '/contact' },
    ],
    hero: {
      tag: 'Motorhome Rental Antwerp',
      title: 'Your home anywhere.',
      subtitle: 'Wander without limits. Explore the heart of Europe with Wilma, a premium McLouis motorhome designed for comfort, reliability, and the pure thrill of discovery.',
      ctaBook: 'Book Your Adventure',
      ctaPhotos: 'Explore Gallery',
    },
    story: {
      title: "The Story of Wilma",
      text1: "Away with 5 people. A dream and a challenge at the same time. A year ago, our search for an adventure began, to enjoy more freedom on our vacation with all the desired comforts. Seeking adventure, going wherever we want, living simply.",
      text2: "We made our first trip shortly after the summer of 2024 with this motorhome, which we were renting at the time. After such an unforgettable experience, we decided to buy it.",
      text3: "For your own enjoyment, but also for rental. We want to share this wonderful way of traveling by offering Wilma for rent."
    },
    whyWilma: {
      title: 'Why Travel With Wilma',
      subtitle: 'Discover the benefits of choosing our premium motorhome for your next journey.',
      benefits: [
        {
          title: 'Full Camping Kit',
          description: 'Includes a gas BBQ, outdoor table, and chairs for the perfect al fresco experience.',
          icon: Tent
        },
        {
          title: 'Modern Reliability',
          description: 'A 2023 premium model with full insurance and 24/7 support for total peace of mind.',
          icon: ShieldCheck
        },
        {
          title: 'Versatile Cooking',
          description: 'Equipped with a 2-burner stove for indoor or outdoor use, plus all essential kitchenware.',
          icon: Utensils
        },
        {
          title: 'Perfect Base',
          description: 'Based in Antwerp, the ideal starting point to explore Belgium and all of Europe.',
          icon: MapPin
        }
      ]
    },
    highlights: [
      { icon: Users, label: 'Capacity', value: '5 People' },
      { icon: Gauge, label: 'Consumption', value: '10km/L' },
      { icon: Tent, label: 'Camping', value: 'Full Kit + BBQ' },
    ],
    features: [
      {
        id: 1,
        title: 'Family Comfort',
        description: 'Spacious sleeping arrangements for 5 people and a modular interior so the whole family feels at home.',
        icon: Home,
      },
      {
        id: 2,
        title: 'Total Safety',
        description: 'Full insurance included, 24h tracking, and rigorous preventive maintenance for your peace of mind.',
        icon: ShieldCheck,
      },
      {
        id: 3,
        title: 'Ready for Adventure',
        description: 'Equipped with a 100L water tank and electric hookup capability for all your power needs.',
        icon: Zap,
      },
    ],
    specs: [
      {
        category: 'Vehicle',
        items: [
          { label: 'Model', value: 'McLouis Alcove' },
          { label: 'Year', value: '2023' },
          { label: 'Fuel', value: 'Diesel' },
          { label: 'Transmission', value: 'Manual' },
          { label: 'Avg. Consumption', value: '10 - 12 km/L' },
          { label: 'Length', value: '7.40 meters' },
          { label: 'Height', value: '3.20 meters' },
        ]
      },
      {
        category: 'Living',
        items: [
          { label: 'Accommodation', value: '5 Sleeping Places (Alcove + Bunks/Dinette)' },
          { label: 'Water Tank', value: '100 Liters' },
          { label: 'Energy', value: 'External Electric Hookup' },
          { label: 'Fridge', value: 'Large Fridge with Freezer' },
          { label: 'Stove', value: '2-burner (Indoor/Outdoor)' },
        ]
      }
    ],
    faqs: [
      {
        category: 'Requirements',
        question: 'What do I need to drive Wilma?',
        answer: 'To ensure a safe and smooth journey, we ask that drivers be at least 26 years old and have held their category B license for 3 years or more, with a clean driving record for the last 3 years.'
      },
      {
        category: 'Usage Rules',
        question: 'Can I bring my pet along?',
        answer: 'We love pets. However, to keep Wilma comfortable for all our future guests, animals are allowed only upon prior consultation. Please let us know if you plan to bring your companion.'
      },
      {
        category: 'Usage Rules',
        question: 'What is not allowed with Wilma?',
        answer: 'To keep Wilma fresh and in top condition, she is a smoke-free environment. We also ask that you do not take her to festivals or mountain regions. For winter sports, please consult us first.'
      },
      {
        category: 'Return Policy',
        question: 'How should I return Wilma after my trip?',
        answer: 'We love receiving Wilma back as clean and happy as she left. Please return her with a full diesel tank, empty waste water, and a cleaned toilet. If she needs some extra professional cleaning care, a fee of €100 for the exterior and €50 for the interior will apply.'
      },
      {
        category: 'Supplies',
        question: 'What about the gas for cooking and heating?',
        answer: 'Don\'t worry about complex gas calculations. We settle the gas usage simply by weight when you return, so you only pay for what you actually enjoyed.'
      },
      {
        category: 'Financial',
        question: 'Is there a security deposit involved?',
        answer: 'Yes, for everyone\'s peace of mind, a security deposit is managed securely through the GoBoony platform and is fully returned once Wilma is back home in the agreed condition.'
      },
      {
        category: 'Logistics',
        question: 'What are the usual pick-up and drop-off times?',
        answer: 'Typically, you can pick up Wilma between 15:00-17:00 and bring her back before 11:00. We always try to be flexible to fit your schedule whenever availability allows.'
      }
    ],
    resources: {
      manualEn: 'Vehicle Manual (English)',
      manualNl: 'Vehicle Manual (Dutch)',
      checklist: 'Travel Checklist (EN/NL)'
    },
    ui: {
      gallery: 'Photo Gallery',
      gallerySub: 'Explore every detail of Wilma, inside and out.',
      filters: { all: 'All', interior: 'Interior', exterior: 'Exterior' },
      hours: 'Mon - Fri: 09:00 - 18:00',
      contact: {
        title: 'Contact Us',
        sub: 'Have specific questions about Wilma? Reach out via WhatsApp or Email.',
        ready: 'Ready for adventure?',
        bookInstantly: 'Check availability and book instantly online.',
        name: 'Full Name',
        email: 'Email',
        phone: 'Phone (Optional)',
        message: 'Message',
        send: 'Send Message',
        sending: 'Sending...',
        success: 'Message Sent!',
        successSub: 'We have received your message. We will get back to you soon.'
      }
    }
  },
  nl: {
    nav: [
      { label: 'Home', path: '/' },
      { label: 'Details', path: '/details' },
      { label: 'Galerij', path: '/gallery' },
      { label: 'FAQ', path: '/faq' },
      { label: 'Contact', path: '/contact' },
    ],
    hero: {
      tag: 'Mobilhomeverhuur Antwerpen',
      title: 'Je thuis, overal.',
      subtitle: 'Reis zonder grenzen. Verken het hart van Europa met Wilma, een premium McLouis mobilhome ontworpen voor comfort, betrouwbaarheid en puur ontdekkingsplezier.',
      ctaBook: 'Boek je avontuur',
      ctaPhotos: 'Ontdek de galerij',
    },
    story: {
      title: "Het verhaal van Wilma",
      text1: "Op pad met 5 personen. Een droom en een uitdaging tegelijk. Een jaar geleden begon onze zoektocht naar avontuur: meer vrijheid tijdens onze vakantie, maar met alle gewenste comfort. Gaan waar we willen, eenvoudig leven.",
      text2: "Onze eerste reis maakten we kort na de zomer van 2024 met deze mobilhome, die we op dat moment nog huurden. Na zo’n onvergetelijke ervaring besloten we hem zelf aan te kopen.",
      text3: "Voor ons eigen plezier, maar ook voor verhuur. We willen deze prachtige manier van reizen graag delen door Wilma te huur aan te bieden."
    },
    whyWilma: {
      title: 'Waarom reizen met Wilma?',
      subtitle: 'Ontdek de voordelen van onze premium mobilhome voor uw volgende reis.',
      benefits: [
        {
          title: 'Volledige kampeeruitrusting',
          description: 'Inclusief gasbarbecue, buitentafel en stoelen voor de perfecte maaltijd in de buitenlucht.',
          icon: Tent
        },
        {
          title: 'Moderne betrouwbaarheid',
          description: 'Een premium model uit 2023 med volledige verzekering voor totale gemoedsrust.',
          icon: ShieldCheck
        },
        {
          title: 'Veelzijdig koken',
          description: 'Uitgerust med een 2-pits kooktoestel voor binnen of buiten, inclusief al het nodige keukengerei.',
          icon: Utensils
        },
        {
          title: 'De perfecte uitvalsbasis',
          description: 'Gevestigd in Antwerpen, het ideale vertrekpunt om België en heel Europa te verkennen.',
          icon: MapPin
        }
      ]
    },
    highlights: [
      { icon: Users, label: 'Capaciteit', value: '5 Personen' },
      { icon: Gauge, label: 'Verbruik', value: '10km/L' },
      { icon: Tent, label: 'Kamperen', value: 'Volledige uitrusting + BBQ' },
    ],
    features: [
      {
        id: 1,
        title: 'Familiecomfort',
        description: 'Ruime slaapplaatsen voor 5 personen en een modulair interieur zodat het hele gezin zich direct thuis voelt.',
        icon: Home,
      },
      {
        id: 2,
        title: 'Totale veiligheid',
        description: 'Inclusief volledige verzekering, 24u-tracking en nauwgezet preventief onderhoud voor uw gemoedsrust.',
        icon: ShieldCheck,
      },
      {
        id: 3,
        title: 'Klaar voor avontuur',
        description: 'Uitgerust met een watertank van 100 liter en elektrische aansluiting voor al uw stroombehoeften.',
        icon: Zap,
      },
    ],
    specs: [
      {
        category: 'Voertuig',
        items: [
          { label: 'Model', value: 'McLouis Alkoof' },
          { label: 'Bouwjaar', value: '2023' },
          { label: 'Brandstof', value: 'Diesel' },
          { label: 'Transmissie', value: 'Handgeschakeld' },
          { label: 'Gem. Verbruik', value: '10 - 12 km/L' },
          { label: 'Lengte', value: '7,40 meter' },
          { label: 'Hoogte', value: '3,20 meter' },
        ]
      },
      {
        category: 'Woonruimte',
        items: [
          { label: 'Accommodatie', value: '5 Slaapplaatsen (Alkoof + Stapelbed/Dinette)' },
          { label: 'Watertank', value: '100 Liter' },
          { label: 'Energie', value: 'Externe elektrische aansluiting' },
          { label: 'Koelkast', value: 'Grote koelkast met vriezer' },
          { label: 'Kookplaat', value: '2-pits (Binnen/Buiten)' },
        ]
      }
    ],
    faqs: [
      {
        category: 'Voorwaarden',
        question: 'Wat heb ik nodig om met Wilma te mogen rijden?',
        answer: 'Voor een veilige en zorgeloze reis vragen we dat bestuurders minstens 26 jaar oud zijn en minstens 3 jaar in het bezit zijn van een geldig rijbewijs B, zonder ernstige ongevallen in de laatste 3 jaar.'
      },
      {
        category: 'Gebruiksregels',
        question: 'Mag mijn huisdier mee op reis?',
        answer: 'Wij zijn dol op dieren! Om Wilma echter fris e comfortabel te houden voor al onze gasten, zijn huisdieren enkel toegestaan na voorafgaand overleg.'
      },
      {
        category: 'Gebruiksregels',
        question: 'Wat is niet toegestaan med Wilma?',
        answer: 'Om Wilma in topconditie te houden, is roken in de mobilhome niet toegestaan. Festivals en ritten in bergachtig gebied zijn eveneens niet toegestaan. Voor wintersport vragen we u om eerst met ons te overleggen.'
      },
      {
        category: 'Inleveren',
        question: 'Hoe moet ik Wilma weer inleveren na mijn reis?',
        answer: 'We ontvangen Wilma graag in dezelfde propere staat als waarin ze vertrok. Gelieve haar in te leveren med een volle dieseltank, lege afvalwatertank en een gereinigd toilet. Voor extra professionele reiniging rekenen we €100 (buitenkant) en €50 (interieur).'
      },
      {
        category: 'Voorraad',
        question: 'Hoe zit het med het gas voor koken en verwarmen?',
        answer: 'Maak u geen zorgen over ingewikkelde berekeningen. Bij inlevering verrekenen we het gasverbruik eenvoudigweg op basis van gewicht, zodat u enkel betaalt voor wat u effectief verbruikt heeft.'
      },
      {
        category: 'Financieel',
        question: 'Is er een waarborgsom vereist?',
        answer: 'Ja, voor ieders gemoedsrust wordt de waarborgsom veilig beheerd via het GoBoony-platform. Deze wordt volledig teruggestort zodra Wilma in de afgesproken staat is teruggekeerd.'
      },
      {
        category: 'Logistiek',
        question: 'Wat zijn de gebruikelijke ophaal- en inlevertijden?',
        answer: 'Normaal gezien kunt u Wilma ophalen tussen 15:00 en 17:00 en brengt u haar terug voor 11:00. We proberen altijd flexibel te zijn als de planning dat toelaat.'
      }
    ],
    resources: {
      manualEn: 'Handleiding voertuig (Engels)',
      manualNl: 'Handleiding voertuig (Nederlands)',
      checklist: 'Reischecklist (EN/NL)'
    },
    ui: {
      gallery: 'Fotogalerij',
      gallerySub: 'Ontdek elk detail van Wilma, van binnen en van buiten.',
      filters: { all: 'Alles', interior: 'Interieur', exterior: 'Exterieur' },
      hours: 'Ma - Vr: 09:00 - 18:00',
      contact: {
        title: 'Contacteer ons',
        sub: 'Heeft u specifieke vragen over Wilma? Neem contact op via WhatsApp of e-mail.',
        ready: 'Klaar voor avontuur?',
        bookInstantly: 'Bekijk de beschikbaarheid en boek direct online.',
        name: 'Volledige naam',
        email: 'E-mailadres',
        phone: 'Telefoon (optioneel)',
        message: 'Bericht',
        send: 'Bericht verzenden',
        sending: 'Verzenden...',
        success: 'Bericht verzonden!',
        successSub: 'We hebben uw bericht goed ontvangen e nemen zo snel mogelijk contact med u op.'
      }
    }
  }
};

export const CONTACT_INFO = {
  address: 'Korte Scholiersstraat 31, 2060 Antwerpen, België',
  phone: '+32 473 67 19 84',
  email: 'info@ullidonckers.be',
  social: {
    instagram: '',
    whatsapp: 'https://wa.me/32473671984'
  }
};

export const GALLERY_IMAGES: GalleryImage[] = [
  // Interior Images (1-12)
  { id: 1, src: 'images/gallery/interior-01.jpg', alt: 'Gezellige eethoek en leefruimte', category: 'interior' },
  { id: 2, src: 'images/gallery/interior-02.jpg', alt: 'Moderne keuken med 2-pits kooktoestel', category: 'interior' },
  { id: 3, src: 'images/gallery/interior-03.jpg', alt: 'Ruim alkoofbed boven de cabine', category: 'interior' },
  { id: 4, src: 'images/gallery/interior-04.jpg', alt: 'Comfortabel stapelbed voor de kinderen', category: 'interior' },
  { id: 5, src: 'images/gallery/interior-05.jpg', alt: 'Badkamer en toiletvoorzieningen', category: 'interior' },
  { id: 6, src: 'images/gallery/interior-06.jpg', alt: 'Bestuurderscabine en controlepaneel', category: 'interior' },
  { id: 7, src: 'images/gallery/interior-07.jpg', alt: 'Smart TV en entertainmenthoek', category: 'interior' },
  { id: 8, src: 'images/gallery/interior-08.jpg', alt: 'Opbergruimte en kasten', category: 'interior' },
  { id: 9, src: 'images/gallery/interior-09.jpg', alt: 'Overzicht van de functionele leefruimte', category: 'interior' },
  { id: 10, src: 'images/gallery/interior-10.jpg', alt: 'Zicht op de achterste leefruimte', category: 'interior' },
  { id: 11, src: 'images/gallery/interior-11.jpg', alt: 'Keukenaanrecht en spoelbak', category: 'interior' },
  { id: 12, src: 'images/gallery/interior-12.jpg', alt: 'Compacte en propere douchecabine', category: 'interior' },
  
  // Exterior Images (13-17)
  { id: 13, src: 'images/gallery/exterior-01.jpg', alt: 'Mobilhome Wilma - Vooraanzicht', category: 'exterior' },
  { id: 14, src: 'images/gallery/exterior-02.jpg', alt: 'Zijaanzicht med uitgeschoven luifel', category: 'exterior' },
  { id: 15, src: 'images/gallery/exterior-03.jpg', alt: 'Perfecte kampeeropstelling in Antwerpen', category: 'exterior' },
  { id: 16, src: 'images/gallery/exterior-04.jpg', alt: 'Klaar voor een picknick in de buitenlucht', category: 'exterior' },
  { id: 17, src: 'images/gallery/exterior-05.jpg', alt: 'Klaar om de weg op te gaan', category: 'exterior' },
];
