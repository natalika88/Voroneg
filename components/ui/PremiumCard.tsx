import { type ReactNode } from "react";

interface PremiumCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function PremiumCard({ children, className = "", hover = true }: PremiumCardProps) {
  return (
    <div
      className={`card-premium p-6 md:p-8 ${hover ? "card-premium-hover" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
