import { AuthState, selectAuth, selectForm } from "@tsed/react-formio";
import noop from "lodash/noop";
import { useSelector } from "react-redux";

import { exportAs } from "../utils/ExportClient";
import { UseFormProps } from "./useForm.hook";

export function useFormExport(props: UseFormProps) {
  const { formType, onInfo = noop, onSuccess = noop, onError = noop, i18n = (f) => f } = props;
  const type = formType.replace(/s$/, "");

  const auth: AuthState = useSelector(selectAuth);
  const form = useSelector((state) => selectForm(type, state));

  return {
    ...props,
    auth,
    form,
    async exportAs(type: string, format: "csv" | "json") {
      try {
        onInfo({
          name: `export:${type}`,
          title: i18n(`Start ${type} export`),
          message: ``,
          data: form
        });
        await exportAs(form, type, format);
        onSuccess({
          name: `export:${type}`,
          title: i18n(`${type} exported`),
          message: i18n(`The ${type} has been successfully exported!`),
          data: form
        });
      } catch (error) {
        onError({
          name: `export:${type}`,
          title: i18n(`Export ${type} failed`),
          message: error.message || error,
          data: form,
          error: error
        });
      }
    }
  };
}
