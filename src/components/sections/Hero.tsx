"use client";

import { motion } from "framer-motion";
import Heading from "@/components/ui/Heading";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

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
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                </svg>
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
