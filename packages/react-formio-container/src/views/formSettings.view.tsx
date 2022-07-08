import { FormSettings } from "@tsed/react-formio";
import React from "react";

import { useForm } from "../hooks/useForm.hook";

export function FormSettingsView(props: ReturnType<typeof useForm>) {
  const Component = props.FormSettingsComponent || FormSettings;
  const { form, saveForm, i18n } = props;

  return (
    <div className={"p-3"}>
      <Component {...props} form={form} onSubmit={saveForm} options={{ i18n }} />
    </div>
  );
}
