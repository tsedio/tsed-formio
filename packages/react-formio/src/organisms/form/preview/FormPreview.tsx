import { useI18n } from "../../../hooks/useI18n.js";
import type { FormOptions, FormType } from "../../../interfaces/index.js";
import type { Card } from "../../../molecules/card/Card.js";
import { getComponent } from "../../../registries/components.js";
import { Form } from "../Form.js";

export interface FormPreviewProps {
  form: FormType;
  i18n?: FormOptions["i18n"];
}

export function FormPreview({ form, ...props }: FormPreviewProps) {
  const { t } = useI18n(props?.i18n);
  const FCard = getComponent<typeof Card>("Card");

  return (
    <div className='p-10 bg-gray-500'>
      <FCard label={t(form.title || "")} className={"shadow"}>
        <Form form={form} options={{ i18n: props.i18n }} />
      </FCard>
    </div>
  );
}
