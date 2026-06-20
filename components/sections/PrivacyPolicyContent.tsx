import { siteContent } from "@/lib/constants";
import { FadeInView } from "@/components/ui/FadeInView";

const { privacy } = siteContent;

export function PrivacyPolicyContent() {
  return (
    <article className="max-w-3xl mx-auto space-y-8 sm:space-y-10">
      <FadeInView>
        <p className="text-sm text-text-muted leading-[1.75]">{privacy.intro}</p>
      </FadeInView>

      {privacy.sections.map((section, index) => (
        <FadeInView key={section.title} delay={index * 0.05}>
          <section className="space-y-3">
            <h2 className="heading-serif text-xl sm:text-2xl text-text-dark">{section.title}</h2>
            <div className="space-y-2">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="prose-body text-[15px] sm:text-base">
                  {paragraph}
                </p>
              ))}
            </div>
            {"list" in section && section.list && (
              <ul className="space-y-2 pl-1">
                {section.list.map((item) => (
                  <li key={item} className="text-sm sm:text-[15px] text-text-muted leading-[1.7] flex gap-2">
                    <span className="text-gold-muted" aria-hidden="true">
                      ·
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </FadeInView>
      ))}

      <FadeInView delay={0.3}>
        <p className="text-xs text-text-muted/70 border-t border-gold/10 pt-6">
          {privacy.lastUpdated}
        </p>
      </FadeInView>
    </article>
  );
}
