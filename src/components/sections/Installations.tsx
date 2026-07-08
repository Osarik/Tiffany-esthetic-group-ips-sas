'use client';

import React from 'react';
import { ZoomParallax } from '@/components/ui/zoom-parallax';
import { cn } from '@/lib/utils';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
    alt: 'Sala de cirugía',
  },
  {
    src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
    alt: 'Área de recuperación',
  },
  {
    src: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=800&fit=crop&crop=entropy&auto=format&q=80',
    alt: 'Consultorio médico',
  },
  {
    src: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
    alt: 'Sala de espera',
  },
  {
    src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=800&fit=crop&crop=entropy&auto=format&q=80',
    alt: 'Equipamiento de última generación',
  },
  {
    src: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
    alt: 'Recepción',
  },
  {
    src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=800&fit=crop&crop=entropy&auto=format&q=80',
    alt: 'Instrumental quirúrgico',
  },
];

export default function Installations() {
  return (
    <section id="instalaciones" className="relative w-full">
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

      <div className="relative min-h-[50vh] flex items-center justify-center px-4 py-20">
        <div
          aria-hidden="true"
          className={cn(
            'pointer-events-none absolute -bottom-1/2 left-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 rounded-full',
            'bg-[radial-gradient(ellipse_at_center,rgba(47,167,156,0.08),transparent_50%)]',
            'blur-[60px]',
          )}
        />
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
          <div>
            <p className="text-4xl md:text-5xl font-heading font-bold text-primary">3</p>
            <p className="text-sm font-body text-text-main/70 mt-2">Salas de cirugía</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-heading font-bold text-primary">24/7</p>
            <p className="text-sm font-body text-text-main/70 mt-2">Disponibilidad quirúrgica</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-heading font-bold text-primary">100%</p>
            <p className="text-sm font-body text-text-main/70 mt-2">Equipo calificado</p>
          </div>
        </div>
      </div>
    </section>
  );
}
