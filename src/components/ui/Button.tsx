"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "ghost" | "glass";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  asChild?: boolean;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    const base =
      "relative inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-transform duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
    const variants: Record<ButtonVariant, string> = {
      primary:
        "bg-[var(--nl-blue)] text-white shadow-[var(--shadow-soft)] hover:translate-y-[-2px] hover:shadow-[var(--shadow-glow)] focus-visible:ring-[var(--nl-blue)]",
      ghost:
        "bg-transparent text-[var(--nl-text)] border border-black/10 hover:bg-black/[0.04]",
      glass:
        "glass glass-ring sheen text-[var(--nl-text)] px-5 py-2.5",
    };

    return (
      <button ref={ref} className={cn(base, variants[variant], className)} {...props} />
    );
  }
);
Button.displayName = "Button";


