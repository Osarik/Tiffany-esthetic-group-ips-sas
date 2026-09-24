"use client";

import { motion } from "framer-motion";
import Heading from "@/components/ui/Heading";
import Button from "@/components/ui/Button";
import HeroBackground from "@/components/ui/hero-background";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <HeroBackground />

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          >
            <span className="inline-block text-white/70 font-body font-semibold text-sm tracking-widest uppercase mb-4">
              Cirugía Plástica & Servicios Quirúrgicos
            </span>
            <Heading as="h1" className="mb-6 !text-white">
              Tiffany Esthetic Group{" "}
              <span className="text-primary">IPS SAS</span>
            </Heading>
            <p className="text-base md:text-lg text-white/60 font-body -mt-4 mb-6">
              Cirugía Plástica y Procedimientos Estéticos en Cali
            </p>
            <p className="text-lg md:text-xl text-white/80 font-body leading-relaxed mb-8 max-w-lg">
              Somos una institución habilitada por la Secretaría de Salud, con
              salas de cirugía, área de recuperación, farmacia y personal
              calificado para acompañar procedimientos plásticos y estéticos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() =>
                  window.open(
                    "https://wa.me/573202703522?text=Hola, quiero agendar una valoración.",
                    "_blank"
                  )
                }
              >
                <WhatsAppIcon className="w-5 h-5" />
                Agenda tu valoración
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="!border-white !text-white hover:!bg-white hover:!text-text-dark"
                onClick={() => {
                  document
                    .getElementById("servicios")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Ver servicios
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-10 text-sm text-white/60">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                3 salas de cirugía
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Farmacia habilitada
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
          </motion.div>
        </div>
      </div>
    </section>
  );
}
