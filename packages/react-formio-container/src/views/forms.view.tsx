import { Alert, FormsTable } from "@tsed/react-formio";
import React, { useMemo } from "react";
import { useForms, UseFormsProps } from "../hooks/useForms.hook";

export function FormsComponent({
  formType,
  data,
  error,
  parameters,
  setParameters,
  dispatchOperation,
  operations: operationSettings
}: ReturnType<typeof useForms>) {
  const operations = useMemo(() => {
    return [
      operationSettings.edit && {
        action: "edit",
        alias: "row",
        icon: "edit",
        title: "Edit"
      },
      operationSettings.preview && {
        action: "view",
        icon: "search",
        title: "Preview"
      },
      operationSettings.delete && {
        action: "delete",
        buttonType: "danger",
        icon: "trash"
      }
    ].filter(Boolean);
  }, [operationSettings]);

  return (
    <div>
      <Alert error={error} />
      <FormsTable
        icon={formType === "forms" ? "detail" : "folder"}
        data={data}
        operations={operations}
        {...parameters}
        onChange={(parameters) => {
          setParameters(parameters);
        }}
        onClick={dispatchOperation}
        className={"rounded bg-white shadow-lg relative"}
      />
    </div>
  );
}

export function FormsView(props: UseFormsProps) {
  const Component = props.FormsComponent || FormsComponent;

  return <Component {...useForms(props)} />;
}
