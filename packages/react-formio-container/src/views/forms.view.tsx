import { Alert, FormsTable } from "@tsed/react-formio";
import React, { useMemo } from "react";
import { useForms, UseFormsProps } from "../hooks/useForms.hook";

export function FormsComponent({
  className,
  formType,
  data,
  error,
  parameters,
  setParameters,
  dispatchOperation,
  operationsSettings,
  i18n
}: ReturnType<typeof useForms>) {
  const operations = useMemo(() => {
    return [
      operationsSettings.edit && {
        action: "edit",
        alias: "row",
        icon: "edit",
        title: i18n("Edit")
      },
      operationsSettings.preview && {
        action: "view",
        icon: "search",
        title: i18n("Preview")
      },
      operationsSettings.delete && {
        action: "delete",
        buttonType: "danger",
        icon: i18n("trash")
      }
    ].filter(Boolean);
  }, [operationsSettings]);

  return (
    <div>
      <Alert error={error} />
      <FormsTable
        icon={formType === "forms" ? "detail" : "folder"}
        data={data}
        operations={operations}
        {...parameters}
        onChange={setParameters}
        i18n={i18n}
        onClick={dispatchOperation}
        className={className}
      />
    </div>
  );
}

export function FormsView(props: UseFormsProps) {
  const Component = props.FormsComponent || FormsComponent;

  return <Component {...useForms(props)} />;
}
