"use client";

import { motion } from "framer-motion";
import Heading from "@/components/ui/Heading";
import Button from "@/components/ui/Button";

export default function FinalCTA() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary/5 via-white to-secondary/5 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-block text-primary font-body font-semibold text-sm tracking-widest uppercase mb-4">
            Agenda tu valoración
          </span>
          <Heading as="h2" className="mb-6">
            Hablemos de tu procedimiento
          </Heading>
          <p className="text-lg text-text-main font-body mb-10 max-w-xl mx-auto">
            Comunícate con nuestro equipo para recibir información sobre
            procedimientos, disponibilidad de salas de cirugía y acompañamiento
            quirúrgico.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              variant="primary"
              size="lg"
              onClick={() =>
                window.open(
                  "https://wa.me/573202703522?text=Hola, quiero información sobre los servicios de Tiffany Esthetic Group.",
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
              Escribir por WhatsApp
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => (window.location.href = "tel:+573202703522")}
            >
              Llámanos ahora
            </Button>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 text-left max-w-2xl mx-auto">
            <a href="https://wa.me/573202703522" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 no-underline group">
              <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
              </svg>
              <div>
                <p className="font-body font-semibold text-text-dark text-sm group-hover:text-primary transition-colors">
                  WhatsApp
                </p>
                <p className="text-sm text-text-main/70 font-body">
                  +57 320 2703522
                </p>
              </div>
            </a>
            <a href="tel:+573202703522" className="flex items-start gap-3 no-underline group">
              <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
              <div>
                <p className="font-body font-semibold text-text-dark text-sm group-hover:text-primary transition-colors">
                  Teléfono
                </p>
                <p className="text-sm text-text-main/70 font-body">
                  +57 320 2703522
                </p>
              </div>
            </a>
            <a href="https://www.google.com/maps/place/Tiffany+Esthetic+Group+Ips+SAS/@3.3811893,-76.5383704,17z/data=!4m6!3m5!1s0x8e30a1a218ba2a73:0x9e0b5db8cc3e4ffa!8m2!3d3.3811893!4d-76.5357955!16s%2Fg%2F11s9pzn3td?entry=ttu&g_ep=EgoyMDI2MDcwNi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 no-underline group">
              <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div>
                <p className="font-body font-semibold text-text-dark text-sm group-hover:text-primary transition-colors">
                  Ubicación
                </p>
                <p className="text-sm text-text-main/70 font-body">
                  13a1-25, Cra 85c, Comuna 17, Cali
                </p>
              </div>
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
