import type { Metadata } from "next";
import Link from "next/link";
import { Fraunces, Manrope, Sacramento } from "next/font/google";
import SchemaMarkup from "@/components/SchemaMarkup";
import Logo from "@/components/Logo";
import SplashWrapper from "@/components/SplashWrapper";
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
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
  title:
    "Tiffany Esthetic Group Ips SAS | Cirugía Plástica y Servicios Quirúrgicos",
  description:
    "Institución habilitada por la Secretaría de Salud en Cali, con salas de cirugía, recuperación, farmacia habilitada y personal calificado para procedimientos de cirugía plástica y estética.",
  keywords: [
    "cirugía plástica Cali",
    "Tiffany Esthetic Group",
    "lipoescultura",
    "liposucción",
    "lipectomía",
    "pexia mamaria",
    "rinoplastia",
    "blefaroplastia",
    "lifting facial",
    "alquiler salas de cirugía Cali",
    "farmacia habilitada",
  ],
  authors: [{ name: "Tiffany Esthetic Group Ips SAS" }],
  robots: { index: true, follow: true },
  openGraph: {
    title:
      "Tiffany Esthetic Group Ips SAS | Cirugía Plástica y Servicios Quirúrgicos",
    description:
      "Institución habilitada con salas de cirugía, recuperación, farmacia y personal calificado en Cali.",
    url: "https://www.tiffanyesthetic.com",
    siteName: "Tiffany Esthetic Group",
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tiffany Esthetic Group Ips SAS",
    description:
      "Cirugía plástica, servicios quirúrgicos, recuperación y farmacia habilitada en Cali.",
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
        <SplashWrapper>
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
                <Link href="/" className="no-underline">
                  <Logo />
                </Link>
                <div className="hidden md:flex items-center gap-7">
                  <Link
                    href="/servicios"
                    className="text-[0.85rem] font-body font-semibold text-text-main/75 hover:text-primary transition-colors no-underline"
                  >
                    Servicios
                  </Link>
                  <Link
                    href="/instalaciones"
                    className="text-[0.85rem] font-body font-semibold text-text-main/75 hover:text-primary transition-colors no-underline"
                  >
                    Instalaciones
                  </Link>
                  <Link
                    href="/equipo"
                    className="text-[0.85rem] font-body font-semibold text-text-main/75 hover:text-primary transition-colors no-underline"
                  >
                    Equipo
                  </Link>
                  <Link
                    href="/preguntas-frecuentes"
                    className="text-[0.85rem] font-body font-semibold text-text-main/75 hover:text-primary transition-colors no-underline"
                  >
                    FAQ
                  </Link>
                  <a
                    href="https://wa.me/573XXXXXXXXX?text=Hola, quiero agendar una valoración."
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
                  <Link href="/" className="no-underline">
                    <Logo className="brightness-0 invert" />
                  </Link>
                  <p className="text-sm text-white/60 mt-2 font-body">
                    © {new Date().getFullYear()} Tiffany Esthetic Group Ips SAS.
                    Todos los derechos reservados.
                  </p>
                </div>
                <div className="flex items-center gap-6 text-sm font-body">
                  <Link
                    href="/servicios"
                    className="hover:text-primary transition-colors no-underline text-white/80"
                  >
                    Servicios
                  </Link>
                  <Link
                    href="/instalaciones"
                    className="hover:text-primary transition-colors no-underline text-white/80"
                  >
                    Instalaciones
                  </Link>
                  <Link
                    href="/equipo"
                    className="hover:text-primary transition-colors no-underline text-white/80"
                  >
                    Equipo
                  </Link>
                  <Link
                    href="/preguntas-frecuentes"
                    className="hover:text-primary transition-colors no-underline text-white/80"
                  >
                    FAQ
                  </Link>
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
        </SplashWrapper>
      </body>
    </html>
  );
}
