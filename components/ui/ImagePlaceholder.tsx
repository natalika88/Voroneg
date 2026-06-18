"use client";

import Image from "next/image";
import { useState } from "react";

interface ImagePlaceholderProps {
  src: string;
  alt: string;
  placeholder: string;
  className?: string;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
  aspectRatio?: string;
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
}: ImagePlaceholderProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center bg-gradient-to-br from-cream via-pearl to-champagne border border-gold/20 overflow-hidden ${className}`}
        style={aspectRatio ? { aspectRatio } : undefined}
        role="img"
        aria-label={alt}
      >
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(ellipse at 50% 30%, rgba(196,165,116,0.3) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 flex flex-col items-center gap-3 px-6 text-center">
          <div className="w-12 h-px bg-gold/40" aria-hidden="true" />
          <span className="font-display text-lg md:text-xl text-gold-muted tracking-wide">
            {placeholder}
          </span>
          <div className="w-12 h-px bg-gold/40" aria-hidden="true" />
        </div>
      </div>
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
    <div className={`relative overflow-hidden ${className}`} style={aspectRatio ? { aspectRatio } : undefined}>
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
