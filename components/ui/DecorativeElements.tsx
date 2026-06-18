"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface GlowBackgroundProps {
  className?: string;
  intensity?: "light" | "medium";
}

export function GlowBackground({ className = "", intensity = "light" }: GlowBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const opacity = intensity === "light" ? 0.15 : 0.25;

  return (
    <div ref={ref} className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      <motion.div
        style={{ y: y1 }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity }}
        transition={{ duration: 2 }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(212,197,168,0.4) 0%, transparent 70%)",
          }}
        />
      </motion.div>
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full blur-3xl"
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(212,184,176,0.25) 0%, transparent 70%)",
          }}
        />
      </motion.div>
    </div>
  );
}

export function DecorativeDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`} aria-hidden="true">
      <div className="w-20 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="w-1.5 h-1.5 rotate-45 border border-gold/60" />
      <div className="w-20 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
    </div>
  );
}

export function ScrollIndicator() {
  return (
    <div className="flex flex-col items-center gap-2 animate-float" aria-hidden="true">
      <span className="text-[10px] uppercase tracking-[0.3em] text-text-muted/60">Листайте</span>
      <div className="w-px h-8 bg-gradient-to-b from-gold/50 to-transparent" />
    </div>
  );
}
