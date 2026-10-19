"use client";

import { SectionTitle } from "@/components/SectionTitle";
import { Container } from "@/components/Container";

/**
 * Método de trabajo: cinco etapas representadas sobre una secuencia técnica
 * con línea de conexión. Metodología conceptual, no garantía contractual universal.
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
      <Container>
        <SectionTitle
          etiqueta="Proceso"
          title="Método de trabajo."
          description={
            "Cinco etapas representadas sobre una secuencia técnica con línea de conexión. Se describe como metodología conceptual, no como garantía contractual universal."
          }
        />

        <div className="relative linea-conexion mt-8 md:mt-12 mb-12 lg:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 lg:gap-10 z-10">
            {ETAPAS.map((etapa) => (
              <article
                key={etapa.num}
                className="flex flex-col items-center gap-4"
              >
                {/* Número de etapa */}
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-white border-2 border-naranja text-naranja font-black text-xl font-mono shadow-md">
                  {etapa.num}
                </div>
                <h3 className="text-grafito font-bold text-sm md:text-base tracking-wide uppercase text-center">
                  {etapa.title}
                </h3>
                <p className="mt-2 text-[0.85rem] leading-6 text-grafito/60 text-center max-w-xs">
                  {etapa.text}
                </p>
              </article>
            ))}
          </div>
        </div>

        <p className="text-[0.8rem] text-grafito/50 max-w-md">
          Cada etapa puede adaptarse a la naturaleza del proyecto. Los plazos
          y entregables se definen por caso.
        </p>
      </Container>
    </section>
  );
}
