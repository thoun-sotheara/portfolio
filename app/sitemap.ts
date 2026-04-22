import type { MetadataRoute } from "next";
import { PORTFOLIO } from "@/lib/portfolio-data";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: PORTFOLIO.siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${PORTFOLIO.siteUrl}/resume`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
