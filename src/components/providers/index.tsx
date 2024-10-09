"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { useStore } from "zustand";

import { type UsersStore, createUserStore } from "../stores/index";

export type UsersStoreApi = ReturnType<typeof createUserStore>;

export const UsersStoreContext = createContext<UsersStoreApi | undefined>(
  undefined
);

export interface UsersStoreProviderProps {
  children: ReactNode;
}

export const CounterStoreProvider = ({ children }: UsersStoreProviderProps) => {
  const storeRef = useRef<UsersStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createUserStore();
  }

  return (
    <UsersStoreContext.Provider value={storeRef.current}>
      {children}
    </UsersStoreContext.Provider>
  );
};

export const useUsersStore = <T,>(selector: (store: UsersStore) => T): T => {
  const counterStoreContext = useContext(UsersStoreContext);

  if (!counterStoreContext) {
    throw new Error(`useUsersStore must be used within CounterStoreProvider`);
  }

  return useStore(counterStoreContext, selector);
};

