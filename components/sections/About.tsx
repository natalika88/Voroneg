import { siteContent } from "@/lib/constants";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeInView } from "@/components/ui/FadeInView";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

const { about } = siteContent;

export function About() {
  return (
    <Section id={about.id} tone="pearl">
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 md:px-8">
        <SectionHeading title={about.title} align="left" className="!mx-0 !text-left" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 items-center">
          <div className="space-y-5 sm:space-y-6 order-2 lg:order-1">
            {about.paragraphs.map((paragraph, index) => (
              <FadeInView key={index} delay={index * 0.1}>
                <p className="prose-body">{paragraph}</p>
              </FadeInView>
            ))}
          </div>

          <FadeInView delay={0.2} className="order-1 lg:order-2">
            <div className="relative aspect-[3/4] max-w-sm sm:max-w-md mx-auto lg:mx-0 lg:ml-auto">
              <div className="absolute -inset-3 border border-gold/20 rounded-sm glow-gold" aria-hidden="true" />
              <div className="absolute -inset-1 border border-gold/10 rounded-sm" aria-hidden="true" />
              <div className="relative w-full h-full overflow-hidden rounded-sm card-premium !p-0">
                <ImagePlaceholder
                  src={about.image.src}
                  alt={about.image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
          </FadeInView>
        </div>
      </div>
    </Section>
  );
}
