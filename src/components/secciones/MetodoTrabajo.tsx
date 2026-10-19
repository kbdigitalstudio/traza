"use client";

import { SectionTitle } from "@/components/SectionTitle";
import { Container } from "@/components/Container";

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
    <section id="metodo" className="bg-concreto py-16 md:py-20 lg:py-24">
      <Container>
        <SectionTitle
          etiqueta="Proceso"
          title="Método de trabajo."
          description={
            "Cinco etapas representadas sobre una secuencia técnica con línea de conexión. Se describe como metodología conceptual, no como garantía contractual universal."
          }
        />

        <div className="relative linea-conexion mt-6 md:mt-8 mb-8 lg:mb-10">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-6 z-10">
            {ETAPAS.map((etapa) => (
              <article
                key={etapa.num}
                className="flex flex-col items-center gap-3"
              >
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white border-2 border-naranja text-naranja font-black text-lg font-mono shadow-sm">
                  {etapa.num}
                </div>
                <h3 className="text-grafito font-bold text-sm md:text-base tracking-wide uppercase text-center">
                  {etapa.title}
                </h3>
                <p className="mt-1 text-[0.8rem] leading-6 text-grafito/60 text-center max-w-xs">
                  {etapa.text}
                </p>
              </article>
            ))}
          </div>
        </div>

        <p className="text-[0.78rem] text-grafito/50 max-w-md">
          Cada etapa puede adaptarse a la naturaleza del proyecto. Los plazos
          y entregables se definen por caso.
        </p>
      </Container>
    </section>
  );
}
