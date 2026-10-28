import type { MetadataRoute } from "next"
import { siteUrl } from "@/lib/site-data"

const allow = { allow: "/" }

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", ...allow },
      { userAgent: "GPTBot", ...allow },
      { userAgent: "OAI-SearchBot", ...allow },
      { userAgent: "ChatGPT-User", ...allow },
      { userAgent: "ClaudeBot", ...allow },
      { userAgent: "Claude-SearchBot", ...allow },
      { userAgent: "PerplexityBot", ...allow },
      { userAgent: "Google-Extended", ...allow },
      { userAgent: "Applebot-Extended", ...allow },
      { userAgent: "Bingbot", ...allow },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
