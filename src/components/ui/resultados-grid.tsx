'use client';
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { items } from "@/components/ui/image-mousetrail-without-component-utils/constant";

type Procedure = {
  name: string;
  slug: string;
  desc: string;
};

type Props = {
  procedures: Procedure[];
};

type GridPos = {
  shape: "circle" | "rect";
  procIndex: number;
};

const gridOrder: (GridPos | "svg")[] = [
  { shape: "circle", procIndex: 0 },
  { shape: "rect", procIndex: 1 },
  { shape: "circle", procIndex: 2 },
  { shape: "rect", procIndex: 3 },
  "svg",
  { shape: "rect", procIndex: 6 },
  { shape: "circle", procIndex: 5 },
  { shape: "rect", procIndex: 4 },
  { shape: "circle", procIndex: 7 },
];

function getGalleryImages(procIndex: number): string[] {
  const pool = items.map((i) => i.url);
  const start = (procIndex * 4) % pool.length;
  const result: string[] = [];
  for (let i = 0; i < 4; i++) {
    result.push(pool[(start + i) % pool.length]);
  }
  return result;
}

export default function ResultadosGrid({ procedures }: Props) {
  const [expanded, setExpanded] = useState<number | null>(null);

  const selected = expanded !== null ? procedures[expanded] : null;
  const galleryImages = useMemo(
    () => (expanded !== null ? getGalleryImages(expanded) : []),
    [expanded],
  );

  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        {expanded === null ? (
          <motion.div
            key="grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            exit={{ opacity: 0, y: 20 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
            }}
            className="grid grid-cols-3 gap-3 md:gap-5 max-w-[520px] md:max-w-[640px] mx-auto"
          >
            {gridOrder.map((item, i) => {
              if (item === "svg") {
                return (
                  <motion.div
                    key="svg-center"
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
                    }}
                    className="relative aspect-square w-full flex items-center justify-center bg-[#FBFBF9] rounded-[14px] overflow-hidden"
                  >
                    <div className="w-[200px] h-[200px] max-w-[80%] max-h-[80%] rounded-full bg-[#2FA79C] flex items-center justify-center flex-col text-white">
                      <span className="font-heading text-[clamp(0.7rem,2.5vw,1.05rem)] tracking-[0.06em] leading-tight text-center">
                        TIFFANY{" "}
                        <b className="font-bold">E.G</b>
                      </span>
                      <span className="font-script text-[clamp(0.8rem,3vw,1.2rem)] leading-none -mt-0.5 text-white/90">
                        ips
                      </span>
                    </div>
                  </motion.div>
                );
              }
              const proc = procedures[item.procIndex];
              const img = items[item.procIndex % items.length];
              return (
                <motion.button
                  key={`proc-${item.procIndex}`}
                  onClick={() => setExpanded(item.procIndex)}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
                  }}
                  className="relative aspect-square w-full overflow-hidden group cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-none bg-white border-[16px] border-primary transition-all duration-300"
                  style={item.shape === "circle" ? { borderRadius: "50%" } : { borderRadius: "14px" }}
                  aria-label={`Ver galería de ${proc.name}`}
                >
                  <img
                    src={img.url}
                    alt={proc.name}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                  <div
                    className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors duration-500"
                    style={item.shape === "circle" ? { borderRadius: "50%" } : { borderRadius: "14px" }}
                  />
                  <span className="absolute inset-0 flex items-center justify-center text-primary group-hover:text-white font-body font-bold text-[11px] md:text-sm text-center px-2 leading-tight transition-colors duration-500">
                    {proc.name}
                  </span>
                </motion.button>
              );
            })}
          </motion.div>
        ) : (
          <motion.div
            key="expanded"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
            className="max-w-[640px] mx-auto"
          >
            <button
              onClick={() => setExpanded(null)}
              className="inline-flex items-center gap-2 text-primary font-body font-semibold text-sm hover:text-primary-dark transition-colors mb-6 border-none bg-transparent cursor-pointer"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="15 18 9 12 15 6" />
              </svg>
              Volver
            </button>

            <div className="mb-6">
              <h3 className="font-heading font-bold text-xl md:text-2xl text-text-dark">
                {selected?.name}
              </h3>
              <p className="mt-2 text-sm md:text-base text-text-main/70 font-body leading-relaxed">
                {selected?.desc}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {galleryImages.map((url, i) => (
                <div
                  key={i}
                  className="relative aspect-square rounded-xl overflow-hidden bg-[#e0dfdf]"
                >
                  <img
                    src={url}
                    alt={`${selected?.name} - resultado ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <a
                href={`https://wa.me/573202703522?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20${encodeURIComponent(selected?.name ?? "")}%20en%20Tiffany%20Esthetic%20Group.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white font-body font-bold px-8 py-3 rounded-full hover:bg-primary-dark transition-all duration-300 text-sm no-underline"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Solicitar información
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
