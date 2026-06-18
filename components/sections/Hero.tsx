"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { GlowBackground, DecorativeDivider, ScrollIndicator } from "@/components/ui/DecorativeElements";

const { hero } = siteContent;

export function Hero() {
  return (
    <section
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
      aria-label="Главный экран"
    >
      {/* Background image / placeholder */}
      <div className="absolute inset-0">
        <ImagePlaceholder
          src={hero.image.src}
          alt={hero.image.alt}
          fill
          priority
          variant="hero"
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Layered light overlays — текст читаем, фото видно */}
      <div className="absolute inset-0 bg-gradient-to-b from-warm-white/20 via-ivory/35 to-ivory/80" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-t from-ivory/90 via-transparent to-warm-white/15" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(250,247,242,0.2)_75%)]" aria-hidden="true" />
      <div className="absolute inset-0 hero-light-ray opacity-60" aria-hidden="true" />

      <GlowBackground intensity="medium" />

      {/* Central luminous glow */}
      <motion.div
        className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(90vw,700px)] h-[min(70vw,550px)] rounded-full blur-3xl pointer-events-none animate-glow-pulse"
        style={{
          background:
            "radial-gradient(ellipse, rgba(212,197,168,0.45) 0%, rgba(232,223,208,0.2) 40%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Delicate gold accent lines */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-gold/40 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-ivory to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-6 py-28 sm:py-32 md:py-40 text-center">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.35em" }}
            transition={{ duration: 1.4, delay: 0.2 }}
            className="mb-5 sm:mb-6 text-[10px] sm:text-xs uppercase text-text-accent font-medium"
          >
            {hero.eyebrow}
          </motion.p>

          <h1
            className="heading-serif text-[2.25rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.08] text-balance mb-3 sm:mb-4"
            style={{
              textShadow: "0 0 60px rgba(212,197,168,0.25), 0 2px 4px rgba(61,53,48,0.06)",
            }}
          >
            {hero.title}
          </h1>

          <p className="heading-serif text-lg sm:text-2xl md:text-3xl text-text-muted/90 mb-6 sm:mb-8 text-balance">
            {hero.subtitle}
          </p>

          <DecorativeDivider className="mb-6 sm:mb-8" />

          <p className="font-accent text-[15px] sm:text-base md:text-lg text-text-muted max-w-2xl mx-auto mb-6 sm:mb-8 leading-[1.85] italic px-2">
            {hero.description}
          </p>

          <div className="flex flex-col gap-2 sm:gap-3 mb-4 sm:mb-6">
            {hero.meta.map((line) => (
              <p key={line} className="text-[11px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-text-muted">
                {line}
              </p>
            ))}
          </div>

          <p className="mb-10 sm:mb-12 text-sm text-text-accent tracking-wide font-medium">
            {hero.note}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-sm sm:max-w-none mx-auto">
            <Button
              href="#apply"
              variant="primary"
              className="w-full sm:w-auto uppercase tracking-[0.2em] text-xs"
            >
              {hero.primaryCta}
            </Button>
            <Button
              href="#program"
              variant="secondary"
              className="w-full sm:w-auto uppercase tracking-[0.2em] text-xs"
            >
              {hero.secondaryCta}
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="mt-16 sm:mt-24 md:mt-28"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
        >
          <ScrollIndicator />
        </motion.div>
      </div>
    </section>
  );
}
