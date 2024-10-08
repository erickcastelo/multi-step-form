import { PersonalInfoStoreContext } from "@/providers/personal-info-store-provider";
import { PersonalInfoStore } from "@/stores/personal-info-store";
import { useContext } from "react";
import { useStore } from "zustand";

export const usePersonalInfoStore = <T>(
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
