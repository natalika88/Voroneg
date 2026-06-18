import { siteContent } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeInView } from "@/components/ui/FadeInView";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { GlowBackground } from "@/components/ui/DecorativeElements";

const { about } = siteContent;

export function About() {
  return (
    <section id={about.id} className="relative py-24 md:py-32 overflow-hidden">
      <GlowBackground />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading title={about.title} align="left" className="!mx-0 !text-left" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-6 order-2 lg:order-1">
            {about.paragraphs.map((paragraph, index) => (
              <FadeInView key={index} delay={index * 0.1}>
                <p className="text-base md:text-lg text-text-muted leading-relaxed">
                  {paragraph}
                </p>
              </FadeInView>
            ))}
          </div>

          <FadeInView delay={0.2} className="order-1 lg:order-2">
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0 lg:ml-auto">
              <div className="absolute -inset-3 border border-gold/20 rounded-sm glow-gold" aria-hidden="true" />
              <div className="absolute -inset-1 border border-gold/10 rounded-sm" aria-hidden="true" />
              <div className="relative w-full h-full overflow-hidden rounded-sm">
                <ImagePlaceholder
                  src={about.image.src}
                  alt={about.image.alt}
                  placeholder={about.image.placeholder}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
