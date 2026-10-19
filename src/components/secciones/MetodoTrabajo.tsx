import { Section } from "@/components/Section";
import { SectionTitle } from "@/components/SectionTitle";

const ETAPAS = [
  {
    num: "01",
    title: "Diagnóstico",
    text: "Reconocimiento de sitio, revisión de antecedentes y definición del problema de ingeniería.",
  },
  {
    num: "02",
    title: "Planeación",
    text: "Criterios de diseño, normativa aplicable, alcance y programación preliminar.",
  },
  {
    num: "03",
    title: "Diseño",
    text: "Modelos estructurales, planos de detalle y especificaciones técnicas de la obra.",
  },
  {
    num: "04",
    title: "Ejecución y seguimiento",
    text: "Acompañamiento técnico, control de avances y verificación de planos y especificaciones.",
  },
  {
    num: "05",
    title: "Entrega y evaluación",
    text: "Recepción, documentación técnica as-built y plan de mantenimiento preventivo.",
  },
];

export function MetodoTrabajo() {
  return (
    <Section id="metodo" tone="concreto">
      <SectionTitle
        etiqueta="Proceso · Trazado 01—05"
        title="Un método que sigue el trazado."
        description="Cinco etapas ordenadas de lo técnico a lo documental. La metodología es conceptual; plazos y entregables se definen por proyecto."
      />

      <ol className="grid gap-x-5 gap-y-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {ETAPAS.map((etapa) => (
          <li
            key={etapa.num}
            className="relative border-t border-grafito/20 pt-4"
          >
            <span
              className="absolute -top-[2.5px] left-0 h-[5px] w-[5px] bg-naranja"
              aria-hidden="true"
            />
            <span className="font-mono text-[1.55rem] font-light leading-none tracking-[-0.04em] text-grafito/55">
              {etapa.num}
            </span>
            <h3 className="mt-3 text-[0.82rem] font-bold uppercase leading-snug tracking-[0.06em] text-grafito">
              {etapa.title}
            </h3>
            <p className="mt-2 text-[0.82rem] leading-6 text-grafito/70">
              {etapa.text}
            </p>
          </li>
        ))}
      </ol>

      <p className="mt-8 max-w-[64ch] border-t border-grafito/10 pt-4 text-[0.74rem] leading-5 text-grafito/70">
        Cada etapa se adapta a la naturaleza del proyecto. Este concepto no
        acredita experiencia ni ejecución de obras.
      </p>
    </Section>
  );
}
