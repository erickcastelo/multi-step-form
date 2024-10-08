"use client";

import {
  createPersonalInfoStore,
  PersonalInfoStore,
} from "@/stores/personal-info-store";
import { createContext, ReactNode, useContext, useRef } from "react";
import { useStore } from "zustand";

export type PersonalInfoStoreApi = ReturnType<typeof createPersonalInfoStore>;

export const PersonalInfoStoreContext = createContext<
  PersonalInfoStoreApi | undefined
>(undefined);

export type PersonalInfoStoreProviderProps = {
  children: ReactNode;
};

export const PersonalInfoStoreProvider = ({
  children,
}: PersonalInfoStoreProviderProps) => {
  const storeRef = useRef<PersonalInfoStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createPersonalInfoStore();
  }

  return (
    <PersonalInfoStoreContext.Provider value={storeRef.current}>
      {children}
    </PersonalInfoStoreContext.Provider>
  );
};

export const usePersonalInfoStore = <T,>(
  selector: (store: PersonalInfoStore) => T
): T => {
  const personalInfoStoreContext = useContext(PersonalInfoStoreContext);

  if (!personalInfoStoreContext) {
    throw new Error(
      `usePersonalInfoStore must be used within PersonalInfoStoreProvider`
    );
  }

  return useStore(personalInfoStoreContext, selector);
};
