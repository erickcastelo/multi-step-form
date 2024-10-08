import { usePersonalInfoStore } from "@/providers/personal-info-store-provider";
import { personalInfoSchema } from "@/schema/personal-info-schema";
import { PersonalInfoState } from "@/stores/personal-info-store";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormEvent } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export const usePersonalInfoForm = () => {
  const { update, personalInfo } = usePersonalInfoStore((state) => state);

  const form = useForm({
    defaultValues: personalInfo,
    resolver: yupResolver(personalInfoSchema),
  });

  const { handleSubmit } = form;

  const onHandleForm: SubmitHandler<PersonalInfoState> = (data) => {
    update(data);
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    handleSubmit(onHandleForm)();
  };

  return {
    form,
    onSubmit,
    personalInfo,
  };
};
