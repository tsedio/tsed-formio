import { FormAccess } from "@tsed/react-formio";
import React from "react";

import { useForm } from "../hooks/useForm.hook";

export function FormAccessView(props: ReturnType<typeof useForm>) {
  const Component = props.FormAccessComponent || FormAccess;
  const { form, auth, formType, saveForm, i18n } = props;

  const roles = Object.values(auth.roles).map((role) => {
    return {
      label: role.title,
      value: role._id,
      ...role
    };
  });

  return (
    <div className={"p-3 pb-1"}>
      <Component {...props} type={formType} form={form} roles={roles} onSubmit={saveForm} options={{ i18n }} />
    </div>
  );
}
