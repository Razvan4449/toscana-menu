"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import ChefNote from "@/components/ChefNote";
import { cookingSequence, courses } from "@/data/dinner";

export default function CookingExperience() {
  const params = useSearchParams();
  const courseFilter = params.get("course");

  const steps = useMemo(() => {
    if (!courseFilter) return cookingSequence;
    const course = courses.find((c) => c.id === courseFilter);
    if (!course) return cookingSequence;
    return course.steps.map((step) => ({
      ...step,
      courseId: course.id,
      courseName: course.dish,
    }));
  }, [courseFilter]);

  const [index, setIndex] = useState(0);
  const step = steps[index];
  const progress = ((index + 1) / steps.length) * 100;

  return (
    <div className="flex min-h-screen flex-col bg-espresso text-parchment">
      <header className="border-b border-parchment/10 px-5 pb-4 pt-[max(1rem,env(safe-area-inset-top))] sm:px-8">
        <div className="flex items-center justify-between gap-3">
          <p className="font-label text-[0.62rem] uppercase tracking-[0.28em] text-amber">
            Cooking mode
          </p>
          <Link
            href="/"
            className="font-label text-[0.62rem] uppercase tracking-[0.2em] text-parchment/50"
          >
            Exit
          </Link>
        </div>
        <div className="mt-4 h-2 overflow-hidden rounded-full bg-parchment/15">
          <div
            className="h-full rounded-full bg-amber transition-[width] duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-2 font-label text-[0.6rem] uppercase tracking-[0.22em] text-parchment/45">
          Step {index + 1} of {steps.length}
          {courseFilter ? " · filtered course" : " · full evening"}
        </p>
      </header>

      <main className="mx-auto flex w-full max-w-lg flex-1 flex-col px-5 py-8 sm:px-8">
        <p className="font-label text-[0.68rem] uppercase tracking-[0.3em] text-tomato">
          {step.scene}
          {step.minutes ? ` · ~${step.minutes} min` : ""}
        </p>
        <p className="mt-2 text-sm text-parchment/55">{step.courseName}</p>
        <h1 className="mt-3 font-display text-[clamp(2.2rem,10vw,3.4rem)] leading-[0.95] tracking-[-0.02em]">
          {step.title}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-parchment/85">
          {step.body}
        </p>

        <div className="mt-10">
          <ChefNote tone="dark">
            {index === steps.length - 1
              ? "This is the part where we pretend we are professionals."
              : "Stay calm. Stir with intention. Look mysterious."}
          </ChefNote>
        </div>
      </main>

      <div className="sticky bottom-0 border-t border-parchment/10 bg-espresso/95 px-5 pb-[max(6.5rem,calc(env(safe-area-inset-bottom)+5.5rem))] pt-4 backdrop-blur-md sm:px-8">
        <div className="mx-auto flex max-w-lg gap-3">
          <button
            type="button"
            disabled={index === 0}
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            className="min-h-14 flex-1 rounded-full border-2 border-parchment/25 font-display text-xl text-parchment disabled:opacity-35"
          >
            Previous
          </button>
          <button
            type="button"
            disabled={index >= steps.length - 1}
            onClick={() => setIndex((i) => Math.min(steps.length - 1, i + 1))}
            className="btn-wobble min-h-14 flex-[1.4] rounded-full bg-tomato font-display text-xl text-parchment shadow-[0_6px_0_#6B1F2A] disabled:opacity-35 active:translate-y-1 active:shadow-[0_3px_0_#6B1F2A]"
          >
            {index >= steps.length - 1 ? "Done!" : "Next scene"}
          </button>
        </div>
      </div>
    </div>
  );
}
