"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/lib/constants";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, staggerItem } from "@/components/ui/FadeInView";

const { benefits } = siteContent;

export function Benefits() {
  return (
    <Section id={benefits.id} tone="cream">
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 md:px-8">
        <SectionHeading title={benefits.title} />

        <StaggerContainer className="max-w-3xl mx-auto">
          {benefits.items.map((item, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="relative flex items-start sm:items-center gap-4 sm:gap-6 py-5 sm:py-6 border-b border-gold/10 last:border-b-0 group"
            >
              <div
                className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border border-gold/20 bg-warm-white/50 group-hover:border-gold/40 transition-colors duration-500"
                aria-hidden="true"
              >
                <span className="font-display text-xs sm:text-sm text-gold-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="prose-body group-hover:text-text transition-colors duration-500">
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </p>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </Section>
  );
}
