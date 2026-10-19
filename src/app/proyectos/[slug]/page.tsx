import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { type Metadata } from "next";
import { proyectos, proyectoPorSlug } from "@/data/proyectos";
import { Container } from "@/components/Container";
import { cn } from "@/lib/utils";

export async function generateStaticParams() {
  return proyectos.map((proyecto) => ({ slug: proyecto.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const proyecto = proyectoPorSlug(slug);

  if (!proyecto) {
    return { title: "Proyecto no encontrado | TRAZA" };
  }

  return {
    title: `${proyecto.title} | TRAZA`,
    description: proyecto.description,
  };
}

export default async function ProyectoDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const proyecto = proyectoPorSlug(slug);

  if (!proyecto) {
    notFound();
  }

  return (
    <article className="bg-concreto flex flex-col">
      <header className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src={proyecto.image}
          alt={proyecto.imageAlt}
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-grafito/95 via-grafito/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8 pb-8 md:pb-12">
          <Container>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur px-3 py-1 text-[0.68rem] font-bold text-concreto tracking-wider uppercase border border-concreto/30">
              {proyecto.status}
            </span>
            <h1 className="mt-5 font-black tracking-tight leading-[1.05] text-3xl md:text-5xl lg:text-6xl text-blanco">
              {proyecto.title}
            </h1>
            <p className="mt-4 text-concreto/70 text-lg md:text-xl leading-7 max-w-md">
              {proyecto.category} · {proyecto.location}
            </p>
          </Container>
        </div>
      </header>

      <div className="flex-1">
        <Container className="py-16 md:py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 lg:gap-8">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="font-black text-grafito text-3xl md:text-4xl tracking-tight leading-tight">
                Descripción técnica
              </h2>
              <p className="text-grafito/70 text-lg leading-8">
                {proyecto.description}
              </p>
            </div>

            <div className="space-y-4">
              <div className="rounded-md border border-grafito/15 bg-white p-5">
                <h3 className="font-bold text-grafito text-sm tracking-wide uppercase mb-3">
                  Alcance conceptual
                </h3>
                <p className="text-grafito/60 text-sm leading-6">
                  {proyecto.scope}
                </p>
              </div>

              <div className="rounded-md border border-grafito/15 bg-white p-5">
                <h3 className="font-bold text-grafito text-sm tracking-wide uppercase mb-3">
                  Ficha del caso
                </h3>
                <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                  <div className="col-span-2 text-grafito/50 font-mono text-xs tracking-wider uppercase">
                    identificador
                  </div>
                  <div className="col-span-2 text-grafito font-mono text-sm">
                    {proyecto.slug}
                  </div>
                  <div className="text-grafito/50 font-mono text-xs tracking-wider uppercase">
                    categoría
                  </div>
                  <div className="col-span-2 text-grafito">{proyecto.category}</div>
                  <div className="text-grafito/50 font-mono text-xs tracking-wider uppercase">
                    ubicación
                  </div>
                  <div className="col-span-2 text-grafito">{proyecto.location}</div>
                  <div className="text-grafito/50 font-mono text-xs tracking-wider uppercase">
                    estado
                  </div>
                  <div className="col-span-2 text-grafito/60 font-mono text-sm">
                    {proyecto.status}
                  </div>
                </dl>
                <p className="mt-4 text-[0.72rem] text-grafito/40 max-w-xs">
                  Caso demostrativo. No se publican dimensiones, capacidades de
                  carga ni costos ejecutados.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 lg:mt-16 flex gap-3 justify-center lg:justify-start">
            <Link
              href="/proyectos"
              className={cn(
                "inline-flex items-center justify-center gap-2 rounded-md border border-grafito bg-white text-grafito px-4 py-2 text-sm font-semibold hover:bg-grafito/5 transition-colors focus-visible:ring-2 focus-visible:ring-naranja focus-visible:outline-none"
              )}
            >
              Volver a proyectos{" "}
              <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/contacto"
              className={cn(
                "inline-flex items-center justify-center gap-2 rounded-md bg-naranja text-white px-4 py-2 text-sm font-semibold hover:bg-naranja/90 transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
              )}
            >
              Solicitar cotización{" "}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Container>
      </div>
    </article>
  );
}
