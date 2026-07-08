"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const PHONE = "573202703522";
const WHATSAPP_URL = `https://wa.me/${PHONE}?text=${encodeURIComponent(
  "Hola, me gustaría recibir asesoría para un procedimiento quirúrgico."
)}`;

const TIFFANY_AVATAR =
  "https://res.cloudinary.com/dodfyfani/image/upload/v1783484890/fee9d6af-d031-488a-8c4f-bb978a7fab63.png";

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasNotification, setHasNotification] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const notificationTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const autoOpenTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    notificationTimer.current = setTimeout(() => {
      setHasNotification(true);
    }, 15000);

    autoOpenTimer.current = setTimeout(() => {
      setHasNotification(false);
      setIsOpen(true);
    }, 20000);

    return () => {
      if (notificationTimer.current) clearTimeout(notificationTimer.current);
      if (autoOpenTimer.current) clearTimeout(autoOpenTimer.current);
    };
  }, []);

  const cancelTimers = () => {
    if (notificationTimer.current) {
      clearTimeout(notificationTimer.current);
      notificationTimer.current = null;
    }
    if (autoOpenTimer.current) {
      clearTimeout(autoOpenTimer.current);
      autoOpenTimer.current = null;
    }
  };

  const toggleChat = () => {
    cancelTimers();
    setHasNotification(false);
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        popupRef.current &&
        !popupRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={popupRef}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="w-[340px] md:w-[380px] bg-clinic-bg rounded-2xl shadow-2xl border border-primary/10 overflow-hidden origin-bottom-right"
          >
            <div className="bg-primary px-5 py-4 flex items-center gap-3">
              <img
                src={TIFFANY_AVATAR}
                alt="Tiffany"
                className="w-10 h-10 rounded-full object-cover border-2 border-white/30"
              />
              <div className="flex-1">
                <h3 className="font-heading font-bold text-white text-sm">
                  Tiffany Esthetic Group
                </h3>
                <p className="text-white/70 text-[11px] font-body">
                  Asistente virtual
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Cerrar chat"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-5">
              <div className="flex items-start gap-3 mb-5">
                <img
                  src={TIFFANY_AVATAR}
                  alt="Tiffany"
                  className="w-8 h-8 rounded-full object-cover mt-1 flex-shrink-0"
                />
                <div className="bg-primary-soft rounded-2xl rounded-tl-sm px-4 py-3.5 text-sm font-body text-text-main leading-relaxed">
                  Hola, mi nombre es Tiffany. ¿Deseas que asigne un asesor para
                  tu procedimiento?
                </div>
              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-primary text-white font-body font-bold text-sm py-3.5 px-6 rounded-xl hover:bg-primary-dark active:scale-[0.98] transition-all duration-300 shadow-lg shadow-primary/25"
              >
                Sí, quiero asesoría
                <ArrowRight size={18} />
              </a>

              <p className="text-[10px] text-silver text-center mt-3 font-body">
                La asesoría se realizará vía WhatsApp
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative">
        {hasNotification && (
          <>
            <span className="absolute -top-1 -right-1 z-10 w-5 h-5 rounded-full bg-red-500 text-white text-[11px] font-body font-bold flex items-center justify-center shadow-lg">
              1
            </span>
            <span className="absolute inset-0 rounded-full bg-primary/30 animate-ping" />
          </>
        )}
        <button
          onClick={toggleChat}
          className={cn(
            "relative w-14 h-14 rounded-full bg-primary text-white shadow-xl hover:bg-primary-dark hover:shadow-2xl active:scale-95 transition-all duration-300 flex items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
            hasNotification ? "animate-bounce-subtle scale-110" : "animate-bounce-subtle"
          )}
          aria-label={isOpen ? "Cerrar chat" : "Abrir chat"}
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </button>
      </div>
    </div>
  );
}
