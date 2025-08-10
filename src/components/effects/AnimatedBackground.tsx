"use client";

import * as React from "react";
import { isReducedMotionPreferred } from "@/lib/utils";

export default function AnimatedBackground() {
  const reduced = isReducedMotionPreferred();

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <svg className="absolute left-1/2 top-[-10%] h-[80vh] w-[120vw] -translate-x-1/2 opacity-60" viewBox="0 0 800 600">
        <defs>
          <radialGradient id="bgG" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#276EF1" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#276EF1" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="bgG2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#2ECC71" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#2ECC71" stopOpacity="0" />
          </radialGradient>
        </defs>
        <g>
          <circle cx="300" cy="250" r="200" fill="url(#bgG)">
            {!reduced && <animate attributeName="cx" values="300;340;300" dur="16s" repeatCount="indefinite" />}
          </circle>
          <circle cx="520" cy="320" r="220" fill="url(#bgG2)">
            {!reduced && <animate attributeName="cy" values="320;360;320" dur="18s" repeatCount="indefinite" />}
          </circle>
        </g>
      </svg>
    </div>
  );
}


