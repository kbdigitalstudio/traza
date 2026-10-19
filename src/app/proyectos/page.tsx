import { ProjectCard } from "@/components/ProjectCard";
import { SectionTitle } from "@/components/SectionTitle";
import { Container } from "@/components/Container";
import { proyectos } from "@/data/proyectos";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Portafolio conceptual de TRAZA: infraestructura vial, estructuras de concreto, edificación institucional y obras hidráulicas. Casos demostrativos de ingeniería civil en Colombia.",
};

export default function ProyectosPage() {
  return (
    <section className="bg-concreto py-16 md:py-20 lg:py-24">
      <Container>
        <SectionTitle
          etiqueta="Portafolio conceptual"
          title="Proyectos."
          description={
            "Casos demostrativos que ilustran el enfoque de TRAZA en distintas ramas de la ingeniería civil. Todas las ubicaciones y datos son parte del concepto y no obras ejecutadas por una empresa real."
          }
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
          {proyectos.map((proyecto) => (
            <ProjectCard key={proyecto.slug} proyecto={proyecto} />
          ))}
        </div>

        <p className="mt-8 text-[0.78rem] text-grafito/50 max-w-md">
          Nota: las fotografías son referencias ilustrativas bajo licencia
          Unsplash y no representan obras propias de TRAZA.
        </p>
      </Container>
    </section>
  );
}
