"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ChefNote from "@/components/ChefNote";
import {
  BasilDoodle,
  OliveDoodle,
  PastaDoodle,
  ScribbleLine,
  TomatoDoodle,
} from "@/components/Doodles";
import { courses, type Course } from "@/data/dinner";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function CourseBlock({ course, index }: { course: Course; index: number }) {
  const doodles = [
    <TomatoDoodle key="t" className="absolute -right-2 -top-4 w-14 rotate-12" />,
    <PastaDoodle key="p" className="absolute -left-4 top-0 w-28 opacity-80" />,
    <BasilDoodle key="b" className="absolute -right-1 -top-6 w-12 -rotate-12" />,
  ];

  return (
    <section
      id={course.id}
      className="js-course relative scroll-mt-8 border-b border-espresso/10 px-5 py-16 sm:px-8"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {doodles[index % doodles.length]}
        <OliveDoodle className="absolute bottom-8 left-2 w-8 opacity-40" />
      </div>

      <div className="js-course-head relative mx-auto max-w-lg text-center">
        <p className="font-label text-[0.68rem] uppercase tracking-[0.34em] text-terracotta">
          {course.number} — {course.italian}
        </p>
        <p className="mt-2 font-display text-lg text-olive">{course.chapterTitle}</p>
        <h2 className="mt-4 font-display text-[clamp(2.4rem,11vw,3.8rem)] leading-[0.95] tracking-[-0.03em] text-espresso">
          {course.dish}
        </h2>
        <ScribbleLine className="mx-auto mt-4 w-40" />
        <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-espresso/75">
          {course.description}
        </p>

        <dl className="mt-8 grid grid-cols-3 gap-2 rounded-2xl bg-toasted/70 px-3 py-4 text-center">
          <div>
            <dt className="font-label text-[0.58rem] uppercase tracking-[0.2em] text-espresso/45">
              Guests
            </dt>
            <dd className="mt-1 font-display text-2xl text-wine">{course.serves}</dd>
          </div>
          <div>
            <dt className="font-label text-[0.58rem] uppercase tracking-[0.2em] text-espresso/45">
              ~kcal
            </dt>
            <dd className="mt-1 font-display text-2xl text-wine">
              {course.kcalApprox ?? "—"}
            </dd>
          </div>
          <div>
            <dt className="font-label text-[0.58rem] uppercase tracking-[0.2em] text-espresso/45">
              Time
            </dt>
            <dd className="mt-1 font-display text-2xl text-wine">
              {course.prepMinutes + course.cookMinutes}m
            </dd>
          </div>
        </dl>
      </div>

      <div className="js-course-body relative mx-auto mt-10 max-w-lg">
        <ChefNote>{course.chefNote}</ChefNote>

        <div className="mt-8">
          <h3 className="font-label text-[0.68rem] uppercase tracking-[0.28em] text-terracotta">
            Ingredients · for {course.serves}
          </h3>
          <ul className="mt-4 space-y-3">
            {course.ingredients.map((item) => (
              <li
                key={item.id}
                className="js-ingredient flex items-baseline justify-between gap-4 border-b border-dashed border-espresso/15 pb-3"
              >
                <div>
                  <p className="font-display text-xl text-espresso">{item.name}</p>
                  {item.note ? (
                    <p className="mt-0.5 text-sm text-espresso/55">{item.note}</p>
                  ) : null}
                  {item.perPerson ? (
                    <p className="mt-0.5 font-label text-[0.6rem] uppercase tracking-[0.18em] text-olive">
                      {item.perPerson} each
                    </p>
                  ) : null}
                </div>
                <span className="shrink-0 font-display text-lg text-wine">
                  {item.quantity}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10">
          <h3 className="font-label text-[0.68rem] uppercase tracking-[0.28em] text-terracotta">
            How we make it
          </h3>
          <ol className="mt-4 space-y-5">
            {course.steps.map((step) => (
              <li key={step.id} className="js-step rounded-3xl bg-parchment px-4 py-4 shadow-[0_6px_0_rgba(158,59,42,0.08)]">
                <p className="font-label text-[0.62rem] uppercase tracking-[0.26em] text-gold">
                  {step.scene}
                  {step.minutes ? ` · ${step.minutes} min` : ""}
                </p>
                <h4 className="mt-1 font-display text-2xl text-espresso">{step.title}</h4>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-espresso/75">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <Link
          href={`/cooking?course=${course.id}`}
          className="btn-wobble mt-8 flex min-h-14 w-full items-center justify-center rounded-full bg-espresso text-parchment font-display text-xl shadow-[0_6px_0_rgba(44,33,24,0.35)] active:translate-y-1 active:shadow-[0_3px_0_rgba(44,33,24,0.35)]"
        >
          Open cooking mode
        </Link>
      </div>
    </section>
  );
}

export default function MenuJourney() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) return;

      gsap.utils.toArray<HTMLElement>(".js-chapter").forEach((el) => {
        gsap.from(el, {
          y: 36,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 82%" },
        });
      });

      gsap.utils.toArray<HTMLElement>(".js-course").forEach((section) => {
        gsap.from(section.querySelector(".js-course-head"), {
          y: 40,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: section, start: "top 75%" },
        });
        gsap.from(section.querySelectorAll(".js-ingredient"), {
          x: -16,
          opacity: 0,
          stagger: 0.06,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: { trigger: section, start: "top 55%" },
        });
        gsap.from(section.querySelectorAll(".js-step"), {
          y: 24,
          opacity: 0,
          stagger: 0.1,
          duration: 0.55,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section.querySelector(".js-step"),
            start: "top 85%",
          },
        });
      });
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className="bg-parchment text-espresso">
      <section id="menu" className="scroll-mt-4 px-5 pb-8 pt-16 sm:px-8">
        <div className="js-chapter mx-auto max-w-lg text-center">
          <p className="font-label text-[0.68rem] uppercase tracking-[0.34em] text-terracotta">
            Tonight’s menu
          </p>
          <h2 className="mt-3 font-display text-[clamp(2.6rem,12vw,4rem)] leading-none text-espresso">
            Three courses. Zero chill.
          </h2>
          <p className="mx-auto mt-4 max-w-sm text-base leading-relaxed text-espresso/70">
            A vacation dinner among friends — theatrical, slightly absurd, and
            absolutely delicious.
          </p>
        </div>

        <ol className="mx-auto mt-12 max-w-lg space-y-6">
          {courses.map((course) => (
            <li key={course.id} className="js-chapter">
              <a
                href={`#${course.id}`}
                className="block rounded-[1.75rem] border-2 border-espresso/10 bg-gradient-to-br from-butter/80 to-toasted/90 px-5 py-6 text-left shadow-[0_10px_0_rgba(158,59,42,0.1)] transition-transform active:translate-y-1 active:shadow-[0_6px_0_rgba(158,59,42,0.1)]"
              >
                <p className="font-label text-[0.62rem] uppercase tracking-[0.3em] text-wine">
                  {course.number} · {course.italian}
                </p>
                <h3 className="mt-2 font-display text-3xl leading-none text-espresso">
                  {course.dish}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-espresso/65">
                  {course.blurb}
                </p>
              </a>
            </li>
          ))}
        </ol>
      </section>

      {courses.map((course, index) => (
        <CourseBlock key={course.id} course={course} index={index} />
      ))}
    </div>
  );
}
