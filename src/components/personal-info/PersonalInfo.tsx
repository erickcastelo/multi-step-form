import { Input } from "../input/Input";
import { Form } from "../form/Form";
import {
  ComponentPropsWithRef,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import { usePersonalInfoForm } from "@/hooks/personal-info/use-personal-info-form";

type PersonalInfoProps = ComponentPropsWithRef<"form">;

export const PersonalInfo = forwardRef<
  { triggerSubmit: () => boolean },
  PersonalInfoProps
>((_props, ref) => {
  const { form, onSubmit } = usePersonalInfoForm();

  const formRef = useRef<HTMLFormElement>(null);

  useImperativeHandle(
    ref,
    () => {
      return {
        triggerSubmit() {
          const formElement = formRef.current;
          const event = new Event("submit", {
            cancelable: true,
            bubbles: true,
          });
          if (formElement) formElement.dispatchEvent(event);

          return form.formState.isValid;
        },
      };
    },
    [form.formState.isValid]
  );

  return (
    <Form useForm={form} ref={formRef} onSubmit={onSubmit}>
      <div className="mt-4">
        <Input name="name" placeholder="e.g. Stephen King">
          Name
        </Input>
      </div>

      <div className="mt-4">
        <Input name="email" placeholder="e.g. stephenking@lorem.com">
          Email Address
        </Input>
      </div>

      <div className="mt-4">
        <Input name="phone" placeholder="e.g. +1 234 567 890">
          Phone Number
        </Input>
      </div>
    </Form>
  );
});
PersonalInfo.displayName = "PersonalInfo";
