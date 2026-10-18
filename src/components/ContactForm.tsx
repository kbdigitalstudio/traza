"use client";

import Link from "next/link";
import { useState } from "react";
import { Button, cn } from "@/components/ui/button";

type FormData = {
  nombre: string;
  email: string;
  empresa: string;
  tipoProyecto: string;
  ubicacion: string;
  mensaje: string;
};

type FormState = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    email: "",
    empresa: "",
    tipoProyecto: "",
    ubicacion: "",
    mensaje: "",
  });

  const validate = (): boolean => {
    const next: Record<string, string> = {};
    if (!formData.nombre.trim()) next.nombre = "El nombre es obligatorio.";
    if (!formData.email.trim())
      next.email = "El correo electrónico es obligatorio.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      next.email = "Correo electrónico no válido.";
    if (!formData.tipoProyecto.trim())
      next.tipoProyecto = "Selecciona un tipo de proyecto.";
    if (!formData.ubicacion.trim())
      next.ubicacion = "La ubicación del proyecto es obligatoria.";
    if (!formData.mensaje.trim()) next.mensaje = "Describe tu necesidad.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleChange = (key: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    if (errors[key])
      setErrors((prev) => ({ ...prev, [key]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setState("sending");

    // Simulación de envío a un backend que aún no está conectado.
    // En producción, aquí se enviarían los datos a un servicio de correo o CRM.
    await new Promise((resolve) => setTimeout(resolve, 1200));

    setState("success");
  };

  return (
    <>
      {state === "success" ? (
        <div className="rounded-[2px] border border-naranja/30 bg-naranja/5 p-8 md:p-12 shadow-sm" role="status" aria-live="polite">
          <h2 className="font-bold text-naranja text-xl tracking-tight mb-3">
            Mensaje recibido
          </h2>
          <p className="text-grafito/70 text-lg leading-7 mb-6">
            Gracias por contactarnos. Hemos recibido tu consulta y nos
            comunicaremos contigo para coordinar los siguientes pasos.
          </p>
          <Link
            href="/"
            className={cn(
              "inline-flex items-center gap-2 rounded-full bg-grafito text-white px-5 py-2 text-sm font-semibold shadow-sm hover:bg-grafito/90 transition-colors focus-visible:ring-2 focus-visible:ring-naranja focus-visible:outline-none"
            )}
          >
            Volver al inicio{" "}<span aria-hidden="true">→</span>
          </Link>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
          noValidate
          aria-label="Formulario de contacto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TextField
              label="Nombre completo"
              name="nombre"
              value={formData.nombre}
              onChange={(v) => handleChange("nombre", v)}
              error={errors.nombre}
              required
            />
            <TextField
              label="Correo electrónico"
              name="email"
              type="email"
              value={formData.email}
              onChange={(v) => handleChange("email", v)}
              error={errors.email}
              required
            />
          </div>
          <TextField
            label="Empresa (opcional)"
            name="empresa"
            value={formData.empresa}
            onChange={(v) => handleChange("empresa", v)}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SelectField
              label="Tipo de proyecto"
              name="tipoProyecto"
              value={formData.tipoProyecto}
              onChange={(v) => handleChange("tipoProyecto", v)}
              error={errors.tipoProyecto}
              required
            >
              <option value="">Seleccionar tipo de proyecto</option>
              <option value="infraestructura-vial">
                Infraestructura vial
              </option>
              <option value="estructuras">Estructuras de concreto</option>
              <option value="edificacion">Edificación institucional</option>
              <option value="hidraulica">
                Obras hidráulicas y drenaje
              </option>
              <option value="consultoria">Consultoría de ingeniería</option>
              <option value="otro">Otro</option>
            </SelectField>
            <TextField
              label="Ubicación del proyecto"
              name="ubicacion"
              value={formData.ubicacion}
              onChange={(v) => handleChange("ubicacion", v)}
              placeholder="Ej: Municipio, departamento"
              required
            />
          </div>
          <TextAreaField
            label="Descripción de la necesidad"
            name="mensaje"
            value={formData.mensaje}
            onChange={(v) => handleChange("mensaje", v)}
            error={errors.mensaje}
            required
          />
          <div className="pt-2">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={state === "sending"}
            >
              {state === "sending" ? "Enviando…" : "Solicitar contacto"}
            </Button>
            <p className="mt-4 text-[0.75rem] text-grafito/40 max-w-md">
              Esta es una experiencia demostrativa de interfaz. No se expone
              ningún backend ni clave privada en el navegador.
            </p>
          </div>
        </form>
      )}
    </>
  );
}

// --- Componentes auxiliares del formulario ---

function TextField({
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={name}
        className="block text-[0.8rem] font-semibold text-grafito tracking-wide uppercase"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        aria-invalid={!!error}
        aria-errormessage={error ? `${name}-error` : undefined}
        className={cn(
          "block w-full rounded-md border px-4 py-3 text-sm leading-6",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-naranja",
          error
            ? "border-naranja text-grafito"
            : "border-grafito/30 text-grafito",
          "placeholder:text-grafito/30"
        )}
      />
      {error && (
        <p id={`${name}-error`} className="text-[0.75rem] text-naranja" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function SelectField({
  label,
  name,
  value,
  onChange,
  error,
  required,
  children,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={name}
        className="block text-[0.8rem] font-semibold text-grafito tracking-wide uppercase"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        aria-invalid={!!error}
        className={cn(
          "block w-full rounded-md border px-4 py-3 text-sm leading-6",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-naranja",
          error
            ? "border-naranja text-grafito"
            : "border-grafito/30 text-grafito"
        )}
      >
        {children}
      </select>
      {error && (
        <p id={`${name}-error`} className="text-[0.75rem] text-naranja" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function TextAreaField({
  label,
  name,
  value,
  onChange,
  error,
  required,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  required?: boolean;
}) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={name}
        className="block text-[0.8rem] font-semibold text-grafito tracking-wide uppercase"
      >
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={5}
        required={required}
        aria-invalid={!!error}
        aria-errormessage={error ? `${name}-error` : undefined}
        className={cn(
          "block w-full rounded-md border px-4 py-3 text-sm leading-6",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-naranja",
          error
            ? "border-naranja text-grafito"
            : "border-grafito/30 text-grafito",
          "placeholder:text-grafito/30"
        )}
      />
      {error && (
        <p id={`${name}-error`} className="text-[0.75rem] text-naranja" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
