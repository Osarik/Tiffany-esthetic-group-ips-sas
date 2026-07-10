import type { MetadataRoute } from "next";

const procedures = [
  "lipoescultura-con-lipoinyeccion-glutea-cali",
  "liposuccion",
  "abdominoplastia",
  "aumento-mamario",
  "pexia-mamaria",
  "lipectomia",
  "liposuccion-lipectomia",
  "rinoplastia",
  "blefaroplastia",
  "lifting-facial",
  "liposuccion-pexia-mamaria",
  "liposuccion-aumento",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.tiffanyesthetic.com";

  const staticPages: Array<{ path: string; priority: number }> = [
    { path: "", priority: 1 },
    { path: "/resultados", priority: 0.9 },
    { path: "/equipo", priority: 0.8 },
    { path: "/preguntas-frecuentes", priority: 0.8 },
    { path: "/servicios", priority: 0.7 },
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
    url: `${baseUrl}/servicios/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...procedureEntries];
}
