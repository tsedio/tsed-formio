import "../../../molecules/button/Button";
import "../../../molecules/forms/input-text/InputText";
import "../../../molecules/forms/select/all";
import "../../../molecules/pagination/all";
import "../../../molecules/table/all";

import { useState } from "react";

import { mapPagination } from "../../../utils/mapPagination";
import FormType from "../../__fixtures__/form-schema.json";
import formSubmissions from "../../__fixtures__/form-submissions.json";
import { SubmissionsTable } from "./SubmissionsTable";

/**
 * ```tsx
 * import {SubmissionsTable} from "@tsed/react-formio/organisms/table/submissions/SubmissionsTable";
 * ```
 */
export default {
  title: "table/submissions/SubmissionsTable",
  component: SubmissionsTable,
  argTypes: {
    form: {
      control: "object"
    },
    data: {
      control: "object"
    },
    operations: {
      control: "object"
    },
    isLoading: {
      control: "boolean"
    },
    isEmpty: {
      control: "boolean"
    },
    disableFilters: {
      control: "boolean"
    },
    disablePagination: {
      control: "boolean"
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
  form: FormType,
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
