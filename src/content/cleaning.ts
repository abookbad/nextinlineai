import type { ReactNode } from "react";

export type CleaningContent = {
  hero: { headline: string; sub: string; ctas: { primaryHref: string; secondaryHref: string }; heroImage?: string };
  pains: string[];
  features: { title: string; desc: string; icon?: ReactNode }[];
  workflow: { step: string; detail: string }[];
  testimonials: { quote: string; author: string; company: string; avatar?: string }[];
  roi: { avgJobValueRange: [number, number]; extraJobsPerMonthRange: [number, number] };
  pricing: { setupRange: string; monthlyRange: string; guarantee: string; note?: string };
  faq: { q: string; a: string }[];
};

export const cleaningContent: CleaningContent = {
  hero: {
    headline: "More booked jobs. Less chasing calls.",
    sub: "24/7 AI phone receptionist + website + CRM for window & solar cleaning — live in 72 hours.",
    ctas: { primaryHref: "/book", secondaryHref: "#workflow" },
    heroImage: "/images/solarCleaningPicture.jpeg",
  },
  pains: [
    "Missed calls while on ladders or roofs",
    "Manual quotes & back‑and‑forth texting",
    "No-shows, reschedules, and forgotten follow-ups",
  ],
  features: [
    { title: "AI Voice Receptionist", desc: "Answers, qualifies, books, reschedules." },
    { title: "Smart Website", desc: "Mobile-first site with quote/booking embedded." },
    { title: "CRM (GoHighLevel)", desc: "Pipelines, automations, SMS & email." },
    { title: "Quote-to-Job Flow", desc: "Instant estimates + upsells (gutter, screens, skylights)." },
    { title: "No‑Show Reducer", desc: "Reminders + easy reschedule links." },
    { title: "Review & Photo Proof", desc: "After-job photos stored; auto Google review requests." },
  ],
  workflow: [
    { step: "1", detail: "Client calls or submits a form — AI answers in your brand voice and captures job details." },
    { step: "2", detail: "AI checks calendar and estimate rules to provide a quote or book an estimate slot." },
    { step: "3", detail: "Client receives SMS confirmation, reminders, and prep instructions." },
    { step: "4", detail: "After the job, send photo proof + invoice + automatic review request." },
  ],
  testimonials: [
    { quote: "We stopped missing calls on ladders and added 12 jobs last month.", author: "Luis", company: "Crystal View Windows" },
    { quote: "Scheduling is hands-off now; our no-shows dropped a ton.", author: "Tanya", company: "SunSpark Solar Cleaning" },
  ],
  roi: { avgJobValueRange: [150, 350], extraJobsPerMonthRange: [5, 15] },
  pricing: {
    setupRange: "$1,000–$1,500",
    monthlyRange: "$300–$700",
    guarantee: "Launch in 72 hours. 30‑day cancel anytime.",
    note: "First 5 companies this month get AI voice setup included.",
  },
  faq: [
    { q: "How do quotes work?", a: "Use simple rules (sq ft / panels / stories) or always book an estimate slot." },
    { q: "Can it handle reschedules or weather?", a: "Yes, set buffers, weather rules, and blackout dates." },
    { q: "Will it work with my current number?", a: "Yes, we can forward or replace." },
    { q: "Do clients need an app?", a: "No — calls, SMS, and email just work." },
    { q: "What’s included in setup?", a: "Website, CRM, AI agent, automations, estimate rules, and training." },
  ],
};


