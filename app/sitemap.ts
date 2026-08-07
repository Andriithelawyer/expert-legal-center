import type { MetadataRoute } from "next";

const baseUrl = "https" + ":" + "/" + "/" + "expert-legal-center.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/birth-tot",
    "/dracs",
    "/divorce-tot",
    "/death-tot",
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
          route === "/dracs" ||
          route === "/divorce-tot"
        ? 0.9
        : 0.8,
  }));
}