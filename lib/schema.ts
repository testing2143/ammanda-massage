import { massageTypes, openingHours, siteSettings } from "@/lib/constants";

export function getLocalBusinessSchema() {
  const fullAddress = `${siteSettings.address.street}, ${siteSettings.address.postalCode} ${siteSettings.address.city}`;

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    additionalType: "https://schema.org/HealthAndBeautyBusiness",
    name: siteSettings.name,
    description: siteSettings.description,
    image: [
      `${siteSettings.siteUrl}/images/hero-wellness.svg`,
      `${siteSettings.siteUrl}/images/praktijk-ruimte.jpg`,
      `${siteSettings.siteUrl}/images/amanda-portrait.jpg`
    ],
    url: siteSettings.siteUrl,
    telephone: siteSettings.phoneIntl,
    email: siteSettings.email,
    priceRange: "EUR EUR",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteSettings.address.street,
      postalCode: siteSettings.address.postalCode,
      addressLocality: siteSettings.address.city,
      addressCountry: siteSettings.address.countryCode
    },
    hasMap: `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}`,
    sameAs: [siteSettings.socials.facebook, siteSettings.socials.instagram],
    openingHoursSpecification: openingHours.flatMap((entry) =>
      entry.slots.map((slot) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: entry.schemaDay,
        opens: slot.opens,
        closes: slot.closes
      }))
    ),
    areaServed: {
      "@type": "City",
      name: "Zoetermeer"
    },
    makesOffer: massageTypes.map((massage) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: massage.name,
        description: massage.teaser
      }
    }))
  };
}
