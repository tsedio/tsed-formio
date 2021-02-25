import { FormEdit } from "@tsed/react-formio";
import React from "react";
import { useForm } from "../hooks/useForm.hook";

export function FormEditView({
  form,
  saveForm,
  duplicateForm
}: Partial<ReturnType<typeof useForm>>) {
  return (
    <div className={"p-3 pb-1"}>
      <FormEdit form={form} onSubmit={saveForm} onCopy={duplicateForm} />
    </div>
  );
}
