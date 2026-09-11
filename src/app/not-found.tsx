import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Página no encontrada (404) | Tiffany Esthetic Group IPS",
  description:
    "La página que buscas no existe o fue movida. Explora nuestros procedimientos de cirugía plástica en Cali: lipoescultura, aumento mamario, rinoplastia y más.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/" },
};

const popularLinks = [
  { label: "Lipoescultura", href: "/lipoescultura" },
  { label: "Mamoplastia de aumento", href: "/mamoplastia-aumento" },
  { label: "Rinoplastia", href: "/rinoplastia" },
  { label: "Pexia mamaria", href: "/pexia-mamaria" },
  { label: "Ginecomastia", href: "/ginecomastia" },
  { label: "Lipectomía", href: "/lipectomia" },
];

const whatsappUrl =
  "https://wa.me/573202703522?text=Hola%2C%20estoy%20en%20la%20pagina%20de%20error%20404%20de%20Tiffany%20Esthetic%20Group%20y%20necesito%20ayuda.";

export default function NotFound() {
  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Página no encontrada (404)",
            description:
              "La página solicitada no existe. Explore los procedimientos de cirugía plástica en Tiffany Esthetic Group IPS, Cali.",
            url: "https://www.tiffanyesthetic.com/",
          }),
        }}
      />

      <section className="relative overflow-hidden bg-gradient-to-br from-[#0F4A44] via-[#1B6E66] to-[#2FA79C] py-24 md:py-36">
        <div
          className="absolute inset-0 opacity-[0.04]"
          aria-hidden="true"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-white/[0.04] blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-accent/[0.08] blur-3xl" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 text-accent-light font-body font-semibold text-xs tracking-[0.25em] uppercase mb-6 border border-white/20 rounded-full px-4 py-1.5 bg-white/5 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              Error 404 · Página no encontrada
            </span>

            <p
              className="font-heading font-bold text-[7rem] md:text-[11rem] leading-none text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-white/10 tracking-tight select-none"
              aria-hidden="true"
            >
              404
            </p>

            <h1 className="font-heading font-bold text-3xl md:text-5xl text-white leading-tight mt-2">
              La página que buscas no existe
            </h1>

            <p className="mt-5 text-white/75 font-body text-base md:text-lg leading-relaxed max-w-xl mx-auto">
              La dirección puede estar desactualizada, haberse movido o contener
              un error. Navega por nuestros procedimientos o vuelve al inicio
              para seguir explorando Tiffany Esthetic Group IPS.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#0F4A44] font-body font-bold px-8 py-4 rounded-full hover:bg-white/90 hover:shadow-2xl hover:shadow-black/25 transition-all duration-300 text-base shadow-lg shadow-black/20 no-underline"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                Volver al inicio
              </Link>
              <Link
                href="/servicios"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-body font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300 text-base no-underline"
              >
                Ver todos los servicios
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#25D366]/60 text-white font-body font-semibold px-8 py-4 rounded-full hover:bg-[#25D366]/10 transition-all duration-300 text-base no-underline"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Contactar por WhatsApp
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#FBFBF9] py-16 md:py-20">
        <Container>
          <div className="text-center mb-10">
            <span className="text-primary font-body font-semibold text-sm tracking-widest uppercase">
              Procedimientos populares
            </span>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-text-dark leading-tight mt-3">
              Continúa explorando nuestra{" "}
              <span className="text-primary">clínica</span>
            </h2>
          </div>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-3xl mx-auto">
            {popularLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group flex items-center justify-between gap-3 p-4 rounded-xl bg-white border border-silver/20 shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-300 no-underline"
                >
                  <span className="font-body font-semibold text-sm text-text-dark group-hover:text-primary transition-colors">
                    {link.label}
                  </span>
                  <svg className="w-4 h-4 text-primary shrink-0 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>

          <p className="mt-10 text-center text-sm text-text-main/60 font-body leading-relaxed max-w-xl mx-auto">
            Si no encuentras lo que buscas, escríbenos por WhatsApp:{" "}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:underline no-underline"
            >
              +57 320 2703522
            </a>{" "}
            — con gusto te orientamos.
          </p>
        </Container>
      </section>
    </article>
  );
}