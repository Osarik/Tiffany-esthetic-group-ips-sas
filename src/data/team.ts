export interface TeamMember {
  name: string;
  title: string;
  description: string;
}

export const team: TeamMember[] = [
  {
    name: "Cirujanos plásticos",
    title: "Sociedad Colombiana de Cirugía Plástica",
    description:
      "Profesionales calificados para procedimientos corporales, mamarios y faciales, según valoración médica.",
  },
  {
    name: "Anestesiólogos",
    title: "Consejo de Anestesiología",
    description:
      "Equipo de anestesia disponible para apoyar los procedimientos quirúrgicos realizados en la clínica.",
  },
  {
    name: "Equipo quirúrgico y recuperación",
    title: "Instrumentación, circulante y enfermería",
    description:
      "Contamos con instrumentador quirúrgico, circulante de cirugía, enfermeras recuperadoras y jefe de planta.",
  },
];
