import Link from "next/link";
import { brand } from "@/data/menu";

export default function FinaleNav() {
  return (
    <div className="grid w-full max-w-sm grid-cols-2 gap-3">
      <Link
        href="/chef"
        className="inline-flex min-h-14 items-center justify-center rounded-full border-2 border-amber/50 bg-transparent px-3 text-center font-display text-lg leading-tight text-amber transition-transform active:scale-[0.98] sm:text-xl"
      >
        {brand.chefButton}
      </Link>
      <Link
        href="/cadou"
        className="inline-flex min-h-14 items-center justify-center rounded-full border-2 border-amber/50 bg-transparent px-3 text-center font-display text-lg leading-tight text-amber transition-transform active:scale-[0.98] sm:text-xl"
      >
        {brand.giftButton}
      </Link>
    </div>
  );
}
