import type { MetadataRoute } from "next"
import { publicProductModules, siteUrl } from "@/lib/site-data"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return [
    { url: siteUrl, lastModified, changeFrequency: "weekly", priority: 1 },
    ...publicProductModules().map(product => ({
      url: `${siteUrl}/products/${product.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ]
}
