"use client";

import { ReactNode, useContext, useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { CurrentIndexContext } from "./current-index-context/CurrentIndexContext";

type StepperItemProps = {
  children?: ReactNode;
};

export const StepperItem = ({ children }: StepperItemProps) => {
  const stepperItemRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState<number>(0);

  const currentIndex = useContext(CurrentIndexContext);
  const isActived = currentIndex === index;

  const checkCurrentIndex = () => {
    const parentElement = stepperItemRef.current?.parentNode;
    const childrenArray = parentElement?.children
      ? Array.from(parentElement?.children)
      : [];

    const index = stepperItemRef?.current
      ? childrenArray.indexOf(stepperItemRef?.current)
      : 0;
    setIndex(index);
  };

  useEffect(() => {
    checkCurrentIndex();
  }, []);

  return (
    <div
      ref={stepperItemRef}
      className={classNames({
        "w-8 h-8 border-2 border-white rounded-full bg-transparent flex justify-center items-center mr-4 text-white":
          true,
        "!bg-blue-light !text-blue-900": isActived,
      })}
    >
      {index + 1}
      {children}
    </div>
  );
};
