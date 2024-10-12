import IconArcade from "@/app/images/icon-arcade.svg";
import IconAdvanced from "@/app/images/icon-advanced.svg";
import IconPro from "@/app/images/icon-pro.svg";

import { CardPlan, CardPlanProps } from "./card-choice/CardPlan";
import { useState } from "react";

type CardPlan = Omit<CardPlanProps, "onClick">;

const initialCards = [
  {
    iconPlan: {
      icon: IconArcade,
      alt: "Arcade",
    },
    description: "Arcade",
    price: "$9/mo",
    isActive: false,
  },
  {
    iconPlan: {
      icon: IconPro,
      alt: "Pro",
    },
    description: "Pro",
    price: "$15/mo",
    isActive: false,
  },
  {
    iconPlan: {
      icon: IconAdvanced,
      alt: "Advanced",
    },
    description: "Advanced",
    price: "$12/mo",
    isActive: false,
  },
];

export const SelectYourPlan = () => {
  const [cards, setCards] = useState<CardPlan[]>(initialCards);

  return (
    <>
      {cards.map((card, index) => (
        <CardPlan
          key={card.description}
          iconPlan={{
            icon: card.iconPlan.icon,
            alt: card.iconPlan.alt,
          }}
          description={card.description}
          price={card.price}
          isActive={card.isActive}
          onClick={() => {
            const replaceCards = cards.map((card, indexReplace) => {
              card.isActive = index === indexReplace;
              return card;
            });
            setCards(() => {
              return [...replaceCards];
            });
          }}
        />
      ))}
    </>
  );
};
