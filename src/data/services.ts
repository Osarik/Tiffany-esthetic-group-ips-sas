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
];
