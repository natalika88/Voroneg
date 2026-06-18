import { type ReactNode, type ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  href?: string;
  children: ReactNode;
  className?: string;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-b from-gold-light/95 to-gold/85 text-text-dark border border-gold-muted/20 shadow-[0_6px_28px_rgba(196,165,116,0.18),inset_0_1px_0_rgba(255,255,255,0.45)] hover:from-gold-light hover:to-gold hover:shadow-[0_10px_36px_rgba(196,165,116,0.26)] hover:border-gold-muted/35 active:scale-[0.98]",
  secondary:
    "bg-warm-white/60 text-text border border-gold/25 backdrop-blur-sm shadow-[0_2px_16px_rgba(196,165,116,0.06)] hover:bg-warm-white/90 hover:border-gold/45 hover:shadow-[0_4px_24px_rgba(196,165,116,0.1)] active:scale-[0.98]",
  ghost:
    "bg-transparent text-text-muted hover:text-text border border-transparent",
};

export function Button({
  variant = "primary",
  href,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseClass =
    "inline-flex items-center justify-center min-h-[48px] px-8 py-3.5 text-sm font-medium tracking-wide transition-all duration-500 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/40 focus-visible:ring-offset-2 focus-visible:ring-offset-ivory disabled:opacity-50 disabled:cursor-not-allowed";

  const combined = `${baseClass} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combined}>
        {children}
      </a>
    );
  }

  return (
    <button className={combined} {...props}>
      {children}
    </button>
  );
}
