'use client';

import { ZoomParallax } from '@/components/ui/zoom-parallax';
import Section from '@/components/ui/Section';
import Heading from '@/components/ui/Heading';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&h=800&fit=crop&crop=entropy&auto=format&q=80',
    alt: 'Sala de espera',
  },
  {
    src: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
    alt: 'Consultorio médico',
  },
  {
    src: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&h=800&fit=crop&crop=entropy&auto=format&q=80',
    alt: 'Equipo quirúrgico',
  },
  {
    src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
    alt: 'Equipo médico especializado',
  },
  {
    src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=800&fit=crop&crop=entropy&auto=format&q=80',
    alt: 'Sala de recuperación',
  },
  {
    src: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
    alt: 'Recepción',
  },
  {
    src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=800&fit=crop&crop=entropy&auto=format&q=80',
    alt: 'Tecnología de punta',
  },
];

export default function Installations() {
  return (
    <Section id="instalaciones">
      <div className="text-center mb-16">
        <span className="text-primary font-body font-semibold text-sm tracking-widest uppercase">
          Instalaciones
        </span>
        <Heading as="h2" className="mt-3">
          Espacios para cirugía y recuperación
        </Heading>
        <p className="mt-4 text-text-main/70 font-body max-w-3xl mx-auto text-sm md:text-base">
          Contamos con tres salas de cirugía disponibles para médicos cirujanos
          plásticos, área de recuperación atendida por enfermería, farmacia
          habilitada y coordinación permanente del servicio quirúrgico.
        </p>
      </div>

      <ZoomParallax images={images} />
    </Section>
  );
}
