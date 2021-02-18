import React from "react";
import { Pagination } from "./pagination.component";

export default {
  title: "ReactFormio/Pagination",
  component: Pagination,
  argTypes: {
    pageSizes: {
      control: {
        type: "object"
      }
    },
    pageCount: {
      control: {
        type: "number"
      }
    },
    pageIndex: {
      control: {
        type: "number"
      }
    },
    canPreviousPage: {
      control: {
        type: "boolean"
      }
    },
    canNextPage: {
      control: {
        type: "boolean"
      }
    }
  },
  parameters: {}
};

export const Sandbox = (args: any) => {
  return (
    <div>
      <Pagination {...args} />
    </div>
  );
};

Sandbox.args = {
  pageSizes: [10, 25, 50, 100],
  pageCount: 50,
  pageIndex: 1
  // gotoPage,
  // canPreviousPage,
  // previousPage,
  // nextPage,
  // canNextPage,
  // pageCount,
  // pageIndex,
  // pageOptions,
  // pageSize,
  // setPageSize,
};
