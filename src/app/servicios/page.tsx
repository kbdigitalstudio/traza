import { Section } from "@/components/Section";
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
    <Section tone="white" bordered>
      <SectionTitle
        as="h1"
        etiqueta="Áreas de práctica · 08 servicios"
        title="Servicios de ingeniería."
        description="Cada servicio explica el problema técnico que ayuda a resolver y qué información conviene aportar. No se afirman certificaciones, matrículas ni licencias no verificadas."
      />

      <div className="grid gap-x-10 sm:grid-cols-2">
        {servicios.map((servicio, index) => (
          <ServiceCard
            key={servicio.slug}
            servicio={servicio}
            index={index}
            headingLevel="h2"
          />
        ))}
      </div>

      <p className="mt-8 max-w-[70ch] border-t border-grafito/10 pt-4 text-[0.74rem] leading-5 text-grafito/70">
        Los servicios se describen a nivel conceptual. Para requerimientos
        sujetos a regulación profesional, consulte los requisitos vigentes en su
        jurisdicción.
      </p>
    </Section>
  );
}
