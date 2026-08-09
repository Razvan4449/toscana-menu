"use client";

import Image from "next/image";
import { useState } from "react";

const FRAME_SRC = "/vasilius-story-frame.png";
const FRAME_NAME = "vasilius-story-frame.png";

export default function StoryFrameDownload() {
  const [status, setStatus] = useState<"idle" | "working" | "done" | "error">(
    "idle",
  );

  async function handleDownload() {
    setStatus("working");
    try {
      const res = await fetch(FRAME_SRC);
      if (!res.ok) throw new Error("fetch failed");
      const blob = await res.blob();
      const file = new File([blob], FRAME_NAME, { type: "image/png" });

      const canShareFile =
        typeof navigator !== "undefined" &&
        typeof navigator.share === "function" &&
        typeof navigator.canShare === "function" &&
        navigator.canShare({ files: [file] });

      if (canShareFile) {
        await navigator.share({
          files: [file],
          title: "VASILIU’S Story Frame",
          text: "Frame pentru Instagram Story — Toscana Edition",
        });
        setStatus("done");
        return;
      }

      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = FRAME_NAME;
      a.rel = "noopener";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      setStatus("done");
    } catch {
      // Last resort: open the image so the user can long-press to save
      window.open(FRAME_SRC, "_blank", "noopener,noreferrer");
      setStatus("error");
    }
  }

  return (
    <div className="w-full max-w-sm">
      <div className="mx-auto mb-4 w-[7.5rem] overflow-hidden rounded-xl border border-amber/35 bg-[linear-gradient(160deg,#3a2030_0%,#1a0e12_55%,#2c2118_100%)] p-2 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
        <div className="relative aspect-[9/16] w-full">
          <Image
            src={FRAME_SRC}
            alt="Preview frame Instagram VASILIU’S"
            fill
            sizes="120px"
            className="object-contain"
          />
        </div>
      </div>
      <button
        type="button"
        onClick={() => void handleDownload()}
        disabled={status === "working"}
        className="inline-flex min-h-14 w-full items-center justify-center rounded-full border-2 border-amber/45 bg-amber/10 px-8 font-display text-xl text-amber transition-transform active:scale-[0.98] disabled:opacity-60"
      >
        {status === "working" ? "Se pregateste…" : "Salveaza frame IG"}
      </button>
      <p className="mt-3 text-center text-[0.8rem] leading-relaxed text-parchment/50">
        PNG transparent — pune-l peste poza in Instagram Stories.
      </p>
    </div>
  );
}
