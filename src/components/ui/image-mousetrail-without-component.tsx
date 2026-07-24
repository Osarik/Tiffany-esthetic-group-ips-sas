//@ts-nocheck
'use client';
import React, { createRef, useRef } from 'react';
import { getAllAfterImages } from '@/data/service-images';

type Props = {
  background?: boolean;
};

const afterImages = getAllAfterImages();

export default function ImageMouseTrail3({ background = false }: Props) {
  const containerRef = useRef(null);
  const refs = useRef(afterImages.map(() => createRef<HTMLImageElement>()));

  let globalIndex = 0;
  let last = { x: 0, y: 0 };

  const activate = (image, x, y) => {
    const containerRect = containerRef.current?.getBoundingClientRect();
    const relativeX = x - containerRect.left;
    const relativeY = y - containerRect.top;
    image.style.left = `${relativeX}px`;
    image.style.top = `${relativeY}px`;

    image.style.zIndex = 50 + (globalIndex % afterImages.length);
    image.style.scale = '1';
    image.style.opacity = '1';
    image.dataset.status = 'active';
    setTimeout(() => {
      image.dataset.status = 'inactive';
      image.style.scale = '0';
      image.style.opacity = '0';
    }, 1000);
    last = { x, y };
  };

  const distanceFromLast = (x, y) => {
    return Math.hypot(x - last.x, y - last.y);
  };
  const deactivate = (image) => {
    image.dataset.status = 'inactive';
  };
  const handleOnMove = (e) => {
    if (distanceFromLast(e.clientX, e.clientY) > window.innerWidth / 40) {
      const lead = refs.current[globalIndex % refs.current.length].current;

      const tail = refs.current[(globalIndex - 5) % refs.current.length]?.current;

      if (lead) activate(lead, e.clientX, e.clientY);
      if (tail) deactivate(tail);

      globalIndex++;
    }
  };

  return (
    <section
      onMouseMove={handleOnMove}
      onTouchMove={(e) => handleOnMove(e.touches[0])}
      ref={containerRef}
      className={
        background
          ? 'relative w-full h-full overflow-hidden'
          : 'grid place-content-center h-[500px] md:h-[600px] w-full bg-[#e0dfdf] relative overflow-hidden rounded-2xl'
      }
    >
      {afterImages.map((item, index) => (
        <img
          key={item.src}
          className={
            background
              ? 'object-cover w-36 h-44 md:w-40 md:h-48 scale-0 opacity-0 absolute -translate-y-1/2 -translate-x-1/2 pointer-events-none transition-all duration-500 shadow-2xl shadow-black/40'
              : 'object-cover z-10 w-36 h-44 md:w-40 md:h-48 scale-0 opacity-0 data-[status=\'active\']:scale-100 data-[status=\'active\']:opacity-100 transition-transform duration-500 data-[status=\'active\']:ease-out-expo absolute -translate-y-1/2 -translate-x-1/2'
          }
          data-index={index}
          data-status='inactive'
          src={item.url}
          alt={`Resultado ${index + 1}`}
          ref={refs.current[index]}
        />
      ))}
      {!background && (
        <article className='relative z-20 max-w-xl mx-auto text-center px-6'>
          <p className="text-sm font-body font-semibold text-primary-dark tracking-wider uppercase mb-3">
            Galería interactiva
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-dark leading-tight">
            Resultados reales de{' '}
            <span className="text-primary">nuestros pacientes</span>
          </h2>
          <p className="mt-4 text-sm md:text-base font-body text-text-main/70 leading-relaxed">
            Mueve el cursor sobre esta sección para explorar nuestra galería
            de resultados quirúrgicos.
          </p>
        </article>
      )}
    </section>
  );
}
