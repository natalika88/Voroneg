import { siteContent } from "@/lib/constants";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeInView } from "@/components/ui/FadeInView";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { GlowBackground } from "@/components/ui/DecorativeElements";

const { guide } = siteContent;

export function Guide() {
  return (
    <Section id={guide.id} tone="pearl">
      <GlowBackground />
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 md:px-8">
        <SectionHeading title={guide.title} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 items-center max-w-5xl mx-auto">
          <FadeInView>
            <div className="relative aspect-[3/4] max-w-xs sm:max-w-sm mx-auto">
              <div
                className="absolute -inset-4 rounded-full opacity-30 blur-2xl animate-glow-pulse"
                style={{
                  background: "radial-gradient(circle, rgba(212,197,168,0.4) 0%, transparent 70%)",
                }}
                aria-hidden="true"
              />
              <div className="relative w-full h-full overflow-hidden rounded-sm card-premium glow-gold !p-0">
                <ImagePlaceholder
                  src={guide.image.src}
                  alt={guide.image.alt}
                  fill
                  sizes="(max-width: 1024px) 80vw, 400px"
                />
              </div>
            </div>
          </FadeInView>

          <div className="space-y-5 sm:space-y-6">
            {guide.paragraphs.map((paragraph, index) => (
              <FadeInView key={index} delay={index * 0.1}>
                <p className="prose-body">{paragraph}</p>
              </FadeInView>
            ))}

            <FadeInView delay={0.3} className="flex flex-wrap gap-5 sm:gap-6 pt-2 sm:pt-4">
              {guide.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-sm text-text-accent hover:text-gold transition-colors tracking-wide border-b border-gold/20 hover:border-gold/50 pb-0.5"
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {social.label}
                </a>
              ))}
            </FadeInView>
          </div>
        </div>
      </div>
    </Section>
  );
}
