import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import { clinicData } from "@/data/clinic";

const facts: Array<{ label: string; value: string }> = [
  { label: "Razón social", value: clinicData.legalName },
  {
    label: "También conocida como",
    value: clinicData.alternateNames.join(" · "),
  },
  { label: "NIT", value: clinicData.nit },
  { label: "Código REPS", value: clinicData.reps },
  { label: "Habilitación", value: clinicData.licensing },
  {
    label: "Dirección",
    value: `${clinicData.streetAddress}, ${clinicData.locality}, ${clinicData.region}`,
  },
  {
    label: "Horario",
    value: clinicData.hours
      .map((h) => `${h.day}: ${h.time}`)
      .join(" · "),
  },
  { label: "Teléfono / WhatsApp", value: clinicData.phone },
  { label: "Correo", value: clinicData.email },
  {
    label: "Instalaciones",
    value: `${clinicData.operatingRooms} salas de cirugía · ${clinicData.recoveryAreas} área de recuperación · farmacia habilitada`,
  },
  {
    label: "Servicios",
    value: `${clinicData.procedurePages} procedimientos de ${clinicData.serviceCategories.join(", ").toLowerCase()}`,
  },
  { label: "Fundación", value: "2022" },
];

export default function KeyFacts() {
  return (
    <Section id="datos-clave" className="bg-white">
      <div className="text-center mb-12">
        <span className="text-primary font-body font-semibold text-sm tracking-widest uppercase">
          Identificación
        </span>
        <Heading as="h2" className="mt-3">
          Datos clave de la clínica
        </Heading>
        <p className="mt-4 text-text-main/80 font-body max-w-2xl mx-auto">
          Información verificable de Tiffany Esthetic Group IPS SAS, también
          conocida como Clínica Tiffany: identificación legal, habilitación
          sanitaria, contacto e instalaciones en Cali.
        </p>
      </div>

      <dl className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-silver/20 rounded-2xl overflow-hidden border border-silver/20">
        {facts.map((fact) => (
          <div key={fact.label} className="bg-white p-6">
            <dt className="text-xs font-body font-semibold uppercase tracking-wider text-primary">
              {fact.label}
            </dt>
            <dd className="mt-2 text-sm md:text-base font-body text-text-dark leading-relaxed">
              {fact.value}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
