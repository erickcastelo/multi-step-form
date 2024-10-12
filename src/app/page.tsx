"use client";

import { Button } from "@/components/button/Button";
import { Footer } from "@/components/footer/Footer";
import { PersonalInfo } from "@/components/personal-info/PersonalInfo";
import { SelectYourPlan } from "@/components/select-your-plan/SelectYourPlan";
import { Stepper } from "@/components/stepper/Stepper";
import { StepperItem } from "@/components/stepper/StepperItem";
import localFont from "next/font/local";
import { useRef, useState } from "react";

const ubuntoBold = localFont({
  src: "./fonts/Ubuntu-Bold.ttf",
  weight: "100 900",
});

export default function Home() {
  const [current, setCurrent] = useState<number>(0);
  const formSubmitRef = useRef<{ triggerSubmit: () => boolean } | null>(null);

  const titles = [
    {
      title: "Personal Info",
      subtitle: "Please provide your name, email address, and phone number.",
    },
    {
      title: "Select your plan",
      subtitle: "Your have the option of monthly or yearly billing",
    },
  ];

  const currentStep = [
    <PersonalInfo key={0} ref={formSubmitRef} />,
    <SelectYourPlan key={1} />,
  ];

  const showButtonBack = current > 0;

  return (
    <>
      <header className="absolute top-0 bg-background-image bg-no-repeat bg-contain w-full h-full">
        <Stepper currentIndex={current}>
          <StepperItem />
          <StepperItem />
          <StepperItem />
          <StepperItem />
        </Stepper>
      </header>

      <main className="bg-white w-card-45 rounded-lg m-4 z-0 p-7 self-start mt-28">
        <h1 className={`${ubuntoBold.className} text-2xl text-blue-900`}>
          {titles[current].title}
        </h1>
        <h2 className="mt-4 text-zinc-400">{titles[current].subtitle}</h2>
        {currentStep[current]}
      </main>

      <Footer>
        <div
          className={
            `${showButtonBack ? "flex" : "text-right"}` +
            " justify-between w-full"
          }
        >
          {showButtonBack && (
            <Button
              onClick={() => setCurrent((previousValue) => previousValue - 1)}
              color="light"
            >
              Go Back
            </Button>
          )}
          <Button
            onClick={() => {
              const canGoForNextStep = formSubmitRef.current?.triggerSubmit();

              if (canGoForNextStep)
                setCurrent((previousValue) => previousValue + 1);
            }}
          >
            Next Step
          </Button>
        </div>
      </Footer>
    </>
  );
}
