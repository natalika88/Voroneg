import { type ReactNode } from "react";

interface GoldenPortraitFrameProps {
  children: ReactNode;
  className?: string;
}

function CornerOrnament({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 56 56"
      className={`absolute w-11 h-11 sm:w-14 sm:h-14 text-gold-muted ${className}`}
      aria-hidden="true"
      fill="none"
    >
      <path
        d="M4 52 C4 26, 12 10, 52 4"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.85"
      />
      <path
        d="M10 46 C10 30, 16 16, 44 10"
        stroke="currentColor"
        strokeWidth="0.6"
        opacity="0.5"
      />
      <path
        d="M18 8 C22 12, 26 14, 32 12"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.45"
      />
      <circle cx="10" cy="10" r="2" fill="currentColor" opacity="0.75" />
      <circle cx="22" cy="6" r="1" fill="currentColor" opacity="0.5" />
      <path d="M16 4 L20 8 M4 16 L8 20" stroke="currentColor" strokeWidth="0.5" opacity="0.55" />
    </svg>
  );
}

function LaceBorder() {
  return (
    <svg
      className="absolute inset-3 sm:inset-4 w-[calc(100%-1.5rem)] sm:w-[calc(100%-2rem)] h-[calc(100%-1.5rem)] sm:h-[calc(100%-2rem)] pointer-events-none text-gold/45"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <rect
        x="1"
        y="1"
        width="98"
        height="98"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.6"
        strokeDasharray="1.5 4 6 4 1.5 8"
      />
      <rect
        x="4"
        y="4"
        width="92"
        height="92"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.35"
        strokeDasharray="0.8 5 3 5"
        opacity="0.65"
      />
    </svg>
  );
}

export function GoldenPortraitFrame({ children, className = "" }: GoldenPortraitFrameProps) {
  return (
    <div className={`golden-portrait-frame relative ${className}`}>
      <LaceBorder />
      <div className="golden-portrait-frame__outer absolute inset-0 pointer-events-none" aria-hidden="true" />
      <div className="golden-portrait-frame__dots absolute inset-0 pointer-events-none" aria-hidden="true" />

      <CornerOrnament className="top-0.5 left-0.5" />
      <CornerOrnament className="top-0.5 right-0.5 rotate-90" />
      <CornerOrnament className="bottom-0.5 right-0.5 rotate-180" />
      <CornerOrnament className="bottom-0.5 left-0.5 -rotate-90" />

      <div className="golden-portrait-frame__inner relative overflow-hidden aspect-[3/4]">
        {children}
      </div>
    </div>
  );
}
