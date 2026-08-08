import type { Metadata, Viewport } from "next";
import { Fraunces, Nunito } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const sans = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VASILIU’S — Moldavian Pearl · Tuscany Edition",
  description:
    "MOLDAVIAN PEARL IS ON THE MOVE — TUSCANY EDITION. A goofy theatrical Tuscan dinner menu by VASILIU’S.",
  openGraph: {
    title: "VASILIU’S — Tuscany Edition",
    description: "MOLDAVIAN PEARL IS ON THE MOVE — TUSCANY EDITION",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#1A0E12",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans text-espresso">{children}</body>
    </html>
  );
}
