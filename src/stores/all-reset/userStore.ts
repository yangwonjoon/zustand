import { createJSONStorage, persist, PersistStorage } from "zustand/middleware";
import { create } from "zustand";
import { registerResettableStore } from "@/utils/all-reset/resetAllStore";

interface UserState {
  name: string;
  setName: (name: string) => void;
}

const initialState: Omit<UserState, "setName"> = {
  name: "",
};

const storage = createJSONStorage(() => localStorage) as PersistStorage<UserState>;

const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      ...initialState,
      setName: (name) => set({ name }),
    }),
    {
      name: "user-store",
      storage,
    }
  )
);

registerResettableStore(useUserStore, initialState, "user-store", storage);

export default useUserStore;
