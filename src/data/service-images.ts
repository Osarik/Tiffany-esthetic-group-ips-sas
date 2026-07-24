export interface ServiceImageConfig {
  folder: string;
  abbr: string;
  numbers: number[];
}

export const serviceImageMap: Record<string, ServiceImageConfig> = {
  lipoescultura: { folder: "lipo-escultura", abbr: "le", numbers: [1, 2, 3, 5, 6, 7] },
  "lipo-lipectomia": { folder: "lipo-lipectomia", abbr: "LL", numbers: [1, 2, 3, 4] },
  "lipo-protesis-aumento": { folder: "lipo-protesis-aumento", abbr: "LLA", numbers: [1, 2, 3] },
};

export interface BeforeAfterPair {
  before: string;
  after: string;
}

export function getBeforeAfterPairs(slug: string): BeforeAfterPair[] {
  const config = serviceImageMap[slug];
  if (!config) return [];
  return config.numbers.map((n) => ({
    before: `/images/${config.folder}/${config.abbr}${n}.webp`,
    after: `/images/${config.folder}/${config.abbr}${n}r.webp`,
  }));
}

export function getAllAfterImages(): { url: string; src: string }[] {
  const images: { url: string; src: string }[] = [];
  for (const config of Object.values(serviceImageMap)) {
    for (const n of config.numbers) {
      images.push({
        url: `/images/${config.folder}/${config.abbr}${n}r.webp`,
        src: `${config.abbr}${n}r`,
      });
    }
  }
  return images;
}
