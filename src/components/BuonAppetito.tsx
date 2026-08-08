"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ChefLogo from "@/components/ChefLogo";
import { StarDoodle } from "@/components/Doodles";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function BuonAppetito() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) return;

      gsap.from(".js-finale", {
        y: 30,
        opacity: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 70%" },
      });
    },
    { scope: ref },
  );

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-wine px-5 py-20 pb-36 text-center text-parchment sm:px-8"
    >
      <StarDoodle className="absolute left-8 top-10 w-5 opacity-70" />
      <StarDoodle className="absolute right-10 top-16 w-4 opacity-60" />

      <div className="js-finale mx-auto flex justify-center">
        <ChefLogo size="lg" />
      </div>
      <p className="js-finale mt-4 font-label text-[0.68rem] uppercase tracking-[0.34em] text-amber">
        Curtain call
      </p>
      <h2 className="js-finale mt-3 font-display text-[clamp(2.8rem,13vw,4.5rem)] leading-none">
        Buon appetito
      </h2>
      <p className="js-finale mx-auto mt-4 max-w-sm text-base leading-relaxed text-parchment/75">
        You cooked for friends in Tuscany. That is already a masterpiece. Now eat
        like legends and argue about who grated the cheese better.
      </p>
    </section>
  );
}
