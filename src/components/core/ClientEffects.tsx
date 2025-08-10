"use client";

import dynamic from "next/dynamic";

const CursorLight = dynamic(() => import("@/components/effects/CursorLight"), {
  ssr: false,
});

export default function ClientEffects() {
  return <CursorLight />;
}


