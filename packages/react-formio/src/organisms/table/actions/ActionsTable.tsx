import { ColumnDef } from "@tanstack/react-table";
import clsx from "clsx";
import noop from "lodash/noop";
import { useState } from "react";

import { useI18n } from "../../../hooks/useI18n.js";
import { ActionType, type FormOptions } from "../../../interfaces";
import { Select } from "../../../molecules/forms/select/Select";
import { Table, type TableProps } from "../../../molecules/table/Table";
import { iconClass } from "../../../utils/iconClass";

export type ActionsTableProps = Omit<TableProps<ActionType>, "columns"> & {
  onAddAction?: (actionName: string) => void;
  availableActions?: { label: string; value: string }[];
  i18n?: FormOptions["i18n"];
};

export function ActionsTable({ availableActions = [], onAddAction = noop, ...props }: ActionsTableProps) {
  const { t } = useI18n(props.i18n);
  const [currentAction, setAction] = useState("");

  const columns: ColumnDef<ActionType>[] = [
    {
      header: t("Action"),
      accessorKey: "title"
    }
  ];

  return (
    <Table {...props} columns={columns}>
      <div className={"pagination-group"}>
        <Select
          data-testid={"action-table-select"}
          name={"actions"}
          value={currentAction}
          options={[{ label: t("Select an action"), value: "" }].concat(availableActions)}
          onChange={(_, action) => setAction(action)}
        />
        <div className={"pl-3"}>
          <button
            data-testid={"action-table-add"}
            disabled={currentAction === ""}
            className={"btn btn-success"}
            onClick={() => currentAction && onAddAction(currentAction)}
            type={"submit"}
          >
            <i className={clsx(iconClass(undefined, "plus"), "mr-1")} /> {t("Add action")}
          </button>
        </div>
      </div>
    </Table>
  );
}
