"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeInView } from "@/components/ui/FadeInView";
import { StaggerContainer, staggerItem } from "@/components/ui/FadeInView";

const { details } = siteContent;

export function Organization() {
  return (
    <section id={details.id} className="relative py-24 md:py-32 bg-cream/50">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading title={details.title} />

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto">
          {details.items.map((item) => (
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

        <FadeInView delay={0.2} className="mt-16 max-w-2xl mx-auto text-center">
          <h3 className="font-display text-xl md:text-2xl font-light text-text-dark mb-6">
            {details.extras.title}
          </h3>
          <ul className="space-y-3">
            {details.extras.items.map((item, index) => (
              <li key={index} className="text-sm md:text-base text-text-muted leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </FadeInView>
      </div>
    </section>
  );
}
