import { SectionTitle } from "@/components/SectionTitle";
import { Container } from "@/components/Container";

const PILARES = [
  {
    title: "Precisión técnica",
    text:
      "Cálculos y modelos basados en criterios de ingeniería, con trazabilidad desde el diagnóstico hasta la entrega.",
    marca: "01",
  },
  {
    title: "Planificación responsable",
    text:
      "Secuenciación realista de actividades y gestión de recursos que evita sobre-costos y cuellos de botella.",
    marca: "02",
  },
  {
    title: "Eficiencia y durabilidad",
    text:
      "Soluciones constructivas pensadas para el ciclo de vida de la obra, con mantenimiento reducido a largo plazo.",
    marca: "03",
  },
];

export function Enfoque() {
  return (
    <section id="enfoque" className="bg-white py-16 md:py-20 lg:py-24 border-y border-grafito/10">
      <Container>
        <SectionTitle
          etiqueta="Propuesta de valor"
          title="Cómo trabajamos."
          description={
            "Tres pilares que definen la filosofía de TRAZA como firma de ingeniería civil."
          }
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">
          {PILARES.map((pilar) => (
            <article
              key={pilar.marca}
              className="rounded-md border border-grafito/15 bg-concreto p-4 md:p-5"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-1 h-3 bg-verde" />
                <span className="text-[0.68rem] font-black text-grafito tracking-wider uppercase">
                  {pilar.marca}
                </span>
              </div>
              <h3 className="text-grafito font-bold text-base md:text-lg tracking-tight leading-snug mb-3">
                {pilar.title}
              </h3>
              <p className="text-[0.85rem] leading-7 text-grafito/60">
                {pilar.text}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
