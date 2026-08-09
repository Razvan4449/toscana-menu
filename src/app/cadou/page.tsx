import type { Metadata } from "next";
import Link from "next/link";
import StoryFrameDownload from "@/components/StoryFrameDownload";
import { brand } from "@/data/menu";

export const metadata: Metadata = {
  title: "Cadou de la Chef — VASILIU’S",
  description:
    "Frame transparent pentru Instagram Stories — cadou de la Chef Vasiliu.",
};

export default function CadouPage() {
  return (
    <main className="min-h-screen bg-night text-parchment">
      <div className="mx-auto flex min-h-screen max-w-lg flex-col px-5 pb-[max(2.5rem,env(safe-area-inset-bottom))] pt-[max(1rem,env(safe-area-inset-top))] sm:px-8">
        <div className="flex items-center justify-between py-4">
          <Link
            href="/"
            className="font-label text-[0.65rem] uppercase tracking-[0.26em] text-amber"
          >
            ← Inapoi la meniu
          </Link>
          <p className="font-label text-[0.6rem] uppercase tracking-[0.24em] text-parchment/40">
            {brand.established}
          </p>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center py-8 text-center">
          <p className="font-label text-[0.68rem] uppercase tracking-[0.34em] text-amber">
            {brand.giftButton}
          </p>
          <h1 className="mt-3 font-display text-[clamp(2.2rem,10vw,3.2rem)] leading-none">
            {brand.giftPageTitle}
          </h1>
          <p className="mx-auto mt-4 max-w-sm text-[0.95rem] leading-relaxed text-parchment/65">
            {brand.giftPageBody}
          </p>

          <div className="mt-10 w-full">
            <StoryFrameDownload />
          </div>
        </div>

        <Link
          href="/"
          className="mt-4 flex min-h-14 items-center justify-center rounded-full border border-amber/40 bg-wine/80 font-display text-xl text-parchment"
        >
          Inapoi la masa
        </Link>
      </div>
    </main>
  );
}
