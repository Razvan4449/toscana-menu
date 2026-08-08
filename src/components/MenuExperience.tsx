"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ChefLogo from "@/components/ChefLogo";
import DrinksSection from "@/components/DrinksSection";
import FaqSection from "@/components/FaqSection";
import {
  BasilDoodle,
  OliveDoodle,
  PastaDoodle,
  RosemaryDoodle,
  ScribbleLine,
  StarDoodle,
  TomatoDoodle,
  WineDoodle,
} from "@/components/Doodles";
import { brand, courses, drinks, type Course } from "@/data/menu";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function EditionRibbon({ className = "" }: { className?: string }) {
  return (
    <div
      className={`overflow-hidden border-y-2 border-amber/50 bg-wine ${className}`}
      aria-label={brand.marquee}
    >
      <div className="edition-marquee gap-10 py-3 font-label text-[0.68rem] uppercase tracking-[0.22em] text-amber sm:text-[0.72rem]">
        {Array.from({ length: 4 }).map((_, i) => (
          <span key={i} className="flex shrink-0 items-center gap-10 whitespace-nowrap px-2">
            <span>★ {brand.marquee} ★</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function CourseSection({ course, index }: { course: Course; index: number }) {
  const tones = {
    cream: "bg-cream text-espresso",
    wine: "bg-wine text-parchment",
    olive: "bg-cypress text-parchment",
  } as const;

  const accent = {
    cream: "text-terracotta",
    wine: "text-amber",
    olive: "text-butter",
  } as const;

  const muted = {
    cream: "text-espresso/65",
    wine: "text-parchment/70",
    olive: "text-parchment/70",
  } as const;

  const scribbleColor = {
    cream: "#C45C3E",
    wine: "#F0C14A",
    olive: "#F7E6B4",
  } as const;

  const rule = {
    cream: "border-espresso/15",
    wine: "border-parchment/20",
    olive: "border-parchment/20",
  } as const;

  return (
    <section
      id={course.id}
      className={`js-course relative overflow-hidden ${tones[course.tone]}`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-40">
        {index === 0 ? (
          <TomatoDoodle className="floaty absolute right-3 top-8 w-14" />
        ) : null}
        {index === 1 ? (
          <PastaDoodle className="absolute -left-2 top-10 w-32 opacity-70" />
        ) : null}
        {index === 2 ? (
          <WineDoodle className="floaty absolute right-4 top-12 w-10" />
        ) : null}
        <OliveDoodle className="absolute bottom-10 left-3 w-8 opacity-50" />
        <BasilDoodle className="absolute bottom-16 right-6 w-10 opacity-40" />
      </div>

      <div className="relative mx-auto max-w-lg px-5 py-16 sm:px-8 sm:py-20">
        <header className="js-reveal text-center">
          <p
            className={`font-label text-[0.68rem] uppercase tracking-[0.36em] ${accent[course.tone]}`}
          >
            {course.number} · {course.italian}
          </p>
          <h2 className="mt-4 font-display text-[clamp(3rem,14vw,4.5rem)] leading-[0.9] tracking-[-0.03em]">
            {course.title}
          </h2>
          <ScribbleLine
            className="js-scribble mx-auto mt-5 w-36"
            color={scribbleColor[course.tone]}
          />
          <p className={`mx-auto mt-5 max-w-[20rem] font-display text-xl leading-snug ${accent[course.tone]}`}>
            {course.vibe}
          </p>
          {course.note ? (
            <p className={`mx-auto mt-4 max-w-sm text-[0.95rem] leading-relaxed ${muted[course.tone]}`}>
              {course.note}
            </p>
          ) : null}
        </header>

        <ul className="mt-12 space-y-0">
          {course.dishes.map((dish) => (
            <li
              key={dish.name}
              className={`js-dish border-t ${rule[course.tone]} py-7 first:border-t-0 first:pt-0`}
            >
              <h3 className="font-display text-[1.65rem] leading-tight tracking-[-0.02em] sm:text-[1.85rem]">
                {dish.name}
              </h3>
              <p className={`mt-2 text-[0.98rem] leading-relaxed ${muted[course.tone]}`}>
                {dish.line}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function MenuExperience() {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) {
        gsap.set(".js-scribble .scribble-stroke", { strokeDashoffset: 0 });
        return;
      }

      const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
      heroTl
        .from(".js-hero-item", {
          y: 28,
          opacity: 0,
          stagger: 0.1,
          duration: 0.85,
        })
        .from(
          ".js-hero-logo",
          { scale: 0.9, opacity: 0, duration: 0.9, ease: "back.out(1.5)" },
          0.05,
        );

      gsap.utils.toArray<HTMLElement>(".js-reveal").forEach((el) => {
        gsap.from(el, {
          y: 32,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 82%" },
        });
      });

      gsap.utils.toArray<HTMLElement>(".js-course").forEach((section) => {
        const dishes = section.querySelectorAll(".js-dish");
        const scribble = section.querySelector(".scribble-stroke");

        gsap.from(dishes, {
          y: 22,
          opacity: 0,
          stagger: 0.1,
          duration: 0.65,
          ease: "power2.out",
          scrollTrigger: { trigger: section, start: "top 60%" },
        });

        if (scribble) {
          ScrollTrigger.create({
            trigger: section,
            start: "top 70%",
            onEnter: () => scribble.classList.add("is-drawn"),
          });
        }
      });
    },
    { scope: rootRef },
  );

  return (
    <div ref={rootRef} className="site-shell relative min-h-screen">
      <div className="grain" aria-hidden />

      {/* HERO */}
      <header className="relative flex min-h-[100svh] flex-col overflow-hidden bg-night text-parchment">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_28%,rgba(240,193,74,0.22),transparent_52%),radial-gradient(ellipse_at_80%_90%,rgba(158,59,42,0.28),transparent_45%)]" />

        <div className="relative z-10 flex items-center justify-between px-5 pt-[max(1.1rem,env(safe-area-inset-top))] sm:px-8">
          <p className="js-hero-item font-label text-[0.62rem] uppercase tracking-[0.3em] text-amber">
            {brand.established}
          </p>
          <div className="flex gap-1.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className="bulb h-2 w-2 rounded-full bg-amber shadow-[0_0_10px_rgba(240,193,74,0.9)]"
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 pb-10 pt-6 text-center sm:px-8">
          <StarDoodle className="js-hero-item absolute left-6 top-28 w-4 opacity-80" />
          <StarDoodle className="js-hero-item absolute right-8 top-36 w-5 opacity-70" />

          <div className="js-hero-logo">
            <ChefLogo size="hero" priority className="mx-auto max-w-[72vw]" />
          </div>

          <h1 className="sr-only">{brand.name}</h1>

          <p className="js-hero-item mt-5 max-w-[18rem] font-display text-[1.65rem] leading-snug text-butter sm:max-w-md sm:text-[2rem]">
            {brand.heroLine}
          </p>
          <p className="js-hero-item mt-4 max-w-xs text-sm leading-relaxed text-parchment/65 sm:max-w-sm sm:text-base">
            {brand.heroSub}
          </p>

          <a
            href="#menu"
            className="js-hero-item mt-9 inline-flex min-h-12 items-center gap-3 rounded-full border border-amber/40 bg-wine/80 px-6 font-label text-[0.68rem] uppercase tracking-[0.28em] text-amber transition-transform active:scale-[0.98]"
          >
            {brand.cta}
            <span aria-hidden className="h-px w-8 bg-amber/70" />
          </a>
        </div>

        <EditionRibbon />
      </header>

      {/* SPECIAL EDITION + OVERVIEW */}
      <section
        id="menu"
        className="relative scroll-mt-2 overflow-hidden px-5 py-16 sm:px-8 sm:py-20"
      >
        <RosemaryDoodle className="pointer-events-none absolute -right-1 top-8 w-9 opacity-35" />
        <div className="js-reveal mx-auto max-w-lg text-center">
          <div className="inline-flex max-w-full flex-col items-center rounded-[1.5rem] border-2 border-dashed border-terracotta/50 bg-butter/70 px-5 py-5 shadow-[0_10px_0_rgba(158,59,42,0.1)]">
            <p className="font-label text-[0.62rem] uppercase tracking-[0.32em] text-wine">
              Editie speciala
            </p>
            <p className="mt-3 font-display text-[1.35rem] leading-snug tracking-[-0.02em] text-espresso sm:text-[1.55rem]">
              {brand.edition}
            </p>
            <div className="mt-3 flex items-center gap-2 text-gold">
              <StarDoodle className="w-4" />
              <StarDoodle className="w-5" />
              <StarDoodle className="w-4" />
            </div>
          </div>

          <h2 className="mt-12 font-display text-[clamp(2.2rem,10vw,3.4rem)] leading-[0.95] tracking-[-0.02em] text-espresso">
            {brand.overviewTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-sm text-base leading-relaxed text-espresso/70">
            {brand.overviewBody}
          </p>

          <ol className="mt-10 space-y-3 text-left">
            {courses.map((course) => (
              <li key={course.id}>
                <a
                  href={`#${course.id}`}
                  className="flex min-h-16 items-center justify-between gap-4 rounded-2xl border-2 border-espresso/10 bg-cream/80 px-4 py-4 transition-transform active:scale-[0.99]"
                >
                  <span>
                    <span className="block font-label text-[0.6rem] uppercase tracking-[0.28em] text-terracotta">
                      {course.number}
                    </span>
                    <span className="mt-1 block font-display text-2xl leading-none text-espresso">
                      {course.title}
                    </span>
                  </span>
                  <span className="max-w-[7.5rem] text-right text-sm leading-snug text-espresso/55">
                    {course.italian}
                  </span>
                </a>
              </li>
            ))}
            <li>
              <a
                href={`#${drinks.id}`}
                className="flex min-h-16 items-center justify-between gap-4 rounded-2xl border-2 border-espresso/10 bg-cream/80 px-4 py-4 transition-transform active:scale-[0.99]"
              >
                <span>
                  <span className="block font-label text-[0.6rem] uppercase tracking-[0.28em] text-terracotta">
                    {drinks.number}
                  </span>
                  <span className="mt-1 block font-display text-2xl leading-none text-espresso">
                    {drinks.title}
                  </span>
                </span>
                <span className="max-w-[7.5rem] text-right text-sm leading-snug text-espresso/55">
                  La pahar
                </span>
              </a>
            </li>
          </ol>
        </div>
      </section>

      {/* Chef cheeky divider */}
      <section className="border-y border-espresso/10 bg-toasted/60 px-5 py-10 sm:px-8">
        <div className="js-reveal mx-auto flex max-w-lg items-center gap-4">
          <ChefLogo size="sm" className="shrink-0" />
          <p className="whitespace-pre-line font-display text-xl leading-snug text-espresso sm:text-2xl">
            “{brand.chefQuote}”
          </p>
        </div>
      </section>

      {courses.map((course, index) => (
        <CourseSection key={course.id} course={course} index={index} />
      ))}

      <DrinksSection />

      <FaqSection />

      {/* ENDING */}
      <footer className="relative overflow-hidden bg-night px-5 pb-[max(3rem,env(safe-area-inset-bottom))] pt-16 text-center text-parchment sm:px-8 sm:pt-20">
        <StarDoodle className="absolute left-8 top-10 w-4 opacity-70" />
        <StarDoodle className="absolute right-10 top-14 w-5 opacity-60" />

        <div className="js-reveal mx-auto flex max-w-lg flex-col items-center">
          <ChefLogo size="lg" />
          <p className="mt-5 font-label text-[0.7rem] uppercase tracking-[0.28em] text-amber">
            {brand.finaleLabel}
          </p>
          <h2 className="mt-3 font-display text-[clamp(2.6rem,12vw,4rem)] leading-none">
            {brand.finaleTitle}
          </h2>
          <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed text-parchment/75">
            {brand.finaleLine}
          </p>
          <p className="mt-6 font-display text-2xl leading-snug text-butter">
            {brand.finaleSub}
          </p>
          <p className="mt-10 font-label text-[0.58rem] uppercase tracking-[0.22em] text-parchment/40">
            {brand.marquee}
          </p>
        </div>
      </footer>
    </div>
  );
}
