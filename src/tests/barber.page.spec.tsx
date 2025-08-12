/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect, vi } from "vitest";
import BarberPage from "@/app/barber/page";

vi.mock("next/script", () => ({ default: () => null }));
vi.mock("next/image", () => ({
  default: (props: any) => {
    return React.createElement('img', { ...props });
  },
}));
vi.mock("next/link", () => ({ default: (props: any) => React.createElement('a', props) }));

describe("/barber page", () => {
  it("renders all main sections", () => {
    render(React.createElement(BarberPage as unknown as React.ComponentType));
    expect(screen.getByRole('heading', { name: /fill your chair/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /what you get/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /how it works/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /pricing/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /ready to see it/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /faq/i })).toBeInTheDocument();
  });

  it("CTAs link to /book", () => {
    render(React.createElement(BarberPage as unknown as React.ComponentType));
    const links = screen.getAllByRole('link', { name: /book your demo/i });
    expect(links.length).toBeGreaterThan(0);
    for (const l of links) {
      expect(l).toHaveAttribute('href', '/book');
    }
  });
});


