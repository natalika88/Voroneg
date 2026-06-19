import { siteContent } from "@/lib/constants";

const { telegram } = siteContent.floatingContacts;

const fabClassName =
  "fixed bottom-5 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-gold/25 bg-ivory/95 text-[#2a9fd6] shadow-[0_4px_20px_rgba(196,165,116,0.2)] backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-gold/45 hover:shadow-[0_6px_28px_rgba(196,165,116,0.3)] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/40 focus-visible:ring-offset-2 focus-visible:ring-offset-ivory";

function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

export function FloatingContacts() {
  if (!telegram) return null;

  return (
    <a
      href={telegram.href}
      target="_blank"
      rel="noopener noreferrer"
      title={`Написать в Telegram ${telegram.label}`}
      aria-label={`Написать в Telegram ${telegram.label}`}
      className={fabClassName}
    >
      <TelegramIcon />
    </a>
  );
}
