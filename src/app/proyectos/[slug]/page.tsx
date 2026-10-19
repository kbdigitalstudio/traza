import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { type Metadata } from "next";
import { proyectos, proyectoPorSlug } from "@/data/proyectos";
import { Section } from "@/components/Section";
import { buttonVariants } from "@/components/ui/button-variants";

export async function generateStaticParams() {
  return proyectos.map((proyecto) => ({ slug: proyecto.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const proyecto = proyectoPorSlug(slug);

  if (!proyecto) {
    return { title: "Proyecto no encontrado | TRAZA" };
  }

  return {
    title: proyecto.title,
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

  const ficha = [
    ["Identificador", proyecto.slug],
    ["Categoría", proyecto.category],
    ["Ubicación", proyecto.location],
    ["Estado", proyecto.status],
  ];
  const caseIndex = proyectos.findIndex((item) => item.slug === slug) + 1;

  return (
    <article className="bg-concreto">
      <Section tone="concreto" compact>
        <nav aria-label="Miga de pan" className="mb-6 flex items-center gap-2">
          <Link
            href="/proyectos"
            className="text-[0.78rem] font-medium text-grafito/70 transition-colors hover:text-grafito"
          >
            Proyectos
          </Link>
          <span className="text-grafito/30" aria-hidden="true">
            /
          </span>
          <span className="text-[0.78rem] text-grafito/70">
            Caso {String(caseIndex).padStart(2, "0")}
          </span>
        </nav>

        <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
          <div>
            <p className="eyebrow mb-3 flex items-center gap-2.5 text-grafito/70">
              <span className="rule-accent" aria-hidden="true" />
              {proyecto.category}
            </p>
            <h1 className="max-w-[22ch] text-[2.2rem] font-extrabold leading-[1.02] tracking-[-0.04em] text-grafito text-balance md:text-5xl">
              {proyecto.title}
            </h1>
            <p className="mt-4 text-[0.9rem] leading-6 text-grafito/70">
              {proyecto.location}
            </p>
          </div>

          <p className="max-w-[38ch] text-[0.78rem] leading-5 text-grafito/70 lg:justify-self-end lg:text-right">
            Caso demostrativo del portafolio conceptual. Las fotografías son
            ilustrativas y no representan obras ejecutadas.
          </p>
        </div>

        <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-card bg-grafito/10">
          <Image
            src={proyecto.image}
            alt={proyecto.imageAlt}
            fill
            priority
            sizes="(max-width: 1240px) 100vw, 1200px"
            className="object-cover object-center"
          />
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.5fr_0.85fr] lg:gap-14">
          <div>
            <p className="eyebrow text-grafito/70">Ficha técnica conceptual</p>
            <h2 className="mt-3 text-2xl font-extrabold tracking-[-0.03em] text-grafito md:text-3xl">
              Descripción técnica
            </h2>
            <p className="mt-4 max-w-[62ch] text-[0.95rem] leading-7 text-grafito/70">
              {proyecto.description}
            </p>

            <div className="mt-7 border-l-2 border-naranja bg-white px-4 py-3">
              <p className="text-[0.76rem] leading-5 text-grafito/70">
                Caso demostrativo. No se publican dimensiones, capacidades de
                carga, costos ejecutados ni resultados técnicos verificados.
              </p>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contacto"
                className={buttonVariants({ variant: "primary", size: "lg" })}
              >
                Solicitar cotización
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/proyectos"
                className={buttonVariants({ variant: "outline", size: "lg" })}
              >
                Volver a proyectos
              </Link>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="border-t border-grafito/20 pt-4">
              <h2 className="eyebrow text-grafito/70">Alcance conceptual</h2>
              <p className="mt-2 text-[0.85rem] leading-6 text-grafito/70">
                {proyecto.scope}
              </p>
            </div>

            <div className="border-t border-grafito/20 pt-4">
              <h2 className="eyebrow text-grafito/70">Ficha del caso</h2>
              <dl className="mt-3">
                {ficha.map(([label, value]) => (
                  <div
                    key={label}
                    className="grid grid-cols-[6.5rem_1fr] gap-3 border-t border-grafito/10 py-2.5"
                  >
                    <dt className="eyebrow pt-0.5 text-grafito/70">{label}</dt>
                    <dd className="break-words text-[0.82rem] leading-5 text-grafito">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </div>
      </Section>
    </article>
  );
}
