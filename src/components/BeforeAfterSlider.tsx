"use client";

import {
  useRef,
  useState,
  useCallback,
  useEffect,
} from "react";
import Image from "next/image";

const SAMPLE_BEFORE =
  "/images/lipo-protesis-aumento/LLA1.webp";
const SAMPLE_AFTER =
  "/images/lipo-protesis-aumento/LLA1r.webp";

interface ComparisonSrc {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel: string;
  afterLabel: string;
  alt: string;
}

function ComparisonView({
  beforeSrc,
  afterSrc,
  beforeLabel,
  afterLabel,
  alt,
  sizes,
  roundedClass = "rounded-2xl",
  viewportSized = false,
  showExpandButton = false,
  onExpand,
}: ComparisonSrc & {
  sizes: string;
  roundedClass?: string;
  viewportSized?: boolean;
  showExpandButton?: boolean;
  onExpand?: () => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const downXRef = useRef(0);
  const movedRef = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    if (Math.abs(clientX - downXRef.current) > 6) movedRef.current = true;
    setPosition((x / rect.width) * 100);
  }, []);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      downXRef.current = e.clientX;
      movedRef.current = false;
      setIsDragging(true);
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      downXRef.current = e.touches[0].clientX;
      movedRef.current = false;
      setIsDragging(true);
      updatePosition(e.touches[0].clientX);
    },
    [updatePosition]
  );

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => updatePosition(e.clientX);
    const handleTouchMove = (e: TouchEvent) =>
      updatePosition(e.touches[0].clientX);
    const handleUp = () => setIsDragging(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleUp);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleUp);
    };
  }, [isDragging, updatePosition]);

  const handleClickCapture = useCallback(() => {
    if (movedRef.current || isDragging) {
      movedRef.current = false;
      return;
    }
    onExpand?.();
  }, [isDragging, onExpand]);

  const optimized = (src: string) => ({
    src,
    unoptimized: src.startsWith("http"),
  });

  return (
    <div
      ref={containerRef}
      className={`relative ${viewportSized ? "" : "w-full"} ${roundedClass} overflow-hidden select-none cursor-ew-resize bg-silver/30`}
      style={{
        aspectRatio: "3 / 4",
        ...(viewportSized
          ? { width: "min(90vw, 56.25vh)", maxWidth: "100%" }
          : {}),
      }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onClickCapture={handleClickCapture}
      role="slider"
      aria-label={`Comparación antes y después - ${alt}`}
      aria-valuenow={Math.round(position)}
      aria-valuemin={0}
      aria-valuemax={100}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") setPosition((p) => Math.min(p + 2, 100));
        if (e.key === "ArrowLeft") setPosition((p) => Math.max(p - 2, 0));
        if ((e.key === "Enter" || e.key === " ") && onExpand) {
          e.preventDefault();
          onExpand();
        }
      }}
    >
      <Image
        {...optimized(afterSrc)}
        alt={`${alt} - ${afterLabel}`}
        fill
        sizes={sizes}
        quality={85}
        className="absolute inset-0 object-cover pointer-events-none"
      />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          {...optimized(beforeSrc)}
          alt={`${alt} - ${beforeLabel}`}
          fill
          sizes={sizes}
          quality={85}
          className="absolute inset-0 object-cover pointer-events-none"
        />
      </div>
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg pointer-events-none"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      />
      <div
        className="absolute top-1/2 w-10 h-10 bg-white rounded-full shadow-xl pointer-events-none flex items-center justify-center -translate-y-1/2 border-2 border-primary"
        style={{ left: `${position}%`, transform: "translate(-50%, -50%)" }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="text-primary">
          <path d="M6 3L2 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 3L14 8L10 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <span className="absolute top-3 left-3 bg-black/50 backdrop-blur-sm text-white text-xs font-body font-semibold px-3 py-1 rounded-full">
        {beforeLabel}
      </span>
      <span className="absolute top-3 right-3 bg-primary/80 backdrop-blur-sm text-white text-xs font-body font-semibold px-3 py-1 rounded-full">
        {afterLabel}
      </span>
      {showExpandButton && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onExpand?.();
          }}
          onMouseDown={(e) => e.stopPropagation()}
          onTouchStart={(e) => e.stopPropagation()}
          className="absolute bottom-3 right-3 z-20 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 active:scale-95 transition-all flex items-center justify-center cursor-pointer"
          aria-label={`Ampliar comparación de ${alt}`}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="11" cy="11" r="7" />
            <line x1="21" y1="21" x2="16.5" y2="16.5" />
            <polyline points="11 8 11 14 8 11 14 11" />
          </svg>
        </button>
      )}
    </div>
  );
}

function Lightbox({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Comparación ampliada antes y después"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
        aria-label="Cerrar vista ampliada"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
      <div
        className="flex flex-col items-center justify-center max-h-full min-w-0"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

export default function BeforeAfterSlider({
  beforeSrc = SAMPLE_BEFORE,
  afterSrc = SAMPLE_AFTER,
  beforeLabel = "Antes",
  afterLabel = "Después",
  alt = "Antes y después",
}: Partial<ComparisonSrc>) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const openLightbox = useCallback(() => setLightboxOpen(true), []);
  const closeLightbox = useCallback(() => setLightboxOpen(false), []);

  return (
    <>
      <div className="w-full max-w-[340px] mx-auto">
        <ComparisonView
          beforeSrc={beforeSrc}
          afterSrc={afterSrc}
          beforeLabel={beforeLabel}
          afterLabel={afterLabel}
          alt={alt}
          sizes="(max-width: 768px) 80vw, 340px"
          showExpandButton
          onExpand={openLightbox}
        />
      </div>

      <Lightbox open={lightboxOpen} onClose={closeLightbox}>
        <ComparisonView
          beforeSrc={beforeSrc}
          afterSrc={afterSrc}
          beforeLabel={beforeLabel}
          afterLabel={afterLabel}
          alt={alt}
          sizes="min(90vw, 56.25vh)"
          roundedClass="rounded-xl"
          viewportSized
        />
        <p className="mt-3 text-center text-xs text-white/60 font-body">
          Desliza para comparar · Esc o clic fuera para cerrar
        </p>
      </Lightbox>
    </>
  );
}
