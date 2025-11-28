export const translations = {
  fr: {
    navLinks: [
      { href: "/private-chauffeur", label: "Chauffeur Privé" },
      { href: "/car-rental", label: "Location de Voiture" },
      { href: "/concierge", label: "Conciergerie" },
      { href: "/about", label: "À Propos" },
      { href: "/contact", label: "Contact" },
    ],
    common: {
      bookNow: "Réserver",
      learnMore: "En savoir plus",
    },
    home: {
      hero: {
        title: "Chauffeur Privé de Luxe à Paris, Cannes, Monaco, Genève & Courchevel",
        subtitle: "Bienvenue chez Victoire Luxury service (VLS), référence absolue du transport privé de luxe. Une expérience raffinée, élégante et entièrement personnalisée.",
        cta: "Réserver un Chauffeur",
      },
      services: {
        title: "Nos Services Exclusifs",
        subtitle: "Conçus pour offrir le summum du luxe et de la commodité.",
        cards: [
          { title: "Chauffeur Privé", description: "Transferts aéroports, mises à disposition et déplacements VIP.", link: "/private-chauffeur", image: "chauffeur-service" },
          { title: "Location de Luxe", description: "Berlines, SUV et Supercars pour vos séjours.", link: "/car-rental", image: "car-rental-fleet" },
          { title: "Conciergerie", description: "Réservations hôtels 5★, restaurants et événements exclusifs.", link: "/concierge", image: "concierge-desk" },
        ],
      },
      destinations: {
        title: "Nos Destinations d'Excellence",
        places: [
          { name: "Paris", description: "Élégance & Services Premium" },
          { name: "Cannes", description: "Glamour & Événements" },
          { name: "Monaco", description: "Luxe & Exclusivité" },
          { name: "Genève", description: "Affaires & Discrétion" },
          { name: "Courchevel", description: "Sommets & Prestige" },
        ],
      },
      advantage: {
        title: "L'Excellence VLS",
        subtitle: "L'engagement de l'excellence dans chaque détail de votre voyage.",
        features: [
          { title: "Sécurité & Discrétion", description: "Votre sécurité et confidentialité sont notre priorité. Nos chauffeurs sont des professionnels agréés." },
          { title: "Disponibilité 24/7", description: "Nous sommes à votre service 24h/24, 7j/7, pour répondre à tous vos besoins." },
          { title: "Qualité Inégalée", description: "Découvrez le summum du luxe avec nos véhicules impeccables et un service exceptionnel." },
        ],
      },
    },
    privateChauffeur: {
      hero: {
        title: "Chauffeur Privé de Luxe",
        subtitle: "Voyagez avec élégance, ponctualité et une discrétion absolue.",
      },
      bespokeServices: {
        title: "Nos Prestations Sur-Mesure",
        subtitle: "Un service adapté à chaque besoin, pour une expérience de transport inégalée.",
        features: [
          { icon: "transfers", title: "Transferts aéroports & gares", description: "Paris, Nice, Genève, Chambéry. Accueil personnalisé avec pancarte nominative." },
          { icon: "business", title: "Déplacements Business & Mise à disposition", description: "Optimisez votre temps avec un service flexible pour vos rendez-vous et roadshows." },
          { icon: "ski", title: "Transferts Stations de Ski", description: "Rejoignez Courchevel, Megève, et les Alpes en toute sécurité avec nos véhicules équipés." },
          { icon: "events", title: "Transport Événementiel", description: "Service dédié pour le Festival de Cannes, Fashion Week, et autres événements privés." },
        ],
      },
      commitment: {
        title: "L'Engagement de l'Excellence",
        subtitle: "Notre réputation repose sur la qualité de nos chauffeurs et l'état irréprochable de notre flotte.",
        pillars: [
          "Chauffeurs professionnels, bilingues et formés à la discrétion.",
          "Véhicules Mercedes récents, inspectés et entretenus pour un confort maximal.",
          "Service client disponible pour toute demande de modification ou d'itinéraire.",
          "Confidentialité et sécurité garanties à chaque trajet.",
        ],
      },
    },
    carRental: {
      hero: {
        title: "Location de Voitures de Luxe",
        subtitle: "Une flotte exclusive pour une expérience de conduite inoubliable.",
      },
      fleet: {
        title: "Notre Flotte",
        subtitle: "Sélectionnez parmi notre collection de superbes automobiles.",
        snowTires: "Options pneus neige pour Courchevel et Genève disponibles.",
        categories: [
          {
            title: "Berlines de Prestige",
            description: "Confort et raffinement pour vos déplacements.",
            cars: [
              { name: "Mercedes-Benz Classe S", imageId: "mercedes-s-class-1" },
              { name: "BMW Série 7", imageId: "bmw-7-series" },
            ],
          },
          {
            title: "SUV & 4x4",
            description: "Espace et polyvalence, des villes aux sommets.",
            cars: [
              { name: "Range Rover Vogue", imageId: "range-rover-1" },
              { name: "BMW X7", imageId: "bmw-x7" },
            ],
          },
          {
            title: "Supercars",
            description: "Vivez une expérience de conduite exaltante.",
            cars: [
              { name: "Lamborghini Huracan", imageId: "lambo-1" },
              { name: "Ferrari 296 GTB", imageId: "ferrari-1" },
            ],
          },
        ],
      },
      service: {
        title: "Un Service Clé en Main",
        description: "Nous simplifions votre expérience de location avec une livraison à votre hôtel, aéroport ou chalet. Une assistance est disponible 24/7 pour vous assurer une tranquillité d'esprit totale.",
      },
      cta: {
        request: "Demander ce véhicule",
        book: "Réserver votre véhicule",
      },
    },
    concierge: {
      hero: {
        title: "Conciergerie de Luxe",
        subtitle: "Votre passeport pour un monde de privilèges et d'expériences inoubliables.",
      },
      limitless: {
        title: "Un Service Sans Limites",
        description: "Notre équipe de concierges est dédiée à anticiper et satisfaire vos moindres désirs. Avec une connaissance locale inégalée et un réseau mondial, nous transformons l'impossible en réalité. Confiez-nous les détails, savourez l'instant.",
        services: [
          { icon: "gastronomy", title: "Réservations Gastronomiques", description: "Accédez aux tables les plus prisées et aux expériences culinaires uniques." },
          { icon: "events", title: "Billetterie & Événements VIP", description: "Concerts, opéras, événements sportifs, défilés de mode... Nous vous ouvrons les portes." },
          { icon: "accommodation", title: "Hébergement de Prestige", description: "Réservation des plus beaux hôtels 5 étoiles, palaces, chalets privés et villas." },
          { icon: "shopping", title: "Expériences Shopping", description: "Accès à des personal shoppers, essayages privés et collections exclusives." },
          { icon: "winterStays", title: "Séjours d'hiver à Courchevel", description: "Organisation complète : hébergement, forfaits, moniteurs de ski privés, et plus encore." },
          { icon: "charters", title: "Charters de Yachts & Jets Privés", description: "Voyagez en toute exclusivité et confidentialité grâce à notre réseau de partenaires." },
        ],
      },
    },
    about: {
      hero: {
        title: "L'Art du Luxe Privé",
        subtitle: "Victoire Luxury service (VLS) incarne l’élégance, la simplicité du service parfait, la discrétion et le soin du détail. Notre objectif : offrir bien plus qu’un trajet – une véritable expérience.",
      },
      story: {
        title: "Notre Histoire",
        p1: "Fondée sur les principes d'excellence, de fiabilité et de service client inégalé, Victoire Luxury service (VLS) est passée d'une seule berline à un fournisseur de services de luxe de premier plan en Europe. Notre passion est d'offrir plus qu'un simple trajet ; nous offrons une expérience.",
        p2: "Des rues animées de Paris aux côtes sereines de la Côte d'Azur, notre équipe se consacre à rendre votre voyage aussi parfait et mémorable que la destination elle-même.",
      },
      values: {
        mission: { title: "Notre Mission", text: "Fournir les services de transport et de conciergerie les plus luxueux, fiables et discrets, dépassant à chaque fois les attentes de nos clients." },
        values: { title: "Nos Valeurs", text: "Excellence, Intégrité, Ponctualité, et un engagement profond envers la satisfaction et la confidentialité de nos clients." },
        team: { title: "Notre Équipe", text: "Une équipe de professionnels expérimentés et dévoués à offrir une expérience de service de classe mondiale." },
      },
      management: {
        title: "Rencontrez la Direction",
        members: [
          { name: "Jean-Pierre Dubois", role: "Fondateur & CEO", hint: "man portrait" },
          { name: "Céline Moreau", role: "Directrice des Opérations", hint: "woman portrait" },
          { name: "Louis Chevalier", role: "Chauffeur Principal", hint: "man portrait smiling" },
        ],
      },
    },
    contact: {
      hero: {
        title: "Contact & Réservations",
        subtitle: "Nous sommes là pour vous aider 24/7. Contactez-nous pour planifier votre prochain voyage.",
      },
      getInTouch: {
        title: "Contactez-nous",
        subtitle: "Pour une assistance immédiate ou pour réserver, veuillez utiliser les options ci-dessous. Nous sommes disponibles 24/7.",
        whatsapp: "Réserver par WhatsApp",
        call: "Appeler",
      },
      serviceAreas: {
        title: "Zones d'Intervention",
        cities: ["Paris", "Cannes", "Monaco", "Genève", "Courchevel"],
      },
      form: {
        title: "Ou envoyez-nous un message",
        name: { label: "Nom Complet", placeholder: "Ex: Jean Dupont" },
        email: { label: "Email Professionnel", placeholder: "contact@entreprise.com" },
        phone: { label: "Téléphone (Optionnel)", placeholder: "+33 1 23 45 67 89" },
        message: { label: "Votre message", placeholder: "Veuillez fournir les détails de votre demande..." },
        submit: {
          default: "Envoyer le message",
          submitting: "Envoi en cours...",
        },
        toast: {
          title: "Message Envoyé !",
          description: "Merci de nous avoir contactés. Nous reviendrons vers vous rapidement.",
        },
        validation: {
          name: "Le nom doit contenir au moins 2 caractères.",
          email: "Veuillez saisir une adresse e-mail valide.",
          message: "Le message doit contenir au moins 10 caractères.",
        },
      },
      faq: {
        title: "Questions Fréquentes",
        items: [
          { question: "Proposez-vous des sièges auto pour enfants ?", answer: "Oui, sur simple demande lors de la réservation, nous fournissons des sièges adaptés à tous les âges pour garantir la sécurité et le confort de vos enfants." },
          { question: "Quel est le délai minimum pour réserver ?", answer: "Nous recommandons de réserver au moins 24h à l'avance pour garantir la disponibilité. Cependant, nous nous efforçons de répondre aux demandes urgentes en fonction de nos plannings." },
          { question: "Acceptez-vous les paiements à bord ?", answer: "Oui, tous nos véhicules sont équipés de terminaux de paiement sécurisés acceptant les principales cartes de crédit (Visa, MasterCard, American Express)." },
        ],
      },
    },
    footer: {
      tagline: "Vivez une Expérience de Luxe Inégalée.",
      services: {
        title: "Services",
        links: [
          { href: "/private-chauffeur", label: "Chauffeur Privé" },
          { href: "/car-rental", label: "Location de Voiture" },
          { href: "/concierge", label: "Conciergerie" },
        ],
      },
      company: {
        title: "Société",
        links: [
          { href: "/about", label: "À Propos" },
          { href: "/contact", label: "Contact" },
        ],
      },
      social: {
        title: "Suivez-nous",
      },
      copyright: "Victoire Luxury service (VLS). Tous droits réservés.",
    },
  },
  en: {
    navLinks: [
      { href: "/private-chauffeur", label: "Private Chauffeur" },
      { href: "/car-rental", label: "Car Rental" },
      { href: "/concierge", label: "Concierge" },
      { href: "/about", label: "About Us" },
      { href: "/contact", label: "Contact" },
    ],
    common: {
      bookNow: "Book Now",
      learnMore: "Learn more",
    },
    home: {
      hero: {
        title: "Luxury Private Chauffeur in Paris, Cannes, Monaco, Geneva & Courchevel",
        subtitle: "Welcome to Victoire Luxury service (VLS), the absolute reference in luxury private transport. A refined, elegant, and fully personalized experience.",
        cta: "Book a Chauffeur",
      },
      services: {
        title: "Our Exclusive Services",
        subtitle: "Designed to offer the pinnacle of luxury and convenience.",
        cards: [
          { title: "Private Chauffeur", description: "Airport transfers, disposals, and VIP transportation.", link: "/private-chauffeur", image: "chauffeur-service" },
          { title: "Luxury Car Rental", description: "Sedans, SUVs, and Supercars for your travels.", link: "/car-rental", image: "car-rental-fleet" },
          { title: "Concierge", description: "5★ hotel, restaurant, and exclusive event bookings.", link: "/concierge", image: "concierge-desk" },
        ],
      },
      destinations: {
        title: "Our Premier Destinations",
        places: [
          { name: "Paris", description: "Elegance & Premium Services" },
          { name: "Cannes", description: "Glamour & Events" },
          { name: "Monaco", description: "Luxury & Exclusivity" },
          { name: "Geneva", description: "Business & Discretion" },
          { name: "Courchevel", description: "Summits & Prestige" },
        ],
      },
      advantage: {
        title: "The VLS Excellence",
        subtitle: "A commitment to excellence in every detail of your journey.",
        features: [
          { title: "Security & Discretion", description: "Your safety and confidentiality are our priority. Our chauffeurs are licensed professionals." },
          { title: "24/7 Availability", description: "We are at your service 24/7 to meet all your needs." },
          { title: "Unmatched Quality", description: "Experience the pinnacle of luxury with our immaculate vehicles and exceptional service." },
        ],
      },
    },
    privateChauffeur: {
      hero: {
        title: "Luxury Private Chauffeur",
        subtitle: "Travel with elegance, punctuality, and absolute discretion.",
      },
      bespokeServices: {
        title: "Our Bespoke Services",
        subtitle: "A service tailored to every need, for an unparalleled transport experience.",
        features: [
          { icon: "transfers", title: "Airport & Station Transfers", description: "Paris, Nice, Geneva, Chambéry. Personalized welcome with a name sign." },
          { icon: "business", title: "Business Travel & As-Directed Hire", description: "Optimize your time with a flexible service for your appointments and roadshows." },
          { icon: "ski", title: "Ski Resort Transfers", description: "Reach Courchevel, Megève, and the Alps safely with our equipped vehicles." },
          { icon: "events", title: "Event Transportation", description: "Dedicated service for the Cannes Film Festival, Fashion Week, and other private events." },
        ],
      },
      commitment: {
        title: "A Commitment to Excellence",
        subtitle: "Our reputation is built on the quality of our chauffeurs and the immaculate condition of our fleet.",
        pillars: [
          "Professional, bilingual chauffeurs trained in discretion.",
          "Recent, inspected, and maintained Mercedes vehicles for maximum comfort.",
          "Customer service available for any modification or itinerary requests.",
          "Confidentiality and security guaranteed on every trip.",
        ],
      },
    },
    carRental: {
      hero: {
        title: "Luxury Car Rental",
        subtitle: "An exclusive fleet for an unforgettable driving experience.",
      },
      fleet: {
        title: "Our Fleet",
        subtitle: "Select from our collection of stunning automobiles.",
        snowTires: "Snow tire options available for Courchevel and Geneva.",
        categories: [
          {
            title: "Prestige Sedans",
            description: "Comfort and refinement for your journeys.",
            cars: [
              { name: "Mercedes-Benz S-Class", imageId: "mercedes-s-class-1" },
              { name: "BMW 7 Series", imageId: "bmw-7-series" },
            ],
          },
          {
            title: "SUVs & 4x4s",
            description: "Space and versatility, from cities to summits.",
            cars: [
              { name: "Range Rover Vogue", imageId: "range-rover-1" },
              { name: "BMW X7", imageId: "bmw-x7" },
            ],
          },
          {
            title: "Supercars",
            description: "Experience an exhilarating driving adventure.",
            cars: [
              { name: "Lamborghini Huracan", imageId: "lambo-1" },
              { name: "Ferrari 296 GTB", imageId: "ferrari-1" },
            ],
          },
        ],
      },
      service: {
        title: "A Turnkey Service",
        description: "We simplify your rental experience with delivery to your hotel, airport, or chalet. 24/7 assistance is available to ensure your complete peace of mind.",
      },
      cta: {
        request: "Request This Vehicle",
        book: "Book Your Vehicle",
      },
    },
    concierge: {
      hero: {
        title: "Luxury Concierge",
        subtitle: "Your passport to a world of privileges and unforgettable experiences.",
      },
      limitless: {
        title: "A Service Without Limits",
        description: "Our team of concierges is dedicated to anticipating and satisfying your every desire. With unparalleled local knowledge and a global network, we turn the impossible into reality. Entrust us with the details, and savor the moment.",
        services: [
          { icon: "gastronomy", title: "Gastronomic Reservations", description: "Access the most sought-after tables and unique culinary experiences." },
          { icon: "events", title: "VIP Ticketing & Events", description: "Concerts, operas, sporting events, fashion shows... we open the doors for you." },
          { icon: "accommodation", title: "Prestige Accommodation", description: "Booking the finest 5-star hotels, palaces, private chalets, and villas." },
          { icon: "shopping", title: "Shopping Experiences", description: "Access to personal shoppers, private fittings, and exclusive collections." },
          { icon: "winterStays", title: "Winter Stays in Courchevel", description: "Complete organization: accommodation, ski passes, private instructors, and more." },
          { icon: "charters", title: "Yacht & Private Jet Charters", description: "Travel with complete exclusivity and confidentiality through our network of partners." },
        ],
      },
    },
    about: {
      hero: {
        title: "The Art of Private Luxury",
        subtitle: "Victoire Luxury service (VLS) embodies elegance, the simplicity of perfect service, discretion, and attention to detail. Our goal is to offer more than just a ride – a true experience.",
      },
      story: {
        title: "Our Story",
        p1: "Founded on the principles of excellence, reliability, and unparalleled customer service, Victoire Luxury service (VLS) has grown from a single sedan to a leading luxury service provider in Europe. Our passion is to offer more than just a ride; we offer an experience.",
        p2: "From the bustling streets of Paris to the serene coasts of the French Riviera, our team is dedicated to making your journey as seamless and memorable as the destination itself.",
      },
      values: {
        mission: { title: "Our Mission", text: "To provide the most luxurious, reliable, and discreet transportation and concierge services, exceeding our clients' expectations every time." },
        values: { title: "Our Values", text: "Excellence, Integrity, Punctuality, and a deep commitment to our clients' satisfaction and privacy." },
        team: { title: "Our Team", text: "A team of experienced professionals dedicated to delivering a world-class service experience." },
      },
      management: {
        title: "Meet the Management",
        members: [
          { name: "Jean-Pierre Dubois", role: "Founder & CEO", hint: "man portrait" },
          { name: "Céline Moreau", role: "Operations Director", hint: "woman portrait" },
          { name: "Louis Chevalier", role: "Head Chauffeur", hint: "man portrait smiling" },
        ],
      },
    },
    contact: {
      hero: {
        title: "Contact & Bookings",
        subtitle: "We are here to assist you 24/7. Contact us to plan your next journey.",
      },
      getInTouch: {
        title: "Get in Touch",
        subtitle: "For immediate assistance or to book, please use the options below. We are available 24/7.",
        whatsapp: "Book via WhatsApp",
        call: "Call Us",
      },
      serviceAreas: {
        title: "Service Areas",
        cities: ["Paris", "Cannes", "Monaco", "Geneva", "Courchevel"],
      },
      form: {
        title: "Or send us a message",
        name: { label: "Full Name", placeholder: "e.g., John Doe" },
        email: { label: "Business Email", placeholder: "contact@company.com" },
        phone: { label: "Phone (Optional)", placeholder: "+44 20 7123 4567" },
        message: { label: "Your message", placeholder: "Please provide the details of your request..." },
        submit: {
          default: "Send Message",
          submitting: "Sending...",
        },
        toast: {
          title: "Message Sent!",
          description: "Thank you for contacting us. We will get back to you shortly.",
        },
        validation: {
          name: "Name must be at least 2 characters.",
          email: "Please enter a valid email address.",
          message: "Message must be at least 10 characters.",
        },
      },
      faq: {
        title: "Frequently Asked Questions",
        items: [
          { question: "Do you provide child car seats?", answer: "Yes, upon request at the time of booking, we provide age-appropriate seats to ensure the safety and comfort of your children." },
          { question: "What is the minimum booking time?", answer: "We recommend booking at least 24 hours in advance to ensure availability. However, we strive to accommodate urgent requests based on our schedules." },
          { question: "Do you accept payments on board?", answer: "Yes, all our vehicles are equipped with secure payment terminals accepting major credit cards (Visa, MasterCard, American Express)." },
        ],
      },
    },
    footer: {
      tagline: "Experience Unmatched Luxury.",
      services: {
        title: "Services",
        links: [
          { href: "/private-chauffeur", label: "Private Chauffeur" },
          { href: "/car-rental", label: "Car Rental" },
          { href: "/concierge", label: "Concierge" },
        ],
      },
      company: {
        title: "Company",
        links: [
          { href: "/about", label: "About Us" },
          { href: "/contact", label: "Contact" },
        ],
      },
      social: {
        title: "Follow Us",
      },
      copyright: "Victoire Luxury service (VLS). All rights reserved.",
    },
  },
};

export type Translations = typeof translations.fr;
