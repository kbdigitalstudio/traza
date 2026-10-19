import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/Container";

export function CTA() {
  return (
    <section id="cta" className="bg-grafito text-blanco py-20 md:py-24">
      <Container>
        <div className="rounded-md border border-concreto/20 bg-grafito/80 p-8 md:p-12">
          <h2
            className="font-black tracking-tight leading-[1.1] text-3xl md:text-5xl text-blanco mb-4"
          >
            ¿Tienes un proyecto que necesita una base sólida?
          </h2>
          <p className="max-w-md text-concreto/70 text-lg leading-7 mb-8 md:mb-10">
            Cuéntanos tu necesidad y coordinamos una conversación técnica sobre
            tu proyecto de infraestructura.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <Link href="/contacto">
              <Button variant="primary" size="lg">
                Solicitar cotización
              </Button>
            </Link>
            <Link href="/contacto">
              <Button variant="outline" size="lg">
                Formulario de contacto
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
