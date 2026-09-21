export interface ServiceImageConfig {
  folder: string;
  abbr: string;
  numbers: number[];
}

export const serviceImageMap: Record<string, ServiceImageConfig> = {
  lipoescultura: { folder: "lipo-escultura", abbr: "le", numbers: [1, 2, 3, 5, 6, 7] },
  "lipo-lipectomia": { folder: "lipo-lipectomia", abbr: "LL", numbers: [1, 2, 3] },
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

export interface ResultadoImagenes {
  pairs: BeforeAfterPair[];
  singles: string[];
}

export const resultadoImagenes: Record<string, ResultadoImagenes> = {
  "pexia-mamaria": {
    pairs: [
      { before: "/images/aa1.webp", after: "/images/aa2.webp" },
    ],
    singles: [],
  },
  "mamoplastia-aumento": {
    pairs: [],
    singles: ["/images/w3.jpg"],
  },
  lipoescultura: {
    pairs: [
      { before: "/images/cc1.jpeg", after: "/images/cc2.jpeg" },
      { before: "/images/dd1.webp", after: "/images/dd2.jpeg" },
    ],
    singles: ["/images/lipor1.jpg"],
  },
  "lipo-lipectomia": {
    pairs: [
      { before: "/images/bb1.jpeg", after: "/images/bb2.jpeg" },
    ],
    singles: [],
  },
};

export function getAllAfterImages(): { url: string; src: string }[] {
  const recent = recentBeforeAfterPairs.map((pair) => ({
    url: pair.after,
    src: pair.after.replace(/^.*\//, "").replace(/\.[^.]+$/, ""),
  }));

  const uploaded = [
    "/images/aa2.webp",
    "/images/bb2.jpeg",
    "/images/cc2.jpeg",
    "/images/dd2.jpeg",
    "/images/IMG_3974.jpg",
    "/images/IMG_4003.jpg",
    "/images/IMG_4256.jpg",
    "/images/IMG_4257.jpg",
    "/images/IMG_4301.jpg",
    "/images/w1.jpg",
    "/images/w2.jpg",
    "/images/w3.jpg",
    "/images/w4.jpg",
    "/images/w5.jpg",
  ].map((url) => ({
    url,
    src: url.replace(/^.*\//, "").replace(/\.[^.]+$/, ""),
  }));

  const seen = new Set<string>();
  return [...recent, ...uploaded].filter((img) => {
    if (seen.has(img.url)) return false;
    seen.add(img.url);
    return true;
  });
}
