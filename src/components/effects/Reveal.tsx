"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { isReducedMotionPreferred } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  variant?: typeof fadeUp;
  as?: keyof HTMLElementTagNameMap;
};

export default function Reveal({ children, className, variant = fadeUp }: RevealProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { margin: "-10% 0px -10% 0px", once: true });
  const reduced = isReducedMotionPreferred();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variant}
    >
      {children}
    </motion.div>
  );
}


