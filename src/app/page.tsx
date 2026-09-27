import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Benefits from "@/components/sections/Benefits";
import Certifications from "@/components/sections/Certifications";
import Services from "@/components/sections/Services";
import BeforeAfter from "@/components/sections/BeforeAfter";
import Installations from "@/components/sections/Installations";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import Team from "@/components/sections/Team";
import ReTHUS from "@/components/sections/ReTHUS";
import FAQs from "@/components/sections/FAQs";
import FinalCTA from "@/components/sections/FinalCTA";
import Map from "@/components/sections/Map";
import { faqs } from "@/data/faqs";
import { testimonialsData } from "@/data/testimonials";

const siteUrl = "https://www.clinicatiffany.com";

export const metadata: Metadata = {
  other: {
    "msvalidate.01": "EA7A4077E8463A4C5B79E016A68F1266",
  },
};

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "Tiffany Esthetic Group Ips SAS - Cirugía Plástica en Cali",
      description:
        "Clínica boutique de cirugía plástica y estética en Cali, Colombia. Habilitada por la Secretaría de Salud. Especialistas en lipoescultura, rinoplastia, blefaroplastia y más.",
      inLanguage: "es",
      medicalAudience: "Patient",
      isPartOf: { "@id": `${siteUrl}/#website` },
      mainEntityOfPage: `${siteUrl}`,
      about: { "@id": `${siteUrl}/#business` },
      primaryImageOfPage: `${siteUrl}/images/schema/25-16x9.webp`,
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      url: siteUrl,
      isPartOf: { "@id": `${siteUrl}/#webpage` },
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
    ...testimonialsData.reviews.map((review) => ({
      "@type": "Review",
      "@id": `${siteUrl}/#review-${review.id}`,
      itemReviewed: { "@id": `${siteUrl}/#business` },
      author: { "@type": "Person", name: review.name },
      reviewBody: review.text,
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating,
        bestRating: 5,
      },
    })),
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <Hero />
      <Benefits />
      <Certifications />
      <Services />
      <BeforeAfter />
      <Installations />
      <Stats />
      <Testimonials />
      <Team />
      <ReTHUS />
      <FAQs />
      <FinalCTA />
      <Map />
    </>
  );
}
