import type { Metadata, Viewport } from "next";
import Link from "next/link";
import Script from "next/script";
import { Fraunces, Manrope, Sacramento } from "next/font/google";
import SchemaMarkup from "@/components/SchemaMarkup";
import Logo from "@/components/Logo";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import SplashWrapper from "@/components/SplashWrapper";
import WhatsAppButton from "@/components/WhatsAppButton";
import GoogleTranslate from "@/components/GoogleTranslate";
import BackToTop from "@/components/BackToTop";
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
  metadataBase: new URL("https://clinicatiffany.com"),
  manifest: "/site.webmanifest",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
  title: "Clínica de Cirugía Plástica en Cali | Tiffany Esthetic Group",
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
url: "https://www.clinicatiffany.com",
    siteName: "Tiffany Esthetic Group",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "https://www.clinicatiffany.com/images/tiffany-og.png",
        width: 1200,
        height: 630,
        alt: "Tiffany Esthetic Group - Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tiffany Esthetic Group",
    description:
      "Cirugía plástica, servicios quirúrgicos, recuperación y farmacia habilitada en Cali.",
    images: ["https://www.clinicatiffany.com/images/tiffany-og.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
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
        <link rel="preconnect" href="https://translate.google.com" />
        <link
          rel="preload"
          as="video"
          href="/videos/hero1.webm"
          type="video/webm"
        />
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
            className="fixed top-0 left-0 right-0 z-[100] bg-white/80 backdrop-blur-md border-b border-[rgba(34,50,49,0.08)]"
            style={{ animation: "navbarFadeIn 1s cubic-bezier(0.33, 1, 0.68, 1) 1.4s both" }}
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
                    aria-label="WhatsApp de Tiffany Esthetic Group"
                  >
                    <WhatsAppIcon className="w-[18px] h-[18px]" />
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
                    href="/resultados"
                    className="text-[0.85rem] font-body font-semibold text-text-main/75 hover:text-primary transition-colors no-underline"
                  >
                    Resultados
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
                    <br />
                    <img
                      src="https://www.supersalud.gov.co/Style%20Library/Images/Logo-Supersalud-2024.svg"
                      alt="Superintendencia Nacional de Salud"
                      className="mt-3 h-16 w-auto"
                    />
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
                          <Link href="/servicios" className="text-sm font-body text-white/50 hover:text-primary transition-colors no-underline">
                            Todos los servicios
                          </Link>
                        </li>
                        <li>
                          <Link href="/lipoescultura" className="text-sm font-body text-white/50 hover:text-primary transition-colors no-underline">
                            Lipoescultura
                          </Link>
                        </li>
                        <li>
                          <Link href="/mamoplastia-aumento" className="text-sm font-body text-white/50 hover:text-primary transition-colors no-underline">
                            Mamoplastia de aumento
                          </Link>
                        </li>
                        <li>
                          <Link href="/pexia-mamaria" className="text-sm font-body text-white/50 hover:text-primary transition-colors no-underline">
                            Pexia mamaria
                          </Link>
                        </li>
                        <li>
                          <Link href="/rinoplastia" className="text-sm font-body text-white/50 hover:text-primary transition-colors no-underline">
                            Rinoplastia
                          </Link>
                        </li>
                        <li>
                          <Link href="/ginecomastia" className="text-sm font-body text-white/50 hover:text-primary transition-colors no-underline">
                            Ginecomastia
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
                            <WhatsAppIcon className="w-[18px] h-[18px]" />
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
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
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
                            Correo
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
                          <Link href="/politica-de-cookies" className="text-sm font-body text-white/50 hover:text-primary transition-colors no-underline">
                            Política de Cookies
                          </Link>
                        </li>
                        <li>
                          <a
                    href="https://www.supersalud.gov.co/es-co/Paginas/Home.aspx"
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
            <div className="mt-12 pt-6 border-t border-white/10 text-center">
              <p className="text-sm font-body text-white/50">
                Diseñado y posicionado por:{" "}
                <a
                  href="https://www.lulosimpulsodigital.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-primary transition-colors no-underline font-medium"
                >
                  Lulos impulso digital
                </a>
              </p>
            </div>
          </footer>
          <WhatsAppButton />
          <GoogleTranslate />
          <BackToTop />
          <div id="google_translate_element" className="hidden" />
          <Script
            id="google-translate-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                function googleTranslateElementInit() {
                  new google.translate.TranslateElement({
                    pageLanguage: 'es',
                    includedLanguages: 'en,fr,pt,de,it,ja,zh-CN',
                    autoDisplay: false
                  }, 'google_translate_element');
                }
              `,
            }}
          />
          <Script
            src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
            strategy="afterInteractive"
          />
        </SplashWrapper>
        </div>
      </body>
    </html>
  );
}
