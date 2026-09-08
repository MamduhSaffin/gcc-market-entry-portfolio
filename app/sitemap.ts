import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/site"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/en", "/bm", "/ar"]
  return routes.map((route) => ({
    url: SITE_URL + route + "/",
    lastModified: new Date("2026-09-08"),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.9,
  }))
}
