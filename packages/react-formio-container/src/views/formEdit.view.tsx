import { FormEdit } from "@tsed/react-formio";
import React from "react";
import { useForm } from "../hooks/useForm.hook";

export function FormEditView({ className, ...props }: ReturnType<typeof useForm>) {
  const { form, saveForm, duplicateForm, i18n } = props;
  const Component = props.FormEditComponent || FormEdit;
  return (
    <div className={"p-3 pb-1"}>
      <Component {...props} form={form} onSubmit={saveForm} onCopy={duplicateForm} options={{ i18n }} />
    </div>
  );
}
