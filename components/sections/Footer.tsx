import { siteContent } from "@/lib/constants";
import { DecorativeDivider } from "@/components/ui/DecorativeElements";

const { footer } = siteContent;

export function Footer() {
  return (
    <footer className="relative py-14 sm:py-16 md:py-20 border-t border-gold/12 section-tone-cream">
      <div className="section-flow-top !h-12" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 md:px-8">
        <div className="flex flex-col items-center text-center gap-4 sm:gap-6">
          <DecorativeDivider />

          <h2 className="heading-serif text-lg sm:text-xl md:text-2xl tracking-wide">
            {footer.title}
          </h2>

          <p className="text-sm sm:text-[15px] text-text-muted max-w-md leading-[1.75]">
            {footer.subtitle}
          </p>

          <p className="text-sm text-text-muted/80">{footer.location}</p>

          <a
            href={footer.contactHref}
            className="text-sm text-text-accent hover:text-gold transition-colors tracking-wide uppercase border-b border-gold/20 hover:border-gold/50 pb-0.5 mt-1"
          >
            {footer.contactLabel}
          </a>

          <p className="text-[11px] sm:text-xs text-text-muted/55 mt-3 sm:mt-4">
            © {new Date().getFullYear()} {footer.title}. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
