import { ReactNode } from "react";
import { PersonalInfoStoreProvider } from "./personal-info-store-provider";

type StoreProviderProps = {
  children: ReactNode;
};

export const StoreProvider = ({ children }: StoreProviderProps) => {
  return <PersonalInfoStoreProvider>{children}</PersonalInfoStoreProvider>;
};
