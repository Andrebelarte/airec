import type { MetadataRoute } from "next";

const siteUrl = "https://www.elexio.se";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes: { path: string; priority: number; changeFrequency: "monthly" | "weekly" }[] = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/foretag", priority: 0.8, changeFrequency: "monthly" },
    { path: "/priser", priority: 0.8, changeFrequency: "monthly" },
    { path: "/info", priority: 0.7, changeFrequency: "monthly" },
    { path: "/partner", priority: 0.7, changeFrequency: "monthly" },
    { path: "/kontakt", priority: 0.6, changeFrequency: "monthly" },
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
