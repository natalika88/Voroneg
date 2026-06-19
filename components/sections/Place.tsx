import { siteContent } from "@/lib/constants";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeInView } from "@/components/ui/FadeInView";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { GoldenPortraitFrame } from "@/components/ui/GoldenPortraitFrame";

const { place } = siteContent;

export function Place() {
  return (
    <Section id={place.id} tone="cream">
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 md:px-8">
        <SectionHeading title={place.title} />

        <div className="max-w-3xl mx-auto mb-12 sm:mb-16 space-y-5 sm:space-y-6">
          {place.paragraphs.map((paragraph, index) => (
            <FadeInView key={index} delay={index * 0.08}>
              <p className="prose-body text-center">{paragraph}</p>
            </FadeInView>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 max-w-4xl mx-auto">
          {place.gallery.map((item, index) => {
            const isMuted = "muted" in item && item.muted;

            return (
            <FadeInView key={`${item.alt}-${index}`} delay={index * 0.12}>
              <GoldenPortraitFrame
                aspectClassName="aspect-[4/5]"
                innerClassName="rounded-xl"
                className="group rounded-2xl overflow-hidden"
              >
                <ImagePlaceholder
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className={`object-cover object-center transition-all duration-700 group-hover:scale-[1.03] ${
                    isMuted
                      ? "saturate-[0.78] brightness-[1.04] contrast-[0.94] sepia-[0.1]"
                      : ""
                  }`}
                />
                {isMuted && (
                  <div className="absolute inset-0 z-[5] bg-cream/25 mix-blend-multiply pointer-events-none" />
                )}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-text-dark/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl" />
                <div className="absolute bottom-0 left-0 right-0 z-10 p-4 translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
                  <span className="font-display text-sm text-ivory tracking-wide">{item.alt}</span>
                </div>
              </GoldenPortraitFrame>
            </FadeInView>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
