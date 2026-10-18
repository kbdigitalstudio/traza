/**
 * TRAZA — Datos del portafolio conceptual.
 *
 * Todos los proyectos son CASOS DEMOSTRATIVOS de un concepto de marca.
 * No son obras ejecutadas por una empresa real. No se inventan dimensiones,
 * capacidades de carga, costos ejecutados ni resultados técnicos reales.
 */

export type Proyecto = {
  slug: string;
  title: string;
  category: string;
  location: string;
  description: string;
  image: string;
  imageAlt: string;
  status: string;
  scope: string;
  featured: boolean;
};

export const proyectos: Proyecto[] = [
  {
    slug: "vial-metico-conectividad",
    title: "Corredor vial Meta — Conectividad regional",
    category: "Infraestructura vial",
    location: "Villavicencio, Meta",
    description:
      "Diseño y planeación de un corredor vial de doble calzada que mejora la conectividad entre centros urbanos y zonas de influencia, con drenaje transversal y obras de arte menores integradas al trazo.",
    image:
      "https://images.unsplash.com/photo-1445034268571-0c6be767131b?fm=jpg&q=60&w=1600&auto=format&fit=crop",
    imageAlt:
      "Carretera de doble calzada con paisaje de montaña y cielo despejado, infraestructura vial.",
    status: "Proyecto conceptual",
    scope:
      "Alcance conceptual: estudio de trazado, drenaje transversal y obras de arte menores. Dimensiones y costos no definidos.",
    featured: true,
  },
  {
    slug: "estructura-concreto-antioquia",
    title: "Estructura de concreto reforzado — Nudo estructural",
    category: "Diseño de estructuras",
    location: "Medellín, Antioquia",
    description:
      "Sistema estructural de concreto armado para edificio de usos múltiples, con retícula de columnas y vigas pensada para optimizar cargas y claros de planta.",
    image:
      "https://images.unsplash.com/photo-1613694437268-b8b2a5f98f16?fm=jpg&q=60&w=1600&auto=format&fit=crop",
    imageAlt:
      "Estructura de concreto armado con columnas y vigas vista, detalle técnico de edificación.",
    status: "Proyecto conceptual",
    scope:
      "Alcance conceptual: modelo estructural, retícula de cimentación y elementos de contención. Capacidades de carga no especificadas.",
    featured: true,
  },
  {
    slug: "edificacion-institucional-cundinamarca",
    title: "Equipamiento institucional — Cundinamarca",
    category: "Edificación institucional",
    location: "Zipaquirá, Cundinamarca",
    description:
      "Proyecto arquitectónico y estructural de equipamiento público de dos niveles, con acceso universal, espacios de atención y zonas técnicas de servicios.",
    image:
      "https://images.unsplash.com/photo-1593347039453-c1c8df3a5631?fm=jpg&q=60&w=1600&auto=format&fit=crop",
    imageAlt:
      "Edificio institucional contemporáneo de concreto con acceso y áreas públicas.",
    status: "Proyecto conceptual",
    scope:
      "Alcance conceptual: arquitectura, estructura y obras de acabado. No se indican superficies ni costos ejecutados.",
    featured: true,
  },
  {
    slug: "drenaje-hidraulico-valle",
    title: "Sistema de drenaje y obras hidráulicas",
    category: "Obras hidráulicas",
    location: "Cali, Valle del Cauca",
    description:
      "Red de drenaje pluvial y obras de control de caudal para mitigate de inundaciones en zona urbana, con cámaras de visita y conductos de conducción.",
    image:
      "https://images.unsplash.com/photo-1683006386198-634a4ab121bd?fm=jpg&q=60&w=1600&auto=format&fit=crop",
    imageAlt:
      "Infraestructura de drenaje hidráulico con canales y estructuras de control de agua.",
    status: "Proyecto conceptual",
    scope:
      "Alcance conceptual: red de colectores, cámaras y obras de disipación. Caudales y capacidades no informadas.",
    featured: true,
  },
];

export const proyectoPorSlug = (slug: string): Proyecto | undefined =>
  proyectos.find((p) => p.slug === slug);
