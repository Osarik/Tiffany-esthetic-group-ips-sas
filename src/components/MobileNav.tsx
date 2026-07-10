"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        ref={btnRef}
        onClick={() => setOpen(!open)}
        className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
      >
        <div className="w-5 flex flex-col gap-1">
          <span
            className={`block h-0.5 bg-text-dark rounded-full transition-all duration-300 ${open ? "rotate-45 translate-y-[3px]" : ""}`}
          />
          <span
            className={`block h-0.5 bg-text-dark rounded-full transition-all duration-300 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 bg-text-dark rounded-full transition-all duration-300 ${open ? "-rotate-45 -translate-y-[3px]" : ""}`}
          />
        </div>
      </button>

      {mounted && createPortal(
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-30 bg-white flex flex-col items-center justify-center gap-8"
            >
              <Link
                href="/servicios"
                onClick={() => setOpen(false)}
                className="text-2xl font-body font-semibold text-text-main/75 hover:text-primary transition-colors no-underline"
              >
                Servicios
              </Link>
              <Link
                href="/instalaciones"
                onClick={() => setOpen(false)}
                className="text-2xl font-body font-semibold text-text-main/75 hover:text-primary transition-colors no-underline"
              >
                Instalaciones
              </Link>
              <Link
                href="/equipo"
                onClick={() => setOpen(false)}
                className="text-2xl font-body font-semibold text-text-main/75 hover:text-primary transition-colors no-underline"
              >
                Equipo
              </Link>
              <Link
                href="/resultados"
                onClick={() => setOpen(false)}
                className="text-2xl font-body font-semibold text-text-main/75 hover:text-primary transition-colors no-underline"
              >
                Resultados
              </Link>
              <Link
                href="/preguntas-frecuentes"
                onClick={() => setOpen(false)}
                className="text-2xl font-body font-semibold text-text-main/75 hover:text-primary transition-colors no-underline"
              >
                FAQ
              </Link>
              <a
                href="https://wa.me/573XXXXXXXXX?text=Hola, quiero agendar una valoración."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="inline-flex items-center border-2 border-primary text-primary-dark font-body font-bold px-6 py-3 rounded-full hover:bg-primary hover:text-white transition-all duration-300 no-underline text-lg"
              >
                Agenda tu valoración
              </a>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
