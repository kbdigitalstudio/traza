import type { ReactNode } from "react";

/**
 * El header es fijo y siempre ocupa 4rem. Reservamos ese espacio de forma
 * estática para todas las rutas: así evitamos que el padding dependa de
 * usePathname y provoque saltos entre el HTML prerenderizado y el cliente.
 * La home compensa este espacio con un margen negativo en su hero.
 */
export function SiteOffset({ children }: { children: ReactNode }) {
  return <div className="pt-16">{children}</div>;
}
