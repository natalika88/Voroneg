"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/lib/constants";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FadeInView } from "@/components/ui/FadeInView";
import { DecorativeDivider } from "@/components/ui/DecorativeElements";

const { finalCta } = siteContent;

export function FinalCta() {
  return (
    <Section tone="luminous" ariaLabel="Приглашение к участию">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(100vw,800px)] h-[300px] sm:h-[400px] rounded-full blur-3xl opacity-40 pointer-events-none animate-glow-pulse"
        style={{
          background: "radial-gradient(ellipse, rgba(212,197,168,0.45) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-3xl px-5 sm:px-6 md:px-8 text-center">
        <FadeInView>
          <DecorativeDivider className="mb-8 sm:mb-10" />
        </FadeInView>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="heading-serif text-xl sm:text-3xl md:text-4xl leading-[1.45] text-balance mb-6 sm:mb-8"
        >
          {finalCta.title}
        </motion.p>

        <FadeInView delay={0.2}>
          <p className="font-accent text-[15px] sm:text-base md:text-lg text-text-muted italic mb-8 sm:mb-10 leading-[1.85]">
            {finalCta.subtitle}
          </p>
        </FadeInView>

        <FadeInView delay={0.3}>
          <Button
            href="#apply"
            variant="primary"
            className="uppercase tracking-[0.2em] text-xs"
          >
            {finalCta.button}
          </Button>
        </FadeInView>

        <FadeInView delay={0.4}>
          <DecorativeDivider className="mt-8 sm:mt-10" />
        </FadeInView>
      </div>
    </Section>
  );
}
