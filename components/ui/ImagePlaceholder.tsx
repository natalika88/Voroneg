"use client";

import Image from "next/image";
import { useState } from "react";

interface ImagePlaceholderProps {
  src: string;
  alt: string;
  placeholder?: string;
  className?: string;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
  aspectRatio?: string;
  variant?: "default" | "hero";
}

function DesignerPlaceholder({
  label,
  alt,
  className = "",
  aspectRatio,
  variant = "default",
}: {
  label: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  variant?: "default" | "hero";
}) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center placeholder-frame border border-gold/15 overflow-hidden ${className}`}
      style={aspectRatio ? { aspectRatio } : undefined}
      role="img"
      aria-label={alt}
    >
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(212,184,176,0.15) 0%, transparent 40%),
            radial-gradient(circle at 80% 20%, rgba(212,197,168,0.2) 0%, transparent 45%)
          `,
        }}
        aria-hidden="true"
      />

      {/* Corner ornaments */}
      <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-gold/30" aria-hidden="true" />
      <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-gold/30" aria-hidden="true" />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-gold/30" aria-hidden="true" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-gold/30" aria-hidden="true" />

      <div
        className={`relative z-10 flex flex-col items-center gap-4 px-8 text-center ${variant === "hero" ? "py-16" : "py-10"}`}
      >
        <div className="w-16 h-px shimmer-line" aria-hidden="true" />
        <div className="w-2 h-2 rotate-45 border border-gold/50" aria-hidden="true" />
        <span
          className={`font-display text-gold-muted tracking-wide leading-snug ${
            variant === "hero" ? "text-xl sm:text-2xl md:text-3xl" : "text-base sm:text-lg md:text-xl"
          }`}
        >
          {label}
        </span>
        <p className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-text-muted/70">
          Фото скоро появится
        </p>
        <div className="w-16 h-px shimmer-line" aria-hidden="true" />
      </div>
    </div>
  );
}

export function ImagePlaceholder({
  src,
  alt,
  placeholder,
  className = "",
  fill = false,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  aspectRatio,
  variant = "default",
}: ImagePlaceholderProps) {
  const [hasError, setHasError] = useState(false);
  const label = placeholder ?? alt;

  if (hasError) {
    return (
      <DesignerPlaceholder
        label={label}
        alt={alt}
        className={`${fill ? "absolute inset-0" : ""} ${className}`}
        aspectRatio={aspectRatio}
        variant={variant}
      />
    );
  }

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover ${className}`}
        sizes={sizes}
        priority={priority}
        onError={() => setHasError(true)}
      />
    );
  }

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes={sizes}
        priority={priority}
        onError={() => setHasError(true)}
      />
    </div>
  );
}
