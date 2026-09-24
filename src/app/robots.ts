import type { MetadataRoute } from "next";

const baseUrl = "https://clinicatiffany.com";

const allowAll = {
  allow: "/",
  disallow: "/api/",
};

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", ...allowAll },
      { userAgent: "Googlebot", ...allowAll },
      { userAgent: "Googlebot-Image", ...allowAll },
      { userAgent: "Googlebot-News", ...allowAll },
      { userAgent: "Googlebot-Video", ...allowAll },
      { userAgent: "Google-InspectionTool", ...allowAll },
      { userAgent: "Bingbot", ...allowAll },
      { userAgent: "Slurp", ...allowAll },
      { userAgent: "DuckDuckBot", ...allowAll },
      { userAgent: "Baiduspider", ...allowAll },
      { userAgent: "Yandex", ...allowAll },
      { userAgent: "Sogou web spider", ...allowAll },
      { userAgent: "Applebot", ...allowAll },
      { userAgent: "Applebot-Extended", ...allowAll },
      { userAgent: "facebookexternalhit", ...allowAll },
      { userAgent: "Twitterbot", ...allowAll },
      { userAgent: "LinkedInBot", ...allowAll },
      { userAgent: "Pinterestbot", ...allowAll },
      { userAgent: "WhatsApp", ...allowAll },
      { userAgent: "TelegramBot", ...allowAll },
      { userAgent: "ia_archiver", ...allowAll },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: "clinicatiffany.com",
  };
}