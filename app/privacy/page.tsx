import type { Metadata } from "next";
import Link from "next/link";
import { siteContent } from "@/lib/constants";
import { getAssetPath } from "@/lib/assets";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { PrivacyPolicyContent } from "@/components/sections/PrivacyPolicyContent";
import { Section } from "@/components/ui/Section";

const { privacy, brand } = siteContent;

export const metadata: Metadata = {
  title: `${privacy.title} | ${brand.name}`,
  description: privacy.intro.slice(0, 160),
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        <Section tone="pearl">
          <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 md:px-8 py-8 sm:py-12">
            <div className="mb-8 sm:mb-10 text-center">
              <h1 className="heading-serif text-3xl sm:text-4xl md:text-5xl leading-[1.15] mb-4">
                {privacy.title}
              </h1>
              <Link
                href={getAssetPath("/")}
                className="text-sm text-text-accent hover:text-gold transition-colors border-b border-gold/20 hover:border-gold/50 pb-0.5"
              >
                ← Вернуться на главную
              </Link>
            </div>
            <PrivacyPolicyContent />
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
