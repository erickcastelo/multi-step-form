import React, { ComponentPropsWithRef, ReactNode } from "react";
import classNames from "classnames";

type ButtonProps = {
  children: ReactNode;
  color?: "primary" | "light" | "secondary" | "success" | "danger";
} & ComponentPropsWithRef<"button">;

export const Button = ({ ...props }: ButtonProps) => {
  const { children, color, ...restProps } = props;
  return (
    <button
      {...restProps}
      className={classNames({
        "bg-blue-900 hover:bg-blue-950 text-white font-bold py-3 px-6 rounded":
          color === "primary" || color === undefined,
        "bg-zinc-50 hover:bg-zinc-100 text-zinc-400 font-bold py-3 px-6 rounded":
          color === "light",
      })}
    >
      {children}
    </button>
  );
};
