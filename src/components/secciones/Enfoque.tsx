import { Section } from "@/components/Section";
import { SectionTitle } from "@/components/SectionTitle";

const PILARES = [
  {
    title: "Precisión técnica",
    text: "Cálculos y modelos basados en criterios de ingeniería, con trazabilidad desde el diagnóstico hasta la entrega.",
    marca: "P.01",
  },
  {
    title: "Planificación responsable",
    text: "Secuenciación realista de actividades y gestión de recursos para evitar sobrecostos y cuellos de botella.",
    marca: "P.02",
  },
  {
    title: "Eficiencia y durabilidad",
    text: "Soluciones constructivas pensadas para el ciclo de vida de la obra y un mantenimiento reducido.",
    marca: "P.03",
  },
];

export function Enfoque() {
  return (
    <Section id="enfoque" tone="white" bordered>
      <SectionTitle
        etiqueta="Propuesta de valor"
        title="Criterio antes que volumen."
        description="Tres pilares que definen la forma de abordar cada proyecto de infraestructura."
      />

      <div className="grid gap-8 md:grid-cols-3 md:gap-10">
        {PILARES.map((pilar) => (
          <article
            key={pilar.marca}
            className="border-l border-grafito/15 pl-5"
          >
            <p className="eyebrow text-naranja-texto">{pilar.marca}</p>
            <h3 className="mt-3 max-w-[22ch] text-xl font-bold leading-tight tracking-[-0.025em] text-grafito">
              {pilar.title}
            </h3>
            <p className="mt-3 max-w-[38ch] text-[0.86rem] leading-6 text-grafito/70">
              {pilar.text}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
