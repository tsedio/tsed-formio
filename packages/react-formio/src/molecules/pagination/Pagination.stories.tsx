import { Meta, StoryObj } from "@storybook/react";
import { useEffect, useState } from "react";

import { Pagination } from "./Pagination";

export default {
  title: "Pagination",
  component: Pagination,
  parameters: {},
  render(args) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [currentPageIndex, setPageIndex] = useState(args.pageIndex);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      args.gotoPage && args.gotoPage(currentPageIndex);
    }, [currentPageIndex]);

    return (
      <div>
        <Pagination {...args} pageIndex={currentPageIndex} gotoPage={setPageIndex} />
      </div>
    );
  }
} satisfies Meta<typeof Pagination>;

type Story = StoryObj<typeof Pagination>;

export const Sandbox: Story = {
  args: {
    pageSizes: [10, 25, 50, 100],
    pageCount: 50,
    pageIndex: 1
  }
};
