'use client';

import React from 'react';
import { ZoomParallax } from '@/components/ui/zoom-parallax';
import { IdleScrollHint } from '@/components/ui/IdleScrollHint';
import { cn } from '@/lib/utils';

const images = [
  { src: '/images/13.webp', alt: 'Sala de cirugía' },
  { src: '/images/19.webp', alt: 'Área de recuperación' },
  { src: '/images/23.webp', alt: 'Consultorio médico' },
  { src: '/images/22.webp', alt: 'Sala de espera' },
  { src: '/images/11.webp', alt: 'Equipamiento de última generación' },
  { src: '/images/8.webp', alt: 'Recepción' },
  { src: '/images/6.webp', alt: 'Instrumental quirúrgico' },
];

export default function Installations() {
  const sectionRef = React.useRef<HTMLElement | null>(null);

  return (
    <section id="instalaciones" ref={sectionRef} className="relative w-full">
      <IdleScrollHint rootRef={sectionRef} />
      <div className="relative flex min-h-[60vh] items-center justify-center px-4">
        <div
          aria-hidden="true"
          className={cn(
            'pointer-events-none absolute -top-1/2 left-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 rounded-full',
            'bg-[radial-gradient(ellipse_at_center,rgba(47,167,156,0.12),transparent_50%)]',
            'blur-[60px]',
          )}
        />
        <div className="text-center max-w-3xl">
          <span className="text-primary font-body font-semibold text-sm tracking-widest uppercase">
            Instalaciones
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-text-dark mt-4 leading-tight">
            Espacios diseñados para tu{' '}
            <span className="text-primary">seguridad</span>
          </h2>
          <p className="mt-6 text-text-main/80 font-body text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Contamos con tres salas de cirugía, área de recuperación con enfermería
            permanente, farmacia habilitada y coordinación quirúrgica las 24 horas.
          </p>
        </div>
      </div>

      <ZoomParallax images={images} />
    </section>
  );
}
