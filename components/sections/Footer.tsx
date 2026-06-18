import { siteContent } from "@/lib/constants";
import { DecorativeDivider } from "@/components/ui/DecorativeElements";

const { footer } = siteContent;

export function Footer() {
  return (
    <footer className="relative py-16 md:py-20 border-t border-gold/15 bg-cream/30">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col items-center text-center gap-6">
          <DecorativeDivider />

          <h2 className="font-display text-xl md:text-2xl font-light text-text-dark tracking-wide">
            {footer.title}
          </h2>

          <p className="text-sm text-text-muted max-w-md leading-relaxed">
            {footer.subtitle}
          </p>

          <p className="text-sm text-text-muted/80">
            {footer.location}
          </p>

          <a
            href={footer.contactHref}
            className="text-sm text-text-accent hover:text-gold transition-colors tracking-wide uppercase"
          >
            {footer.contactLabel}
          </a>

          <p className="text-xs text-text-muted/60 mt-4">
            © {new Date().getFullYear()} {footer.title}. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
