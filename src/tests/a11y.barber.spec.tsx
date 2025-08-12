/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect, vi } from "vitest";
import BarberPage from "@/app/barber/page";
import axe from "axe-core";

vi.mock("next/script", () => ({ default: () => null }));

describe("/barber a11y", () => {
  it("has no obvious a11y violations (axe-core)", async () => {
    const { container } = render(React.createElement(BarberPage as unknown as React.ComponentType));
    const results = await axe.run(container);
    expect(results.violations.length).toBe(0);
  });
});


