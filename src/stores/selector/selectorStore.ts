import { create } from "zustand";
import { createSelectors } from "@/utils/selector/createSelector";

type State = {
  count: number;
  text: string;
  increment: () => void;
  updateText: (text: string) => void;
};

const selectorStore = create<State>((set) => ({
  count: 0,
  text: "hello",
  increment: () => set((state) => ({ count: state.count + 1 })),
  updateText: (text) => set(() => ({ text })),
}));

export const useSelectorStore = createSelectors(selectorStore);
