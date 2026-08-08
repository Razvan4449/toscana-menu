import type { Metadata, Viewport } from "next";
import { Fraunces, Nunito } from "next/font/google";
import BottomNav from "@/components/BottomNav";
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
  title: "VASILIU’S — Una Cena in Toscana",
  description:
    "A goofy cinematic Tuscan dinner menu for friends on vacation: courses, shopping list, timeline, and cooking mode.",
  openGraph: {
    title: "VASILIU’S — Una Cena in Toscana",
    description:
      "11 amici · un tavolo · troppo cibo. The weirdest best trattoria dinner night.",
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
      <body className="paper-texture min-h-full font-sans text-espresso">
        {children}
        <BottomNav />
      </body>
    </html>
  );
}
