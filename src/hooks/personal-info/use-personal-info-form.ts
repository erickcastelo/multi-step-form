import { personalInfoSchema } from "@/schema/personal-info-schema";
import { PersonalInfoState } from "@/stores/personal-info-store";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormEvent } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { usePersonalInfoStore } from "./use-personal-info-store";

export const usePersonalInfoForm = () => {
  const { update, personalInfo } = usePersonalInfoStore((state) => state);

  const form = useForm({
    defaultValues: personalInfo,
    resolver: yupResolver(personalInfoSchema),
  });
  const { handleSubmit } = form;

  const handleForm: SubmitHandler<PersonalInfoState> = (data) => {
    update(data);
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    handleSubmit(handleForm)();
  };

  return {
    form,
    onSubmit,
    personalInfo,
  };
};
