import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope, Lora } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Её величество — Женщина | Женский ретрит в Храме Параскевы Пятницы",
  description:
    "Однодневный женский ретрит в Храме Параскевы Пятницы, Воронежская область, село Хващевка. Пространство тишины, благословения и женской глубины.",
  metadataBase: new URL(
    process.env.GITHUB_PAGES === "true"
      ? "https://natalika88.github.io/Voroneg"
      : "http://localhost:3000"
  ),
  openGraph: {
    title: "Её величество — Женщина",
    description:
      "Однодневный женский ретрит в Храме Параскевы Пятницы. Пространство тишины, благословения и женской глубины.",
    locale: "ru_RU",
    type: "website",
    siteName: "Её величество — Женщина",
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
      <body className="min-h-screen overflow-x-hidden">{children}</body>
    </html>
  );
}
