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
    image: "/images/proyecto-vial.jpg",
    imageAlt:
      "Puente atirantado de concreto sobre un río, rodeado de vegetación; fotografía ilustrativa de infraestructura vial.",
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
    image: "/images/proyecto-estructura.jpg",
    imageAlt:
      "Vista inferior de un viaducto de concreto con columnas y vigas; fotografía ilustrativa de estructura.",
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
    image: "/images/proyecto-edificacion.jpg",
    imageAlt:
      "Edificio institucional contemporáneo de fachada clara y volumen angular; fotografía ilustrativa de edificación.",
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
      "Red de drenaje pluvial y obras de control de caudal para mitigar inundaciones en zona urbana, con cámaras de visita y conductos de conducción.",
    image: "/images/proyecto-hidraulica.jpg",
    imageAlt:
      "Puente sobre un embalse entre montañas; fotografía ilustrativa de obras hidráulicas y territorio.",
    status: "Proyecto conceptual",
    scope:
      "Alcance conceptual: red de colectores, cámaras y obras de disipación. Caudales y capacidades no informadas.",
    featured: true,
  },
];

export const proyectoPorSlug = (slug: string): Proyecto | undefined =>
  proyectos.find((p) => p.slug === slug);
