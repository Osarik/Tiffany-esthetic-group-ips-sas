"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";

export default function ReTHUS() {
  return (
    <Section dark id="rethus">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="space-y-5"
        >
          <span className="text-primary font-body font-semibold text-sm tracking-widest uppercase">
            Transparencia
          </span>
          <Heading as="h2" className="!text-left">
            Verifica a tu cirujano
          </Heading>
          <p className="text-text-main/80 font-body text-base leading-relaxed">
            Todos nuestros profesionales se encuentran registrados en el
            Registro de Talento Humano en Salud — ReTHUS. Puedes validar su
            identidad, títulos y antecedentes de forma rápida y gratuita
            directamente en la plataforma oficial del Gobierno de Colombia.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="https://web.sispro.gov.co/THS/Cliente/ConsultasPublicas/ConsultaPublicaDeTHxIdentificacion.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary hover:bg-primary-dark text-white font-body font-semibold text-sm px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4 shrink-0"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>
              Validar profesional en ReTHUS
            </a>

            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-I4ETyMex9RZW4RQeZoFbtoet0JIhVAC-AiRjQAwFdw&s"
              alt="ReTHUS - Registro de Talento Humano en Salud"
              className="w-20 h-[50px] object-contain opacity-60"
              loading="lazy"
            />
          </div>

          <p className="text-text-main/50 font-body text-xs leading-relaxed mt-2">
            Al hacer clic serás redirigido al portal oficial del Ministerio de
            Salud y Protección Social. Ingresa el número de identificación del
            profesional para consultar su registro.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.15 }}
          className="relative"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/10">
            <div className="flex flex-col items-center text-center gap-6">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  className="w-10 h-10 text-primary"
                  aria-hidden="true"
                >
                  <rect
                    x="8"
                    y="18"
                    width="32"
                    height="24"
                    rx="4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx="24"
                    cy="30"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M18 18v-4a6 6 0 0112 0v4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M20 38l2-2M24 38l2-2M28 38l2-2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <h3 className="font-heading font-bold text-xl text-text-main">
                ¿Qué puedes consultar?
              </h3>

              <ul className="space-y-3 text-left w-full">
                {[
                  "Identificación y datos básicos del profesional",
                  "Títulos universitarios y especializaciones",
                  "Registro vigente ante la autoridad sanitaria",
                  "Antecedentes disciplinarios y fiscales",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-text-main/70 text-sm">
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4 h-4 shrink-0 mt-0.5 text-primary"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-2 text-xs text-text-main/40 pt-2 border-t border-white/10 w-full justify-center">
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
                Fuente oficial: Ministerio de Salud y Protección Social
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
