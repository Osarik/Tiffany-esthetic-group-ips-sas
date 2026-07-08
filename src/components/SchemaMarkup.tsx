export default function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["MedicalBusiness", "LocalBusiness"],
        "@id": "https://www.tiffanyesthetic.com/#business",
        name: "Tiffany Esthetic Group Ips SAS",
        description:
          "Institución habilitada por la Secretaría de Salud con salas de cirugía, área de recuperación, farmacia habilitada y personal calificado para procedimientos de cirugía plástica y estética.",
        url: "https://www.tiffanyesthetic.com",
        telephone: "+57-3202703522",
        email: "info@tiffanyesthetic.com",
        medicalSpecialty: ["PlasticSurgery", "CosmeticSurgery"],
        priceRange: "$$$",
        image: "https://www.tiffanyesthetic.com/images/clinic-hero.jpg",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Cali",
          addressRegion: "Valle del Cauca",
          addressCountry: "CO",
          streetAddress: "13a1-25, Cra 85c, Comuna 17",
        },
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
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.tiffanyesthetic.com/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "¿Qué procedimientos realizan?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Realizamos lipoescultura con lipoinyección glútea, liposucción, lipectomía, pexia, rinoplastia, blefaroplastia y lifting facial.",
            },
          },
          {
            "@type": "Question",
            name: "¿La clínica está habilitada?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sí. Tiffany Esthetic Group IPS SAS es una institución habilitada por la Secretaría de Salud y cuenta con farmacia habilitada.",
            },
          },
          {
            "@type": "Question",
            name: "¿Alquilan salas de cirugía a médicos?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sí. Contamos con tres salas de cirugía disponibles para médicos cirujanos plásticos, con apoyo de anestesia, circulante e instrumentación.",
            },
          },
        ],
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
