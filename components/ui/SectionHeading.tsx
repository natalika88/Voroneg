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
    <FadeInView className={`mb-10 sm:mb-12 md:mb-16 max-w-3xl ${alignClass} ${className}`}>
      <div
        className="flex flex-col gap-3 sm:gap-4"
        style={{ alignItems: align === "center" ? "center" : "flex-start" }}
      >
        <div className="w-12 sm:w-16 h-px shimmer-line" aria-hidden="true" />
        <h2 className="heading-serif text-[1.75rem] sm:text-4xl md:text-[2.75rem] lg:text-5xl leading-[1.15] text-balance">
          {title}
        </h2>
        {subtitle && (
          <p className="font-accent text-[15px] sm:text-base md:text-lg text-text-muted italic max-w-xl leading-[1.75]">
            {subtitle}
          </p>
        )}
        <div className="w-12 sm:w-16 h-px shimmer-line" aria-hidden="true" />
      </div>
    </FadeInView>
  );
}
