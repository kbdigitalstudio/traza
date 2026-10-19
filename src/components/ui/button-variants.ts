import { cn } from "@/lib/utils";

export type ButtonVariant =
  | "primary"
  | "outline"
  | "outlineInverse"
  | "ghost";

export type ButtonSize = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-card font-semibold transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-naranja text-grafito hover:bg-[#e56b28]",
  outline:
    "border border-grafito/30 bg-transparent text-grafito hover:border-grafito/60 hover:bg-grafito/5",
  outlineInverse:
    "border border-concreto/35 bg-transparent text-concreto hover:border-concreto/70 hover:bg-white/10",
  ghost: "text-grafito hover:bg-grafito/5",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-3.5 text-[0.78rem]",
  md: "h-10 px-4 text-sm",
  lg: "h-11 px-5 text-sm",
};

export function buttonVariants({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}) {
  return cn(base, variants[variant], sizes[size], className);
}
