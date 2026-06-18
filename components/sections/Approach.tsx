import { siteContent } from "@/lib/constants";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeInView } from "@/components/ui/FadeInView";
import { DecorativeDivider } from "@/components/ui/DecorativeElements";

const { approach } = siteContent;

const [lead, ...rest] = approach.text.split(". ");
const body = rest.join(". ");

export function Approach() {
  return (
    <Section id={approach.id} tone="warm">
      <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-6 md:px-8 text-center">
        <SectionHeading title={approach.title} />

        <FadeInView>
          <DecorativeDivider className="mb-8 sm:mb-10" />
        </FadeInView>

        <div className="space-y-6 sm:space-y-8">
          <FadeInView>
            <p className="heading-serif text-xl sm:text-2xl md:text-3xl leading-[1.4] text-balance">
              {lead}.
            </p>
          </FadeInView>
          <FadeInView delay={0.15}>
            <p className="font-accent text-[15px] sm:text-base md:text-lg text-text-muted italic leading-[1.85] text-balance">
              {body}
            </p>
          </FadeInView>
        </div>

        <FadeInView delay={0.3}>
          <DecorativeDivider className="mt-8 sm:mt-10" />
        </FadeInView>
      </div>
    </Section>
  );
}
