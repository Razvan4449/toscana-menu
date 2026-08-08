"use client";

import { useEffect, useState } from "react";
import { faq } from "@/data/menu";
import { StarDoodle } from "@/components/Doodles";

const VOTE_KEY = "vasilius-winner-vote-v1";

export default function FaqSection() {
  const [winner, setWinner] = useState<string | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(VOTE_KEY);
      if (saved) setWinner(saved);
    } catch {
      /* ignore */
    }
    setReady(true);
  }, []);

  function pick(id: string) {
    setWinner(id);
    try {
      localStorage.setItem(VOTE_KEY, id);
    } catch {
      /* ignore */
    }
  }

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-butter/40 px-5 py-16 sm:px-8 sm:py-20"
    >
      <StarDoodle className="pointer-events-none absolute right-6 top-8 w-5 opacity-50" />

      <div className="js-reveal mx-auto max-w-lg">
        <p className="text-center font-label text-[0.68rem] uppercase tracking-[0.34em] text-terracotta">
          Intrebari oficiale
        </p>
        <h2 className="mt-3 text-center font-display text-[clamp(2.4rem,11vw,3.6rem)] leading-none text-espresso">
          FAQ
        </h2>
        <p className="mx-auto mt-3 max-w-sm text-center text-sm leading-relaxed text-espresso/60">
          Raspunsuri clare. Logica optionala.
        </p>

        <ul className="mt-10 space-y-5">
          {faq.map((item) => (
            <li
              key={item.id}
              className="rounded-[1.4rem] border-2 border-espresso/10 bg-cream px-4 py-5 shadow-[0_8px_0_rgba(158,59,42,0.08)]"
            >
              <p className="font-label text-[0.62rem] uppercase tracking-[0.26em] text-wine">
                Intrebare
              </p>
              <h3 className="mt-2 font-display text-[1.35rem] leading-snug text-espresso sm:text-[1.5rem]">
                {item.question}
              </h3>

              {item.type === "text" ? (
                <p className="mt-4 border-t border-dashed border-espresso/15 pt-4 font-display text-xl leading-snug text-terracotta">
                  {item.answer}
                </p>
              ) : (
                <div className="mt-4 border-t border-dashed border-espresso/15 pt-4">
                  <p className="mb-3 font-label text-[0.6rem] uppercase tracking-[0.24em] text-espresso/45">
                    Alege cu inima (sau cu ego-ul)
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {item.options.map((option) => {
                      const active = ready && winner === option.id;
                      return (
                        <button
                          key={option.id}
                          type="button"
                          onClick={() => pick(option.id)}
                          className={`min-h-14 rounded-2xl border-2 font-display text-xl transition-transform active:scale-[0.98] ${
                            active
                              ? "border-wine bg-wine text-parchment shadow-[0_5px_0_rgba(44,33,24,0.25)]"
                              : "border-espresso/15 bg-toasted/60 text-espresso hover:border-terracotta/50"
                          }`}
                          aria-pressed={active}
                        >
                          {option.label}
                        </button>
                      );
                    })}
                  </div>
                  {ready && winner ? (
                    <p className="mt-3 text-center font-display text-lg text-olive">
                      Decizia serii:{" "}
                      <span className="text-wine">
                        {item.options.find((o) => o.id === winner)?.label}
                      </span>
                      . Respect.
                    </p>
                  ) : null}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
