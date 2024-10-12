import { ComponentPropsWithRef, ReactNode } from "react";
import { useFormContext } from "react-hook-form";

type InputProps = {
  children: ReactNode;
  name: string;
} & ComponentPropsWithRef<"input">;

export const Input = ({ ...props }: InputProps) => {
  const { children, placeholder, name, ...restProps } = props;

  const {
    register,
    formState: { errors },
  } = useFormContext();

  const message = errors && (errors?.[name ?? ""]?.message as string);

  return (
    <div className="w-full max-w-sm min-w-[200px]">
      <div className="flex justify-between">
        <label className="block text-sm text-blue-900">{children}</label>
        {!!message && (
          <small className="text-red-500 font-bold">{message}</small>
        )}
      </div>

      <input
        className="w-full bg-transparent placeholder:text-gray-400 placeholder:font-black text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
        placeholder={placeholder}
        {...restProps}
        {...register(name)}
      />
    </div>
  );
};
