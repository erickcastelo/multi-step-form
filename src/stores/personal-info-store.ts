import { createStore } from "zustand";
import { devtools } from "zustand/middleware";

export type PersonalInfoState = {
  name: string;
  email: string;
  phone: string;
};

export type PersonalInfoActions = {
  update: (data: PersonalInfoState) => void;
  reset: () => void;
};

export type PersonalInfoStore = {
  personalInfo: PersonalInfoState;
} & PersonalInfoActions;

export const initialState: PersonalInfoState = {
  name: "",
  email: "",
  phone: "",
};

export const createPersonalInfoStore = (
  defaultInitialState: PersonalInfoState = initialState
) => {
  return createStore<PersonalInfoStore>()(
    devtools((set) => ({
      personalInfo: { ...defaultInitialState },
      update: (data) =>
        set((state) => ({ personalInfo: { ...state.personalInfo, ...data } })),
      reset: () => set(() => ({ personalInfo: { ...defaultInitialState } })),
    }))
  );
};
