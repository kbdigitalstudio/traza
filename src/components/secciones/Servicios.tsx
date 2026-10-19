import { SectionTitle } from "@/components/SectionTitle";
import { ServiceCard } from "@/components/ServiceCard";
import { Container } from "@/components/Container";
import { servicios } from "@/data/servicios";

/**
 * Servicios de ingeniería presentados en bloques visuales coherentes.
 * Cada servicio explica el problema que ayuda a resolver y qué información
 * conviene aportar para solicitar una cotización.
 * Sin afirmaciones de certificaciones o matrículas no verificadas.
 */

export function Servicios() {
  return (
    <section id="servicios" className="bg-white py-20 md:py-28 lg:py-36 border-y border-grafito/10">
      <Container>
        <SectionTitle
          etiqueta="Áreas de práctica"
          title="Servicios de ingeniería."
          description={
            "Cada bloque describe el problema técnico que el servicio ayuda a resolver y qué información conviene aportar. No se afirman habilitaciones profesionales ni licencias no verificadas."
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicios.map((servicio, idx) => (
            <ServiceCard
              key={servicio.slug}
              servicio={servicio}
              variant={idx % 3}
            />
          ))}
        </div>

        <p className="mt-10 text-[0.8rem] text-grafito/50 max-w-md">
          Los servicios se describen a nivel conceptual. Para requerimientos
          sujetos a regulación profesional, consulte los requisitos vigentes en
          su jurisdicción.
        </p>
      </Container>
    </section>
  );
}
