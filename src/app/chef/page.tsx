import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { brand } from "@/data/menu";

export const metadata: Metadata = {
  title: "Despre Chef — VASILIU’S",
  description: brand.chefBio,
};

export default function ChefPage() {
  return (
    <main className="min-h-screen bg-night text-parchment">
      <div className="mx-auto max-w-lg px-5 pb-16 pt-[max(1rem,env(safe-area-inset-top))] sm:px-8">
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

        <p className="mt-4 text-center font-label text-[0.68rem] uppercase tracking-[0.34em] text-amber">
          Portret oficial
        </p>
        <h1 className="mt-3 text-center font-display text-[clamp(2.4rem,11vw,3.6rem)] leading-none">
          {brand.chefPageTitle}
        </h1>

        <div className="relative mt-8 aspect-[4/5] w-full overflow-hidden rounded-[1.25rem] border-2 border-amber/35 shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
          <Image
            src="/chef-portrait.jpg"
            alt="Chef Vasiliu in bucatarie, co-star ACEL URS"
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 640px) 100vw, 512px"
          />
        </div>

        <p className="mt-8 font-display text-[1.35rem] leading-snug text-butter sm:text-[1.5rem]">
          {brand.chefBio}
        </p>

        <p className="mt-8 text-center font-label text-[0.62rem] uppercase tracking-[0.28em] text-parchment/45">
          Bilele de aur · Hoteluri de 7 stele · ACEL URS
        </p>

        <Link
          href="/"
          className="mt-10 flex min-h-14 items-center justify-center rounded-full border border-amber/40 bg-wine/80 font-display text-xl text-parchment"
        >
          Inapoi la masa
        </Link>
      </div>
    </main>
  );
}
