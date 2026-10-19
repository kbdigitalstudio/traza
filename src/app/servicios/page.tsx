import { SectionTitle } from "@/components/SectionTitle";
import { Container } from "@/components/Container";
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
    <section className="bg-white py-16 md:py-20 lg:py-24 border-y border-grafito/10">
      <Container>
        <SectionTitle
          etiqueta="Áreas de práctica"
          title="Servicios de ingeniería."
          description={
            "Cada servicio explica brevemente el problema técnico que ayuda a resolver. No se afirman certificaciones, matrículas ni licencias no verificadas."
          }
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
          {servicios.map((servicio) => (
            <ServiceCard key={servicio.slug} servicio={servicio} />
          ))}
        </div>

        <p className="mt-8 text-[0.78rem] text-grafito/50 max-w-md">
          Los servicios se describen a nivel conceptual. Para requerimientos
          sujetos a regulación profesional, consulte los requisitos vigentes en
          su jurisdicción.
        </p>
      </Container>
    </section>
  );
}
