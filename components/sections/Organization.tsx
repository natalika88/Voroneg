"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/lib/constants";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PremiumCard } from "@/components/ui/PremiumCard";
import { FadeInView } from "@/components/ui/FadeInView";
import { StaggerContainer, staggerItem } from "@/components/ui/FadeInView";

const { details } = siteContent;

export function Organization() {
  return (
    <Section id={details.id} tone="cream">
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 md:px-8">
        <SectionHeading title={details.title} />

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 max-w-5xl mx-auto">
          {details.items.map((item) => (
            <motion.div key={item.label} variants={staggerItem}>
              <PremiumCard className="text-center h-full">
                <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-text-accent mb-2 sm:mb-3">
                  {item.label}
                </p>
                <p className="prose-body !text-sm sm:!text-base">{item.value}</p>
              </PremiumCard>
            </motion.div>
          ))}
        </StaggerContainer>

        <FadeInView delay={0.2} className="mt-12 sm:mt-16 max-w-2xl mx-auto">
          <PremiumCard className="text-center" hover={false}>
            <h3 className="heading-serif text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6">
              {details.extras.title}
            </h3>
            <ul className="space-y-3">
              {details.extras.items.map((item, index) => (
                <li key={index} className="prose-body !text-sm sm:!text-[15px]">
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </li>
              ))}
            </ul>
          </PremiumCard>
        </FadeInView>
      </div>
    </Section>
  );
}
