import * as React from "react";
import { cn } from "@/lib/utils";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "block w-full rounded-xl border bg-white/70 px-3 py-2 text-sm text-[var(--nl-text)] placeholder-black/40 shadow-sm outline-none transition focus-visible:ring-2 focus-visible:ring-[var(--nl-blue)] focus-visible:border-transparent",
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";


