"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, staggerItem } from "@/components/ui/FadeInView";

const { benefits } = siteContent;

export function Benefits() {
  return (
    <section id={benefits.id} className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading title={benefits.title} />

        <StaggerContainer className="max-w-3xl mx-auto">
          {benefits.items.map((item, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="relative flex items-center gap-6 py-6 border-b border-gold/10 last:border-b-0 group"
            >
              <div
                className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full border border-gold/25 group-hover:border-gold/50 transition-colors duration-500"
                aria-hidden="true"
              >
                <span className="font-display text-sm text-gold-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="text-base md:text-lg text-text-muted group-hover:text-text transition-colors duration-500 leading-relaxed">
                {item}
              </p>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
