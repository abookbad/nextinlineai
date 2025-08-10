"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type SheetProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  side?: "left" | "right" | "top" | "bottom";
  children: React.ReactNode;
};

export function Sheet({ open, onOpenChange, side = "right", children }: SheetProps) {
  React.useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div
      aria-hidden={!open}
      className={cn(
        "fixed inset-0 z-50 transition",
        open ? "pointer-events-auto" : "pointer-events-none"
      )}
      onClick={() => onOpenChange(false)}
    >
      <div className={cn("absolute inset-0 bg-black/20 backdrop-blur-sm", open ? "opacity-100" : "opacity-0")} />
      <div
        role="dialog"
        aria-modal="true"
        className={cn(
          "glass focus:outline-none fixed p-6 shadow-xl",
          side === "right" && "top-0 right-0 h-full w-[90%] max-w-sm",
          side === "left" && "top-0 left-0 h-full w-[90%] max-w-sm",
          side === "top" && "top-0 left-0 w-full h-[60%] max-h-[480px]",
          side === "bottom" && "bottom-0 left-0 w-full h-[60%] max-h-[480px]"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}


