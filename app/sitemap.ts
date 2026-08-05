import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://expert-legal-center.vercel.app";

  const routes = [
    "",
    "/birth-tot",
    "/death-tot",
    "/divorce-tot",
    "/dracs",
    "/alimony",
    "/knowledge",
    "/consultation",
  ];

  return routes.map((route, index) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency:
      index === 0 || route === "/knowledge"
        ? "weekly"
        : "monthly",
    priority:
      index === 0
        ? 1
        : route === "/birth-tot" ||
          route === "/death-tot" ||
          route === "/divorce-tot"
        ? 0.9
        : 0.8,
  }));
}