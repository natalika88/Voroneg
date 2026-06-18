"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, staggerItem } from "@/components/ui/FadeInView";

const { forWhom } = siteContent;

export function ForWhom() {
  return (
    <section id={forWhom.id} className="relative py-24 md:py-32 bg-cream/40 overflow-hidden">
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(212,197,168,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(212,184,176,0.1) 0%, transparent 50%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading title={forWhom.title} />

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {forWhom.items.map((item, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="flex items-start gap-4 p-6 bg-ivory/70 border border-gold/10 rounded-sm"
            >
              <span
                className="mt-1 flex-shrink-0 w-5 h-5 flex items-center justify-center"
                aria-hidden="true"
              >
                <span className="w-1.5 h-1.5 rotate-45 border border-gold/70" />
              </span>
              <p className="text-sm md:text-base text-text-muted leading-relaxed">{item}</p>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
