import ChefLogo from "@/components/ChefLogo";

type ChefNoteProps = {
  children: string;
  className?: string;
  tone?: "light" | "dark";
};

export default function ChefNote({
  children,
  className = "",
  tone = "light",
}: ChefNoteProps) {
  const dark = tone === "dark";
  return (
    <aside
      className={`relative flex gap-3 rounded-3xl border-2 border-dashed p-4 text-left ${
        dark
          ? "border-amber/40 bg-night/70 shadow-[0_8px_0_rgba(0,0,0,0.25)]"
          : "border-gold/50 bg-butter/60 shadow-[0_8px_0_rgba(158,59,42,0.12)]"
      } ${className}`}
    >
      <div className="shrink-0">
        <ChefLogo size="sm" />
      </div>
      <div className="min-w-0 pt-1">
        <p
          className={`font-label text-[0.65rem] uppercase tracking-[0.28em] ${
            dark ? "text-amber" : "text-wine"
          }`}
        >
          Chef’s note
        </p>
        <p
          className={`mt-1.5 font-display text-lg leading-snug ${
            dark ? "text-parchment" : "text-espresso"
          }`}
        >
          “{children}”
        </p>
      </div>
    </aside>
  );
}
