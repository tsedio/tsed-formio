import { useState } from "react";

import { mapPagination } from "../../utils/mapPagination";
import FormType from "../__fixtures__/form-schema.json";
import formSubmissions from "../__fixtures__/form-submissions.json";
import { Table } from "./table.component";
import { mapFormToColumns } from "./utils/mapFormToColumns";

export default {
  title: "@tsed/react-formio/Table",
  component: Table,
  argTypes: {},
  parameters: {}
};

export const Sandbox = (args: any) => {
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(10);
  const [serverCount] = useState(87);

  const onChange = (obj: any) => {
    setLimit(obj.pageSize);
    setSkip(obj.pageIndex * obj.pageSize);
    args.onChange && args.onChange(obj);
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
  columns: mapFormToColumns(FormType as any),
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

export const TableWithDragNDrop = (args: any) => {
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(10);
  const [serverCount] = useState(87);
  const [data, setData] = useState(() => formSubmissions);

  const onChange = (obj: any) => {
    setLimit(obj.pageSize);
    setSkip(obj.pageIndex * obj.pageSize);
    args.onChange && args.onChange(obj);
  };

  return (
    <Table
      {...args}
      data={data}
      onChange={onChange}
      {...mapPagination({
        skip,
        limit,
        serverCount
      })}
      onDrag={(data) => {
        setData(data);
      }}
    />
  );
};

TableWithDragNDrop.args = {
  enableDragNDrop: true,
  data: [],
  columns: mapFormToColumns(FormType as any),
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
