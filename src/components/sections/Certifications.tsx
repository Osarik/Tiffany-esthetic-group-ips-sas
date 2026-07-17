"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";

const certs = [
  {
    src: "/images/C1.jpeg",
    title: "Cirugía Plástica y Estética",
    badge: "Servicio habilitado",
    desc: "Nuestra IPS cuenta con habilitación oficial para la prestación de servicios de cirugía plástica y estética, cumpliendo los requisitos técnicos, científicos y de calidad exigidos por la normatividad colombiana.",
  },
  {
    src: "/images/C2.jpeg",
    title: "Seguridad de las Instalaciones",
    badge: "Certificación vigente",
    desc: "Nuestras instalaciones cuentan con certificación vigente en seguridad humana y prevención de incendios, respaldando un entorno seguro para pacientes, acompañantes y personal asistencial.",
  },
  {
    src: "/images/C3.jpeg",
    title: "Servicio Farmacéutico",
    badge: "Atención integral",
    desc: "El servicio farmacéutico habilitado garantiza la adecuada gestión y disponibilidad de medicamentos e insumos durante cada etapa de la atención médica y quirúrgica.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export default function Certifications() {
  const [selected, setSelected] = useState<string | null>(null);

  const close = useCallback(() => setSelected(null), []);

  useEffect(() => {
    if (!selected) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [selected, close]);

  return (
    <Section id="certificaciones">
      <div className="text-center mb-14">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-primary font-body font-semibold text-sm tracking-widest uppercase"
        >
          Certificaciones
        </motion.span>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Heading as="h2" className="mt-3">
            Institución habilitada y certificada
          </Heading>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-text-main font-body max-w-2xl mx-auto"
        >
          Tiffany Esthetic Group IPS SAS opera bajo los más altos estándares
          exigidos por el Ministerio de Salud de Colombia, garantizando
          procedimientos seguros en instalaciones certificadas.
        </motion.p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid md:grid-cols-3 gap-6 md:gap-8"
      >
        {certs.map((cert) => (
          <motion.div
            key={cert.title}
            variants={cardVariants}
            className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-[600] border border-[#2FA79C]/10"
          >
            <button
              onClick={() => setSelected(cert.src)}
              className="relative w-full aspect-[4/3] overflow-hidden bg-[#FBFBF9] cursor-pointer border-none p-0 block text-left"
              aria-label={`Ver ${cert.title}`}
            >
              <img
                src={cert.src}
                alt={cert.title}
                className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-[600]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-[#2FA79C]/0 group-hover:bg-[#2FA79C]/5 transition-colors duration-[600]" />
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-[600] shadow-sm">
                <svg className="w-4 h-4 text-[#223231]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>
            </button>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <svg
                  className="w-5 h-5 text-[#2FA79C] shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <h3 className="font-heading font-bold text-[#223231] text-sm">
                  {cert.title}
                </h3>
              </div>
              <span className="inline-block bg-[#2FA79C]/10 text-[#2FA79C] font-body font-semibold text-[11px] uppercase tracking-wider px-3 py-1 rounded-full mb-3">
                {cert.badge}
              </span>
              <p className="text-[#223231]/65 font-body text-sm leading-relaxed">
                {cert.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={close}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              onClick={close}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md flex items-center justify-center transition-colors border-none cursor-pointer z-10"
              aria-label="Cerrar"
            >
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </motion.button>
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              src={selected}
              alt="Certificación"
              className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
