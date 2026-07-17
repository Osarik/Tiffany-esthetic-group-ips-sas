export interface TeamMember {
  name: string;
  title: string;
  description: string;
}

export const team: TeamMember[] = [
  {
    name: "Cirujanos plásticos",
    title: "Especialistas en cirugía plástica y estética",
    description:
      "Cirujanos plásticos calificados para procedimientos corporales, mamarios y faciales. Algunos de nuestros profesionales son miembros de la Sociedad Colombiana de Cirugía Plástica (SCCP). Cada cirujano cuenta con la certificación que acredita su especialidad y se mantiene en actualización permanente.",
  },
  {
    name: "Anestesiólogos",
    title: "Miembros del Consejo de Anestesiología (S.C.A.R.E.)",
    description:
      "Anestesiólogos certificados y miembros del Consejo de Anestesiología, con recertificación periódica según los estándares del C.A.M.E.C. Evaluamos cada caso de forma individual para seleccionar la técnica anestésica más segura según el procedimiento y las condiciones del paciente.",
  },
  {
    name: "Equipo quirúrgico y recuperación",
    title: "Instrumentación, circulante, enfermería y jefe de planta",
    description:
      "Contamos con instrumentador quirúrgico, circulante de cirugía y enfermeras recuperadoras que acompañan al paciente antes, durante y después del procedimiento. Un jefe de planta coordina todo el servicio quirúrgico para garantizar la continuidad y calidad de la atención.",
  },
  {
    name: "Servicio farmacéutico",
    title: "Farmaceuta con habilitación institucional",
    description:
      "Nuestra farmacia habilitada cuenta con profesional farmaceuta que garantiza la gestión, dispensación y trazabilidad de medicamentos e insumos quirúrgicos bajo estándares de calidad, seguridad y oportunidad durante cada etapa de la atención.",
  },
];
