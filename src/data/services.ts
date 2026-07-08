export interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  popular?: boolean;
}

export const services: Service[] = [
  {
    id: "lipoescultura",
    title: "Lipoescultura con lipoinyección glútea",
    description:
      "Moldeamiento corporal con transferencia de grasa para mejorar el contorno y la proyección glútea.",
    category: "Cirugía Corporal",
    popular: true,
  },
  {
    id: "liposuccion-lipectomia",
    title: "Liposucción y lipectomía",
    description:
      "Procedimientos para retirar grasa localizada, tratar exceso de piel y definir el contorno abdominal.",
    category: "Cirugía Corporal",
    popular: true,
  },
  {
    id: "liposuccion-pexia-mamaria",
    title: "Liposucción y pexia mamaria",
    description:
      "Combinación de contorno corporal y elevación mamaria para armonizar la silueta.",
    category: "Cirugía Corporal",
    popular: true,
  },
  {
    id: "liposuccion-aumento",
    title: "Liposucción y aumento",
    description:
      "Plan quirúrgico integral para definir el cuerpo y complementar volumen según la valoración médica.",
    category: "Cirugía Corporal",
  },
  {
    id: "pexia",
    title: "Pexia y pexia periareolar",
    description:
      "Elevación mamaria con técnicas adaptadas a cada paciente, incluida la pexia periareolar.",
    category: "Cirugía Mamaria",
    popular: true,
  },
  {
    id: "rinoplastia",
    title: "Rinoplastia",
    description:
      "Cirugía nasal enfocada en la armonía facial y la función respiratoria cuando aplica.",
    category: "Cirugía Facial",
  },
  {
    id: "blefaroplastia",
    title: "Blefaroplastia",
    description:
      "Rejuvenecimiento de la mirada mediante manejo del exceso de piel y bolsas palpebrales.",
    category: "Cirugía Facial",
  },
  {
    id: "lifting-facial",
    title: "Lifting facial",
    description:
      "Procedimiento de rejuvenecimiento facial para mejorar flacidez y contornos del rostro.",
    category: "Cirugía Facial",
  },
];
