"use client";

import * as React from "react";
import Container from "@/components/core/Container";
import Section from "@/components/core/Section";
import Reveal from "@/components/effects/Reveal";
import { howItWorks as howCopy } from "@/lib/copy";

export default function VerticalStepper() {
  const [completedSteps, setCompletedSteps] = React.useState([false, false, false]);
  const sectionRef = React.useRef<HTMLElement>(null);
  const timelineRef = React.useRef<HTMLDivElement>(null);
  const stepRefs = React.useRef<(HTMLElement | null)[]>([]);

  React.useEffect(() => {
    const section = sectionRef.current;
    const timeline = timelineRef.current;
    if (!section || !timeline) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const updateProgress = () => {
      const viewportHeight = window.innerHeight;
      
      // Get step positions for precise fill calculation
      const step1Rect = stepRefs.current[0]?.getBoundingClientRect();
      const step3Rect = stepRefs.current[2]?.getBoundingClientRect();
      
      if (!step1Rect || !step3Rect) return;
      
      const step1Center = step1Rect.top + step1Rect.height / 2;
      const step3Center = step3Rect.top + step3Rect.height / 2;
      const viewportCenter = viewportHeight / 2;
      
      // Calculate progress between step 1 and step 3 centers
      let progress = 0;
      if (step1Center <= viewportCenter && step3Center >= viewportCenter) {
        progress = Math.max(0, Math.min(1, 
          (viewportCenter - step1Center) / (step3Center - step1Center)
        ));
      } else if (step1Center > viewportCenter) {
        progress = 0;
      } else if (step3Center < viewportCenter) {
        progress = 1;
      }

      // Update timeline fill
      if (prefersReducedMotion) {
        timeline.style.transform = 'scaleY(1)';
      } else {
        timeline.style.transform = `scaleY(${progress})`;
      }
    };

    // Intersection Observer for step completion
    const stepObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-step') || '0');
          const isVisible = entry.isIntersecting && entry.intersectionRatio >= 0.4;
          
          setCompletedSteps(prev => {
            const newSteps = [...prev];
            newSteps[index] = isVisible;
            return newSteps;
          });
        });
      },
      { threshold: 0.4 }
    );

    // Observe step cards
    stepRefs.current.forEach((ref) => {
      if (ref) stepObserver.observe(ref);
    });

    // Scroll listener
    const handleScroll = () => {
      requestAnimationFrame(updateProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateProgress(); // Initial calculation

    return () => {
      window.removeEventListener('scroll', handleScroll);
      stepObserver.disconnect();
    };
  }, []);

  return (
    <Section ref={sectionRef} id="how" className="pt-8">
      <Container className="max-w-[940px] px-4 sm:px-5">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--nl-text)] sm:text-4xl">
            {howCopy.title}
          </h2>
        </div>
        
        <div className="relative mx-auto mt-16">
          {/* Timeline Track */}
          <div className="absolute left-5 top-0 h-full w-[1.5px] bg-gradient-to-b from-[var(--nl-blue)] via-[var(--nl-green)] to-[var(--nl-blue)] opacity-30 sm:left-6 sm:w-0.5" />
          
          {/* Timeline Fill */}
          <div 
            ref={timelineRef}
            className="absolute left-5 top-0 h-full w-[1.5px] bg-gradient-to-b from-[var(--nl-blue)] via-[var(--nl-green)] to-[var(--nl-blue)] opacity-80 origin-top transition-transform duration-100 ease-out sm:left-6 sm:w-0.5"
            style={{ transform: 'scaleY(0)' }}
          />
          
          {/* Steps List */}
          <ol className="relative space-y-5 sm:space-y-6">
            {howCopy.steps.map((step, index) => (
              <Reveal key={step.title}>
                                 <li 
                   ref={(el) => { stepRefs.current[index] = el; }}
                   className="group relative flex items-start gap-4 sm:gap-4"
                   data-step={index}
                 >
                  {/* Step Number Chip */}
                  <div className="relative flex-shrink-0">
                    <div className="relative">
                      {/* Main Chip */}
                      <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-white/95 via-white/90 to-white/85 text-sm font-semibold text-black/90 shadow-[0_0_0_1px_rgba(255,255,255,0.9),0_2px_8px_rgba(0,0,0,0.08)] backdrop-blur-sm transition-all duration-200 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.95),0_4px_12px_rgba(0,0,0,0.12)] sm:h-10 sm:w-10 sm:text-base">
                        {completedSteps[index] ? (
                          <svg 
                            width="16" 
                            height="16" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            className="animate-[checkmarkIn_200ms_ease-out] sm:w-5 sm:h-5"
                          >
                            <path 
                              d="M20 6L9 17L4 12" 
                              stroke="var(--nl-green)" 
                              strokeWidth="3" 
                              strokeLinecap="round" 
                              strokeLinejoin="round"
                            />
                          </svg>
                        ) : (
                          <span className="animate-[numberIn_200ms_ease-out]">{index + 1}</span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Step Content Card */}
                  <div className="flex-1">
                    <div className="group/card relative overflow-hidden rounded-[var(--radius-xl)] bg-gradient-to-br from-white/95 via-white/90 to-white/85 p-3 backdrop-blur-md shadow-[0_0_0_1px_rgba(255,255,255,0.9),0_2px_8px_rgba(0,0,0,0.06)] transition-all duration-200 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.95),0_4px_16px_rgba(0,0,0,0.1)] hover:-translate-y-0.5 sm:p-4">
                      {/* Content */}
                      <div className="relative z-10">
                        <h3 className="text-lg font-semibold text-black/92 sm:text-xl">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-sm leading-[1.55] text-black/85 sm:text-base">
                          {step.description}
                        </p>
                      </div>
                      
                      {/* Subtle Hover Glow */}
                      <div className="absolute inset-0 rounded-[var(--radius-xl)] bg-gradient-to-br from-[var(--nl-blue)]/5 via-transparent to-[var(--nl-green)]/5 opacity-0 transition-opacity duration-200 group-hover/card:opacity-100" />
                    </div>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
