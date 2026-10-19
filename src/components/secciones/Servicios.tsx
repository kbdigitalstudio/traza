import { SectionTitle } from "@/components/SectionTitle";
import { ServiceCard } from "@/components/ServiceCard";
import { Container } from "@/components/Container";
import { servicios } from "@/data/servicios";

export function Servicios() {
  return (
    <section id="servicios" className="bg-white py-16 md:py-20 lg:py-24 border-y border-grafito/10">
      <Container>
        <SectionTitle
          etiqueta="Áreas de práctica"
          title="Servicios de ingeniería."
          description={
            "Cada bloque describe el problema técnico que el servicio ayuda a resolver y qué información conviene aportar. No se afirman habilitaciones profesionales ni licencias no verificadas."
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
