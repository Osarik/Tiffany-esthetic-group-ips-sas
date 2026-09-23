import { clinicData } from "@/data/clinic";
import { services } from "@/data/services";
import { testimonialsData } from "@/data/testimonials";

export default function SchemaMarkup() {
  const siteUrl = "https://clinicatiffany.com";

  const schema = {
    "@context": "https://schema.org",
    "@type": ["MedicalClinic", "LocalBusiness"],
    "@id": `${siteUrl}/#business`,
    name: "Tiffany Esthetic Group Ips SAS",
    alternateName: "Tiffany Esthetic Group",
    legalName: "Tiffany Esthetic Group Ips SAS",
    description:
      "Institución habilitada por la Secretaría de Salud con salas de cirugía, área de recuperación, farmacia habilitada y personal calificado para procedimientos de cirugía plástica y estética en Cali, Colombia.",
    url: siteUrl,
    telephone: "+57-3202703522",
    email: clinicData.email,
    taxID: "901634870",
    vatID: "CO901634870",
    medicalSpecialty: ["PlasticSurgery", "CosmeticSurgery"],
    priceRange: "$$$",
    image: `${siteUrl}/icon.svg`,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/icon.svg`,
      width: 512,
      height: 512,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cali",
      addressRegion: "Valle del Cauca",
      addressCountry: "CO",
      streetAddress: "13a1-25, Cra 85c, Comuna 17",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 3.3811893,
      longitude: -76.5357955,
    },
    hasMap: clinicData.googleMapsUrl,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "12:00",
      },
    ],
    sameAs: ["https://www.instagram.com/tiffanyeg_ips/"],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+57-3202703522",
      contactType: "customer service",
      areaServed: "CO",
      availableLanguage: "es",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Cali",
      },
      {
        "@type": "State",
        name: "Valle del Cauca",
      },
    ],
    knowsLanguage: "es",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: testimonialsData.aiSummary.rating,
      bestRating: 5,
      reviewCount: testimonialsData.aiSummary.totalReviews,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de Cirugía Plástica y Estética",
      itemListElement: services
        .filter((s) => s.href)
        .map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: s.title,
            description: s.description,
            url: `${siteUrl}${s.href}`,
          },
        })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}