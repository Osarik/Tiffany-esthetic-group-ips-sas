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

export const recentBeforeAfterPairs: BeforeAfterPair[] = [
  { before: "/images/aa1.webp", after: "/images/aa2.webp" },
  { before: "/images/bb1.jpeg", after: "/images/bb2.jpeg" },
  { before: "/images/cc1.jpeg", after: "/images/cc2.jpeg" },
  { before: "/images/dd1.webp", after: "/images/dd2.jpeg" },
];

export function getBeforeAfterPairs(slug: string): BeforeAfterPair[] {
  const config = serviceImageMap[slug];
  if (!config) return [];
  return config.numbers.map((n) => ({
    before: `/images/${config.folder}/${config.abbr}${n}.webp`,
    after: `/images/${config.folder}/${config.abbr}${n}r.webp`,
  }));
}

export function getAllAfterImages(): { url: string; src: string }[] {
  return recentBeforeAfterPairs.map((pair) => ({
    url: pair.after,
    src: pair.after.replace(/^.*\//, "").replace(/\.[^.]+$/, ""),
  }));
}
