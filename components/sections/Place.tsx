import { siteContent } from "@/lib/constants";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeInView } from "@/components/ui/FadeInView";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {place.gallery.map((item, index) => (
            <FadeInView key={item.src} delay={index * 0.12}>
              <div
                className={`relative overflow-hidden rounded-sm card-premium !p-0 group ${
                  index === 0 ? "sm:col-span-2 md:col-span-1 aspect-[4/5]" : "aspect-[4/3]"
                }`}
              >
                <ImagePlaceholder
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-text-dark/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="font-display text-sm text-ivory tracking-wide">{item.alt}</span>
                </div>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </Section>
  );
}
