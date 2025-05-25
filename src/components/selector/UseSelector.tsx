"use client";

import { useSelectorStore } from "@/stores/selector/selectorStore";

export function UseSelector() {
  const count = useSelectorStore((state) => state.count);
  console.log("UseSelector rendered");

  return (
    <div className="border p-4">
      <p>Count: {count}</p>
    </div>
  );
}
