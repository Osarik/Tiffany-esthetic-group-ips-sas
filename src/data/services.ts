export interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  popular?: boolean;
}

export const services: Service[] = [
  {
    id: "rinoplastia",
    title: "Rinoplastia Estética",
    description: "Armonización facial mediante cirugía nasal con técnicas mínimamente invasivas.",
    category: "Cirugía Facial",
    popular: true,
  },
  {
    id: "blefaroplastia",
    title: "Blefaroplastia",
    description: "Rejuvenecimiento de la mirada eliminando exceso de piel y bolsas palpebrales.",
    category: "Cirugía Facial",
  },
  {
    id: "liposuccion",
    title: "Liposucción HD",
    description: "Escultura corporal de alta definición para resultados naturales y artísticos.",
    category: "Cirugía Corporal",
    popular: true,
  },
  {
    id: "abdominoplastia",
    title: "Abdominoplastia",
    description: "Definición del contorno abdominal eliminando piel sobrante y tensando músculos.",
    category: "Cirugía Corporal",
  },
  {
    id: "mamoplastia",
    title: "Mamoplastia",
    description: "Aumento, reducción o elevación mamaria con resultados personalizados.",
    category: "Cirugía Corporal",
    popular: true,
  },
  {
    id: "toxina",
    title: "Toxina Botulínica",
    description: "Tratamiento antiarrugas no quirúrgico para un rostro más joven y fresco.",
    category: "Medicina Estética",
  },
  {
    id: "acido-hialuronico",
    title: "Ácido Hialurónico",
    description: "Rellenos dérmicos para restaurar volumen, labios y contorno facial.",
    category: "Medicina Estética",
    popular: true,
  },
  {
    id: "laser",
    title: "Depilación Láser",
    description: "Eliminación definitiva del vello con tecnología láser de última generación.",
    category: "Tratamientos Corporales",
  },
];
