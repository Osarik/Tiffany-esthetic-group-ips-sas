export interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  detailUrl?: string;
  popular?: boolean;
  href?: string;
}

export const services: Service[] = [
  {
    id: "lipoescultura",
    title: "Lipoescultura",
    description:
      "Moldeamiento corporal con lipoinyección glútea para mejorar el contorno y la proyección glútea.",
    category: "Cirugía Corporal",
    popular: true,
    href: "/lipoescultura",
  },
  {
    id: "lipectomia",
    title: "Lipectomía",
    description:
      "Resección quirúrgica del exceso de piel y grasa localizada para redefinir el contorno abdominal.",
    category: "Cirugía Corporal",
    href: "/lipectomia",
  },
  {
    id: "lipo-lipectomia",
    title: "Lipo + Lipectomía",
    description:
      "Procedimiento combinado de liposucción y lipectomía para retirar grasa y exceso de piel en una sola cirugía.",
    category: "Cirugía Corporal",
    popular: true,
    href: "/lipo-lipectomia",
  },
  {
    id: "lipo-lipectomia-senos",
    title: "Lipo + Lipectomía + Senos (Aumento)",
    description:
      "Plan quirúrgico integral que combina contorno corporal, lipectomía y aumento mamario para una transformación completa.",
    category: "Cirugía Corporal",
    href: "/lipo-lipectomia-senos",
  },
  {
    id: "lipo-lipectomia-pexia-periareolar",
    title: "Lipo + Lipectomía + Pexia Periareolar",
    description:
      "Cirugía combinada de liposucción, lipectomía y elevación mamaria periareolar para armonizar cuerpo y busto.",
    category: "Cirugía Corporal",
    href: "/lipo-lipectomia-pexia-periareolar",
  },
  {
    id: "lipo-lipectomia-pexia",
    title: "Lipo + Lipectomía + Pexia",
    description:
      "Procedimiento completo que integra liposucción, lipectomía y pexia mamaria para resultados corporales integrales.",
    category: "Cirugía Corporal",
    href: "/lipo-lipectomia-pexia",
  },
  {
    id: "hernia",
    title: "Hernia",
    description:
      "Reparación quirúrgica de hernia abdominal o umbilical, combinable con procedimientos estéticos de contorno corporal.",
    category: "Cirugía Corporal",
    href: "/hernia",
  },
  {
    id: "mamoplastia-aumento-rinoplastia",
    title: "Mamoplastia de aumento + Rinoplastia",
    description:
      "Cirugía combinada de aumento mamario y rinoplastia para armonizar el rostro y el busto en un solo tiempo quirúrgico.",
    category: "Cirugía Mamaria",
    href: "/mamoplastia-aumento-rinoplastia",
  },
  {
    id: "mamoplastia-aumento",
    title: "Mamoplastia de aumento",
    description:
      "Aumento del volumen mamario mediante implantes para mejorar la proyección, forma y simetría del busto.",
    category: "Cirugía Mamaria",
    popular: true,
    href: "/mamoplastia-aumento",
  },
  {
    id: "gigantomastia",
    title: "Gigantomastia",
    description:
      "Cirugía de reducción mamaria para tratar el crecimiento excesivo del tejido mamario y aliviar síntomas asociados.",
    category: "Cirugía Mamaria",
    href: "/gigantomastia",
  },
  {
    id: "ginecomastia",
    title: "Ginecomastia",
    description:
      "Cirugía para corregir el aumento del tejido mamario en hombres, mejorando el contorno del pecho y la autoestima.",
    category: "Cirugía Mamaria",
    popular: true,
    href: "/ginecomastia",
  },
  {
    id: "pexia-reconstructiva",
    title: "Pexia reconstructiva sin implantes",
    description:
      "Elevación mamaria mediante técnicas reconstructivas que reposicionan el tejido sin necesidad de implantes.",
    category: "Cirugía Mamaria",
    href: "/pexia-reconstructiva",
  },
  {
    id: "pexia",
    title: "Pexia",
    description:
      "Elevación mamaria quirúrgica para corregir la caída del seno y restaurar una posición juvenil del busto.",
    category: "Cirugía Mamaria",
    popular: true,
    href: "/pexia-mamaria",
  },
  {
    id: "pexia-periareolar",
    title: "Pexia periareolar",
    description:
      "Técnica de elevación mamaria con incisión alrededor de la areola para corregir ptosis leve a moderada.",
    category: "Cirugía Mamaria",
    href: "/pexia-periareolar",
  },
  {
    id: "lipo-pexia-periareolar",
    title: "Lipo + Pexia periareolar",
    description:
      "Combinación de liposucción corporal y elevación mamaria periareolar para mejorar la silueta y el busto simultáneamente.",
    category: "Cirugía Mamaria",
    href: "/lipo-pexia-periareolar",
  },
  {
    id: "lipo-pexia",
    title: "Lipo + Pexia",
    description:
      "Procedimiento que integra liposucción y pexia mamaria para definir el contorno corporal y elevar el busto.",
    category: "Cirugía Mamaria",
    href: "/lipo-pexia",
  },
  {
    id: "lipo-protesis-aumento",
    title: "Lipo + Prótesis de aumento",
    description:
      "Cirugía combinada de liposucción corporal y aumento mamario con prótesis para una transformación estética integral.",
    category: "Cirugía Mamaria",
    href: "/lipo-protesis-aumento",
  },
  {
    id: "lipectomia-pexia",
    title: "Lipectomía + Pexia",
    description:
      "Plan quirúrgico que combina lipectomía abdominal con elevación mamaria para reafirmar cuerpo y busto.",
    category: "Cirugía Mamaria",
    href: "/lipectomia-pexia",
  },
  {
    id: "ritidoplastia-completa",
    title: "Ritidoplastia completa",
    description:
      "Rejuvenecimiento facial integral mediante lifting completo de rostro y cuello para restaurar los contornos juveniles.",
    category: "Cirugía Facial",
    href: "/ritidoplastia-completa",
  },
  {
    id: "ritidoplastia-tercio-medio",
    title: "Ritidoplastia 1/3 medio",
    description:
      "Lifting del tercio medio facial para rejuvenecer la región de los pómulos, surcos nasogenianos y mejillas.",
    category: "Cirugía Facial",
    href: "/ritidoplastia-tercio-medio",
  },
  {
    id: "ritidoplastia-tercio-inferior",
    title: "Ritidoplastia 1/3 inferior",
    description:
      "Lifting del tercio inferior facial para tratar la flacidez de la mandíbula, papada y cuello.",
    category: "Cirugía Facial",
    href: "/ritidoplastia-tercio-inferior",
  },
  {
    id: "rinoplastia",
    title: "Rinoplastia",
    description:
      "Cirugía nasal enfocada en la armonía facial y la función respiratoria cuando aplica.",
    category: "Cirugía Facial",
    popular: true,
    href: "/rinoplastia",
  },
  {
    id: "lipo-rinoplastia",
    title: "Lipo + Rinoplastia",
    description:
      "Combinación de liposucción corporal y rinoplastia facial para mejorar la silueta y la armonía del rostro en un solo procedimiento.",
    category: "Cirugía Facial",
    href: "/lipo-rinoplastia",
  },
  {
    id: "blefaroplastia-otoplastia-lipectomia",
    title: "Blefaroplastia + Otoplastia + Lipectomía",
    description:
      "Cirugía integral que combina rejuvenecimiento de la mirada, corrección de orejas y contorno abdominal en un solo plan quirúrgico.",
    category: "Cirugía Facial",
    href: "/blefaroplastia-otoplastia-lipectomia",
  },
  {
    id: "qr-lipoescultura",
    title: "Lipoescultura",
    description: "Alquiler de quirófano con tiempo quirúrgico asignado de 4 horas.",
    category: "Alquiler de Quirófanos",
    href: "/lipoescultura",
  },
  {
    id: "qr-lipectomia",
    title: "Lipectomía",
    description: "Alquiler de quirófano con tiempo quirúrgico asignado de 2 horas.",
    category: "Alquiler de Quirófanos",
    href: "/lipectomia",
  },
  {
    id: "qr-lipo-lipectomia",
    title: "Lipo + Lipectomía",
    description: "Alquiler de quirófano con tiempo quirúrgico asignado de 5 horas.",
    category: "Alquiler de Quirófanos",
    href: "/lipo-lipectomia",
  },
  {
    id: "qr-lipo-lipectomia-senos",
    title: "Lipo + Lipectomía + Senos (Aumento)",
    description: "Alquiler de quirófano con tiempo quirúrgico asignado de 5 horas.",
    category: "Alquiler de Quirófanos",
    href: "/lipo-lipectomia-senos",
  },
  {
    id: "qr-lipo-lipectomia-pexia-periareolar",
    title: "Lipo + Lipectomía + Pexia Periareolar",
    description: "Alquiler de quirófano con tiempo quirúrgico asignado de 5 horas.",
    category: "Alquiler de Quirófanos",
    href: "/lipo-lipectomia-pexia-periareolar",
  },
  {
    id: "qr-lipo-lipectomia-pexia",
    title: "Lipo + Lipectomía + Pexia",
    description: "Alquiler de quirófano con tiempo quirúrgico asignado de 8 horas.",
    category: "Alquiler de Quirófanos",
    href: "/lipo-lipectomia-pexia",
  },
  {
    id: "qr-mamoplastia-aumento-rinoplastia",
    title: "Mamoplastia de aumento + Rinoplastia",
    description: "Alquiler de quirófano con tiempo quirúrgico asignado de 4 horas.",
    category: "Alquiler de Quirófanos",
    href: "/mamoplastia-aumento-rinoplastia",
  },
  {
    id: "qr-mamoplastia-aumento",
    title: "Mamoplastia de aumento",
    description: "Alquiler de quirófano con tiempo quirúrgico asignado de 1 hora y 30 minutos.",
    category: "Alquiler de Quirófanos",
    href: "/mamoplastia-aumento",
  },
  {
    id: "qr-gigantomastia",
    title: "Gigantomastia",
    description: "Alquiler de quirófano con tiempo quirúrgico asignado de 3 horas.",
    category: "Alquiler de Quirófanos",
    href: "/gigantomastia",
  },
  {
    id: "qr-ginecomastia",
    title: "Ginecomastia",
    description: "Alquiler de quirófano con tiempo quirúrgico asignado de 1 hora.",
    category: "Alquiler de Quirófanos",
    href: "/ginecomastia",
  },
  {
    id: "qr-pexia-reconstructiva",
    title: "Pexia reconstructiva sin implantes",
    description: "Alquiler de quirófano con tiempo quirúrgico asignado de 3 horas.",
    category: "Alquiler de Quirófanos",
    href: "/pexia-reconstructiva",
  },
  {
    id: "qr-pexia",
    title: "Pexia",
    description: "Alquiler de quirófano con tiempo quirúrgico asignado de 3 horas.",
    category: "Alquiler de Quirófanos",
    href: "/pexia-mamaria",
  },
  {
    id: "qr-pexia-periareolar",
    title: "Pexia periareolar",
    description: "Alquiler de quirófano con tiempo quirúrgico asignado de 2 horas.",
    category: "Alquiler de Quirófanos",
    href: "/pexia-periareolar",
  },
  {
    id: "qr-lipo-pexia-periareolar",
    title: "Lipo + Pexia periareolar",
    description: "Alquiler de quirófano con tiempo quirúrgico asignado de 4 horas.",
    category: "Alquiler de Quirófanos",
    href: "/lipo-pexia-periareolar",
  },
  {
    id: "qr-lipo-pexia",
    title: "Lipo + Pexia",
    description: "Alquiler de quirófano con tiempo quirúrgico asignado de 6 horas.",
    category: "Alquiler de Quirófanos",
    href: "/lipo-pexia",
  },
  {
    id: "qr-lipo-protesis-aumento",
    title: "Lipo + Prótesis de aumento",
    description: "Alquiler de quirófano con tiempo quirúrgico asignado de 4 horas.",
    category: "Alquiler de Quirófanos",
    href: "/lipo-protesis-aumento",
  },
  {
    id: "qr-lipectomia-pexia",
    title: "Lipectomía + Pexia",
    description: "Alquiler de quirófano con tiempo quirúrgico asignado de 6 horas.",
    category: "Alquiler de Quirófanos",
    href: "/lipectomia-pexia",
  },
  {
    id: "qr-ritidoplastia-completa",
    title: "Ritidoplastia completa",
    description: "Alquiler de quirófano con tiempo quirúrgico asignado de 3 horas y 30 minutos.",
    category: "Alquiler de Quirófanos",
    href: "/ritidoplastia-completa",
  },
  {
    id: "qr-ritidoplastia-tercio-medio",
    title: "Ritidoplastia 1/3 medio",
    description: "Alquiler de quirófano con tiempo quirúrgico asignado de 2 horas y 30 minutos.",
    category: "Alquiler de Quirófanos",
    href: "/ritidoplastia-tercio-medio",
  },
  {
    id: "qr-ritidoplastia-tercio-inferior",
    title: "Ritidoplastia 1/3 inferior",
    description: "Alquiler de quirófano con tiempo quirúrgico asignado de 2 horas.",
    category: "Alquiler de Quirófanos",
    href: "/ritidoplastia-tercio-inferior",
  },
  {
    id: "qr-rinoplastia",
    title: "Rinoplastia",
    description: "Alquiler de quirófano con tiempo quirúrgico asignado de 2 horas y 30 minutos.",
    category: "Alquiler de Quirófanos",
    href: "/rinoplastia",
  },
  {
    id: "qr-lipo-rinoplastia",
    title: "Lipo + Rinoplastia",
    description: "Alquiler de quirófano con tiempo quirúrgico asignado de 4 horas.",
    category: "Alquiler de Quirófanos",
    href: "/lipo-rinoplastia",
  },
  {
    id: "qr-blefaroplastia-otoplastia-lipectomia",
    title: "Blefaroplastia + Otoplastia + Lipectomía",
    description: "Alquiler de quirófano con tiempo quirúrgico asignado para procedimiento combinado.",
    category: "Alquiler de Quirófanos",
    href: "/blefaroplastia-otoplastia-lipectomia",
  },
  {
    id: "qr-hernia",
    title: "Hernia",
    description: "Alquiler de quirófano con tiempo quirúrgico asignado de 1 hora.",
    category: "Alquiler de Quirófanos",
    href: "/hernia",
  },
];
