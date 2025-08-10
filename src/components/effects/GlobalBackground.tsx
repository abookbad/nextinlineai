"use client";

import * as React from "react";
import { isReducedMotionPreferred } from "@/lib/utils";

export default function GlobalBackground() {
  const reduced = isReducedMotionPreferred();
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Top/mid gradient blobs (blue/green) */}
      <svg className="absolute left-1/2 top-[-20%] h-[120vh] w-[160vw] -translate-x-1/2 opacity-60" viewBox="0 0 800 800">
        <defs>
          <radialGradient id="gb1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#276EF1" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#276EF1" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="gb2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#2ECC71" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#2ECC71" stopOpacity="0" />
          </radialGradient>
        </defs>
        <g>
          <circle cx="280" cy="260" r="260" fill="url(#gb1)">
            {!reduced && <animate attributeName="cx" values="280;320;280" dur="18s" repeatCount="indefinite" />}
          </circle>
          <circle cx="560" cy="420" r="280" fill="url(#gb2)">
            {!reduced && <animate attributeName="cy" values="420;460;420" dur="22s" repeatCount="indefinite" />}
          </circle>
        </g>
      </svg>

      {/* Bottom subtle glow to smooth the transition into later sections */}
      <div className="absolute inset-x-0 bottom-[-20vh] h-[40vh] bg-[radial-gradient(closest-side,rgba(39,110,241,0.12),rgba(39,110,241,0)_70%)]" />
    </div>
  );
}


