"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeInView } from "@/components/ui/FadeInView";
import { StaggerContainer, staggerItem } from "@/components/ui/FadeInView";
import { GlowBackground } from "@/components/ui/DecorativeElements";

const { program } = siteContent;

export function Program() {
  return (
    <section id={program.id} className="relative py-24 md:py-32 overflow-hidden">
      <GlowBackground />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading title={program.title} />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 max-w-5xl mx-auto">
          {program.items.map((item, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="group relative p-6 md:p-8 bg-ivory/80 border border-gold/15 rounded-sm transition-all duration-500 hover:border-gold/35 hover:glow-gold"
            >
              <span
                className="absolute top-5 right-6 font-display text-3xl text-gold/20 group-hover:text-gold/40 transition-colors duration-500"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-base text-text-muted leading-relaxed pr-10 group-hover:text-text transition-colors duration-500">
                {item}
              </p>
            </motion.div>
          ))}
        </StaggerContainer>

        <FadeInView delay={0.3} className="mt-12 text-center">
          <p className="font-accent text-sm md:text-base text-text-muted/80 italic max-w-xl mx-auto">
            {program.note}
          </p>
        </FadeInView>
      </div>
    </section>
  );
}
