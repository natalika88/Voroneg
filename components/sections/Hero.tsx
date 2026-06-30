"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteContent } from "@/lib/constants";
import { getAssetPath } from "@/lib/assets";
import { Button } from "@/components/ui/Button";
import { GlowBackground, DecorativeDivider, ScrollIndicator } from "@/components/ui/DecorativeElements";

const { hero } = siteContent;

export function Hero() {
  const bgSrc = getAssetPath(hero.image.src);
  const mobileBgSrc = getAssetPath(hero.image.mobileSrc);

  return (
    <section
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
      aria-label="Главный экран"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={mobileBgSrc}
          alt=""
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-center md:hidden"
          aria-hidden
        />
        <Image
          src={bgSrc}
          alt=""
          fill
          priority
          unoptimized
          sizes="100vw"
          className="hidden md:block object-cover object-center"
          aria-hidden
        />
      </div>

      {/* Overlays — above image, below content */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-warm-white/25 via-ivory/40 to-ivory/85" aria-hidden="true" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-ivory/95 via-transparent to-warm-white/20" aria-hidden="true" />
      <div
        className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_15%,rgba(250,247,242,0.25)_70%)]"
        aria-hidden="true"
      />
      <div className="absolute inset-0 z-[1] hero-light-ray opacity-50" aria-hidden="true" />

      <div className="absolute inset-0 z-[2] pointer-events-none">
        <GlowBackground intensity="medium" />
      </div>

      <motion.div
        className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2] w-[min(90vw,700px)] h-[min(70vw,550px)] rounded-full blur-3xl pointer-events-none animate-glow-pulse"
        style={{
          background:
            "radial-gradient(ellipse, rgba(212,197,168,0.4) 0%, rgba(232,223,208,0.15) 40%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 z-[2] w-px h-32 bg-gradient-to-b from-gold/40 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* Content — always on top */}
      <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-6 py-28 sm:py-32 md:py-40 text-center">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-5 sm:mb-6 text-[10px] sm:text-xs uppercase tracking-[0.35em] text-text-accent font-medium">
            {hero.eyebrow}
          </p>

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
            {hero.meta.map((line, index) => (
              <p
                key={line}
                className={
                  index === 1
                    ? "heading-serif text-xl sm:text-2xl md:text-3xl tracking-wide text-text-dark mt-1 sm:mt-2"
                    : "text-[11px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-text-muted"
                }
              >
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
