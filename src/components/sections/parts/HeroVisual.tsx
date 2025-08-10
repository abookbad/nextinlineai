"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import * as React from "react";
import { isReducedMotionPreferred } from "@/lib/utils";

export default function HeroVisual() {
  const reduced = isReducedMotionPreferred();

  const content = (
    <div className="relative mx-auto w-full max-w-2xl">
      {reduced ? (
        <div className="glass sheen mx-auto overflow-hidden rounded-[var(--radius-xl)] p-0">
          <div className="relative aspect-[16/10] w-full">
            <Image
              src="/images/heroPic.jpeg"
              alt="AI receptionist at work on a computer"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              className="object-cover"
            />
          </div>
        </div>
      ) : (
        <motion.div
          className="glass sheen mx-auto overflow-hidden rounded-[var(--radius-xl)] p-0 will-change-transform"
          initial={{ scale: 1, rotate: 0 }}
          animate={{
            scale: [1, 1.03, 0.995, 1.02, 1],
            rotate: [-2, 2, -1.5, 1.5, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="relative aspect-[16/10] w-full">
            <Image
              src="/images/heroPic.jpeg"
              alt="AI receptionist at work on a computer"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              className="object-cover"
            />
          </div>
        </motion.div>
      )}
    </div>
  );

  return content;
}


