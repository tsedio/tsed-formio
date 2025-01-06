import { JSON } from "../../interfaces";
import { useForm, UseFormProps } from "./useForm.hook";

class CSSProperties {}

export interface FormProps<Data extends { [key: string]: JSON } = { [key: string]: JSON }> extends UseFormProps<Data> {
  ["data-testid"]?: string;
  /**
   *
   */
  className?: string;

  style?: CSSProperties;
}

export function Form<Data extends { [key: string]: JSON } = { [key: string]: JSON }>({
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
