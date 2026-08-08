import type { Metadata } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";
import "./globals.css";

const display = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Toscana — Cucina Toscana",
  description:
    "A premium Tuscan tasting menu: antipasti, primi, secondi, and dolci — crafted with quiet luxury.",
  openGraph: {
    title: "Toscana — Cucina Toscana",
    description:
      "A premium Tuscan tasting menu: antipasti, primi, secondi, and dolci.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans text-parchment">{children}</body>
    </html>
  );
}
