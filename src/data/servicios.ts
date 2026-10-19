/**
 * TRAZA — Servicios de ingeniería.
 *
 * Descripciones técnicas genéricas del problema que ayuda a resolver cada servicio.
 * No se afirman certificaciones, matrículas profesionales ni habilitaciones
 * regulatorias no verificadas.
 */

export type Servicio = {
  slug: string;
  title: string;
  description: string;
  problem: string;
  whatToBring: string;
};

export const servicios: Servicio[] = [
  {
    slug: "ingenieria-estructural",
    title: "Ingeniería estructural",
    description:
      "Diseño y cálculo de estructuras de concreto y acero que soportan cargas con seguridad y durabilidad, desde cimentación hasta elementos de contención.",
    problem:
      "Evita fallas estructurales y sobre-costos por sobrediseño, asegurando que la obra resista las solicitudes de uso y el entorno.",
    whatToBring:
      "Planos arquitectónicos o idea del edificio, uso previsto de la edificación y condiciones generales del terreno.",
  },
  {
    slug: "estudios-disenos-tecnicos",
    title: "Estudios y diseños técnicos",
    description:
      "Estudios de suelo, topografía, hidrología y diseños de detalle que definen la base técnica de un proyecto antes de ejecutar.",
    problem:
      "Reduce imprevistos en obra al identificar condiciones del terreno y restricciones hidráulicas en etapa de planeación.",
    whatToBring:
      "Ubicación del predio, documentos de propiedad o posesión y cualquier estudio previo disponible.",
  },
  {
    slug: "infraestructura-vial",
    title: "Infraestructura vial",
    description:
      "Trazado, pavimentación, drenaje transversal y obras de arte menores para corredores viales que conectan regiones y comunidades.",
    problem:
      "Mejora la movilidad y la seguridad vial con geometría adecuada y evacuación controlada de aguas pluviales.",
    whatToBring:
      "Trazado aproximado o corredor de interés, longitud estimada y tipo de vía ( urbana o rural ).",
  },
  {
    slug: "interventoria-supervision",
    title: "Interventoría y supervisión",
    description:
      "Acompañamiento técnico en la ejecución para verificar que los planos, especificaciones y plazos se cumplan con los estándares definidos.",
    problem:
      "Detecta desviaciones técnicas a tiempo y protege la calidad constructiva frente a errores de ejecución.",
    whatToBring:
      "Planos aprobados, cronograma de obra contratado y datos del constructor o contratista.",
  },
  {
    slug: "consultoria-ingenieria",
    title: "Consultoría de ingeniería",
    description:
      "Asesoría técnica especializada en factibilidad, normativa aplicable, optimización de estructuras y toma de decisiones de proyecto.",
    problem:
      "Apoya la toma de decisiones con criterio técnico independiente antes de comprometer recursos de inversión.",
    whatToBring:
      "Descripción del proyecto o idea de inversión, etapa actual y decisiones que se requieren tomar.",
  },
  {
    slug: "gestion-planificacion-obra",
    title: "Gestión y planificación de obra",
    description:
      "Programación de actividades, control de avances, gestión de recursos y coordinación de interfaces entre disciplinas.",
    problem:
      "Evita cuellos de botella y sobre-costos por mala secuenciación de las actividades constructivas.",
    whatToBring:
      "Alcance de obra definido, presupuesto referencial y plazo de entrega deseado.",
  },
  {
    slug: "obras-hidraulicas-drenaje",
    title: "Obras hidráulicas y drenaje",
    description:
      "Diseño de redes de drenaje pluvial, conductos de conducción, cámaras de visita y obras de disipación de energía.",
    problem:
      "Reduce el riesgo de inundaciones y el deterioro de la infraestructura por acumulación de aguas pluviales.",
    whatToBring:
      "Área a drenar, zona de descarga prevista y problemas de inundación conocidos.",
  },
  {
    slug: "evaluacion-optimizacion-proyectos",
    title: "Evaluación y optimización de proyectos",
    description:
      "Revisión crítica de proyectos existentes para identificar oportunidades de optimización estructural, constructiva y de mantenimiento.",
    problem:
      "Mejora la eficiencia de obras ya diseñadas sin comprometer la seguridad ni la vida útil de la estructura.",
    whatToBring:
      "Proyecto existente, planos y memorias de cálculo disponibles para revisión.",
  },
];

export const servicioPorSlug = (slug: string): Servicio | undefined =>
  servicios.find((s) => s.slug === slug);
