"use client";

import { NoSelector } from "@/components/selector/NoSelector";
import { UseSelector } from "@/components/selector/UseSelector";
import { useSelectorStore } from "@/stores/selectorStore";

const SelectorTestPage = () => {
  const increment = useSelectorStore((state) => state.increment);
  const updateText = useSelectorStore((state) => state.updateText);

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-8">
      <div className="flex gap-4">
        <button onClick={increment}>Increment</button>
        <button onClick={() => updateText("world")}>Update Text</button>
      </div>

      {/* <UseSelector /> */}
      <NoSelector />
    </div>
  );
};

export default SelectorTestPage;
