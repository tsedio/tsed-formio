import { Card, iconClass } from "@tsed/react-formio";

import { UseFormProps } from "../hooks/useForm.hook";
import { useFormExport } from "../hooks/useFormExport";

export function FormExportComponent({ formType, exportAs, i18n = (f) => f }: ReturnType<typeof useFormExport>) {
  return (
    <div>
      <div className={"flex flex-wrap items-stretch p-2"}>
        <div className={"w-1/3 p-2"}>
          <Card
            label={
              (
                <span className={"flex items-center"}>
                  <i className={iconClass(undefined, "detail") + " mr-1 text-secondary"} /> {i18n(`Export ${formType} schema`)}
                </span>
              ) as any
            }
          >
            <p className={"mb-5"}>{i18n("Export the formIO schema:")}</p>
            <div className={"flex items-center justify-center"}>
              <button className={"btn btn-primary"} onClick={() => exportAs("schema", "json")}>
                <i className={iconClass(undefined, "code") + " mr-2"} /> {i18n("Json")}
              </button>
            </div>
          </Card>
        </div>
        <div className={"w-1/3 p-2"}>
          <Card
            label={
              (
                <span className={"flex items-center"}>
                  <i className={iconClass(undefined, "data") + " mr-1 text-secondary"} /> {i18n(`Export ${formType} submissions`)}
                </span>
              ) as any
            }
          >
            <p className={"mb-5"}>Export all submission as JSON or CSV:</p>
            <div className={"flex items-center justify-center"}>
              <button className={"btn btn-primary mr-4"} onClick={() => exportAs("submissions", "json")}>
                <i className={iconClass(undefined, "code") + " mr-2"} /> {i18n("Json")}
              </button>
              <button className={"btn btn-primary"} onClick={() => exportAs("submissions", "csv")}>
                <i className={iconClass(undefined, "spreadsheet") + " mr-2"} /> {i18n("Csv")}
              </button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export function FormExportView(props: UseFormProps) {
  const Component = props.FormExportComponent || FormExportComponent;
  return <Component {...useFormExport(props)} />;
}
