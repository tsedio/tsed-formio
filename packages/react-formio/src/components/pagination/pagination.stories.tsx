import React, { useEffect, useState } from "react";

import { Pagination } from "./pagination.component";

export default {
  title: "ReactFormio/Pagination",
  component: Pagination,

  parameters: {}
};

export const Sandbox = (args: any) => {
  const [currentPageIndex, setPageIndex] = useState(args.pageIndex);

  useEffect(() => {
    args.gotoPage && args.gotoPage(currentPageIndex);
  }, [currentPageIndex]);

  return (
    <div>
      <Pagination {...args} pageIndex={currentPageIndex} gotoPage={setPageIndex} />
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
