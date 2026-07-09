"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import { team } from "@/data/team";

export default function Team() {
  return (
    <Section dark id="equipo">
      <div className="text-center mb-16">
        <span className="text-primary font-body font-semibold text-sm tracking-widest uppercase">
          Nuestro Equipo
        </span>
        <Heading as="h2" className="mt-3">
          Profesionales al servicio de tu seguridad
        </Heading>
        <p className="mt-4 text-text-main font-body max-w-2xl mx-auto">
          La atención quirúrgica se apoya en cirujanos plásticos,
          anestesiólogos, instrumentación, circulante de cirugía y enfermería
          recuperadora.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {team.map((member, i) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center group"
          >
            <div className="relative w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden bg-primary/10 shadow-lg">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                {i === 0 ? (
                  <a href="https://cirugiaplastica.org.co/" target="_blank" rel="noopener noreferrer" className="w-full h-full flex items-center justify-center p-6 animate-spin-3d">
                    <img
                      src="https://cirugiaplastica.org.co/wp-content/uploads/2022/07/logo-sccp.png"
                      alt="Logo Sociedad Colombiana de Cirugía Plástica"
                      className="w-full h-full object-contain"
                    />
                  </a>
                ) : i === 1 ? (
                  <a href="https://scare.org.co/" target="_blank" rel="noopener noreferrer" className="w-full h-full flex items-center justify-center p-6 hover:scale-110 transition-transform duration-300">
                    <img
                      src="https://scare.org.co/wp-content/uploads/sociedad-colombiana-de-anestesiologia-y-reanimacion-scare-logo-300x82.avif"
                      alt="Logo Sociedad Colombiana de Anestesiología y Reanimación"
                      className="w-full h-full object-contain"
                    />
                  </a>
                ) : (
                  <svg
                    className="w-16 h-16 text-primary/40"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                  </svg>
                )}
              </div>
            </div>
            <h3 className="text-xl font-heading font-bold text-text-dark">
              {member.name}
            </h3>
            <span className="text-sm font-body font-semibold text-primary block mt-1">
              {member.title}
            </span>
            <p className="text-sm text-text-main font-body mt-3 max-w-xs mx-auto leading-relaxed">
              {member.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
