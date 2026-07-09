import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Cookies | Tiffany Esthetic Group IPS",
  description:
    "Conoce cómo Tiffany Esthetic Group Ips SAS utiliza cookies y tecnologías similares en su sitio web, conforme a la Ley 1581 de 2012 y la normativa colombiana de protección de datos.",
  robots: "index, follow",
  openGraph: {
    title: "Política de Cookies | Tiffany Esthetic Group IPS",
    description:
      "Política de cookies de Tiffany Esthetic Group Ips SAS, IPS habilitada en Cali, Colombia.",
    url: "https://www.tiffanyesthetic.com/politica-de-cookies",
    siteName: "Tiffany Esthetic Group",
    locale: "es_CO",
    type: "website",
  },
};

export default function PoliticaDeCookies() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm font-body text-primary hover:text-primary-dark transition-colors no-underline mb-8"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M19 12H5" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Volver al inicio
        </Link>

        <div className="mb-6 p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs font-body text-amber-800 leading-relaxed">
          Este documento fue redactado originalmente en español. Las traducciones generadas automáticamente son solo para referencia y pueden contener imprecisiones. En caso de discrepancia, prevalece la versión en español.
        </div>
        <h1 className="font-heading font-bold text-3xl md:text-4xl text-text-dark leading-tight mb-2">
          Política de Cookies
        </h1>
        <p className="text-sm text-text-main/60 font-body mb-10">
          Última actualización: julio de 2026
        </p>

        <div className="prose prose-sm max-w-none font-body text-text-main/80 space-y-6">
          <section>
            <h2 className="font-heading font-bold text-xl text-text-dark mb-3">
              ¿Qué son las cookies?
            </h2>
            <p>
              Las cookies son pequeños archivos de texto que los sitios web
              almacenan en el navegador del usuario cuando los visita. Permiten
              que el sitio recuerde información sobre la visita, como las
              preferencias de idioma, las opciones de navegación y otras
              configuraciones, para facilitar la próxima visita y hacer que el
              sitio sea más útil.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl text-text-dark mb-3">
              Tipos de cookies que utilizamos
            </h2>
            <p className="mb-3">En Tiffany Esthetic Group IPS utilizamos las siguientes categorías de cookies:</p>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                <h3 className="font-heading font-bold text-text-dark text-base mb-1">
                  Cookies técnicas o esenciales
                </h3>
                <p className="text-sm leading-relaxed">
                  Son necesarias para el funcionamiento básico del sitio web. Permiten la
                  navegación y el acceso a áreas seguras del sitio. Sin estas cookies, el
                  sitio no puede funcionar correctamente. No recopilan información con
                  fines de marketing ni recuerdan las páginas visitadas.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                <h3 className="font-heading font-bold text-text-dark text-base mb-1">
                  Cookies de rendimiento y analytics
                </h3>
                <p className="text-sm leading-relaxed">
                  Recopilan información anónima sobre cómo los visitantes interactúan
                  con el sitio web (páginas más visitadas, tiempo de permanencia,
                  origen del tráfico). Utilizamos esta información para mejorar la
                  experiencia de navegación y optimizar el contenido del sitio.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                <h3 className="font-heading font-bold text-text-dark text-base mb-1">
                  Cookies de funcionalidad
                </h3>
                <p className="text-sm leading-relaxed">
                  Permiten recordar las preferencias del usuario (como el idioma o la
                  región) para ofrecer una experiencia personalizada. La información
                  recopilada es anónima y no puede rastrear la actividad de navegación
                  en otros sitios web.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl text-text-dark mb-3">
              Cookies de terceros
            </h2>
            <p>
              En nuestro sitio web podemos utilizar servicios de terceros que
              establecen cookies propias. Estos servicios incluyen:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-sm">
              <li>
                <strong>Google Analytics:</strong> para analizar el tráfico y el
                comportamiento de los usuarios de forma agregada y anónima.
              </li>
              <li>
                <strong>Google Maps:</strong> para mostrar la ubicación de
                nuestra IPS y facilitar las indicaciones de llegada.
              </li>
            </ul>
            <p className="mt-3">
              Estos terceros tienen sus propias políticas de cookies y
              protección de datos, sobre las cuales no tenemos control directo.
              Te recomendamos revisar sus políticas para obtener información
              detallada.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl text-text-dark mb-3">
              Base legal
            </h2>
            <p>
              El uso de cookies en este sitio web se fundamenta en el
              consentimiento del usuario, de conformidad con lo establecido en
              la Ley 1581 de 2012 de protección de datos personales, el Decreto
              1377 de 2013 y las directrices de la Superintendencia de Industria
              y Comercio (SIC). Al navegar por nuestro sitio, aceptas el uso de
              cookies conforme a esta política.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl text-text-dark mb-3">
              Cómo gestionar y deshabilitar las cookies
            </h2>
            <p>
              Puedes gestionar, bloquear o eliminar las cookies en cualquier
              momento mediante la configuración de tu navegador. A
              continuación, te indicamos los enlaces a las páginas de
              configuración de los navegadores más comunes:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-sm">
              <li>
                <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark underline">
                  Google Chrome
                </a>
              </li>
              <li>
                <a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark underline">
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a href="https://support.microsoft.com/es-es/windows/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark underline">
                  Microsoft Edge
                </a>
              </li>
              <li>
                <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark underline">
                  Safari
                </a>
              </li>
            </ul>
            <p className="mt-3">
              Ten en cuenta que al deshabilitar las cookies técnicas, algunas
              funcionalidades del sitio podrían verse afectadas.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl text-text-dark mb-3">
              Cambios a la política de cookies
            </h2>
            <p>
              Nos reservamos el derecho de actualizar esta política de cookies
              en cualquier momento. Te notificaremos cualquier cambio publicando
              la nueva versión en esta página. Te recomendamos revisar
              periódicamente esta política para estar informado sobre cómo
              utilizamos las cookies.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl text-text-dark mb-3">
              Contacto
            </h2>
            <p>
              Si tienes preguntas o inquietudes sobre nuestra política de
              cookies, puedes contactarnos a través de los siguientes medios:
            </p>
            <ul className="list-none pl-0 mt-3 space-y-2 text-sm">
              <li><strong>Correo electrónico:</strong> tiffanyestheticgroup@gmail.com</li>
              <li><strong>Teléfono:</strong> +57 320 2703522</li>
              <li><strong>Dirección:</strong> Carrera 85C # 13A-1-25, Cali, Colombia</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
