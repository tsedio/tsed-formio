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
  operationsSettings,
  i18n
}: ReturnType<typeof useForms>) {
  const operations = useMemo(() => {
    return [
      operationsSettings.edit && {
        action: "edit",
        icon: "edit",
        title: i18n("Edit")
      },
      operationsSettings.submissions && {
        action: "submissions",
        alias: "row",
        icon: "data",
        title: i18n("Data")
      },
      operationsSettings.preview && {
        action: "preview",
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
    <div className={"-m-px"}>
      <Alert error={error} />
      <FormsTable
        icon={formType === "forms" ? "detail" : "folder"}
        data={data}
        operations={operations}
        {...parameters}
        onChange={setParameters}
        i18n={i18n}
        onClick={dispatchOperation}
      />
    </div>
  );
}

export function FormsView(props: UseFormsProps) {
  const Component = props.FormsComponent || FormsComponent;

  return <Component {...useForms(props)} />;
}
