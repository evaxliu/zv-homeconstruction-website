import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.zvhomes.org/",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}