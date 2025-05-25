"use client";

import useUserStore from "@/stores/all-reset/userStore";
import useCartStore from "@/stores/all-reset/cartStore";
import { resetAllStores } from "@/utils/all-reset/resetAllStore";

export default function TestPage() {
  const name = useUserStore((s) => s.name);
  const setName = useUserStore((s) => s.setName);

  const items = useCartStore((s) => s.items);
  const addItem = useCartStore((s) => s.addItem);

  return (
    <div className="p-6 space-y-4">
      <h2>User: {name}</h2>
      <button onClick={() => setName("원준")}>Set User Name</button>

      <h2>Cart: {items.join(", ") || "Empty"}</h2>
      <button onClick={() => addItem("🐟 Fish")}>Add Item</button>

      <hr />

      <button onClick={resetAllStores} className="text-red-500">
        Reset All Zustand Stores (and clear storage)
      </button>
    </div>
  );
}
