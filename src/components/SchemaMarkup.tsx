import { clinicData } from "@/data/clinic";
import { services } from "@/data/services";
import { testimonialsData } from "@/data/testimonials";

export default function SchemaMarkup() {
  const siteUrl = "https://clinicatiffany.com";
  const whatsappUrl = `https://wa.me/${clinicData.whatsapp}`;

  const clinicImages = [
    {
      url: `${siteUrl}/images/schema/25-16x9.webp`,
      width: 960,
      height: 540,
      caption: "Sala de cirugía habilitada de Tiffany Esthetic Group IPS en Cali",
    },
    {
      url: `${siteUrl}/images/schema/23-4x3.webp`,
      width: 900,
      height: 675,
      caption: "Consultorio de Tiffany Esthetic Group IPS en Cali",
    },
    {
      url: `${siteUrl}/images/schema/22-1x1.webp`,
      width: 800,
      height: 800,
      caption: "Sala de espera de Tiffany Esthetic Group IPS en Cali",
    },
    {
      url: `${siteUrl}/images/schema/14-4x3.webp`,
      width: 900,
      height: 675,
      caption: "Equipo quirúrgico de Tiffany Esthetic Group IPS en Cali",
    },
    {
      url: `${siteUrl}/images/schema/11-1x1.webp`,
      width: 800,
      height: 800,
      caption: "Esterilización en Tiffany Esthetic Group IPS en Cali",
    },
  ];

  const procedures = services.filter((s) => s.href);

  const availableService = procedures.map((s) =>
    s.id === "alquiler-quirofanos"
      ? {
          "@type": "Service",
          name: s.title,
          description: s.description,
          url: `${siteUrl}${s.href}`,
          serviceType: "Alquiler de quirófano",
          provider: { "@id": `${siteUrl}/#business` },
        }
      : {
          "@type": "MedicalProcedure",
          name: s.title,
          description: s.description,
          procedureType: "SurgicalProcedure",
          url: `${siteUrl}${s.href}`,
          provider: { "@id": `${siteUrl}/#business` },
        },
  );

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Tiffany Esthetic Group Ips SAS",
        alternateName: "Tiffany Esthetic Group",
        legalName: "Tiffany Esthetic Group Ips SAS",
        description:
          "Institución prestadora de servicios de salud habilitada ante las autoridades sanitarias de Colombia, especializada en cirugía plástica y estética en Cali.",
        url: siteUrl,
        taxID: "901634870",
        foundingDate: "2022-09-16",
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/icon.svg`,
          width: 512,
          height: 512,
        },
        sameAs: [
          "https://www.instagram.com/tiffanyeg_ips/",
          "https://share.google/MzXxcRbLtvpwRjNLt",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+57-3202703522",
          contactType: "customer service",
          areaServed: "CO",
          availableLanguage: "es",
          url: whatsappUrl,
        },
      },
      {
        "@type": "MedicalClinic",
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
        foundingDate: "2022-09-16",
        medicalSpecialty: "PlasticSurgery",
        priceRange: "$$$",
        paymentAccepted: "cash, credit card",
        isAcceptingNewPatients: true,
        image: clinicImages,
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/icon.svg`,
          width: 512,
          height: 512,
        },
        address: {
          "@type": "PostalAddress",
          addressCountry: "CO",
          addressLocality: "Cali",
          addressRegion: "Valle del Cauca",
          streetAddress: "Cra 85c #13a1-25, Comuna 17",
          postalCode: "760032",
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
        sameAs: [
          "https://www.instagram.com/tiffanyeg_ips/",
          "https://share.google/MzXxcRbLtvpwRjNLt",
        ],
        parentOrganization: { "@id": `${siteUrl}/#organization` },
        medicalStaff: { "@id": `${siteUrl}/#physician` },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+57-3202703522",
          contactType: "customer service",
          areaServed: "CO",
          availableLanguage: "es",
          url: whatsappUrl,
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
        availableService,
      },
      {
        "@type": "Physician",
        "@id": `${siteUrl}/#physician`,
        name: "Equipo médico de Tiffany Esthetic Group Ips SAS",
        description:
          "Cirujanos plásticos calificados y personal médico de Tiffany Esthetic Group IPS en Cali.",
        medicalSpecialty: "PlasticSurgery",
        worksFor: { "@id": `${siteUrl}/#business` },
        address: {
          "@type": "PostalAddress",
          addressCountry: "CO",
          addressLocality: "Cali",
          addressRegion: "Valle del Cauca",
          streetAddress: "Cra 85c #13a1-25, Comuna 17",
          postalCode: "760032",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Tiffany Esthetic Group | Cirugía Plástica en Cali",
        description:
          "Clínica boutique de cirugía plástica y estética en Cali, Colombia. Habilitada por la Secretaría de Salud.",
        publisher: { "@id": `${siteUrl}/#organization` },
        inLanguage: "es",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}