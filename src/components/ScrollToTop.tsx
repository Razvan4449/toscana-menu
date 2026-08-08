"use client";

import { useEffect } from "react";

/** Force the home experience to open at the hero on mobile/desktop. */
export default function ScrollToTop() {
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    const reset = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      if (window.location.hash) {
        history.replaceState(
          null,
          "",
          `${window.location.pathname}${window.location.search}`,
        );
      }
    };

    reset();
    // After layout/fonts/images settle (common mobile jump)
    const t1 = window.setTimeout(reset, 50);
    const t2 = window.setTimeout(reset, 300);
    requestAnimationFrame(reset);

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, []);

  return null;
}
