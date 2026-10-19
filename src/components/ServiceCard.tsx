import Link from "next/link";
import { type Servicio } from "@/data/servicios";

export type ServiceCardProps = {
  servicio: Servicio;
  index: number;
  showWhatToBring?: boolean;
  headingLevel?: "h2" | "h3";
};

export function ServiceCard({
  servicio,
  index,
  showWhatToBring = true,
  headingLevel = "h3",
}: ServiceCardProps) {
  const Heading = headingLevel;
  return (
    <article
      id={servicio.slug}
      className="scroll-mt-24 border-t border-grafito/15 py-5 md:py-6"
    >
      <div className="flex gap-4">
        <span className="eyebrow shrink-0 pt-0.5 text-grafito/70">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="min-w-0 flex-1">
          <Heading className="text-base font-bold leading-snug tracking-[-0.015em] text-grafito md:text-lg">
            <Link
              href={`/contacto?servicio=${servicio.slug}`}
              className="transition-colors duration-200 hover:text-naranja-texto"
              aria-label={`Solicitar cotización para: ${servicio.title}`}
            >
              {servicio.title}
              <span
                className="ml-2 inline-block text-[0.8em] font-normal text-grafito/55"
                aria-hidden="true"
              >
                →
              </span>
            </Link>
          </Heading>

          <p className="mt-2 max-w-[54ch] text-[0.86rem] leading-6 text-grafito/65">
            {servicio.description}
          </p>

          {showWhatToBring && (
            <p className="mt-3 max-w-[58ch] text-[0.76rem] leading-5 text-grafito/70">
              <span className="font-semibold uppercase tracking-[0.08em] text-naranja-texto">
                Para cotizar:
              </span>{" "}
              {servicio.whatToBring}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}
