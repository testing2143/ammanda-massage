export const siteSettings = {
  name: "Amanda Massage",
  legalName: "Amanda Massage",
  description:
    "Massagepraktijk in Zoetermeer voor klassieke massage, hot stone massage en zwangerschapsmassage. Maak eenvoudig online een afspraak.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://amandamassage.nl",
  bookingUrl:
    "https://www.supersaas.nl/schedule/Praktijk_Amanda_Massage/Massage",
  email: "amanda.massage@hotmail.com",
  phoneDisplay: "079-360 55 56",
  phoneHref: "tel:+31793605556",
  phoneIntl: "+31 79 360 55 56",
  address: {
    street: "Weigeliapark 2",
    postalCode: "2724 RK",
    city: "Zoetermeer",
    country: "Nederland",
    countryCode: "NL"
  },
  socials: {
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || "https://www.facebook.com",
    instagram:
      process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://www.instagram.com"
  },
  announcement: {
    enabled: process.env.NEXT_PUBLIC_ANNOUNCEMENT_ENABLED === "true",
    text:
      process.env.NEXT_PUBLIC_ANNOUNCEMENT_TEXT ||
      "Tijdelijke melding: geef vakantiesluiting of wachtlijst hier eenvoudig door."
  },
  paymentNote: "Betaling contant of via pin. Tarieven zijn inclusief BTW."
} as const;

export const navigation = [
  { label: "Welkom", href: "/" },
  { label: "Massages", href: "/massages" },
  { label: "Tarieven", href: "/tarieven" },
  { label: "Praktijk", href: "/praktijk" },
  { label: "Over mij", href: "/over-mij" },
  { label: "Contact", href: "/contact" }
] as const;

export const openingHours = [
  {
    day: "Dinsdag",
    schemaDay: "https://schema.org/Tuesday",
    slots: [
      { label: "10:00-13:30", opens: "10:00", closes: "13:30" },
      { label: "19:30-22:00", opens: "19:30", closes: "22:00" }
    ]
  },
  {
    day: "Donderdag",
    schemaDay: "https://schema.org/Thursday",
    slots: [
      { label: "10:00-13:30", opens: "10:00", closes: "13:30" },
      { label: "19:30-22:00", opens: "19:30", closes: "22:00" }
    ]
  },
  {
    day: "Zaterdag",
    schemaDay: "https://schema.org/Saturday",
    slots: [{ label: "10:00-17:00", opens: "10:00", closes: "17:00" }]
  }
] as const;

export const heroHighlights = [
  "Rustige praktijkruimte op de begane grond",
  "Persoonlijke aandacht en warme sfeer",
  "Online afspraak maken via SuperSaaS"
] as const;

export const massageTypes = [
  {
    slug: "klassieke-massage",
    name: "Klassieke Massage",
    teaser:
      "Ontspannende lichaamsmassage die spanning helpt verminderen en de doorbloeding stimuleert.",
    description:
      "De klassieke (Zweedse) massage is gericht op ontspanning van het hele lichaam. Door middel van strijkingen, knedingen en drukbewegingen worden spieren losgemaakt en de bloedsomloop gestimuleerd.",
    suitableFor:
      "Geschikt voor wie behoefte heeft aan rust, herstel en het loslaten van vastzittende spanning in rug, nek en schouders.",
    image: "/images/klassieke-massage.svg",
    alt: "Sfeervolle placeholderafbeelding van een klassieke massage",
    icon: "hands",
    durations: ["30 min", "60 min"]
  },
  {
    slug: "hot-stone-massage",
    name: "Hot Stone Massage",
    teaser:
      "Warme basaltstenen zorgen voor diepe ontspanning en een aangename, gelijkmatige warmte in het lichaam.",
    description:
      "Bij de Hot Stone Massage worden verwarmde basaltstenen op het lichaam geplaatst en gebruikt bij het masseren. De warmte van de stenen dringt diep door in de spieren, wat zorgt voor diepe ontspanning.",
    suitableFor:
      "Fijn voor wie stress ervaart, koude spieren heeft of op zoek is naar een weldadige massage die extra diep doorwerkt.",
    image: "/images/hot-stone-massage.svg",
    alt: "Sfeervolle placeholderafbeelding van een hot stone massage",
    icon: "stone",
    durations: ["60 min", "90 min"]
  },
  {
    slug: "zwangerschapsmassage",
    name: "Zwangerschapsmassage",
    teaser:
      "Zachte, veilige massage afgestemd op iedere fase van de zwangerschap en veelvoorkomende fysieke klachten.",
    description:
      "Speciaal ontwikkeld voor zwangere vrouwen. De massage verlicht veelvoorkomende klachten zoals rugpijn, zware benen en spanning. Veilig en comfortabel, aangepast aan iedere fase van de zwangerschap.",
    suitableFor:
      "Ideaal voor aanstaande moeders die verlichting zoeken bij lichamelijke belasting en bewust een rustmoment willen inplannen.",
    image: "/images/zwangerschapsmassage.svg",
    alt: "Sfeervolle placeholderafbeelding van een zwangerschapsmassage",
    icon: "heart",
    durations: ["60 min"]
  }
] as const;

export const massagePlaceholderNote =
  "De teksten op deze pagina zijn voorlopig placeholders. Zodra de exacte content van de huidige website beschikbaar is, kunnen de definitieve beschrijvingen hier direct worden overgenomen.";

export const priceRows = [
  { massage: "Klassieke Massage", duration: "30 min", price: "EUR XX,-" },
  { massage: "Klassieke Massage", duration: "60 min", price: "EUR XX,-" },
  { massage: "Hot Stone Massage", duration: "60 min", price: "EUR XX,-" },
  { massage: "Hot Stone Massage", duration: "90 min", price: "EUR XX,-" },
  { massage: "Zwangerschapsmassage", duration: "60 min", price: "EUR XX,-" }
] as const;

export const practiceFeatures = [
  "Massageruimte op de begane grond",
  "Verwarmd met vloerverwarming",
  "Rustige muziek op de achtergrond",
  "Wasruimte en wc aanwezig in de praktijk",
  "Geen drempels en goed bereikbaar voor mensen die slecht ter been zijn",
  "Gratis parkeren in de buurt"
] as const;

export const practiceGallery = [
  {
    image: "/images/praktijk-ruimte.svg",
    alt: "Placeholderafbeelding van een warme praktijkruimte"
  },
  {
    image: "/images/praktijk-detail.svg",
    alt: "Placeholderafbeelding van wellnessdetails in de praktijk"
  }
] as const;

export const amandaProfile = {
  intro:
    "Amanda werkt vanuit rust, aandacht en een oprechte interesse in wat iemand nodig heeft om weer ruimte te voelen in lichaam en hoofd.",
  paragraphs: [
    "In de praktijk staat persoonlijke aandacht centraal. Iedere behandeling begint met afstemmen: waar zit spanning, wat heeft het lichaam nodig en welk tempo voelt prettig aan.",
    "De massages zijn bedoeld als een moment om uit de drukte te stappen. Een sessie bij Amanda Massage mag vertragen, verzachten en opnieuw contact geven met ontspanning.",
    "Deze pagina gebruikt nu tijdelijke profieltekst. Zodra Amanda haar volledige bio, ervaring en opleidingen aanlevert, kan dit deel zonder technische aanpassing worden vervangen."
  ],
  education: [
    "Opleidingsgegevens volgen zodra de klant de exacte diploma's en certificeringen aanlevert",
    "Placeholder: aanvullende scholing klassieke massage",
    "Placeholder: aanvullende scholing hot stone massage",
    "Placeholder: scholing zwangerschapsmassage"
  ],
  motivation:
    "Een goede massage biedt niet alleen verlichting in spieren, maar ook een moment van rust, aandacht en herstel."
} as const;

export const privacyTopics = [
  {
    title: "Welke gegevens worden verwerkt?",
    body:
      "Via het contactformulier worden naam, telefoonnummer, e-mailadres en bericht verwerkt. Deze gegevens worden alleen gebruikt om een afspraak of informatieverzoek op te volgen."
  },
  {
    title: "Waarvoor gebruiken we deze gegevens?",
    body:
      "Amanda Massage gebruikt uw gegevens uitsluitend om contact met u op te nemen. De gegevens worden niet verkocht of gebruikt voor nieuwsbrieven of advertentiedoeleinden."
  },
  {
    title: "Cookies op deze site",
    body:
      "De website gebruikt alleen een functionele voorkeurcookie voor de cookiemelding. Er worden standaard geen trackingcookies geplaatst."
  }
] as const;

export const routes = [
  "/",
  "/massages",
  "/tarieven",
  "/praktijk",
  "/over-mij",
  "/contact",
  "/privacy"
] as const;
