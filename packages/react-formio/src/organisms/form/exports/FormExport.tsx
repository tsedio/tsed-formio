import { Icon } from "../../../atoms/icon/Icon.js";
import type { Card } from "../../../molecules/card/Card.js";
import { getComponent } from "../../../registries/components.js";

export interface FormExportProps {
  i18n?: (key: string) => string;
  onClick?: (action: "export:form" | "export:submissions", format: "json" | "csv") => void;
}

export function FormExport({ i18n = (f: string) => f, onClick }: FormExportProps) {
  const FCard = getComponent<typeof Card>("Card");

  return (
    <div>
      <div className={"flex gap-3"}>
        <div className={"sm:w-1/2"}>
          <FCard
            label={
              (
                <span className={"flex items-center"}>
                  <Icon name={"detail"} className={"mr-1 text-secondary"} /> {i18n(`Export schema`)}
                </span>
              ) as any
            }
          >
            <p className={"mb-5"}>{i18n("Export the formIO schema:")}</p>
            <div className={"flex items-center justify-center"}>
              <button className={"btn btn-primary"} onClick={() => onClick?.("export:form", "json")}>
                <Icon name={"code"} className={"mr-1"} /> {i18n(`Json`)}
              </button>
            </div>
          </FCard>
        </div>
        <div className={"sm:w-1/2"}>
          <FCard
            label={
              (
                <span className={"flex items-center"}>
                  <Icon name={"data"} className={"mr-1 text-secondary"} /> {i18n(`Export submissions`)}
                </span>
              ) as any
            }
          >
            <p className={"mb-5"}>{i18n("Export all submission as JSON or CSV:")}</p>
            <div className={"flex items-center justify-center"}>
              <button className={"btn btn-primary mr-4"} onClick={() => onClick?.("export:submissions", "json")}>
                <Icon name={"code"} className={"mr-1"} /> {i18n(`Json`)}
              </button>
              <button className={"btn btn-primary"} onClick={() => onClick?.("export:submissions", "csv")}>
                <Icon name={"spreadsheet"} className={"mr-1"} /> {i18n(`Csv`)}
              </button>
            </div>
          </FCard>
        </div>
      </div>
    </div>
  );
}
