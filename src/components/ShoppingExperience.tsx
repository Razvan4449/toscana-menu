"use client";

import { useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ChefLogo from "@/components/ChefLogo";
import { OliveDoodle, StarDoodle } from "@/components/Doodles";
import { shoppingCategories, shoppingList } from "@/data/dinner";
import { useShoppingList } from "@/hooks/useShoppingList";

gsap.registerPlugin(useGSAP);

export default function ShoppingExperience() {
  const { checked, toggle, reset, done, total, complete } = useShoppingList();
  const [burstId, setBurstId] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  const grouped = useMemo(() => {
    return shoppingCategories.map((cat) => ({
      ...cat,
      items: shoppingList.filter((item) => item.category === cat.id),
    }));
  }, []);

  useGSAP(
    () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) return;
      gsap.from(".js-shop-head", {
        y: 24,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      });
      gsap.from(".js-shop-group", {
        y: 20,
        opacity: 0,
        stagger: 0.08,
        duration: 0.55,
        delay: 0.15,
        ease: "power2.out",
      });
    },
    { scope: ref },
  );

  function onToggle(id: string) {
    const willCheck = !checked[id];
    toggle(id);
    if (willCheck) {
      setBurstId(id);
      window.setTimeout(() => setBurstId((cur) => (cur === id ? null : cur)), 700);
    }
  }

  return (
    <div ref={ref} className="min-h-screen bg-parchment pb-32 text-espresso">
      <header className="js-shop-head border-b border-espresso/10 bg-butter/50 px-5 pb-8 pt-[max(1.25rem,env(safe-area-inset-top))] sm:px-8">
        <p className="font-label text-[0.65rem] uppercase tracking-[0.32em] text-terracotta">
          The quest
        </p>
        <h1 className="mt-2 font-display text-[clamp(2.4rem,11vw,3.6rem)] leading-none">
          Shopping list
        </h1>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-espresso/70">
          Check things off with theatrical satisfaction. {done}/{total} already
          conquered.
        </p>
        <div className="mt-5 h-3 overflow-hidden rounded-full bg-toasted">
          <div
            className="h-full rounded-full bg-tomato transition-[width] duration-300"
            style={{ width: `${total ? (done / total) * 100 : 0}%` }}
          />
        </div>
        <button
          type="button"
          onClick={reset}
          className="mt-4 font-label text-[0.65rem] uppercase tracking-[0.22em] text-espresso/45 underline-offset-4 hover:underline"
        >
          Reset the quest
        </button>
      </header>

      {complete ? (
        <div className="mx-5 mt-8 flex flex-col items-center rounded-[1.75rem] border-2 border-gold bg-butter px-5 py-8 text-center shadow-[0_10px_0_rgba(158,59,42,0.12)] sm:mx-8">
          <ChefLogo size="md" />
          <StarDoodle className="mt-2 w-6" />
          <p className="mt-3 font-display text-3xl text-wine">Magnifico.</p>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-espresso/70">
            We are officially overprepared. The fridge fears us.
          </p>
        </div>
      ) : null}

      <div className="mx-auto max-w-lg space-y-10 px-5 pt-10 sm:px-8">
        {grouped.map((group) => (
          <section key={group.id} className="js-shop-group">
            <div className="flex items-end justify-between gap-3">
              <div>
                <h2 className="font-display text-3xl leading-none text-espresso">
                  {group.label}
                </h2>
                <p className="mt-1 text-sm text-espresso/55">{group.joke}</p>
              </div>
              <OliveDoodle className="w-7 opacity-50" />
            </div>
            <ul className="mt-5 space-y-2">
              {group.items.map((item) => {
                const isOn = Boolean(checked[item.id]);
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => onToggle(item.id)}
                      className={`relative flex w-full min-h-16 items-center gap-3 rounded-2xl border-2 px-3 py-3 text-left transition-transform active:scale-[0.99] ${
                        isOn
                          ? "border-olive/40 bg-olive/10"
                          : "border-espresso/10 bg-parchment"
                      }`}
                    >
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 ${
                          isOn
                            ? "border-olive bg-olive text-parchment"
                            : "border-espresso/25 bg-toasted/50"
                        }`}
                        aria-hidden
                      >
                        {isOn ? "✓" : ""}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span
                          className={`block font-display text-xl leading-tight ${
                            isOn ? "text-espresso/45 line-through decoration-tomato decoration-2" : "text-espresso"
                          }`}
                        >
                          {item.name}
                        </span>
                        <span className="mt-0.5 block text-sm text-espresso/55">
                          {item.quantity}
                          {item.note ? ` · ${item.note}` : ""}
                        </span>
                      </span>
                      {burstId === item.id ? (
                        <span className="absolute right-3 top-2 font-display text-sm text-tomato animate-bounce">
                          Perfetto!
                        </span>
                      ) : null}
                    </button>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
