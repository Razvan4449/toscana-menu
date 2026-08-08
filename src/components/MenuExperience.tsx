"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { courses, restaurant } from "@/data/menu";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function MenuExperience() {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) return;

      const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
      heroTl
        .from(".js-hero-brand", { y: 36, opacity: 0, duration: 1.1 })
        .from(".js-hero-line", { y: 24, opacity: 0, duration: 0.85 }, "-=0.55")
        .from(".js-hero-cta", { y: 16, opacity: 0, duration: 0.7 }, "-=0.45");

      gsap.to(".js-hero-media", {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: ".js-hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.utils.toArray<HTMLElement>(".js-course").forEach((section) => {
        const head = section.querySelector(".js-course-head");
        const dishes = section.querySelectorAll(".js-dish");

        if (head) {
          gsap.from(head, {
            y: 28,
            opacity: 0,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 78%",
            },
          });
        }

        gsap.from(dishes, {
          y: 22,
          opacity: 0,
          duration: 0.75,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
          },
        });
      });
    },
    { scope: rootRef },
  );

  return (
    <div ref={rootRef} className="atmosphere relative min-h-screen">
      <div className="grain" aria-hidden />

      <header className="js-hero relative flex min-h-[100svh] flex-col">
        <div className="absolute inset-0 overflow-hidden">
          <div className="js-hero-media absolute inset-0 scale-110">
            <Image
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1800&q=80"
              alt="Candlelit plates in a quiet dining room"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/70 to-ink" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(10,9,8,0.55)_70%)]" />
        </div>

        <div className="relative z-10 flex flex-1 flex-col px-6 pb-10 pt-[max(1.5rem,env(safe-area-inset-top))] sm:px-10">
          <div className="flex items-center justify-between text-[0.7rem] uppercase tracking-[0.28em] text-parchment-muted">
            <span>{restaurant.location}</span>
            <span>Menu</span>
          </div>

          <div className="flex flex-1 flex-col items-center justify-center text-center">
            <p className="js-hero-brand mb-5 text-[0.72rem] uppercase tracking-[0.42em] text-olive">
              {restaurant.tagline}
            </p>
            <h1 className="js-hero-brand font-display text-[clamp(3.4rem,16vw,7.5rem)] font-normal leading-[0.9] tracking-[-0.03em] text-parchment">
              {restaurant.name}
            </h1>
            <div className="js-hero-line mx-auto mt-8 max-w-[18rem] sm:max-w-md">
              <div className="menu-rule mb-7" />
              <p className="text-[0.95rem] leading-relaxed text-parchment-muted sm:text-base">
                {restaurant.subtitle}
              </p>
            </div>
            <a
              href="#menu"
              className="js-hero-cta mt-10 inline-flex items-center gap-3 text-[0.72rem] uppercase tracking-[0.32em] text-parchment transition-colors hover:text-olive"
            >
              View the menu
              <span aria-hidden className="block h-px w-8 bg-brass" />
            </a>
          </div>
        </div>
      </header>

      <nav
        id="menu"
        className="course-nav sticky top-0 z-40 -mb-px overflow-x-auto border-b border-brass/20 bg-ink/85 backdrop-blur-md"
        aria-label="Menu courses"
      >
        <ul className="mx-auto flex min-w-max max-w-3xl items-center justify-center gap-1 px-4 py-3.5 sm:gap-2 sm:px-6">
          {courses.map((course) => (
            <li key={course.id}>
              <a
                href={`#${course.id}`}
                className="block px-3 py-2 text-[0.68rem] uppercase tracking-[0.26em] text-parchment-dim transition-colors hover:text-parchment sm:px-4"
              >
                {course.italian}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <main className="relative z-10 mx-auto w-full max-w-2xl px-6 pb-24 pt-16 sm:px-8 sm:pt-24">
        {courses.map((course, index) => (
          <section
            key={course.id}
            id={course.id}
            className="js-course scroll-mt-24 pb-20 last:pb-8 sm:pb-28"
          >
            <header className="js-course-head mb-10 text-center sm:mb-14">
              <p className="mb-3 text-[0.68rem] uppercase tracking-[0.36em] text-olive">
                {String(index + 1).padStart(2, "0")} · {course.english}
              </p>
              <h2 className="font-display text-[clamp(2.4rem,10vw,3.6rem)] leading-none tracking-[-0.02em] text-parchment">
                {course.italian}
              </h2>
              <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-parchment-dim">
                {course.intro}
              </p>
              <div className="menu-rule mx-auto mt-8 max-w-[8rem]" />
            </header>

            <ul className="space-y-10 sm:space-y-12">
              {course.items.map((item) => (
                <li key={item.name} className="js-dish">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-[1.35rem] leading-tight tracking-[-0.01em] text-parchment sm:text-[1.55rem]">
                      {item.name}
                    </h3>
                    <span className="shrink-0 font-display text-lg text-brass sm:text-xl">
                      {item.price}
                    </span>
                  </div>
                  {item.note ? (
                    <p className="mt-1.5 text-[0.68rem] uppercase tracking-[0.22em] text-olive-soft">
                      {item.note}
                    </p>
                  ) : null}
                  <p className="mt-2.5 max-w-md text-[0.92rem] leading-relaxed text-parchment-muted">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </main>

      <footer className="relative z-10 border-t border-brass/15 px-6 py-14 text-center sm:px-8">
        <p className="font-display text-3xl tracking-[-0.02em] text-parchment">
          {restaurant.name}
        </p>
        <p className="mt-3 text-[0.7rem] uppercase tracking-[0.3em] text-parchment-dim">
          Cucina Toscana · Firenze
        </p>
        <div className="menu-rule mx-auto mt-8 max-w-[5rem]" />
        <p className="mt-8 text-sm text-parchment-dim">
          Please inform us of any allergies.
        </p>
      </footer>
    </div>
  );
}
