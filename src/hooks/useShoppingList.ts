"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { shoppingList } from "@/data/dinner";

const STORAGE_KEY = "vasilius-shopping-checked-v1";

export function useShoppingList() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setChecked(JSON.parse(raw) as Record<string, boolean>);
    } catch {
      /* ignore */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(checked));
  }, [checked, ready]);

  const toggle = useCallback((id: string) => {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const reset = useCallback(() => setChecked({}), []);

  const stats = useMemo(() => {
    const total = shoppingList.length;
    const done = shoppingList.filter((item) => checked[item.id]).length;
    return { total, done, complete: done === total && total > 0 };
  }, [checked]);

  return { checked, toggle, reset, ready, ...stats };
}
