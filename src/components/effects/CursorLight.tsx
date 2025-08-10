"use client";

import * as React from "react";
import { isReducedMotionPreferred, clamp } from "@/lib/utils";

export default function CursorLight() {
  const reduced = isReducedMotionPreferred();
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      el.style.setProperty("--x", `${x}px`);
      el.style.setProperty("--y", `${y}px`);
      const opacity = clamp(0.14 + (e.movementX + e.movementY) * 0.0005, 0.12, 0.22);
      el.style.setProperty("--o", String(opacity));
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduced]);

  if (reduced) return null;

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10"
      style={{
        background:
          "radial-gradient(400px 240px at var(--x,50%) var(--y,50%), rgba(39,110,241,var(--o,0.16)), rgba(39,110,241,0) 70%)",
        transition: "opacity 200ms ease",
      }}
    />
  );
}


