"use client";

import { createPersonalInfoStore } from "@/stores/personal-info-store";
import { createContext, ReactNode, useRef } from "react";

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
