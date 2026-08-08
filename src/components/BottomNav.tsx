"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/", label: "Menu", hint: "the plot" },
  { href: "/cooking", label: "Cook", hint: "the action" },
  { href: "/shopping", label: "Shop", hint: "the quest" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2"
      aria-label="Primary"
    >
      <div className="mx-auto flex max-w-md items-stretch gap-1 rounded-[1.75rem] border-2 border-espresso/15 bg-parchment/95 p-1.5 shadow-[0_12px_40px_rgba(44,33,24,0.22)] backdrop-blur-md">
        {items.map((item) => {
          const active =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex min-h-14 flex-1 flex-col items-center justify-center rounded-2xl px-2 py-2 transition-transform active:scale-[0.97] ${
                active
                  ? "bg-wine text-parchment shadow-[0_4px_0_rgba(44,33,24,0.25)]"
                  : "text-espresso/70 hover:bg-toasted/70"
              }`}
            >
              <span className="font-display text-lg leading-none tracking-tight">
                {item.label}
              </span>
              <span
                className={`mt-1 font-label text-[0.58rem] uppercase tracking-[0.22em] ${
                  active ? "text-amber" : "text-espresso/45"
                }`}
              >
                {item.hint}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
