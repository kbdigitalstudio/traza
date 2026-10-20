import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { buttonVariants } from "@/components/ui/button-variants";

export function Hero() {
  return (
    <section
      className="relative -mt-16 flex min-h-[560px] overflow-hidden bg-grafito text-concreto md:min-h-[620px]"
      aria-labelledby="hero-titular"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/hero-infraestructura.jpg"
          alt="Viaducto de concreto de gran escala visto desde abajo, fotografía ilustrativa de infraestructura."
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_58%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-grafito/95 via-grafito/70 to-grafito/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-grafito via-grafito/25 to-grafito/35" />
        <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-grafito/90 to-transparent" />
      </div>

      <Container className="relative flex min-h-[560px] flex-col justify-end pb-8 pt-28 md:min-h-[620px] md:pb-10 md:pt-32">
        <div className="max-w-3xl">
          <p className="eyebrow mb-5 flex items-center gap-3 text-concreto/70">
            <span className="h-px w-8 bg-naranja" aria-hidden="true" />
            Ingeniería civil · Colombia
          </p>

          <h1
            id="hero-titular"
            className="text-[clamp(2.35rem,5.4vw,4.7rem)] font-extrabold leading-[0.98] tracking-[-0.045em] text-balance"
          >
            <span className="block text-concreto">Infraestructura que conecta.</span>
            <span className="block text-naranja">Ingeniería que transforma.</span>
          </h1>

          <p className="mt-5 max-w-[52ch] text-[0.98rem] leading-7 text-concreto/75 md:text-[1.05rem] md:leading-8">
            Diseño, planeación y desarrollo de proyectos de infraestructura
            civil: estructuras, corredores viales, edificación institucional y
            obras hidráulicas.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/proyectos"
              className={buttonVariants({ variant: "primary", size: "lg" })}
            >
              Explorar proyectos
              <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/contacto"
              className={buttonVariants({ variant: "outlineInverse", size: "lg" })}
            >
              Hablemos de tu proyecto
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-concreto/20 pt-4 text-concreto/70 sm:flex-row sm:items-center sm:justify-between">
          <p className="eyebrow flex items-center gap-2">
            <span className="text-naranja">01</span>
            Portafolio conceptual
          </p>
          <p className="eyebrow text-concreto/70">
            Fotografía ilustrativa · Unsplash
          </p>
        </div>
      </Container>
    </section>
  );
}
