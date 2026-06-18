import { siteContent } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeInView } from "@/components/ui/FadeInView";
import { DecorativeDivider } from "@/components/ui/DecorativeElements";

const { approach } = siteContent;

export function Approach() {
  return (
    <section id={approach.id} className="relative py-24 md:py-36 bg-cream/30">
      <div className="mx-auto max-w-4xl px-5 md:px-8 text-center">
        <SectionHeading title={approach.title} />

        <FadeInView>
          <DecorativeDivider className="mb-10" />
        </FadeInView>

        <div className="space-y-8">
          {approach.paragraphs.map((paragraph, index) => (
            <FadeInView key={index} delay={index * 0.15}>
              <p
                className={`leading-relaxed text-balance ${
                  index === 0
                    ? "font-display text-2xl md:text-3xl font-light text-text-dark"
                    : "font-accent text-base md:text-lg text-text-muted italic"
                }`}
              >
                {paragraph}
              </p>
            </FadeInView>
          ))}
        </div>

        <FadeInView delay={0.3}>
          <DecorativeDivider className="mt-10" />
        </FadeInView>
      </div>
    </section>
  );
}
