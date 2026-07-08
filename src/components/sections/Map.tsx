import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import { clinicData } from "@/data/clinic";

export default function Map() {
  return (
    <Section id="ubicacion" className="bg-[#FBFBF9]">
      <div className="text-center mb-12">
        <span className="text-primary font-body font-semibold text-sm tracking-widest uppercase">
          Ubicación
        </span>
        <Heading as="h2" className="mt-3">
          Nuestra Ubicación
        </Heading>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 rounded-2xl overflow-hidden shadow-lg border border-silver/20">
          <iframe
            src={clinicData.mapEmbedUrl}
            width="100%"
            height="420"
            className="block w-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de Tiffany Esthetic Group Ips SAS"
          />
        </div>

        <div className="flex flex-col justify-center bg-white rounded-2xl p-8 shadow-sm border border-silver/20">
          <h3 className="font-heading font-semibold text-xl text-text-dark mb-5">
            {clinicData.name}
          </h3>

          <div className="space-y-4 text-sm font-body text-text-main">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div>
                <p className="font-semibold text-text-dark">Dirección</p>
                <p className="text-text-main/80">{clinicData.address}</p>
                <p className="text-text-main/80">{clinicData.city}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
              </svg>
              <div>
                <p className="font-semibold text-text-dark">Teléfono</p>
                <a href={`tel:${clinicData.phone}`} className="text-primary hover:text-primary-dark transition-colors no-underline">
                  {clinicData.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              <div>
                <p className="font-semibold text-text-dark mb-1">Horarios</p>
                <ul className="space-y-0.5 text-text-main/80">
                  {clinicData.hours.map((h) => (
                    <li key={h.day} className="flex justify-between gap-4">
                      <span>{h.day}</span>
                      <span className="font-medium text-text-dark">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <a
            href={clinicData.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center gap-2 bg-primary text-white font-body font-bold text-sm px-6 py-3 rounded-full hover:bg-primary-dark transition-all duration-300 no-underline"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            Abrir en Google Maps
          </a>
        </div>
      </div>
    </Section>
  );
}
