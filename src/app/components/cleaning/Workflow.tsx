"use client";

import { useEffect, useRef } from "react";
import Section from "../common/Section";
import Container from "../common/Container";
import dynamic from "next/dynamic";

const DemoModal = dynamic(() => import("./workflow/DemoModal"), { ssr: false, loading: () => null });

export default function Workflow({ steps }: { steps: { step: string; detail: string }[] }) {
  const lineRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const container = containerRef.current;
    const line = lineRef.current;
    if (!container || !line) return;

    const stepEls = Array.from(container.querySelectorAll('[data-step]')) as HTMLElement[];
    const visible = new Set<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) visible.add(e.target);
          else visible.delete(e.target);
        }
        const total = stepEls.length;
        const progress = visible.size / total;
        line.style.setProperty('--progress', String(Math.max(progress, 0.05)));
      },
      { root: null, threshold: [0.2] }
    );

    stepEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <Section id="workflow">
      <Container>
        <h2 className="text-2xl font-semibold text-white">How it works</h2>
        <div className="relative mt-6" ref={containerRef}>
          <div
            ref={lineRef}
            aria-hidden
            className="absolute left-0 top-0 h-full w-1 rounded bg-white/10"
            style={{
              background: 'linear-gradient(to bottom, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.6) calc(var(--progress,0)*100%), rgba(255,255,255,0.1) calc(var(--progress,0)*100%))',
            }}
          />
          <ol className="ml-4 space-y-6">
            {steps.map((s) => (
              <li key={s.step} data-step className="rounded-xl border border-white/15 bg-white/5 p-4">
                <div className="text-sm font-mono text-white/60">Step {s.step}</div>
                <div className="mt-1 text-white">{s.detail}</div>
              </li>
            ))}
          </ol>
          <DemoModal />
        </div>
      </Container>
    </Section>
  );
}


