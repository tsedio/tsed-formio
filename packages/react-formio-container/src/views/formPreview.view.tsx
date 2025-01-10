import type { FormType } from "@tsed/react-formio";
import { Card } from "@tsed/react-formio/molecules/card/Card";
import { Form } from "@tsed/react-formio/organisms/form/Form";

import { useForm } from "../hooks";

export function FormPreviewView({ form, i18n }: ReturnType<typeof useForm>) {
  return (
    <div className={"p-10 bg-gray-500"}>
      <Card label={form.title || ""} className={"shadow"}>
        <Form form={form as FormType} options={{ i18n }} />
      </Card>
    </div>
  );
}
