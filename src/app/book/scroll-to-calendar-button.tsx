"use client";

import * as React from "react";
import { Button } from "@/components/ui/Button";

export default function ScrollToCalendarButton({ children }: { children: React.ReactNode }) {
  const onClick = React.useCallback(() => {
    const el = document.getElementById("calendar");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // Fallback to anchor navigation
      window.location.hash = "calendar";
    }
  }, []);

  return (
    <Button variant="primary" onClick={onClick} className="cursor-pointer">
      {children}
    </Button>
  );
}



