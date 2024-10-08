import { ComponentPropsWithRef, ReactNode } from "react";

type FooterProps = {
  children: ReactNode;
} & ComponentPropsWithRef<"footer">;
export const Footer = ({ ...props }: FooterProps) => {
  const { children, ...restProps } = props;

  return (
    <footer
      className="absolute bottom-0 bg-white w-full p-4 flex items-center justify-end"
      {...restProps}
    >
      {children}
    </footer>
  );
};
