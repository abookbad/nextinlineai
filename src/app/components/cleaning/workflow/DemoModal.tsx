"use client";

import { useEffect, useState } from "react";

export default function DemoModal() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener('open-demo-modal', handler as EventListener);
    return () => window.removeEventListener('open-demo-modal', handler as EventListener);
  }, []);
  if (!open) return null;
  return (
    <div role="dialog" aria-modal="true" id="demo-modal" className="fixed inset-0 z-50 grid place-items-center p-4">
      <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} aria-hidden />
      <div className="relative z-10 w-full max-w-2xl rounded-2xl bg-white p-4 shadow-xl">
        <div className="aspect-video w-full overflow-hidden rounded-lg bg-black">
          <iframe
            title="AI Demo"
            className="h-full w-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <div className="mt-3 text-right">
          <button onClick={() => setOpen(false)} className="rounded-full border border-black/10 bg-black/5 px-4 py-2 text-sm hover:bg-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}


