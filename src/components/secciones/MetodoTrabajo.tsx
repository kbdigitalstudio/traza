"use client";

import { SectionTitle } from "@/components/SectionTitle";

/**
 * Método de trabajo: cinco etapas representadas sobre una retícula técnica.
 * Metodología conceptual, no garantía contractual universal.
 */

const ETAPAS = [
  {
    num: "01",
    title: "Diagnóstico",
    text: "Reconocimiento de sitio, revisión de antecedentes y definición del problema de ingeniería a resolver.",
  },
  {
    num: "02",
    title: "Planeación",
    text: "Establecimiento de criterios de diseño, normativa aplicable, alcance y programación preliminar del proyecto.",
  },
  {
    num: "03",
    title: "Diseño",
    text: "Desarrollo de modelos estructurales, planos de detalle y especificaciones técnicas que definen la obra.",
  },
  {
    num: "04",
    title: "Ejecución y seguimiento",
    text: "Acompañamiento técnico en obra, control de avances y verificación de que se cumplan planos y especificaciones.",
  },
  {
    num: "05",
    title: "Entrega y evaluación",
    text: "Recepción de la obra, documentación técnica as-built y plan de mantenimiento preventivo.",
  },
];

export function MetodoTrabajo() {
  return (
    <section id="metodo" className="bg-concreto py-20 md:py-28 lg:py-36">
      <div className="mx-auto max-w-72 px-4 sm:px-6 lg:px-8">
        <SectionTitle
          etiqueta="Proceso"
          title="Método de trabajo."
          description={
            "Cinco etapas representadas sobre una retícula técnica. Se describe como metodología conceptual, no como garantía contractual universal."
          }
        />

        {/* Retícula de fondo sutil */}
        <div className="relative reticle -mt-8 md:-mt-12 mb-8 md:mb-12 lg:mb-16 overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-5 gap-6 lg:gap-10">
            {ETAPAS.map((etapa) => (
              <article
                key={etapa.num}
                className="flex flex-col items-center gap-4"
              >
                {/* Número de etapa */}
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-white border border-naranja text-naranja font-black text-xl font-mono shadow-sm">
                  {etapa.num}
                </div>
                <h3 className="text-grafito font-bold text-sm md:text-base tracking-wide uppercase text-center">
                  {etapa.title}
                </h3>
                <p className="mt-2 text-[0.85rem] leading-6 text-grafito/60 text-center max-w-xs">
                  {etapa.text}
                </p>
                {/* Conector entre etapas (excepto la última) */}
                {etapa.num !== "05" && (
                  <div className="mt-2 h-[1px] w-8 bg-grafito/30" />
                )}
              </article>
            ))}
          </div>
          {/* Línea horizontal de la retícula */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[1px] bg-grafito/20 -z-10" />
        </div>

        <p className="text-[0.8rem] text-grafito/50 max-w-md">
          Cada etapa puede adaptarse a la naturaleza del proyecto. Los plazos
          y entregables se definen por caso.
        </p>
      </div>
    </section>
  );
}
