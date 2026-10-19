import { Section } from "@/components/Section";
import { SectionTitle } from "@/components/SectionTitle";
import { ServiceCard } from "@/components/ServiceCard";
import { servicios } from "@/data/servicios";

export function Servicios() {
  return (
    <Section id="servicios" tone="white" bordered>
      <SectionTitle
        etiqueta="Áreas de práctica · 08 servicios"
        title="Servicios de ingeniería."
        description="Cada área describe el problema técnico que ayuda a resolver y la información necesaria para una cotización. No se afirman habilitaciones ni licencias profesionales."
      />

      <div className="grid gap-x-10 sm:grid-cols-2">
        {servicios.map((servicio, index) => (
          <ServiceCard
            key={servicio.slug}
            servicio={servicio}
            index={index}
            showWhatToBring={false}
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
