import classnames from "classnames";
import noop from "lodash/noop";
import { useState } from "react";

import { ActionType } from "../../interfaces";
import { Select } from "../../molecules/forms/select/Select";
import { Table, type TableProps } from "../../molecules/table";
import { iconClass } from "../../utils/iconClass";

export type ActionsTableProps = Omit<TableProps<ActionType>, "columns"> & {
  onAddAction?: (actionName: string) => void;
  availableActions?: { label: string; value: string }[];
};

export function ActionsTable({
  disableFilters = true,
  disablePagination = true,
  availableActions = [],
  onAddAction = noop,
  ...props
}: ActionsTableProps) {
  const { i18n = (f: string) => f } = props;
  const [currentAction, setAction] = useState("");

  const columns = [
    {
      Header: i18n("Actions"),
      accessor: "title",
      id: "title"
    }
  ];

  return (
    <Table {...props} disableFilters={disableFilters} disablePagination={disablePagination} columns={columns}>
      <div className={"pagination-group"}>
        <Select
          data-testid={"action-table-select"}
          name={"actions"}
          value={currentAction}
          choices={[{ label: i18n("Select an action"), value: "" }].concat(availableActions)}
          onChange={(name: string, action: string) => setAction(action)}
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
