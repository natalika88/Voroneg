import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope, Lora } from "next/font/google";
import { siteContent } from "@/lib/constants";
import { FloatingContacts } from "@/components/ui/FloatingContacts";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-manrope",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
});

const { seo, brand } = siteContent;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  metadataBase: new URL(
    process.env.GITHUB_PAGES === "true"
      ? "https://natalika88.github.io/Voroneg"
      : "http://localhost:3000"
  ),
  openGraph: {
    title: brand.name,
    description: seo.description,
    locale: seo.locale,
    type: "website",
    siteName: brand.name,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${cormorant.variable} ${manrope.variable} ${lora.variable}`}>
      <body className="min-h-screen overflow-x-hidden">
        {children}
        <FloatingContacts />
      </body>
    </html>
  );
}
