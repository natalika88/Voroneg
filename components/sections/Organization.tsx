"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, staggerItem } from "@/components/ui/FadeInView";

const { organization } = siteContent;

export function Organization() {
  const allItems = [...organization.items, ...organization.placeholders];

  return (
    <section id={organization.id} className="relative py-24 md:py-32 bg-cream/50">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading title={organization.title} />

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto">
          {allItems.map((item, index) => (
            <motion.div
              key={item.label}
              variants={staggerItem}
              className="p-6 md:p-8 bg-ivory/80 border border-gold/15 rounded-sm text-center"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-text-accent mb-3">
                {item.label}
              </p>
              <p className="text-sm md:text-base text-text-muted leading-relaxed">
                {item.value}
              </p>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
