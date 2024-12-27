import { useState } from "react";

import { mapPagination } from "../../utils/mapPagination";
import formSchema from "../__fixtures__/form-schema.json";
import formSubmissions from "../__fixtures__/form-submissions.json";
import { SubmissionsTable } from "./submissionsTable.component";

export default {
  title: "ReactFormio/SubmissionsTable",
  component: SubmissionsTable,
  argTypes: {
    form: {
      control: {
        type: "object"
      }
    },
    data: {
      control: {
        type: "object"
      }
    },
    operations: {
      control: {
        type: "object"
      }
    },
    isLoading: {
      control: {
        type: "boolean"
      }
    },
    isEmpty: {
      control: {
        type: "boolean"
      }
    },
    disableFilters: {
      control: {
        type: "boolean"
      }
    },
    disablePagination: {
      control: {
        type: "boolean"
      }
    }
  },
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
    <SubmissionsTable
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
  form: formSchema,
  data: formSubmissions,
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
