import type { Metadata } from "next";
import Link from "next/link";
import { Fraunces, Manrope, Sacramento } from "next/font/google";
import SchemaMarkup from "@/components/SchemaMarkup";
import Logo from "@/components/Logo";
import SplashWrapper from "@/components/SplashWrapper";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileNav from "@/components/MobileNav";
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
        <div className="overflow-x-clip">
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
                <div className="flex items-center gap-2">
                  <Link href="/" className="no-underline">
                    <Logo />
                  </Link>
                  <div className="flex items-center gap-1">
                  <a
                    href="https://www.instagram.com/tiffanyeg_ips/?hl=es"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full text-primary/60 hover:text-primary hover:bg-primary/10 flex items-center justify-center transition-all duration-300 hover:scale-110 no-underline"
                    aria-label="Instagram de Tiffany Esthetic Group"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </a>
                  <a
                    href="https://wa.me/573202703522?text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20asesor%C3%ADa%20para%20un%20procedimiento%20quir%C3%BArgico." target="_blank" rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full text-primary/60 hover:text-primary hover:bg-primary/10 flex items-center justify-center transition-all duration-300 hover:scale-110 no-underline"
                    aria-label="Teléfono de Tiffany Esthetic Group"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
                    </svg>
                  </a>
                </div>
                </div>
                <MobileNav />
                <div className="hidden md:flex items-center gap-7">
                  <Link
                    href="/"
                    className="text-[0.85rem] font-body font-semibold text-text-main/75 hover:text-primary transition-colors no-underline"
                  >
                    Inicio
                  </Link>
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
                    href="https://wa.me/573202703522?text=Hola, quiero agendar una valoración."
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

          <footer className="bg-[#223231] text-white/80 py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                <div className="flex flex-col items-start">
                  <Link href="/" className="no-underline">
                    <Logo className="brightness-0 invert" />
                  </Link>
                  <p className="text-sm text-white/60 mt-4 font-body">
                    © {new Date().getFullYear()} Tiffany Esthetic Group Ips SAS.
                    Todos los derechos reservados.
                  </p>
                  <p className="text-xs text-white/30 mt-2 font-body leading-relaxed">
                    NIT 901634870 · Carrera 85C # 13A-1-25, Cali
                  </p>
                  <a
                    href="https://www.supersalud.gov.co"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 text-xs text-white/40 hover:text-primary transition-colors no-underline"
                    aria-label="Vigilado SuperSalud - Superintendencia Nacional de Salud"
                  >
                    Vigilado por la Superintendencia Nacional de Salud
                  </a>
                </div>
                <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                  <div className="md:grid md:grid-cols-2 md:gap-8">
                    <div>
                      <p className="text-sm font-body font-semibold text-white/90">
                        Navegación
                      </p>
                      <ul className="mt-5 space-y-3">
                        <li>
                          <Link href="/" className="text-sm font-body text-white/50 hover:text-primary transition-colors no-underline">
                            Inicio
                          </Link>
                        </li>
                        <li>
                          <Link href="/servicios" className="text-sm font-body text-white/50 hover:text-primary transition-colors no-underline">
                            Servicios
                          </Link>
                        </li>
                        <li>
                          <Link href="/instalaciones" className="text-sm font-body text-white/50 hover:text-primary transition-colors no-underline">
                            Instalaciones
                          </Link>
                        </li>
                        <li>
                          <Link href="/equipo" className="text-sm font-body text-white/50 hover:text-primary transition-colors no-underline">
                            Equipo
                          </Link>
                        </li>
                        <li>
                          <Link href="/preguntas-frecuentes" className="text-sm font-body text-white/50 hover:text-primary transition-colors no-underline">
                            Preguntas Frecuentes
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="mt-10 md:mt-0">
                      <p className="text-sm font-body font-semibold text-white/90">
                        Procedimientos
                      </p>
                      <ul className="mt-5 space-y-3">
                        <li>
                          <Link href="/lipoescultura-lipoinyeccion-glutea-cali" className="text-sm font-body text-white/50 hover:text-primary transition-colors no-underline">
                            Lipoescultura + Glúteos
                          </Link>
                        </li>
                        <li>
                          <Link href="/liposuccion-lipectomia" className="text-sm font-body text-white/50 hover:text-primary transition-colors no-underline">
                            Liposucción
                          </Link>
                        </li>
                        <li>
                          <Link href="/rinoplastia" className="text-sm font-body text-white/50 hover:text-primary transition-colors no-underline">
                            Rinoplastia
                          </Link>
                        </li>
                        <li>
                          <Link href="/blefaroplastia" className="text-sm font-body text-white/50 hover:text-primary transition-colors no-underline">
                            Blefaroplastia
                          </Link>
                        </li>
                        <li>
                          <Link href="/lifting-facial" className="text-sm font-body text-white/50 hover:text-primary transition-colors no-underline">
                            Lifting Facial
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="md:grid md:grid-cols-2 md:gap-8">
                    <div>
                      <p className="text-sm font-body font-semibold text-white/90">
                        Contacto
                      </p>
                      <ul className="mt-5 space-y-3">
                        <li>
                          <a
                            href="https://wa.me/573202703522"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-body text-white/50 hover:text-primary transition-colors no-underline flex items-center gap-2"
                          >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                            </svg>
                            WhatsApp
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/tiffanyeg_ips/?hl=es"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-body text-white/50 hover:text-primary transition-colors no-underline flex items-center gap-2"
                          >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                            </svg>
                            Instagram
                          </a>
                        </li>
                        <li>
                          <a
                            href="tel:+573202703522"
                            className="text-sm font-body text-white/50 hover:text-primary transition-colors no-underline flex items-center gap-2"
                          >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
                            </svg>
                            +57 320 2703522
                          </a>
                        </li>
                        <li>
                          <a
                            href="mailto:tiffanyestheticgroup@gmail.com"
                            className="text-sm font-body text-white/50 hover:text-primary transition-colors no-underline flex items-center gap-2"
                          >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <rect x="2" y="2" width="20" height="20" rx="4" />
                              <path d="M22 6l-10 7L2 6" />
                            </svg>
                            tiffanyestheticgroup@gmail.com
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="mt-10 md:mt-0">
                      <p className="text-sm font-body font-semibold text-white/90">
                        Legal
                      </p>
                      <ul className="mt-5 space-y-3">
                        <li>
                          <Link href="/politica-de-privacidad" className="text-sm font-body text-white/50 hover:text-primary transition-colors no-underline">
                            Política de Privacidad
                          </Link>
                        </li>
                        <li>
                          <Link href="/terminos-y-condiciones" className="text-sm font-body text-white/50 hover:text-primary transition-colors no-underline">
                            Términos y Condiciones
                          </Link>
                        </li>
                        <li>
                          <Link href="/derechos-y-deberes" className="text-sm font-body text-white/50 hover:text-primary transition-colors no-underline">
                            Derechos del Paciente
                          </Link>
                        </li>
                        <li>
                          <a
                            href="https://www.supersalud.gov.co"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-body text-white/50 hover:text-primary transition-colors no-underline"
                          >
                            SuperSalud
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.minsalud.gov.co"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-body text-white/50 hover:text-primary transition-colors no-underline"
                          >
                            MinSalud
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
          <WhatsAppButton />
        </SplashWrapper>
        </div>
      </body>
    </html>
  );
}
