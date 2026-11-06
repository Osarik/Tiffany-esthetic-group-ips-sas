import { clinicData, clinicSameAs } from "@/data/clinic";
import { services } from "@/data/services";

export default function SchemaMarkup() {
  const siteUrl = "https://www.clinicatiffany.com";
  const whatsappUrl = `https://wa.me/${clinicData.whatsapp}`;

  const identifiers = [
    { "@type": "PropertyValue", name: "NIT", value: clinicData.nit },
    { "@type": "PropertyValue", name: "REPS", value: clinicData.reps },
  ];

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

  const availableService = procedures.map((p) => ({
    "@type": "SurgicalProcedure",
    name: p.title,
    description: p.description,
    url: `${siteUrl}${p.href}`,
  }));

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: clinicData.legalName,
        alternateName: clinicData.alternateNames,
        legalName: clinicData.legalName,
        description:
          "Institución prestadora de servicios de salud habilitada ante las autoridades sanitarias de Colombia, especializada en cirugía plástica y estética en Cali.",
        url: siteUrl,
        taxID: clinicData.nit,
        identifier: identifiers,
        foundingDate: clinicData.foundingDate,
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/icon.svg`,
          width: 512,
          height: 512,
        },
        sameAs: clinicSameAs,
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
        name: clinicData.legalName,
        alternateName: clinicData.alternateNames,
        legalName: clinicData.legalName,
        description:
          "Institución habilitada por la Secretaría de Salud con salas de cirugía, área de recuperación, farmacia habilitada y personal calificado para procedimientos de cirugía plástica y estética en Cali, Colombia.",
        url: siteUrl,
        telephone: "+57-3202703522",
        email: clinicData.email,
        taxID: clinicData.nit,
        identifier: identifiers,
        foundingDate: clinicData.foundingDate,
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
          addressCountry: clinicData.country,
          addressLocality: clinicData.locality,
          addressRegion: clinicData.region,
          streetAddress: clinicData.streetAddress,
          postalCode: clinicData.postalCode,
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
        sameAs: clinicSameAs,
        parentOrganization: { "@id": `${siteUrl}/#organization` },
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
        availableService,
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Clínica Tiffany | Tiffany Esthetic Group IPS SAS",
        alternateName: clinicData.alternateNames,
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
