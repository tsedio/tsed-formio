import { AuthState, selectAuth, selectForm } from "@tsed/react-formio";
import { useSelector } from "react-redux";
import noop from "lodash/noop";
import { exportAs } from "../utils/ExportClient";
import { UseFormProps } from "./useForm.hook";

export function useFormExport(props: UseFormProps) {
  const { formType, onSuccess = noop, onError = noop } = props;
  const type = formType.replace(/s$/, "");

  const auth: AuthState = useSelector(selectAuth);
  const form = useSelector((state) => selectForm(type, state));

  return {
    ...props,
    auth,
    form,
    async exportAs(type: string, format: "csv" | "json") {
      try {
        await exportAs(form, type, format);
        onSuccess({
          name: `export:${type}`,
          title: `${type} exported`,
          message: `The ${type} has been successfully exported!`,
          data: form
        });
      } catch (error) {
        onError({
          name: `export:${type}`,
          title: `Export ${type} failed`,
          message: error.message || error,
          data: form,
          error: error
        });
      }
    }
  };
}
