'use client';

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

const inputClass =
  "w-full rounded-xl border border-[#2FA79C]/20 bg-white px-4 py-3 text-sm font-body text-[#223231] placeholder:text-[#223231]/40 focus:border-[#2FA79C] focus:ring-2 focus:ring-[#2FA79C]/20 focus:outline-none transition-all duration-300";

const labelClass = "block text-sm font-body font-semibold text-[#223231] mb-1.5";

const types = [
  { value: "complaint", label: "Queja" },
  { value: "claim", label: "Reclamo" },
  { value: "suggestion", label: "Sugerencia" },
  { value: "compliment", label: "Felicitación" },
];

const relations = [
  { value: "paciente", label: "Paciente" },
  { value: "familiar", label: "Familiar del paciente" },
  { value: "autorizado", label: "Autorizado" },
  { value: "otro", label: "Otro" },
];

export default function ComplaintForm() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSending(true);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/quejas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!json.ok) throw new Error(json.error || "Error al enviar");
      setSent(true);
    } catch (err: any) {
      setError(err.message || "Error de conexión. Intenta de nuevo.");
    } finally {
      setSending(false);
    }
  };

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16"
      >
        <div className="w-16 h-16 rounded-full bg-[#2FA79C]/10 flex items-center justify-center mx-auto mb-5">
          <svg className="w-8 h-8 text-[#2FA79C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="font-heading font-bold text-2xl text-[#223231]">Recibimos tu {types.find(t => t.value === "complaint")?.label || "mensaje"}</h3>
        <p className="text-[#223231]/60 font-body mt-2 max-w-md mx-auto">
          Daremos respuesta dentro de los términos establecidos por la normativa colombiana.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="sm:col-span-2">
          <label htmlFor="name" className={labelClass}>Nombre completo *</label>
          <input id="name" name="name" required className={inputClass} placeholder="Como aparece en tu documento" />
        </div>
        <div>
          <label htmlFor="docType" className={labelClass}>Tipo de documento</label>
          <select id="docType" name="docType" className={inputClass} defaultValue="CC">
            <option value="CC">Cédula de Ciudadanía</option>
            <option value="CE">Cédula de Extranjería</option>
            <option value="TI">Tarjeta de Identidad</option>
            <option value="PA">Pasaporte</option>
          </select>
        </div>
        <div>
          <label htmlFor="docNumber" className={labelClass}>Número de documento</label>
          <input id="docNumber" name="docNumber" className={inputClass} placeholder="Sin puntos ni guiones" />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>Correo electrónico *</label>
          <input id="email" name="email" type="email" required className={inputClass} placeholder="tucorreo@ejemplo.com" />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>Teléfono</label>
          <input id="phone" name="phone" type="tel" className={inputClass} placeholder="300 123 4567" />
        </div>
        <div>
          <label htmlFor="type" className={labelClass}>Tipo *</label>
          <select id="type" name="type" required className={inputClass}>
            {types.map((t) => (
              <option key={t.value} value={t.value}>{t.label}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="relation" className={labelClass}>Relación con el paciente</label>
          <select id="relation" name="relation" className={inputClass} defaultValue="paciente">
            {relations.map((r) => (
              <option key={r.value} value={r.value}>{r.label}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="description" className={labelClass}>Descripción detallada *</label>
        <textarea
          id="description"
          name="description"
          required
          rows={5}
          className={`${inputClass} resize-y min-h-[120px]`}
          placeholder="Describe de forma clara y completa tu queja, reclamo, sugerencia o felicitación. Incluye fechas, nombres y cualquier información relevante."
        />
      </div>

      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 w-4 h-4 rounded border-[#2FA79C]/30 text-[#2FA79C] focus:ring-[#2FA79C]/30 accent-[#2FA79C]"
        />
        <span className="text-xs text-[#223231]/60 font-body leading-relaxed">
          Autorizo el tratamiento de mis datos personales de acuerdo con la Ley 1581 de 2012 y las políticas de protección de datos de Tiffany Esthetic Group IPS. *
        </span>
      </label>

      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-red-600 text-sm font-body bg-red-50 rounded-xl px-4 py-3"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>

      <button
        type="submit"
        disabled={sending}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#2FA79C] text-white font-body font-bold px-10 py-3.5 rounded-full hover:bg-[#1B6E66] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 text-base shadow-lg shadow-[#2FA79C]/25"
      >
        {sending ? (
          <>
            <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-30" />
              <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            </svg>
            Enviando...
          </>
        ) : (
          <>
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 2L11 13" /><path d="M22 2l-7 20-4-9-9-4 20-7z" />
            </svg>
            Enviar
          </>
        )}
      </button>

      <p className="text-xs text-[#223231]/40 font-body">
        * Campos obligatorios. La IPS dará respuesta dentro de los 15 días hábiles siguientes a la recepción, de acuerdo con la Ley 1480 de 2011 y circulares de la Superintendencia Nacional de Salud.
      </p>
    </form>
  );
}
