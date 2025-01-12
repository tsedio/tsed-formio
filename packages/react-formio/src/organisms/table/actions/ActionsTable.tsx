import { ColumnDef } from "@tanstack/react-table";
import classnames from "classnames";
import noop from "lodash/noop";
import { useState } from "react";

import { ActionType } from "../../../interfaces";
import { Select } from "../../../molecules/forms/select/Select";
import { Table, type TableProps } from "../../../molecules/table/Table";
import { iconClass } from "../../../utils/iconClass";

export type ActionsTableProps = Omit<TableProps<ActionType>, "columns"> & {
  onAddAction?: (actionName: string) => void;
  availableActions?: { label: string; value: string }[];
};

export function ActionsTable({ availableActions = [], onAddAction = noop, ...props }: ActionsTableProps) {
  const { i18n = (f: string) => f } = props;
  const [currentAction, setAction] = useState("");

  const columns: ColumnDef<ActionType>[] = [
    {
      header: i18n("Action"),
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
          options={[{ label: i18n("Select an action"), value: "" }].concat(availableActions)}
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
            <i className={classnames(iconClass(undefined, "plus"), "mr-1")} /> {i18n("Add action")}
          </button>
        </div>
      </div>
    </Table>
  );
}
