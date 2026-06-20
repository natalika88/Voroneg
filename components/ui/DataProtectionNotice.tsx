import { siteContent } from "@/lib/constants";

const { dataProtection } = siteContent.form;

function ShieldIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-5 h-5 shrink-0 text-gold"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3 4 6.5v6.2c0 4.7 3.4 9.1 8 10.3 4.6-1.2 8-5.6 8-10.3V6.5L12 3z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="m9.5 12 2 2 4-4.5" />
    </svg>
  );
}

export function DataProtectionNotice() {
  return (
    <div
      className="mb-6 sm:mb-7 rounded-sm border border-gold/20 bg-warm-white/60 px-4 py-4 sm:px-5 sm:py-5"
      role="note"
      aria-label={dataProtection.title}
    >
      <div className="flex items-start gap-3">
        <ShieldIcon />
        <div className="space-y-2">
          <p className="text-sm font-medium text-text tracking-wide">{dataProtection.title}</p>
          <ul className="space-y-1.5">
            {dataProtection.points.map((point) => (
              <li key={point} className="text-xs sm:text-sm text-text-muted leading-[1.65] flex gap-2">
                <span className="text-gold-muted mt-0.5" aria-hidden="true">
                  ·
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
