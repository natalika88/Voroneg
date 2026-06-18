"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/lib/constants";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PremiumCard } from "@/components/ui/PremiumCard";
import { StaggerContainer, staggerItem } from "@/components/ui/FadeInView";

const { audience } = siteContent;

export function ForWhom() {
  return (
    <Section id={audience.id} tone="pearl">
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 md:px-8">
        <SectionHeading title={audience.title} />

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-6xl mx-auto">
          {audience.items.map((item, index) => (
            <motion.div key={index} variants={staggerItem}>
              <PremiumCard className="flex items-start gap-3 sm:gap-4 h-full">
                <span
                  className="mt-1 flex-shrink-0 w-5 h-5 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <span className="w-1.5 h-1.5 rotate-45 border border-gold/60" />
                </span>
                <p className="prose-body !text-[14px] sm:!text-[15px] md:!text-base">
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </p>
              </PremiumCard>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </Section>
  );
}
