import type { Metadata } from "next";
import { Fraunces, Manrope, Sacramento } from "next/font/google";
import SchemaMarkup from "@/components/SchemaMarkup";
import Logo from "@/components/Logo";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-heading",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

const sacramento = Sacramento({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Tiffany Esthetic Group Ips SAS | Cirugía Plástica y Medicina Estética",
  description:
    "Clínica de cirugía plástica y medicina estética. Más de 10 años transformando vidas. Especialistas en rinoplastia, liposucción HD, mamoplastia y tratamientos estéticos no invasivos. Resultados naturales que realzan tu esencia.",
  keywords: [
    "cirugía plástica",
    "medicina estética",
    "rinoplastia",
    "liposucción HD",
    "mamoplastia",
    "ácido hialurónico",
    "toxina botulínica",
    "depilación láser",
    "Tiffany Esthetic Group",
    "cirujano plástico Colombia",
    "Cali cirugía plástica",
  ],
  authors: [{ name: "Tiffany Esthetic Group Ips SAS" }],
  robots: { index: true, follow: true },
  openGraph: {
    title:
      "Tiffany Esthetic Group Ips SAS | Cirugía Plástica y Medicina Estética",
    description:
      "Clínica boutique de cirugía plástica y medicina estética. Resultados naturales que realzan tu esencia.",
    url: "https://www.tiffanyesthetic.com",
    siteName: "Tiffany Esthetic Group",
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tiffany Esthetic Group Ips SAS",
    description:
      "Clínica de cirugía plástica y medicina estética. Resultados naturales que realzan tu esencia.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${fraunces.variable} ${manrope.variable} ${sacramento.variable}`}
    >
      <head>
        <link rel="canonical" href="https://www.tiffanyesthetic.com" />
        <SchemaMarkup />
      </head>
      <body className="min-h-screen flex flex-col font-body antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:text-text-dark focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg focus:outline-2 focus:outline-primary"
        >
          Saltar al contenido principal
        </a>

        <nav
          className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-[rgba(34,50,49,0.08)]"
          role="navigation"
          aria-label="Navegación principal"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <a href="/" className="no-underline">
                <Logo />
              </a>
              <div className="hidden md:flex items-center gap-7">
                <a
                  href="#servicios"
                  className="text-[0.85rem] font-body font-semibold text-text-main/75 hover:text-primary transition-colors no-underline"
                >
                  Servicios
                </a>
                <a
                  href="#resultados"
                  className="text-[0.85rem] font-body font-semibold text-text-main/75 hover:text-primary transition-colors no-underline"
                >
                  Resultados
                </a>
                <a
                  href="#testimonios"
                  className="text-[0.85rem] font-body font-semibold text-text-main/75 hover:text-primary transition-colors no-underline"
                >
                  Testimonios
                </a>
                <a
                  href="#preguntas-frecuentes"
                  className="text-[0.85rem] font-body font-semibold text-text-main/75 hover:text-primary transition-colors no-underline"
                >
                  FAQ
                </a>
                <a
                  href="https://wa.me/573XXXXXXXXX?text=¡Hola! Quiero agendar mi valoración."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center border-2 border-primary text-primary-dark font-body font-bold text-[0.82rem] px-5 py-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300 no-underline"
                >
                  Agenda tu valoración
                </a>
              </div>
            </div>
          </div>
        </nav>

        <main id="main-content" className="flex-1 pt-16">
          {children}
        </main>

        <footer className="bg-[#223231] text-white/80 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <a href="/" className="no-underline">
                  <Logo className="brightness-0 invert" />
                </a>
                <p className="text-sm text-white/60 mt-2 font-body">
                  © {new Date().getFullYear()} Tiffany Esthetic Group Ips SAS.
                  Todos los derechos reservados.
                </p>
              </div>
              <div className="flex items-center gap-6 text-sm font-body">
                <a
                  href="#servicios"
                  className="hover:text-primary transition-colors no-underline text-white/80"
                >
                  Servicios
                </a>
                <a
                  href="#preguntas-frecuentes"
                  className="hover:text-primary transition-colors no-underline text-white/80"
                >
                  FAQ
                </a>
                <a
                  href="https://wa.me/573XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors no-underline text-white/80"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
