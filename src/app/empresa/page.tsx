import { Section } from "@/components/Section";
import { SectionTitle } from "@/components/SectionTitle";
import { MetodoTrabajo } from "@/components/secciones/MetodoTrabajo";
import { Enfoque } from "@/components/secciones/Enfoque";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Empresa",
  description:
    "Identidad y metodología de TRAZA Ingeniería & Infraestructura: firma conceptual de ingeniería civil para el mercado colombiano.",
};

const PERSONALIDAD = [
  "Técnica y precisa.",
  "Contemporánea y sobria.",
  "Confiable y orientada a resultados.",
  "Comprometida con el desarrollo de infraestructura.",
];

const FICHA = [
  ["Naturaleza", "Concepto de marca"],
  ["Disciplina", "Ingeniería civil"],
  ["Mercado", "Colombia"],
  ["Alcance", "Portafolio demostrativo"],
];

export default function EmpresaPage() {
  return (
    <>
      <Section tone="concreto" compact>
        <SectionTitle
          as="h1"
          etiqueta="Identidad · Concepto de marca"
          title="Empresa."
          description="TRAZA es un concepto de ingeniería civil orientado al desarrollo de infraestructura en Colombia: una identidad técnica, precisa, contemporánea y sobria."
        />

        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <div>
            <h2 className="text-2xl font-extrabold tracking-[-0.03em] text-grafito md:text-3xl">
              Concepto de marca
            </h2>

            <blockquote className="mt-4 border-l-2 border-naranja pl-4 text-lg font-medium leading-8 tracking-[-0.01em] text-grafito md:text-xl">
              “Construimos las conexiones que impulsan el futuro.”
            </blockquote>

            <p className="mt-5 max-w-[62ch] text-[0.95rem] leading-7 text-grafito/65">
              Una firma conceptual colombiana especializada en ingeniería civil,
              consultoría técnica, estructuras, infraestructura y gestión de
              proyectos. La identidad combina precisión técnica, claridad
              editorial y una lectura contemporánea del territorio.
            </p>

            <h3 className="eyebrow mt-8 text-grafito/70">Personalidad</h3>
            <ul className="mt-3 grid gap-x-8 gap-y-2 sm:grid-cols-2">
              {PERSONALIDAD.map((rasgo) => (
                <li
                  key={rasgo}
                  className="flex items-start gap-2.5 border-t border-grafito/10 pt-2.5 text-[0.86rem] leading-6 text-grafito/70"
                >
                  <span
                    className="mt-2 h-[5px] w-[5px] shrink-0 bg-naranja"
                    aria-hidden="true"
                  />
                  {rasgo}
                </li>
              ))}
            </ul>

            <p className="mt-8 max-w-[62ch] border-t border-grafito/10 pt-4 text-[0.74rem] leading-5 text-grafito/70">
              Este sitio es un concepto demostrativo desarrollado para el
              portafolio de KB Digital Studio. No se afirman años de
              experiencia, certificaciones, licencias, contratos, clientes
              reales ni premios.
            </p>
          </div>

          <aside className="h-fit border border-grafito/15 bg-white p-5 md:p-6">
            <p className="eyebrow text-grafito/70">Ficha de identidad</p>
            <dl className="mt-4">
              {FICHA.map(([label, value]) => (
                <div
                  key={label}
                  className="grid grid-cols-[7rem_1fr] gap-3 border-t border-grafito/10 py-3"
                >
                  <dt className="eyebrow pt-0.5 text-grafito/70">{label}</dt>
                  <dd className="text-[0.85rem] font-medium leading-6 text-grafito">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-[0.72rem] leading-5 text-grafito/70">
              Ficha descriptiva del concepto. No constituye información
              corporativa verificada.
            </p>
          </aside>
        </div>
      </Section>

      <MetodoTrabajo />
      <Enfoque />
    </>
  );
}
