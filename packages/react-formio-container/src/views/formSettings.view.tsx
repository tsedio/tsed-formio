import { FormSettings } from "@tsed/react-formio/organisms/form/settings/FormSettings";

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
