export interface Testimonial {
  id: string;
  name: string;
  procedure: string;
  text: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "María Fernanda López",
    procedure: "Liposucción HD",
    text: "Desde la primera consulta sentí total confianza. El resultado superó mis expectativas. Recuperé mi silueta y mi autoestima.",
    rating: 5,
  },
  {
    id: "2",
    name: "Carolina Méndez",
    procedure: "Rinoplastia",
    text: "Un antes y después increíble. El equipo fue muy atento y el proceso fue mucho más cómodo de lo que imaginaba.",
    rating: 5,
  },
  {
    id: "3",
    name: "Andrea Restrepo",
    procedure: "Ácido Hialurónico",
    text: "Resultados naturales y muy bien logrados. Exactamente lo que quería: verme mejor sin perder mi esencia.",
    rating: 5,
  },
];
