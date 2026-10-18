import { ProjectCard } from "@/components/ProjectCard";
import { SectionTitle } from "@/components/SectionTitle";
import { proyectos } from "@/data/proyectos";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Portafolio conceptual de TRAZA: infraestructura vial, estructuras de concreto, edificación institucional y obras hidráulicas. Casos demostrativos de ingeniería civil en Colombia.",
};

export default function ProyectosPage() {
  return (
    <section className="bg-concreto py-20 md:py-28 lg:py-36">
      <div className="mx-auto max-w-72 px-4 sm:px-6 lg:px-8">
        <SectionTitle
          etiqueta="Portafolio conceptual"
          title="Proyectos."
          description={
            "Casos demostrativos que ilustran el enfoque de TRAZA en distintas ramas de la ingeniería civil. Todas las ubicaciones y datos son parte del concepto y no obras ejecutadas por una empresa real."
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {proyectos.map((proyecto) => (
            <ProjectCard key={proyecto.slug} proyecto={proyecto} />
          ))}
        </div>

        <p className="mt-10 text-[0.8rem] text-grafito/50 max-w-md">
          Nota: las fotografías son referencias ilustrativas bajo licencia
          Unsplash y no representan obras propias de TRAZA.
        </p>
      </div>
    </section>
  );
}
