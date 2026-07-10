export default function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["MedicalOrganization", "LocalBusiness"],
        "@id": "https://www.tiffanyesthetic.com/#business",
        additionalType: "https://schema.org/MedicalClinic",
        name: "Tiffany Esthetic Group Ips SAS",
        description:
          "Institución habilitada por la Secretaría de Salud con salas de cirugía, área de recuperación, farmacia habilitada y personal calificado para procedimientos de cirugía plástica y estética en Cali, Colombia.",
        url: "https://www.tiffanyesthetic.com",
        telephone: "+57-3202703522",
        email: "tiffanyestheticgroup@gmail.com",
        medicalSpecialty: ["PlasticSurgery", "CosmeticSurgery"],
        priceRange: "$$$",
        image: "https://www.tiffanyesthetic.com/icon.svg",
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
          "https://wa.me/573202703522",
        ],
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
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Servicios de Cirugía Plástica y Estética",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Lipoescultura con Lipoinyección Glútea",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Liposucción",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Abdominoplastia",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Mamoplastia (Aumento, Reducción, Elevación)",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Rinoplastia",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Blefaroplastia",
              },
            },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Lifting Facial",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Lipectomía",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Liposucción + Pexia Mamaria",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Liposucción + Aumento Mamario",
            },
          },
        ],
      },
      },
      {
        "@type": "MedicalWebPage",
        "@id": "https://www.tiffanyesthetic.com/#webpage",
        url: "https://www.tiffanyesthetic.com",
        name: "Tiffany Esthetic Group Ips SAS - Cirugía Plástica en Cali",
        description:
          "Clínica boutique de cirugía plástica y estética en Cali, Colombia. Habilitada por la Secretaría de Salud. Especialistas en lipoescultura, rinoplastia, blefaroplastia y más.",
        about: { "@id": "https://www.tiffanyesthetic.com/#business" },
      },
      {
        "@type": "MedicalWebPage",
        "@id": "https://www.tiffanyesthetic.com/resultados/#webpage",
        url: "https://www.tiffanyesthetic.com/resultados",
        name: "Resultados Reales de Cirugía Plástica | Tiffany Esthetic Group IPS",
        description:
          "Galería de resultados quirúrgicos reales en Cali, Colombia. Antes y después de lipoescultura, rinoplastia, blefaroplastia, abdominoplastia y más procedimientos estéticos.",
        about: { "@id": "https://www.tiffanyesthetic.com/#business" },
        mainContentOfPage: {
          "@type": "ImageGallery",
          about: { "@id": "https://www.tiffanyesthetic.com/#business" },
        },
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
              text: "Realizamos lipoescultura con lipoinyección glútea, liposucción, lipectomía, pexia mamaria, rinoplastia, blefaroplastia y lifting facial.",
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
          {
            "@type": "Question",
            name: "¿Cuál es el horario de atención?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Lunes a viernes de 8:00 a. m. a 5:00 p. m. Sábados de 8:00 a. m. a 12:00 p. m. Domingos cerrado.",
            },
          },
          {
            "@type": "Question",
            name: "¿Dónde están ubicados?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Estamos ubicados en la Cra 85c # 13a1-25, Comuna 17, Cali, Valle del Cauca, Colombia.",
            },
          },
        ],
      },
      {
        "@type": "Review",
        "@id": "https://www.tiffanyesthetic.com/#review-1",
        itemReviewed: { "@id": "https://www.tiffanyesthetic.com/#business" },
        author: { "@type": "Person", name: "María Fernanda López" },
        reviewBody:
          "Desde la primera consulta sentí total confianza. El resultado superó mis expectativas. Recuperé mi silueta y mi autoestima.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: 5,
          bestRating: 5,
        },
      },
      {
        "@type": "Review",
        "@id": "https://www.tiffanyesthetic.com/#review-2",
        itemReviewed: { "@id": "https://www.tiffanyesthetic.com/#business" },
        author: { "@type": "Person", name: "Carolina Méndez" },
        reviewBody:
          "Un antes y después increíble. El equipo fue muy atento y el proceso fue mucho más cómodo de lo que imaginaba.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: 5,
          bestRating: 5,
        },
      },
      {
        "@type": "Review",
        "@id": "https://www.tiffanyesthetic.com/#review-3",
        itemReviewed: { "@id": "https://www.tiffanyesthetic.com/#business" },
        author: { "@type": "Person", name: "Andrea Restrepo" },
        reviewBody:
          "Resultados naturales y muy bien logrados. Exactamente lo que quería: verme mejor sin perder mi esencia.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: 5,
          bestRating: 5,
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
