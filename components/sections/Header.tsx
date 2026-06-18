"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteContent } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

const { nav, brand } = siteContent;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-soft border-b border-gold/20 shadow-[0_4px_30px_rgba(196,165,116,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8 md:py-5">
        <a
          href="#"
          className="font-display text-lg md:text-xl font-medium text-text-dark tracking-wide hover:text-gold-muted transition-colors"
        >
          {brand.name}
        </a>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Основная навигация">
          {nav.items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-text-muted hover:text-text transition-colors tracking-wide"
            >
              {item.label}
            </a>
          ))}
          <Button href="#apply" variant="primary" className="!px-6 !py-2.5 !text-xs uppercase tracking-widest">
            {nav.cta}
          </Button>
        </nav>

        <button
          type="button"
          className="lg:hidden flex flex-col gap-1.5 p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 rounded"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-6 h-px bg-text transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-[5px]" : ""}`}
          />
          <span className={`block w-6 h-px bg-text transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span
            className={`block w-6 h-px bg-text transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-[5px]" : ""}`}
          />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-soft border-t border-gold/15 overflow-hidden"
          >
            <nav className="flex flex-col items-center gap-6 py-8 px-5" aria-label="Мобильная навигация">
              {nav.items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-base text-text-muted hover:text-text transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button
                href="#apply"
                variant="primary"
                className="!text-xs uppercase tracking-widest"
                onClick={() => setMenuOpen(false)}
              >
                {nav.cta}
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
