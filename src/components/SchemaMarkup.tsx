export default function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["MedicalBusiness", "LocalBusiness"],
        "@id": "https://www.tiffanyesthetic.com/#business",
        "name": "Tiffany Esthetic Group Ips SAS",
        "description":
          "Clínica de cirugía plástica y medicina estética con más de 10 años de experiencia. Especialistas en rinoplastia, liposucción HD, mamoplastia y tratamientos estéticos no invasivos.",
        "url": "https://www.tiffanyesthetic.com",
        "telephone": "+57-XXX-XXX-XXXX",
        "email": "info@tiffanyesthetic.com",
        "medicalSpecialty": [
          "PlasticSurgery",
          "Dermatology",
          "CosmeticSurgery",
        ],
        "priceRange": "$$$",
        "image": "https://www.tiffanyesthetic.com/images/clinic-hero.jpg",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Cali",
          "addressRegion": "Valle del Cauca",
          "addressCountry": "CO",
          "streetAddress": "Carrera 85C # 13A1-25, El Ingenio",
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "127",
          "bestRating": "5",
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
            ],
            "opens": "08:00",
            "closes": "18:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "09:00",
            "closes": "14:00",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.tiffanyesthetic.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "¿La consulta inicial tiene algún costo?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. En Tiffany Esthetic Group la primera consulta es completamente gratuita.",
            },
          },
          {
            "@type": "Question",
            "name": "¿Cuánto tiempo toma la recuperación de una cirugía?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Depende del procedimiento. Cirugías como liposucción HD requieren 1-2 semanas de reposo, mientras que tratamientos con ácido hialurónico no requieren recuperación.",
            },
          },
          {
            "@type": "Question",
            "name": "¿Los resultados de los tratamientos son permanentes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Procedimientos quirúrgicos como rinoplastia tienen resultados permanentes. Tratamientos como toxina botulínica duran 4-6 meses y ácido hialurónico 12-18 meses.",
            },
          },
          {
            "@type": "Question",
            "name": "¿Qué certificaciones tiene el equipo médico?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Contamos con cirujanos plásticos certificados por la Sociedad Colombiana de Cirugía Plástica y especialistas con formación internacional.",
            },
          },
        ],
      },
      {
        "@type": "Review",
        "reviewBody":
          "Desde la primera consulta sentí total confianza. El resultado superó mis expectativas. Recuperé mi silueta y mi autoestima.",
        "author": { "@type": "Person", "name": "María Fernanda López" },
        "itemReviewed": {
          "@type": "MedicalBusiness",
          "@id": "https://www.tiffanyesthetic.com/#business",
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5",
        },
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
