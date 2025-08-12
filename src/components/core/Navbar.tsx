"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import Image from "next/image";

const links = [
  { href: "/home#home", label: "Home" },
  { href: "/home#features", label: "Features" },
  { href: "/home#industries", label: "Industries" },
  { href: "/home#pricing", label: "Pricing" },
  { href: "/home#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "sticky top-0 z-40 w-full transition-all",
        scrolled
          ? "backdrop-blur supports-[backdrop-filter]:bg-black/60 border-b border-white/10"
          : "bg-transparent"
      )}
      role="navigation"
      aria-label="Main"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/home#home" className="flex items-center gap-3 font-semibold text-white">
          <Image src="/images/logoWithName.png" alt="Next In Line AI" width={150} height={34} priority className="h-8 w-auto" />
        </Link>
        <div className="hidden gap-6 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="relative text-sm font-mono text-white/80 hover:text-white"
            >
              <span className="underline-offset-8 hover:underline">{l.label}</span>
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Link href="/book">
            <Button variant="primary" className="h-9 px-4 text-sm">Get Started</Button>
          </Link>
        </div>
      </div>

      {/* Mobile navigation under logo */}
      <div className="mx-auto max-w-7xl px-4 pb-3 pt-2 md:hidden">
        <nav className="grid grid-cols-3 gap-3 text-center">
          {[
            { href: "/home#features", label: "Features" },
            { href: "/home#industries", label: "Industries" },
            { href: "/home#pricing", label: "Pricing" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="py-2 text-xs font-mono text-white/80 underline-offset-4 hover:text-white hover:underline"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        {/* CTA remains in the top row on all breakpoints */}
      </div>
    </div>
  );
}


