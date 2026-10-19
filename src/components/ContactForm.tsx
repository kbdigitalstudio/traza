"use client";

import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button-variants";
import { servicioPorSlug, servicios } from "@/data/servicios";
import { cn } from "@/lib/utils";

type FormData = {
  nombre: string;
  email: string;
  empresa: string;
  tipoProyecto: string;
  ubicacion: string;
  mensaje: string;
};

type FormState = "idle" | "demo";

const FIELD_ORDER: (keyof FormData)[] = [
  "nombre",
  "email",
  "tipoProyecto",
  "ubicacion",
  "mensaje",
];

const fieldBase =
  "block w-full rounded-card border bg-white px-3 py-2.5 text-sm leading-6 text-grafito transition-colors placeholder:text-grafito/70 focus:border-naranja";

export function ContactForm() {
  const searchParams = useSearchParams();
  const servicioDesdeURL = servicioPorSlug(searchParams.get("servicio") ?? "");
  const servicioSeleccionado = servicioDesdeURL?.title ?? null;

  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const shouldFocusErrors = useRef(false);
  const demoHeadingRef = useRef<HTMLHeadingElement>(null);
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    email: "",
    empresa: "",
    tipoProyecto: servicioDesdeURL?.slug ?? "",
    ubicacion: "",
    mensaje: "",
  });

  const validate = (): boolean => {
    const next: Record<string, string> = {};
    if (!formData.nombre.trim()) next.nombre = "El nombre es obligatorio.";
    if (!formData.email.trim()) {
      next.email = "El correo electrónico es obligatorio.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      next.email = "Correo electrónico no válido.";
    }
    if (!formData.tipoProyecto.trim()) {
      next.tipoProyecto = "Selecciona un tipo de proyecto.";
    }
    if (!formData.ubicacion.trim()) {
      next.ubicacion = "La ubicación del proyecto es obligatoria.";
    }
    if (!formData.mensaje.trim()) {
      next.mensaje = "Describe tu necesidad.";
    }
    setErrors(next);
    shouldFocusErrors.current = Object.keys(next).length > 0;
    return Object.keys(next).length === 0;
  };

  useEffect(() => {
    if (state === "demo") demoHeadingRef.current?.focus();
  }, [state]);

  useEffect(() => {
    if (!shouldFocusErrors.current) return;
    shouldFocusErrors.current = false;
    const firstInvalid = FIELD_ORDER.find((field) => errors[field]);
    if (firstInvalid) document.getElementById(firstInvalid)?.focus();
  }, [errors]);

  const handleReturn = () => {
    setState("idle");
    window.setTimeout(() => {
      document.getElementById("nombre")?.focus();
    }, 0);
  };

  const handleChange = (key: keyof FormData, value: string) => {
    setFormData((previous) => ({ ...previous, [key]: value }));
    if (errors[key]) {
      setErrors((previous) => ({ ...previous, [key]: "" }));
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!validate()) return;
    setState("demo");
  };

  if (state === "demo") {
    return (
      <div
        role="region"
        aria-labelledby="demo-title"
        className="border border-naranja/45 bg-naranja/5 p-5 md:p-6"
      >
        <p className="eyebrow text-naranja-texto">Modo demostración</p>
        <h3
          ref={demoHeadingRef}
          id="demo-title"
          tabIndex={-1}
          className="mt-2 text-lg font-bold tracking-[-0.02em] text-grafito"
        >
          El formulario no está conectado a un servicio de envío.
        </h3>
        <p className="mt-2 max-w-[58ch] text-[0.88rem] leading-6 text-grafito/65">
          Los campos se validaron correctamente, pero este concepto no tiene
          backend, correo ni CRM configurados. No se envió ningún mensaje. Para
          activar el envío real, integra el formulario con el servicio que
          defina la firma.
        </p>
        <button
          type="button"
          onClick={handleReturn}
          className={cn(buttonVariants({ variant: "outline", size: "sm" }), "mt-5")}
        >
          Volver al formulario
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
      noValidate
      aria-label="Formulario de contacto"
    >
      {servicioSeleccionado && formData.tipoProyecto === servicioDesdeURL?.slug && (
        <div className="border border-naranja/35 bg-naranja/5 px-3 py-2.5">
          <p className="eyebrow text-naranja-texto">Solicitud de cotización</p>
          <p className="mt-1 text-[0.85rem] font-semibold text-grafito">
            {servicioSeleccionado}
          </p>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <TextField
          label="Nombre completo"
          name="nombre"
          autoComplete="name"
          value={formData.nombre}
          onChange={(value) => handleChange("nombre", value)}
          error={errors.nombre}
          required
        />
        <TextField
          label="Correo electrónico"
          name="email"
          type="email"
          autoComplete="email"
          value={formData.email}
          onChange={(value) => handleChange("email", value)}
          error={errors.email}
          required
        />
      </div>

      <TextField
        label="Empresa (opcional)"
        name="empresa"
        autoComplete="organization"
        value={formData.empresa}
        onChange={(value) => handleChange("empresa", value)}
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <SelectField
          label="Tipo de proyecto"
          name="tipoProyecto"
          value={formData.tipoProyecto}
          onChange={(value) => handleChange("tipoProyecto", value)}
          error={errors.tipoProyecto}
          required
        >
          <option value="">Seleccionar tipo de proyecto</option>
          {servicios.map((servicio) => (
            <option key={servicio.slug} value={servicio.slug}>
              {servicio.title}
            </option>
          ))}
          <option value="otro">Otro / no estoy seguro</option>
        </SelectField>
        <TextField
          label="Ubicación del proyecto"
          name="ubicacion"
          autoComplete="address-level1"
          value={formData.ubicacion}
          onChange={(value) => handleChange("ubicacion", value)}
          placeholder="Ej: Municipio, departamento"
          error={errors.ubicacion}
          required
        />
      </div>

      <TextAreaField
        label="Descripción de la necesidad"
        name="mensaje"
        value={formData.mensaje}
        onChange={(value) => handleChange("mensaje", value)}
        error={errors.mensaje}
        required
      />

      <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
        <Button type="submit" variant="primary" size="lg">
          Revisar solicitud
          <span aria-hidden="true">→</span>
        </Button>
        <p className="max-w-[42ch] text-[0.7rem] leading-5 text-grafito/70">
          Formulario de demostración: valida los campos, pero no envía datos ni
          correos.
        </p>
      </div>
    </form>
  );
}

function FieldLabel({
  htmlFor,
  children,
  required,
}: {
  htmlFor: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-grafito/70"
    >
      {children}
      {required && (
        <span className="ml-1 text-naranja-texto" aria-hidden="true">
          *
        </span>
      )}
    </label>
  );
}

function ErrorMessage({ name, error }: { name: string; error?: string }) {
  if (!error) return null;
  return (
    <p
      id={`${name}-error`}
      className="text-[0.75rem] leading-5 text-naranja-texto"
      role="alert"
    >
      {error}
    </p>
  );
}

function TextField({
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
  placeholder,
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div className="space-y-1.5">
      <FieldLabel htmlFor={name} required={required}>
        {label}
      </FieldLabel>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className={cn(fieldBase, error ? "border-naranja-texto" : "border-grafito/45")}
      />
      <ErrorMessage name={name} error={error} />
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
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <FieldLabel htmlFor={name} required={required}>
        {label}
      </FieldLabel>
      <select
        id={name}
        name={name}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className={cn(fieldBase, error ? "border-naranja-texto" : "border-grafito/45")}
      >
        {children}
      </select>
      <ErrorMessage name={name} error={error} />
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
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
}) {
  return (
    <div className="space-y-1.5">
      <FieldLabel htmlFor={name} required={required}>
        {label}
      </FieldLabel>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        rows={4}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className={cn(fieldBase, "resize-y", error ? "border-naranja-texto" : "border-grafito/45")}
      />
      <ErrorMessage name={name} error={error} />
    </div>
  );
}
