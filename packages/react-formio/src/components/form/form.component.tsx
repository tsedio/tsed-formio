import { JSON } from "../../interfaces";
import { useForm, UseFormHookProps } from "./useForm.hook";

export interface FormProps<Data extends { [key: string]: JSON } = { [key: string]: JSON }> extends UseFormHookProps<Data> {
  ["data-testid"]?: string;
  /**
   *
   */
  className?: string;
}

export function Form<Data extends { [key: string]: JSON } = { [key: string]: JSON }>(props: Partial<FormProps<Data>>) {
  const { element } = useForm<Data>(props);

  return <div data-testid={props["data-testid"]} className={props.className} ref={element} />;
}
