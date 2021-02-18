import React from "react";
import formSchema from "../__fixtures__/form-schema.json";
import formSubmissions from "../__fixtures__/form-submissions.json";
import { Table } from "./table.component";
import { mapFormToColumns } from "./utils/mapFormToColumns";
import { mapPagination } from "../../utils/mapPagination";

export default {
  title: "ReactFormio/Table",
  component: Table,
  argTypes: {},
  parameters: {}
};

export const Sandbox = (args: any) => {
  const [skip, setSkip] = React.useState(0);
  const [limit, setLimit] = React.useState(10);
  const [serverCount] = React.useState(87);

  const onChange = (obj: any) => {
    setLimit(obj.pageSize);
    setSkip(obj.pageIndex * obj.pageSize);
    args.onChange(obj);
  };

  return (
    <Table
      {...args}
      onChange={onChange}
      {...mapPagination({
        skip,
        limit,
        serverCount
      })}
    />
  );
};

Sandbox.args = {
  data: formSubmissions,
  columns: mapFormToColumns(formSchema as any),
  operations: [
    {
      title: "Edit",
      action: "edit",
      alias: "row",
      path: "/resources/:resourceId/submissions/:submissionId",
      icon: "edit",
      permissionsResolver() {
        return true;
      }
    },
    {
      action: "delete",
      path: "/resources/:resourceId/submissions/:submissionId/delete",
      icon: "trash",
      buttonType: "danger",
      permissionsResolver() {
        return true;
      }
    }
  ]
};
