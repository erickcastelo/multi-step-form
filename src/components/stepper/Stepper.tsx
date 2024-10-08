import { ReactNode } from "react";
import { CurrentIndexContext } from "./current-index-context/CurrentIndexContext";

type StepperProps = {
  children: ReactNode;
  currentIndex: number;
};

export const Stepper = ({ children, currentIndex }: StepperProps) => {
  return (
    <div className="flex mt-10 justify-center">
      <CurrentIndexContext.Provider value={currentIndex}>
        {children}
      </CurrentIndexContext.Provider>
    </div>
  );
};
