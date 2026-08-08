import { Suspense } from "react";
import CookingExperience from "@/components/CookingExperience";

export default function CookingPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-espresso font-display text-2xl text-parchment">
          Warming the stove…
        </div>
      }
    >
      <CookingExperience />
    </Suspense>
  );
}
