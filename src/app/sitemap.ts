import { MetadataRoute } from "next";
import { proyectos } from "@/data/proyectos";

const BASE_URL = "https://traza.kbdigitalstudio.example";

type SitemapEntry = MetadataRoute.Sitemap[number];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: SitemapEntry[] = [
    "",
    "/proyectos",
    "/servicios",
    "/empresa",
    "/contacto",
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const proyectosRoutes: SitemapEntry[] = proyectos.map((proyecto) => ({
    url: `${BASE_URL}/proyectos/${proyecto.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));

  return [...routes, ...proyectosRoutes];
}
