import { Section } from "@/components/Section";
import { SectionTitle } from "@/components/SectionTitle";
import { ProjectCard } from "@/components/ProjectCard";
import { proyectos } from "@/data/proyectos";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Portafolio conceptual de TRAZA: infraestructura vial, estructuras de concreto, edificación institucional y obras hidráulicas. Casos demostrativos de ingeniería civil en Colombia.",
};

export default function ProyectosPage() {
  return (
    <Section tone="concreto">
      <SectionTitle
        as="h1"
        etiqueta="Portafolio conceptual · 04 casos"
        title="Proyectos."
        description="Casos demostrativos que ilustran el enfoque de TRAZA en distintas ramas de la ingeniería civil. Todas las ubicaciones y datos forman parte del concepto y no corresponden a obras ejecutadas."
      />

      <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-9 lg:gap-x-8 lg:gap-y-11">
        {proyectos.map((proyecto, index) => (
          <ProjectCard
            key={proyecto.slug}
            proyecto={proyecto}
            index={index}
            headingLevel="h2"
          />
        ))}
      </div>

      <div className="mt-9 flex flex-col gap-2 border-t border-grafito/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-[62ch] text-[0.74rem] leading-5 text-grafito/70">
          Fotografías ilustrativas bajo licencia Unsplash. No representan obras
          propias de TRAZA.
        </p>
        <p className="eyebrow shrink-0 text-grafito/70">04 casos / concepto</p>
      </div>
    </Section>
  );
}
