import type { Metadata } from "next";

const SITE_URL = "https://www.clinicatiffany.com";
const SITE_NAME = "Tiffany Esthetic Group";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/tiffany-og.png`;

export function clampDescription(text: string, max = 155): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  const base = lastSpace > max * 0.6 ? cut.slice(0, lastSpace) : cut;
  return `${base.replace(/[.,;:\s]+$/, "")}.`;
}

const CATEGORY_FOCUS: Record<string, string> = {
  "Cirugía Corporal": "contorno corporal",
  "Cirugía Mamaria": "cirugía mamaria",
  "Cirugía Facial": "rejuvenecimiento facial",
};

/**
 * Descripción pensada para el clic, distinta del subtítulo del hero.
 */
export function serviceMetaDescription(title: string, category: string): string {
  const focus = CATEGORY_FOCUS[category] ?? "cirugía plástica";
  return clampDescription(
    `${title} en Cali: ${focus} con cirujanos de la SCCP en una IPS habilitada. Valoración médica y seguimiento.`
  );
}

export interface BuildMetadataInput {
  /** Título completo, con el sufijo de marca si aplica. */
  title: string;
  description: string;
  /** Ruta canónica, empezando por "/". */
  path: string;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  type?: "website" | "article";
  noindex?: boolean;
}

/**
 * Construye metadatos homogéneos: canonical, Open Graph con imagen y Twitter
 * siempre juntos. Evita que una página herede el título social de la home.
 */
export function buildMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  imageWidth = 1200,
  imageHeight = 630,
  type = "website",
  noindex = false,
}: BuildMetadataInput): Metadata {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  const ogTitle = title.replace(/\s*\|\s*Tiffany Esthetic Group\s*$/, "");

  return {
    title,
    description,
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    alternates: { canonical: path },
    openGraph: {
      title: ogTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: "es_CO",
      type,
      images: [
        {
          url: image,
          width: imageWidth,
          height: imageHeight,
          alt: `${ogTitle} - Tiffany Esthetic Group`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [image],
    },
  };
}
