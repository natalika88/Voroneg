import { type ReactNode } from "react";

export type SectionTone = "pearl" | "cream" | "warm" | "luminous";

const toneStyles: Record<SectionTone, string> = {
  pearl: "section-tone-pearl",
  cream: "section-tone-cream",
  warm: "section-tone-warm",
  luminous: "section-tone-luminous",
};

interface SectionProps {
  id?: string;
  tone?: SectionTone;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
}

export function Section({
  id,
  tone = "pearl",
  children,
  className = "",
  ariaLabel,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={`relative overflow-hidden py-20 sm:py-24 md:py-28 lg:py-32 ${toneStyles[tone]} ${className}`}
    >
      <div className="section-flow-top" aria-hidden="true" />
      <div className="section-flow-bottom" aria-hidden="true" />
      {children}
    </section>
  );
}
