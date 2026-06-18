"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { GlowBackground, DecorativeDivider, ScrollIndicator } from "@/components/ui/DecorativeElements";

const { hero, about } = siteContent;

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-label="Главный экран">
      <div className="absolute inset-0">
        <ImagePlaceholder
          src={about.image.src}
          alt={about.image.alt}
          fill
          priority
          sizes="100vw"
          className="scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ivory/40 via-ivory/60 to-ivory" />
        <div className="absolute inset-0 bg-gradient-to-t from-ivory via-transparent to-transparent" />
      </div>

      <GlowBackground intensity="medium" />

      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full opacity-40 blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(212,197,168,0.5) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-4xl px-5 py-32 md:py-40 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-6 text-xs uppercase tracking-[0.35em] text-text-accent font-medium">
            {hero.eyebrow}
          </p>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-text-dark leading-[1.1] tracking-tight text-balance mb-4">
            {hero.title}
          </h1>

          <p className="font-display text-xl sm:text-2xl md:text-3xl font-light text-text-muted mb-6 text-balance">
            {hero.subtitle}
          </p>

          <DecorativeDivider className="mb-8" />

          <p className="font-accent text-base md:text-lg text-text-muted/90 max-w-2xl mx-auto mb-6 leading-relaxed italic">
            {hero.description}
          </p>

          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-text-muted">
            {hero.meta.join(" · ")}
          </p>

          <p className="mb-12 text-sm text-text-accent tracking-wide">
            {hero.note}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="#apply" variant="primary" className="w-full sm:w-auto uppercase tracking-widest text-xs">
              {hero.primaryCta}
            </Button>
            <Button href="#program" variant="secondary" className="w-full sm:w-auto uppercase tracking-widest text-xs">
              {hero.secondaryCta}
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="mt-20 md:mt-28"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <ScrollIndicator />
        </motion.div>
      </div>
    </section>
  );
}
