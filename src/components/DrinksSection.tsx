"use client";

import { WineDoodle, StarDoodle, ScribbleLine } from "@/components/Doodles";
import { drinks } from "@/data/menu";

export default function DrinksSection() {
  return (
    <section
      id={drinks.id}
      className="js-course relative overflow-hidden bg-navy text-parchment"
    >
      <div className="pointer-events-none absolute inset-0 opacity-35">
        <WineDoodle className="floaty absolute right-4 top-10 w-11" />
        <StarDoodle className="absolute left-6 bottom-14 w-4 opacity-70" />
      </div>

      <div className="relative mx-auto max-w-lg px-5 py-16 sm:px-8 sm:py-20">
        <header className="js-reveal text-center">
          <p className="font-label text-[0.68rem] uppercase tracking-[0.36em] text-amber">
            {drinks.number} · La pahar
          </p>
          <h2 className="mt-4 font-display text-[clamp(2.6rem,12vw,4rem)] leading-[0.95] tracking-[-0.03em]">
            {drinks.title}
          </h2>
          <ScribbleLine className="js-scribble mx-auto mt-5 w-36" color="#F0C14A" />
          <p className="mx-auto mt-5 max-w-[18rem] font-display text-xl leading-snug text-butter">
            {drinks.heading}
          </p>
        </header>

        <ul className="mt-12 space-y-0">
          {drinks.items.map((item) => (
            <li
              key={item.name}
              className="js-dish border-t border-parchment/20 py-7 first:border-t-0 first:pt-0"
            >
              <h3 className="font-display text-[1.65rem] leading-tight tracking-[-0.02em] sm:text-[1.85rem]">
                {item.name}
              </h3>
              <p className="mt-2 text-[0.98rem] leading-relaxed text-parchment/70">
                {item.line}
              </p>
              <p className="mt-4 text-[0.88rem] leading-relaxed text-parchment/65">
                <span className="font-label text-[0.58rem] uppercase tracking-[0.22em] text-amber">
                  Ingrediente
                </span>
                <span className="mt-1 block">{item.ingredients.join(" · ")}</span>
              </p>
              <p className="mt-3 text-[0.82rem] leading-relaxed text-parchment/65">
                <span className="font-label text-[0.58rem] uppercase tracking-[0.22em] text-amber">
                  Alergeni
                </span>
                <span className="mt-1 block italic">
                  {item.allergens.length ? item.allergens.join(", ") : "—"}
                </span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
