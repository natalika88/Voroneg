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

          <div className="mt-2 sm:mt-4 w-full max-w-md space-y-4 sm:space-y-5">
            <h3 className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-text-accent font-medium">
              {footer.contactsTitle}
            </h3>

            {footer.contacts.map((contact) => (
              <div key={contact.name} className="space-y-2">
                <p className="text-sm sm:text-[15px] text-text-dark font-medium">{contact.name}</p>
                <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
                  {contact.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-sm text-text-accent hover:text-gold transition-colors tracking-wide border-b border-gold/20 hover:border-gold/50 pb-0.5"
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="text-[11px] sm:text-xs text-text-muted/55 mt-3 sm:mt-4">
            © {new Date().getFullYear()} {footer.title}. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
