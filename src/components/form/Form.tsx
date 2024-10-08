import { ComponentPropsWithRef, forwardRef, ReactNode } from "react";
import { FormProvider } from "react-hook-form";

type FormProps = {
  children: ReactNode;
  useForm: any;
} & ComponentPropsWithRef<"form">;

export const Form = forwardRef<HTMLFormElement, FormProps>(
  ({ children, useForm, ...restProps }, ref) => {
    return (
      <FormProvider {...useForm}>
        <form ref={ref} {...restProps} noValidate>
          {children}
        </form>
      </FormProvider>
    );
  }
);
Form.displayName = "Form";
