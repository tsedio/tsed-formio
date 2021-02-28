import { Card, Form } from "@tsed/react-formio";
import React from "react";
import { useForm } from "../hooks";

export function FormPreviewView({ form, i18n }: ReturnType<typeof useForm>) {
  return (
    <div className={"p-10 bg-gray-500"}>
      <Card label={form.title} className={"shadow"}>
        <Form form={form} options={{ i18n }} />
      </Card>
    </div>
  );
}
