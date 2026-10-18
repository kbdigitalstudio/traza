/**
 * Logotipo tipográfico original de TRAZA.
 * Geometría inspirada en ejes, retículas y cotas de planos estructurales.
 * Sin imágenes de terceros ni marcas existentes.
 */

export type LogoProps = {
  /** Tamaño base del logotipo (afecta marca y tipografía). */
  size?: "sm" | "md" | "lg";
  /** Si se muestra el descriptor "Ingeniería & Infraestructura". */
  withDescriptor?: boolean;
  className?: string;
};

const sizes: Record<string, { mark: number; gap: number; desc: number }> = {
  sm: { mark: 28, gap: 10, desc: 10 },
  md: { mark: 36, gap: 14, desc: 12 },
  lg: { mark: 46, gap: 20, desc: 16 },
};

export function Logo({
  size = "md",
  withDescriptor = true,
  className,
}: LogoProps) {
  const s = sizes[size];

  return (
    <div
      className={[
        "inline-flex items-center gap-x-3 cursor-pointer select-none",
        className,
      ].filter(Boolean).join(" ")}
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
            id="arrow"
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
        {/* Marco reticular */}
        <rect x="1" y="1" width="30" height="30" stroke="currentColor" strokeWidth="1.5" rx="2" />
        {/* Ejes coordenados */}
        <line x1="8" y1="8" x2="24" y2="8" stroke="currentColor" strokeWidth="1.5" marker-end="url(#arrow)" />
        <line x1="8" y1="24" x2="24" y2="24" stroke="currentColor" strokeWidth="1" />
        <line x1="8" y1="8" x2="8" y2="24" stroke="currentColor" strokeWidth="1.5" marker-end="url(#arrow)" />
        <line x1="24" y1="8" x2="24" y2="24" stroke="currentColor" strokeWidth="1" />
        {/* Cota / medición */}
        <line x1="6" y1="4" x2="26" y2="4" stroke="currentColor" strokeWidth="1" strokeDasharray="1 1" />
        <line x1="6" y1="4" x2="6" y2="6" stroke="currentColor" strokeWidth="1.5" />
        <line x1="26" y1="4" x2="26" y2="6" stroke="currentColor" strokeWidth="1.5" />
        {/* Estructura triangular (fachada de vano) */}
        <path d="M12 18 L16 12 L20 18" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinejoin="round" />
        <line x1="16" y1="12" x2="16" y2="18" stroke="currentColor" strokeWidth="1.2" />
      </svg>

      <div className="flex flex-col leading-none">
        <span
          className={[
            "text-grafito font-black tracking-[-0.02em]",
            size === "lg" ? "text-3xl" : size === "md" ? "text-2xl" : "text-xl",
          ].join(" ")}
        >
          TRAZA
        </span>
        {withDescriptor && (
          <span
            className={[
              "text-[0.62rem] tracking-widest uppercase text-verde font-semibold",
              size === "lg" ? "mt-1" : "mt-0.5",
            ].join(" ")}
          >
            Ingeniería &amp; Infraestructura
          </span>
        )}
      </div>
    </div>
  );
}
