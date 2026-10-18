import { SectionTitle } from "@/components/SectionTitle";
import { ServiceCard } from "@/components/ServiceCard";
import { servicios } from "@/data/servicios";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Servicios de ingeniería de TRAZA: estructural, estudios y diseños técnicos, infraestructura vial, interventoría, consultoría, gestión de obra, obras hidráulicas y evaluación de proyectos.",
};

export default function ServiciosPage() {
  return (
    <section className="bg-white py-20 md:py-28 lg:py-36 border-y border-grafito/10">
      <div className="mx-auto max-w-72 px-4 sm:px-6 lg:px-8">
        <SectionTitle
          etiqueta="Áreas de práctica"
          title="Servicios de ingeniería."
          description={
            "Cada servicio explica brevemente el problema técnico que ayuda a resolver. No se afirman certificaciones, matrículas ni licencias no verificadas."
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicios.map((servicio) => (
            <ServiceCard key={servicio.slug} servicio={servicio} />
          ))}
        </div>

        <p className="mt-10 text-[0.8rem] text-grafito/50 max-w-md">
          Los servicios se describen a nivel conceptual. Para requerimientos
          sujetos a regulación profesional, consulte los requisitos vigentes en
          su jurisdicción.
        </p>
      </div>
    </section>
  );
}
