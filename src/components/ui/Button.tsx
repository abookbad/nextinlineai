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
        "glass glass-ring sheen bg-white/70 backdrop-blur-sm text-black font-bold px-5 py-2.5 border border-white/60 shadow-[0_0_0_1px_rgba(255,255,255,0.3),0_4px_12px_rgba(0,0,0,0.2)] hover:bg-white/80 hover:scale-105 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.4),0_8px_24px_rgba(255,255,255,0.7)] transition-all duration-200 [text-shadow:1px_1px_2px_rgba(255,255,255,0.8)]",
    };

    return (
      <button ref={ref} className={cn(base, variants[variant], className)} {...props} />
    );
  }
);
Button.displayName = "Button";


