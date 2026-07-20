import type { MetadataRoute } from "next";

const procedures = [
  "lipoescultura",
  "lipectomia",
  "lipo-lipectomia",
  "lipo-lipectomia-senos",
  "lipo-lipectomia-pexia-periareolar",
  "lipo-lipectomia-pexia",
  "hernia",
  "mamoplastia-aumento-rinoplastia",
  "mamoplastia-aumento",
  "gigantomastia",
  "ginecomastia",
  "pexia-reconstructiva",
  "pexia-mamaria",
  "pexia-periareolar",
  "lipo-pexia-periareolar",
  "lipo-pexia",
  "lipo-protesis-aumento",
  "lipectomia-pexia",
  "ritidoplastia-completa",
  "ritidoplastia-tercio-medio",
  "ritidoplastia-tercio-inferior",
  "rinoplastia",
  "lipo-rinoplastia",
  "blefaroplastia-otoplastia-lipectomia",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.tiffanyesthetic.com";

  const staticPages: Array<{ path: string; priority: number }> = [
    { path: "", priority: 1 },
    { path: "/resultados", priority: 0.9 },
    { path: "/servicios", priority: 0.9 },
    { path: "/instalaciones", priority: 0.8 },
    { path: "/equipo", priority: 0.8 },
    { path: "/preguntas-frecuentes", priority: 0.8 },
    { path: "/blefaroplastia", priority: 0.7 },
    { path: "/lifting-facial", priority: 0.7 },
    { path: "/lipoescultura-lipoinyeccion-glutea-cali", priority: 0.7 },
    { path: "/liposuccion-aumento", priority: 0.7 },
    { path: "/liposuccion-lipectomia", priority: 0.7 },
    { path: "/liposuccion-pexia-mamaria", priority: 0.7 },
    { path: "/pexia-mamaria", priority: 0.7 },
    { path: "/rinoplastia", priority: 0.7 },
    { path: "/politica-de-privacidad", priority: 0.5 },
    { path: "/terminos-y-condiciones", priority: 0.5 },
    { path: "/derechos-y-deberes", priority: 0.5 },
    { path: "/politica-de-cookies", priority: 0.5 },
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPages.map(({ path, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority,
  }));

  const procedureEntries: MetadataRoute.Sitemap = procedures.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...procedureEntries];
}
