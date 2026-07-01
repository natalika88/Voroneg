"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/lib/constants";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PremiumCard } from "@/components/ui/PremiumCard";
import { StaggerContainer, staggerItem } from "@/components/ui/FadeInView";
import { GlowBackground } from "@/components/ui/DecorativeElements";

const { program } = siteContent;

export function Program() {
  return (
    <Section id={program.id} tone="warm">
      <GlowBackground />
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 md:px-8">
        <SectionHeading title={program.title} />

        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6 max-w-5xl mx-auto">
          {program.items.map((item, index) => (
            <motion.div key={item.title} variants={staggerItem}>
              <PremiumCard className="group relative h-full">
                <span
                  className="absolute top-4 right-5 sm:top-5 sm:right-6 font-display text-2xl sm:text-3xl text-gold/20 group-hover:text-gold/40 transition-colors duration-500"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="heading-serif text-lg sm:text-xl leading-snug pr-8 sm:pr-10 mb-3 sm:mb-4 group-hover:text-text transition-colors duration-500">
                  {item.title}
                </h3>
                <p className="prose-body !text-sm sm:!text-[15px] group-hover:text-text transition-colors duration-500">
                  {item.description}
                </p>
              </PremiumCard>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </Section>
  );
}
