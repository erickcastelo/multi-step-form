/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import classNames from "classnames";

export type IconPlan = {
  icon: any;
  alt: string;
};

export type CardPlanProps = {
  iconPlan: IconPlan;
  description: string;
  price: string;
  isActive: boolean;
  onClick: (event?: any) => void;
};

export const CardPlan = ({
  iconPlan,
  description,
  price,
  isActive = false,
  onClick,
}: CardPlanProps) => {
  return (
    <a
      className={classNames({
        "rounded-lg border-2 border-gray-200 p-4 mt-3 flex": true,
        "border-violet-700 bg-violet-50": isActive,
      })}
      onClick={(event) => onClick(event) ?? null}
    >
      <Image src={iconPlan.icon} alt={iconPlan.alt} />
      <div className="ml-3">
        <h1 className="text-blue-900">{description}</h1>
        <small className="text-gray-400">{price}</small>
      </div>
    </a>
  );
};
