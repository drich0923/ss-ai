import type { MetadataRoute } from "next"
import { guides } from "@/lib/guides"
import { publicProductModules, siteUrl } from "@/lib/site-data"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return [
    { url: siteUrl, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/quiz`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    ...guides.map(guide => ({
      url: `${siteUrl}${guide.path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...publicProductModules().map(product => ({
      url: `${siteUrl}/products/${product.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ]
}
