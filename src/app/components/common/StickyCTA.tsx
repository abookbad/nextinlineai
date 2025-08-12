"use client";

import { Button } from "@/components/ui/Button";
import TrackedLink from "./TrackedLink";
import { useEffect, useState } from "react";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Show after slight scroll so it doesn't overlap hero buttons
      setVisible(window.scrollY > 120);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 mx-auto w-full max-w-7xl px-4 pb-4 sm:px-6 lg:px-8 md:hidden"
      aria-hidden={!visible}
    >
      <div className="rounded-2xl border border-white/40 bg-white/80 p-3 shadow-xl backdrop-blur-md">
        <TrackedLink
          href="/book"
          prefetch
          aria-label="Book your demo"
          analytics={{ eventName: "cta_click", payload: { location: "sticky" } }}
          data-analytics-id="cta-sticky"
        >
          <Button variant="glass" className="w-full text-base">Book your demo</Button>
        </TrackedLink>
      </div>
    </div>
  );
}


