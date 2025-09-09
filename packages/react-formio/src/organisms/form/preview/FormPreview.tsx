import type { FormType } from "../../../interfaces/index.js";
import type { Card } from "../../../molecules/card/Card.js";
import { getComponent } from "../../../registries/components.js";
import { Form } from "../Form.js";

export interface FormPreviewProps {
  form: FormType;
  i18n?: (key: string) => string;
}

export function FormPreview({ form, i18n = (f) => f }: FormPreviewProps) {
  const FCard = getComponent<typeof Card>("Card");

  return (
    <div className='p-10 bg-gray-500'>
      <FCard label={i18n(form.title || "")} className={"shadow"}>
        <Form form={form} options={{ i18n }} />
      </FCard>
    </div>
  );
}
