"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ChefLogo from "@/components/ChefLogo";
import { StarDoodle } from "@/components/Doodles";
import { dinner } from "@/data/dinner";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) return;

      const bulbs = gsap.utils.toArray<HTMLElement>(".js-bulb");
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".js-hero-glow", { opacity: 0, duration: 0.6 })
        .to(
          bulbs,
          {
            opacity: 1,
            scale: 1,
            stagger: 0.05,
            duration: 0.25,
            ease: "back.out(2)",
          },
          "-=0.2",
        )
        .from(
          ".js-hero-logo",
          { y: 40, opacity: 0, scale: 0.92, duration: 1, ease: "back.out(1.4)" },
          "-=0.4",
        )
        .from(".js-hero-title", { y: 28, opacity: 0, duration: 0.8 }, "-=0.45")
        .from(".js-hero-sub", { y: 18, opacity: 0, duration: 0.65 }, "-=0.4")
        .from(".js-hero-cta", { y: 16, opacity: 0, duration: 0.55 }, "-=0.3");

      gsap.to(".js-sparkle", {
        opacity: 0.2,
        scale: 0.7,
        duration: 1.2,
        stagger: { each: 0.25, repeat: -1, yoyo: true },
        ease: "sine.inOut",
      });
    },
    { scope: ref },
  );

  return (
    <header
      ref={ref}
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-night px-5 pb-28 pt-[max(1.25rem,env(safe-area-inset-top))]"
    >
      <div className="js-hero-glow pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(240,193,74,0.22),transparent_55%),radial-gradient(ellipse_at_80%_80%,rgba(158,59,42,0.35),transparent_50%),linear-gradient(180deg,#2C1318_0%,#1A0E12_45%,#120A0C_100%)]" />

      <div className="pointer-events-none absolute inset-x-6 top-8 flex justify-between sm:inset-x-10">
        {Array.from({ length: 7 }).map((_, i) => (
          <span
            key={i}
            className="js-bulb h-2.5 w-2.5 origin-center scale-50 rounded-full bg-amber opacity-0 shadow-[0_0_12px_rgba(240,193,74,0.95)]"
          />
        ))}
      </div>

      <StarDoodle className="js-sparkle absolute left-8 top-28 w-5 opacity-80" />
      <StarDoodle className="js-sparkle absolute right-10 top-40 w-4 opacity-70" />
      <StarDoodle className="js-sparkle absolute bottom-40 left-12 w-3 opacity-60" />
      <StarDoodle className="js-sparkle absolute bottom-52 right-14 w-5 opacity-75" />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center text-center">
        <div className="js-hero-logo">
          <ChefLogo size="hero" priority className="mx-auto max-w-[78vw]" />
        </div>

        <p className="js-hero-sub mt-2 font-label text-[0.7rem] uppercase tracking-[0.38em] text-amber">
          {dinner.dateLabel}
        </p>
        <h1 className="js-hero-title mt-3 font-display text-[clamp(2.8rem,14vw,5rem)] leading-[0.92] tracking-[-0.03em] text-parchment">
          {dinner.name}
        </h1>
        <p className="js-hero-sub mt-3 font-display text-2xl text-butter sm:text-3xl">
          {dinner.subtitle}
        </p>
        <p className="js-hero-sub mt-3 max-w-xs text-sm leading-relaxed text-parchment/70">
          {dinner.tagline}
        </p>

        <a
          href="#menu"
          className="js-hero-cta btn-wobble mt-10 inline-flex min-h-14 items-center justify-center rounded-full bg-tomato px-8 font-display text-xl text-parchment shadow-[0_8px_0_#6B1F2A] transition-transform active:translate-y-1 active:shadow-[0_4px_0_#6B1F2A]"
        >
          Scopri il Menu
        </a>
        <p className="js-hero-sub mt-4 text-xs text-parchment/50">
          Welcome to the weirdest best trattoria in Tuscany.
        </p>
      </div>
    </header>
  );
}
