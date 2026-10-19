"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/**
 * El header es fijo. La home arranca bajo el hero para permitir la
 * cabecera transparente; el resto de rutas reserva la altura del header.
 */
export function SiteOffset({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return <div className={isHome ? undefined : "pt-16"}>{children}</div>;
}
