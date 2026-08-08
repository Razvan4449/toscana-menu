"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import ChefLogo from "@/components/ChefLogo";

gsap.registerPlugin(useGSAP);

export default function IntroSplash({ onDone }: { onDone: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useGSAP(
    () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const tl = gsap.timeline({
        onComplete: () => {
          setVisible(false);
          onDone();
        },
      });

      if (reduce) {
        tl.to(ref.current, { opacity: 0, duration: 0.2, delay: 0.3 });
        return;
      }

      tl.from(".js-splash-logo", {
        scale: 0.85,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.6)",
      })
        .from(
          ".js-splash-text",
          { y: 16, opacity: 0, duration: 0.5 },
          "-=0.3",
        )
        .to({}, { duration: 0.55 })
        .to(ref.current, {
          yPercent: -8,
          opacity: 0,
          duration: 0.55,
          ease: "power2.in",
        });
    },
    { scope: ref },
  );

  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      ref={ref}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-night px-6"
      aria-hidden={!visible}
    >
      <div className="js-splash-logo">
        <ChefLogo size="lg" priority />
      </div>
      <p className="js-splash-text mt-4 font-label text-[0.7rem] uppercase tracking-[0.4em] text-amber">
        Opening tonight
      </p>
      <p className="js-splash-text mt-2 font-display text-3xl text-parchment">
        VASILIU’S
      </p>
    </div>
  );
}
