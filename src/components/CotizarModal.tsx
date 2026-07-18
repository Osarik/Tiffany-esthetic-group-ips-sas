"use client";

import { useState, useEffect, useCallback } from "react";
import { services } from "@/data/services";

interface CotizarModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProcedure: string;
}

const QUIRFANO_CATEGORY = "Alquiler de Quirófanos";

export default function CotizarModal({ isOpen, onClose, initialProcedure }: CotizarModalProps) {
  const [doctorName, setDoctorName] = useState("");
  const [procedures, setProcedures] = useState<string[]>([initialProcedure]);
  const [details, setDetails] = useState("");

  const availableProcedures = services
    .filter((s) => s.category === QUIRFANO_CATEGORY)
    .map((s) => s.title)
    .filter((v, i, a) => a.indexOf(v) === i);

  useEffect(() => {
    if (isOpen) {
      setDoctorName("");
      setProcedures([initialProcedure]);
      setDetails("");
    }
  }, [isOpen, initialProcedure]);

  const addProcedure = () => {
    if (procedures.length < 3) {
      setProcedures([...procedures, ""]);
    }
  };

  const removeProcedure = (index: number) => {
    if (procedures.length > 1) {
      setProcedures(procedures.filter((_, i) => i !== index));
    }
  };

  const updateProcedure = (index: number, value: string) => {
    const updated = [...procedures];
    updated[index] = value;
    setProcedures(updated);
  };

  const handleSubmit = useCallback(() => {
    const procList = procedures.filter(Boolean).map((p, i) => `${i + 1}. ${p}`).join("\n");
    const message = [
      "Hola, buen día deseo cotizar el quirófano con las siguientes indicaciones:",
      "",
      `*Médico:* ${doctorName || "(no especificado)"}`,
      "",
      "*Procedimientos:*",
      procList,
    ];
    if (details.trim()) {
      message.push("", `*Detalles adicionales:* ${details}`);
    }
    const encoded = encodeURIComponent(message.join("\n"));
    window.open(`https://wa.me/573202703522?text=${encoded}`, "_blank");
    onClose();
  }, [doctorName, procedures, details, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4" onClick={onClose}>
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white z-10 flex items-center justify-between p-6 pb-4 border-b border-silver/10">
          <h3 className="font-heading font-bold text-lg text-text-dark">Cotizar quirófano</h3>
          <button onClick={onClose} className="w-8 h-8 rounded-full bg-silver/10 flex items-center justify-center text-text-main/50 hover:text-text-dark hover:bg-silver/20 transition-colors cursor-pointer" aria-label="Cerrar">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="p-6 space-y-5">
          <div>
            <label className="block text-sm font-body font-semibold text-text-dark mb-1.5">Nombre del médico</label>
            <input
              type="text"
              value={doctorName}
              onChange={(e) => setDoctorName(e.target.value)}
              placeholder="Ingrese el nombre del médico"
              className="w-full px-4 py-2.5 rounded-xl border border-silver/30 bg-white text-sm font-body text-text-dark placeholder:text-text-main/30 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-body font-semibold text-text-dark mb-1.5">Procedimientos a realizar</label>
            <div className="space-y-2.5">
              {procedures.map((proc, i) => (
                <div key={i} className="flex items-center gap-2">
                  <select
                    value={proc}
                    onChange={(e) => updateProcedure(i, e.target.value)}
                    className="flex-1 px-4 py-2.5 rounded-xl border border-silver/30 bg-white text-sm font-body text-text-dark focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 transition-all"
                  >
                    <option value="">Seleccione un procedimiento</option>
                    {availableProcedures.map((title) => (
                      <option key={title} value={title}>{title}</option>
                    ))}
                  </select>
                  {procedures.length > 1 && (
                    <button
                      onClick={() => removeProcedure(i)}
                      className="w-9 h-9 rounded-xl bg-red-50 text-red-400 hover:bg-red-100 hover:text-red-500 flex items-center justify-center transition-colors cursor-pointer shrink-0"
                      aria-label="Eliminar procedimiento"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </button>
                  )}
                </div>
              ))}
            </div>
            {procedures.length < 3 && (
              <button
                onClick={addProcedure}
                className="mt-2.5 flex items-center gap-1.5 text-xs font-body font-semibold text-primary hover:text-primary-dark transition-colors cursor-pointer"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                  <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
                </svg>
                Agregar otro procedimiento ({procedures.length}/3)
              </button>
            )}
          </div>

          <div>
            <label className="block text-sm font-body font-semibold text-text-dark mb-1.5">Detalles adicionales</label>
            <textarea
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Observaciones, requerimientos especiales, etc."
              rows={3}
              className="w-full px-4 py-2.5 rounded-xl border border-silver/30 bg-white text-sm font-body text-text-dark placeholder:text-text-main/30 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 transition-all resize-none"
            />
          </div>
        </div>

        <div className="sticky bottom-0 bg-white border-t border-silver/10 p-6 pt-4 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-2.5 rounded-xl border border-silver/30 text-sm font-body font-semibold text-text-main/60 hover:bg-silver/10 transition-colors cursor-pointer"
          >
            Cancelar
          </button>
          <button
            onClick={handleSubmit}
            className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-[#4A6B8A] to-[#7BA0C4] text-white text-sm font-body font-semibold hover:shadow-lg transition-all cursor-pointer"
          >
            Cotizar por WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}
