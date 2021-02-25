import { FormAccess } from "@tsed/react-formio";
import React from "react";
import { useForm } from "../hooks/useForm.hook";

export function FormAccessView({
  form,
  auth,
  formType,
  saveForm
}: ReturnType<typeof useForm>) {
  const roles = Object.values(auth.roles).map((role) => {
    return {
      label: role.title,
      value: role._id,
      ...role
    };
  });

  return (
    <div className={"p-3 pb-1"}>
      <FormAccess
        type={formType}
        form={form}
        roles={roles}
        onSubmit={saveForm}
      />
    </div>
  );
}
