import { useForm, UseFormHookProps } from "./useForm.hook";

export interface FormProps<Data = any> extends UseFormHookProps<Data> {
  name?: string;
  /**
   *
   */
  className?: string;
}

export function Form<Data = any>(props: Partial<FormProps<Data>>) {
  const { element } = useForm(props);

  return <div data-testid={`formioContainer${props.name || ""}`} ref={element} className={props.className} />;
}
