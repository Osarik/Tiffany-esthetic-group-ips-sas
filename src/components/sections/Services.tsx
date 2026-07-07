"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Button from "@/components/ui/Button";
import { services } from "@/data/services";

const categoryIcons: Record<string, React.ReactNode> = {
  "Cirugía Facial": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
      <circle cx="9" cy="10" r="1" fill="currentColor" />
      <circle cx="15" cy="10" r="1" fill="currentColor" />
      <path d="M8 15c1.5 1.5 4.5 1.5 6 0" />
    </svg>
  ),
  "Cirugía Corporal": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
      <path d="M12 8v8" />
      <path d="M8 12h8" />
    </svg>
  ),
  "Medicina Estética": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  "Tratamientos Corporales": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
};

export default function Services() {
  return (
    <Section id="servicios">
      <div className="text-center mb-16">
        <span className="text-primary font-body font-semibold text-sm tracking-widest uppercase">
          Nuestros Servicios
        </span>
        <Heading as="h2" className="mt-3">
          Procedimientos personalizados para ti
        </Heading>
        <p className="mt-4 text-text-main font-body max-w-2xl mx-auto">
          Ofrecemos una amplia gama de procedimientos quirúrgicos y estéticos
          diseñados para realzar tu belleza natural.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, i) => (
          <motion.article
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="group relative bg-white rounded-2xl p-6 border border-silver/20 hover:border-primary/30 shadow-sm hover:shadow-lg transition-all duration-300"
          >
            {service.popular && (
              <span className="absolute top-3 right-3 bg-accent text-white text-[10px] font-body font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                Popular
              </span>
            )}
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              {categoryIcons[service.category] || categoryIcons["Medicina Estética"]}
            </div>
            <span className="text-[11px] font-body font-semibold text-primary uppercase tracking-wider">
              {service.category}
            </span>
            <h3 className="text-lg font-heading font-bold text-text-dark mt-1 mb-2">
              {service.title}
            </h3>
            <p className="text-sm text-text-main font-body leading-relaxed">
              {service.description}
            </p>
          </motion.article>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button
          variant="primary"
          onClick={() =>
            window.open(
              "https://wa.me/573XXXXXXXXX?text=¡Hola! Quiero información sobre los procedimientos.",
              "_blank"
            )
          }
        >
          Consulta gratis tu tratamiento ideal
        </Button>
      </div>
    </Section>
  );
}
