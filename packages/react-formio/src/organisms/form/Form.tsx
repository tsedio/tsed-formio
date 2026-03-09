import type { JSONRecord } from "../../interfaces/JSONRecord.js";
import { useForm, UseFormProps } from "./useForm";

class CSSProperties {}

export interface FormProps<Data extends object = JSONRecord> extends UseFormProps<Data> {
  ["data-testid"]?: string;
  /**
   *
   */
  className?: string;

  style?: CSSProperties;
}

export function Form<Data extends object = JSONRecord>({
  style,
  className,
  "data-testid": dataTestId = "formio-container",
  ...props
}: Partial<FormProps<Data>>) {
  const { element } = useForm<Data>(props);

  return (
    <div>
      <div data-testid={dataTestId} style={style} className={className} ref={element} />
    </div>
  );
}
