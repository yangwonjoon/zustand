import { useSelectorStore } from "@/stores/selectorStore";

export function NoSelector() {
  const count = useSelectorStore.use.count();
  console.log("NoSelector rendered");

  return (
    <div className="border p-4">
      <p>Count: {count}</p>
    </div>
  );
}
