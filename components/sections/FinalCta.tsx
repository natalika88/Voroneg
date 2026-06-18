"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { FadeInView } from "@/components/ui/FadeInView";
import { DecorativeDivider } from "@/components/ui/DecorativeElements";

const { finalCta } = siteContent;

export function FinalCta() {
  return (
    <section
      id={finalCta.id}
      className="relative py-28 md:py-40 overflow-hidden"
      aria-label="Приглашение к участию"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(250,247,242,0) 0%, rgba(232,223,208,0.4) 50%, rgba(250,247,242,0) 100%)",
        }}
        aria-hidden="true"
      />

      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-3xl opacity-30 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(212,197,168,0.5) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-3xl px-5 md:px-8 text-center">
        <FadeInView>
          <DecorativeDivider className="mb-10" />
        </FadeInView>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-2xl sm:text-3xl md:text-4xl font-light text-text-dark leading-relaxed text-balance mb-8"
        >
          {finalCta.text}
        </motion.p>

        <FadeInView delay={0.2}>
          <p className="font-accent text-base md:text-lg text-text-muted italic mb-10 leading-relaxed">
            {finalCta.signature}
          </p>
        </FadeInView>

        <FadeInView delay={0.3}>
          <Button
            href="#registration"
            variant="primary"
            className="uppercase tracking-widest text-xs"
          >
            {finalCta.cta}
          </Button>
        </FadeInView>

        <FadeInView delay={0.4}>
          <DecorativeDivider className="mt-10" />
        </FadeInView>
      </div>
    </section>
  );
}
