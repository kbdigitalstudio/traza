/**
 * Logotipo tipográfico original de TRAZA.
 * Geometría inspirada en ejes, retículas y cotas de planos estructurales.
 */

export type LogoProps = {
  /** Tamaño base del logotipo. */
  size?: "sm" | "md" | "lg";
  /** Muestra el descriptor "Ingeniería & Infraestructura". */
  withDescriptor?: boolean;
  /** "default" para fondos claros, "inverse" para fondos grafito. */
  variant?: "default" | "inverse";
  className?: string;
};

const sizes: Record<
  NonNullable<LogoProps["size"]>,
  { mark: number; word: string; desc: string }
> = {
  sm: { mark: 28, word: "text-[1.15rem]", desc: "text-[0.55rem]" },
  md: { mark: 34, word: "text-2xl", desc: "text-[0.58rem]" },
  lg: { mark: 44, word: "text-3xl", desc: "text-[0.62rem]" },
};

export function Logo({
  size = "md",
  withDescriptor = true,
  variant = "default",
  className,
}: LogoProps) {
  const s = sizes[size];
  const inverse = variant === "inverse";

  return (
    <div
      className={[
        "inline-flex select-none items-center gap-x-2.5",
        inverse ? "text-concreto" : "text-grafito",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* Marca geométrica: retícula con ejes y cota */}
      <svg
        width={s.mark}
        height={s.mark}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <defs>
          <marker
            id="traza-arrow"
            markerWidth="6"
            markerHeight="6"
            refX="5"
            refY="3"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M0,0 L0,6 L6,3 z" fill="currentColor" />
          </marker>
        </defs>
        <rect x="1" y="1" width="30" height="30" stroke="currentColor" strokeWidth="1.5" rx="1.5" />
        <line x1="8" y1="8" x2="24" y2="8" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#traza-arrow)" />
        <line x1="8" y1="24" x2="24" y2="24" stroke="currentColor" strokeWidth="1" />
        <line x1="8" y1="8" x2="8" y2="24" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#traza-arrow)" />
        <line x1="24" y1="8" x2="24" y2="24" stroke="currentColor" strokeWidth="1" />
        <line x1="6" y1="4" x2="26" y2="4" stroke="currentColor" strokeWidth="1" strokeDasharray="1 1" />
        <line x1="6" y1="4" x2="6" y2="6" stroke="currentColor" strokeWidth="1.5" />
        <line x1="26" y1="4" x2="26" y2="6" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 18 L16 12 L20 18" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinejoin="round" />
        <line x1="16" y1="12" x2="16" y2="18" stroke="currentColor" strokeWidth="1.2" />
      </svg>

      <div className="flex flex-col leading-none">
        <span
          className={`${s.word} font-extrabold tracking-[-0.04em]`}
        >
          TRAZA
        </span>
        {withDescriptor && (
          <span
            className={`${s.desc} mt-1 font-mono font-medium uppercase tracking-[0.16em] ${
              inverse ? "text-concreto/70" : "text-grafito/70"
            }`}
          >
            Ingeniería &amp; Infraestructura
          </span>
        )}
      </div>
    </div>
  );
}
