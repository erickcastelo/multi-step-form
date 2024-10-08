import { ComponentPropsWithRef, forwardRef, ReactNode } from "react";
import { FieldValues, FormProvider, UseFormReturn } from "react-hook-form";

export type UseForm<T extends FieldValues> = UseFormReturn<T>;

type FormProps<T extends FieldValues> = {
  children: ReactNode;
  useForm: UseForm<T>;
} & ComponentPropsWithRef<"form">;

export const Form = forwardRef<HTMLFormElement, FormProps<any>>(
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
