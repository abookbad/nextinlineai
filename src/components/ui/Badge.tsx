import * as React from "react";
import { cn } from "@/lib/utils";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  color?: "blue" | "green" | "neutral";
};

export function Badge({ className, color = "neutral", ...props }: BadgeProps) {
  const palette = {
    blue: "bg-[var(--nl-blue)]/10 text-[var(--nl-blue)] border-[var(--nl-blue)]/20",
    green:
      "bg-[var(--nl-green)]/10 text-[var(--nl-green)] border-[var(--nl-green)]/20",
    neutral: "bg-black/5 text-black/70 border-black/10",
  } as const;

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium",
        palette[color],
        className
      )}
      {...props}
    />
  );
}


