"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { StarDoodle, WineDoodle } from "@/components/Doodles";
import { timeline } from "@/data/dinner";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const iconLabel: Record<(typeof timeline)[number]["icon"], string> = {
  dessert: "🍮",
  chop: "🔪",
  fire: "🔥",
  plate: "🍽️",
  feast: "✨",
};

export default function Timeline() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) return;

      gsap.from(".js-timeline-line", {
        scaleY: 0,
        transformOrigin: "top",
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: { trigger: ref.current, start: "top 70%" },
      });

      gsap.from(".js-beat", {
        x: -24,
        opacity: 0,
        stagger: 0.12,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: { trigger: ref.current, start: "top 65%" },
      });
    },
    { scope: ref },
  );

  return (
    <section
      ref={ref}
      id="timeline"
      className="relative overflow-hidden bg-cypress px-5 py-16 text-parchment sm:px-8"
    >
      <WineDoodle className="pointer-events-none absolute -right-2 top-10 w-12 opacity-30" />
      <StarDoodle className="pointer-events-none absolute right-10 bottom-16 w-5 opacity-50" />

      <div className="mx-auto max-w-lg">
        <p className="font-label text-[0.68rem] uppercase tracking-[0.34em] text-amber">
          The itinerary
        </p>
        <h2 className="mt-3 font-display text-[clamp(2.4rem,11vw,3.6rem)] leading-none">
          Cooking timeline
        </h2>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-parchment/70">
          A theatrical schedule so nobody starts the carbonara at dessert o’clock.
        </p>

        <div className="relative mt-12 pl-2">
          <div className="js-timeline-line absolute bottom-2 left-[1.35rem] top-2 w-1 rounded-full bg-amber/40" />
          <ol className="space-y-8">
            {timeline.map((beat) => (
              <li key={beat.id} className="js-beat relative flex gap-4">
                <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-amber bg-night text-lg shadow-[0_0_16px_rgba(240,193,74,0.35)]">
                  <span aria-hidden>{iconLabel[beat.icon]}</span>
                </div>
                <div className="pt-1">
                  <p className="font-label text-[0.65rem] uppercase tracking-[0.28em] text-amber">
                    {beat.time}
                  </p>
                  <h3 className="mt-1 font-display text-2xl leading-none">{beat.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-parchment/70">
                    {beat.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
