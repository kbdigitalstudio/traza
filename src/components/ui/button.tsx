"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

const variants: Record<string, string> = {
  primary:
    "bg-naranja text-white hover:bg-naranja/90 focus-visible:ring-naranja",
  secondary:
    "bg-concreto text-grafito hover:bg-concreto/80 focus-visible:ring-grafito",
  outline:
    "border border-grafito bg-white text-grafito hover:bg-grafito/5 focus-visible:ring-grafito",
  ghost: "hover:bg-grafito/5 hover:text-grafito focus-visible:ring-grafito",
  "naranja-ghost":
    "text-naranja hover:bg-naranja/10 focus-visible:ring-naranja",
};

const sizes: Record<string, string> = {
  default: "h-10 px-4 py-2",
  sm: "h-9 px-3",
  lg: "h-11 px-8",
};

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          base,
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, cn };
