import { createJSONStorage, persist, PersistStorage } from "zustand/middleware";
import { create } from "zustand";
import { registerResettableStore } from "@/utils/all-reset/resetAllStore";

interface CartState {
  items: string[];
  addItem: (item: string) => void;
}

const initialState: Omit<CartState, "addItem"> = {
  items: [],
};

const storage = createJSONStorage(() => localStorage) as PersistStorage<CartState>;

const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      ...initialState,
      addItem: (item) => set((state) => ({ items: [...state.items, item] })),
    }),
    {
      name: "cart-store",
      storage,
    }
  )
);

registerResettableStore(useCartStore, initialState, "cart-store", storage);

export default useCartStore;
