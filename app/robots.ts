import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "facebookexternalhit",
        allow: "/",
      },
      {
        userAgent: "TelegramBot",
        allow: "/",
      },
    ],
    sitemap: "https://sotheara-portfolio.vercel.app/sitemap.xml",
  };
}
