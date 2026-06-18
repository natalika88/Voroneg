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
    "bg-gold/90 text-ivory border border-gold-muted/30 hover:bg-gold hover:border-gold-muted/50 shadow-[0_4px_24px_rgba(196,165,116,0.2)]",
  secondary:
    "bg-transparent text-text border border-gold/40 hover:border-gold/70 hover:bg-gold/5",
  ghost: "bg-transparent text-text-muted hover:text-text border border-transparent",
};

export function Button({
  variant = "primary",
  href,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseClass =
    "inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium tracking-wide transition-all duration-500 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:ring-offset-2 focus-visible:ring-offset-ivory disabled:opacity-50 disabled:cursor-not-allowed";

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
