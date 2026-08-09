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
  title: "VASILIU’S — Perla e in vacanta · Toscana",
  description:
    "Capu jos Toscana s-a dat drumu la brate. Meniu digital VASILIU’S — TUTTO PASSA.",
  openGraph: {
    title: "VASILIU’S — Toscana Edition",
    description: "Perla e in vacanta. In toscana. E in Italia. Gen ciubota aia. TUTTO PASSA.",
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
      lang="ro"
      className={`${display.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-night font-sans text-espresso">{children}</body>
    </html>
  );
}
