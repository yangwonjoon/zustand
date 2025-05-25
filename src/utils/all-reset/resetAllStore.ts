import { StoreApi } from "zustand";
import { PersistStorage } from "zustand/middleware";

interface BaseState {
  [key: string]: unknown;
}

type ResettableStore<T extends BaseState> = {
  store: StoreApi<T>;
  initialState: Partial<T>;
  name?: string;
  storage?: PersistStorage<T>;
};

const stores: ResettableStore<BaseState>[] = [];

export const registerResettableStore = <T extends BaseState>(store: StoreApi<T>, initialState: Partial<T>, name?: string, storage?: PersistStorage<T>) => {
  stores.push({ store, initialState, name, storage } as ResettableStore<BaseState>);
};

export const resetAllStores = async () => {
  for (const { store, initialState, name, storage } of stores) {
    store.setState(initialState, true);
    if (name && storage) {
      await storage.removeItem(name);
    }
  }
};
