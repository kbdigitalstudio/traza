import { Hero } from "@/components/secciones/Hero";
import { ProyectosDestacados } from "@/components/secciones/ProyectosDestacados";
import { Servicios } from "@/components/secciones/Servicios";
import { MetodoTrabajo } from "@/components/secciones/MetodoTrabajo";
import { Enfoque } from "@/components/secciones/Enfoque";
import { Cobertura } from "@/components/secciones/Cobertura";
import { CTA } from "@/components/secciones/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inicio",
  description:
    "TRAZA Ingeniería & Infraestructura — Concepto de ingeniería civil colombiana. Estructuras, infraestructura vial, interventoría, obras hidráulicas y gestión de obra.",
};

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ProyectosDestacados />
      <Servicios />
      <MetodoTrabajo />
      <Enfoque />
      <Cobertura />
      <CTA />
    </div>
  );
}
