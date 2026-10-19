import type { ReactNode } from "react";
import { Container } from "./Container";
import { cn } from "@/lib/utils";

type SectionTone = "concreto" | "white" | "grafito";

const TONES: Record<SectionTone, string> = {
  concreto: "bg-concreto text-grafito",
  white: "bg-white text-grafito",
  grafito: "bg-grafito text-concreto",
};

export type SectionProps = {
  children: ReactNode;
  id?: string;
  tone?: SectionTone;
  compact?: boolean;
  bordered?: boolean;
  className?: string;
};

/**
 * Envoltorio compartido de sección: fondo, ritmo vertical y retícula.
 * Centraliza el espaciado para evitar padding duplicado entre secciones.
 */
export function Section({
  children,
  id,
  tone = "concreto",
  compact = false,
  bordered = false,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        TONES[tone],
        compact ? "py-10 md:py-12 lg:py-14" : "py-14 md:py-16 lg:py-20",
        bordered && "border-y border-grafito/10",
        className
      )}
    >
      <Container>{children}</Container>
    </section>
  );
}
