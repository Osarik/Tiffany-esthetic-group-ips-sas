"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";

const benefits = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Tecnología de Punta",
    description:
      "Utilizamos equipos de última generación certificados internacionalmente para garantizar procedimientos seguros y resultados precisos.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "Especialistas Certificados",
    description:
      "Nuestro equipo médico cuenta con certificaciones nacionales e internacionales en cirugía plástica y medicina estética.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Resultados Naturales",
    description:
      "Creemos en realzar tu belleza natural. Cada procedimiento es personalizado para lograr resultados armónicos que respeten tu esencia.",
  },
];

export default function Benefits() {
  return (
    <Section dark id="beneficios">
      <div className="text-center mb-16">
        <span className="text-primary font-body font-semibold text-sm tracking-widest uppercase">
          ¿Por qué elegirnos?
        </span>
        <Heading as="h2" className="mt-3">
          Tu confianza es nuestra prioridad
        </Heading>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {benefits.map((benefit, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-silver/20"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              {benefit.icon}
            </div>
            <h3 className="text-xl font-heading font-bold text-text-dark mb-3">
              {benefit.title}
            </h3>
            <p className="text-text-main font-body leading-relaxed">
              {benefit.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
