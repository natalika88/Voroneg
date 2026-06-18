import { FadeInView } from "./FadeInView";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <FadeInView className={`mb-12 md:mb-16 max-w-3xl ${alignClass} ${className}`}>
      <div className="flex flex-col items-center gap-4" style={{ alignItems: align === "center" ? "center" : "flex-start" }}>
        <div className="w-16 h-px shimmer-line" aria-hidden="true" />
        <h2
          className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-text-dark tracking-tight text-balance leading-tight"
        >
          {title}
        </h2>
        {subtitle && (
          <p className="font-accent text-base md:text-lg text-text-muted italic max-w-xl">
            {subtitle}
          </p>
        )}
        <div className="w-16 h-px shimmer-line" aria-hidden="true" />
      </div>
    </FadeInView>
  );
}
