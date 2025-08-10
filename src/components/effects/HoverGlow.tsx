"use client";

import * as React from "react";
import { cn, isReducedMotionPreferred } from "@/lib/utils";

type HoverGlowProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

export default function HoverGlow({ className, children, ...props }: HoverGlowProps) {
  const reduced = isReducedMotionPreferred();
  return (
    <div
      className={cn(
        "relative transition-transform",
        reduced ? "" : "hover:-translate-y-0.5",
        className
      )}
      {...props}
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-200 [box-shadow:0_0_0_1px_rgba(39,110,241,0.35),0_0_40px_rgba(39,110,241,0.15)] hover:opacity-100" />
      {children}
    </div>
  );
}


