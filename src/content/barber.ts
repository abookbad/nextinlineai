import type { ReactNode } from "react";

export type BarberContent = {
  hero: {
    headline: string;
    sub: string;
    ctas: { primaryHref: string; secondaryHref: string };
    heroImage?: string;
  };
  pains: string[];
  features: { title: string; desc: string; icon?: ReactNode }[];
  workflow: { step: string; detail: string }[];
  testimonials: { quote: string; author: string; shop: string; avatar?: string }[];
  roi: { avgCutPrice: number; bookingsPerMonthRange: [number, number] };
  pricing: { setupRange: string; monthlyRange: string; guarantee: string; note?: string };
  faq: { q: string; a: string }[];
};

export const barberContent: BarberContent = {
  hero: {
    headline: "Fill your chair. Let AI handle the booking.",
    sub: "Your 24/7 AI phone receptionist + website + CRM built for barbers — live in 72 hours.",
    ctas: { primaryHref: "/book", secondaryHref: "#workflow" },
    heroImage: "/images/aiDontSleep.jpeg",
  },
  pains: [
    "Missed calls = missed cuts",
    "DMs that never get answered",
    "No-shows & double-bookings",
  ],
  features: [
    { title: "AI Voice Receptionist", desc: "Answers, qualifies, books, reschedules." },
    { title: "Smart Website", desc: "Fast mobile site with embedded booking." },
    { title: "CRM (GoHighLevel)", desc: "Client profiles, pipelines, SMS & email automation." },
    { title: "No‑Show Reducer", desc: "Text reminders + easy reschedule links." },
    { title: "Review Boost", desc: "Auto-ask for Google reviews after each visit." },
    { title: "Analytics", desc: "See new clients, return rate, and revenue at a glance." },
  ],
  workflow: [
    { step: "1", detail: "Caller phones the shop — AI answers in your brand voice." },
    { step: "2", detail: "AI checks calendar and books the cut in seconds." },
    { step: "3", detail: "Client gets SMS confirmation + reminders." },
    { step: "4", detail: "Owner dashboard tracks clients & reviews." },
  ],
  testimonials: [
    { quote: "We stopped missing calls and added 18 new clients in 30 days.", author: "Marcus", shop: "Fade Room" },
    { quote: "No-shows dropped by half. The AI books while I’m cutting.", author: "Jada", shop: "Clip Joint" },
  ],
  roi: { avgCutPrice: 40, bookingsPerMonthRange: [5, 15] },
  pricing: {
    setupRange: "$1,000–$1,500",
    monthlyRange: "$300–$700",
    guarantee: "Launch in 72 hours. 30‑day cancel anytime.",
    note: "First 5 shops this month get AI voice setup included.",
  },
  faq: [
    { q: "How does the AI sound?", a: "Natural, customizable to your brand tone." },
    { q: "Will it work with my current number?", a: "Yes, we can forward or replace." },
    { q: "Do clients need an app?", a: "No — calls & SMS reminders just work." },
    { q: "Can I approve bookings?", a: "Yes, set rules, hours, and services." },
    { q: "What’s included in setup?", a: "Website, CRM, AI agent, automations, training." },
  ],
};


