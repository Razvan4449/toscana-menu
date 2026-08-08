"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Transition =
  | "fade"
  | "wipe-right"
  | "wipe-up"
  | "zoom-spin"
  | "fly-left"
  | "bounce-in"
  | "flip";

type Slide = {
  caption: string;
  sub?: string;
  transition: Transition;
};

const slides: Slide[] = [
  {
    caption: "Toscana 2026",
    sub: "Slide 1 of many (trust us)",
    transition: "fade",
  },
  {
    caption: "Perla e in vacanta",
    sub: "Official boat evidence",
    transition: "wipe-right",
  },
  {
    caption: "11 amici. Un vapor.",
    sub: "Spritz already in progress",
    transition: "zoom-spin",
  },
  {
    caption: "Gen ciubota aia",
    sub: "Italia confirmed",
    transition: "fly-left",
  },
  {
    caption: "TUTTO PASSA",
    sub: "Except this photo",
    transition: "bounce-in",
  },
  {
    caption: "VASILIU’S presents",
    sub: "A PowerPoint of excellence",
    transition: "wipe-up",
  },
  {
    caption: "Same photo. New drama.",
    sub: "Professional slideshow technology",
    transition: "flip",
  },
  {
    caption: "Buon appetito",
    sub: "Ma inclin.",
    transition: "fade",
  },
];

const transitionClass: Record<Transition, string> = {
  fade: "animate-ppt-fade",
  "wipe-right": "animate-ppt-wipe-right",
  "wipe-up": "animate-ppt-wipe-up",
  "zoom-spin": "animate-ppt-zoom-spin",
  "fly-left": "animate-ppt-fly-left",
  "bounce-in": "animate-ppt-bounce",
  flip: "animate-ppt-flip",
};

type EndSlideshowProps = {
  open: boolean;
  onClose: () => void;
};

export default function EndSlideshow({ open, onClose }: EndSlideshowProps) {
  const [index, setIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!open) {
      audioRef.current?.pause();
      if (audioRef.current) audioRef.current.currentTime = 0;
      setIndex(0);
      return;
    }

    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.85;
      void audio.play().catch(() => {
        /* autoplay blocked — user already clicked, should usually work */
      });
    }

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 2800);

    return () => window.clearInterval(id);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % slides.length);
      if (e.key === "ArrowLeft")
        setIndex((i) => (i - 1 + slides.length) % slides.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const slide = slides[index];

  return (
    <div
      className="fixed inset-0 z-[80] flex flex-col bg-[#1a0a12]"
      role="dialog"
      aria-modal="true"
      aria-label="End the experience slideshow"
    >
      <audio ref={audioRef} src="/audio/italiano-vero.mp3" loop preload="auto" />

      <div className="flex items-center justify-between border-b border-amber/30 bg-wine px-4 py-3">
        <p className="font-label text-[0.62rem] uppercase tracking-[0.24em] text-amber">
          Microsoft PowerPoint · Compatible Mode
        </p>
        <button
          type="button"
          onClick={onClose}
          className="min-h-10 rounded-full border border-amber/40 px-4 font-label text-[0.62rem] uppercase tracking-[0.2em] text-parchment"
        >
          Exit
        </button>
      </div>

      <div className="relative flex flex-1 items-center justify-center overflow-hidden p-4 sm:p-8">
        <div
          key={`${index}-${slide.transition}`}
          className={`relative w-full max-w-lg overflow-hidden rounded-sm border-4 border-parchment bg-night shadow-[0_20px_60px_rgba(0,0,0,0.55)] ${transitionClass[slide.transition]}`}
        >
          <div className="relative aspect-[4/5] w-full sm:aspect-[3/4]">
            <Image
              src="/finale-slide.jpg"
              alt="Grupul VASILIU’S pe barca in Toscana"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 512px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-night/90 via-night/20 to-transparent" />
          </div>

          <div className="absolute inset-x-0 bottom-0 px-5 pb-6 pt-16 text-center">
            <p className="font-label text-[0.6rem] uppercase tracking-[0.28em] text-amber">
              Slide {index + 1} / {slides.length}
            </p>
            <h2 className="mt-2 font-display text-[clamp(1.8rem,8vw,2.6rem)] leading-none text-parchment">
              {slide.caption}
            </h2>
            {slide.sub ? (
              <p className="mt-2 text-sm text-parchment/70">{slide.sub}</p>
            ) : null}
          </div>

          {/* goofy PPT clip art stars */}
          <div className="pointer-events-none absolute left-3 top-3 text-2xl" aria-hidden>
            ✨
          </div>
          <div className="pointer-events-none absolute right-3 top-3 text-2xl" aria-hidden>
            🇮🇹
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-3 border-t border-amber/20 bg-night px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
        <button
          type="button"
          onClick={() => setIndex((i) => (i - 1 + slides.length) % slides.length)}
          className="min-h-12 rounded-full border border-parchment/30 px-5 font-display text-lg text-parchment"
        >
          ◀
        </button>
        <p className="font-label text-[0.58rem] uppercase tracking-[0.22em] text-parchment/50">
          Italiano vero ♪
        </p>
        <button
          type="button"
          onClick={() => setIndex((i) => (i + 1) % slides.length)}
          className="min-h-12 rounded-full border border-parchment/30 px-5 font-display text-lg text-parchment"
        >
          ▶
        </button>
      </div>
    </div>
  );
}
