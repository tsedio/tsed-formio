import "../forms/select/all";

import { Meta, StoryObj } from "@storybook/react";
import { useEffect, useState } from "react";

import { Pagination } from "./all";

/**
 * Pagination component.
 *
 * You can import this component and use it like:
 *
 * ```tsx
 * import {Pagination} from "@tsed/react-formio/molecules/pagination/all"
 * import {Pagination} from "@tsed/react-formio/molecules/form/select/Select/all"
 *
 * or
 *
 * import {Pagination} from "@tsed/react-formio/molecules/pagination/Pagination";
 * import "@tsed/react-formio/molecules/pagination/PaginationButton";
 *
 * or
 *
 * import {Pagination} from "@tsed/react-formio/molecules/pagination/Pagination";
 *
 * registerComponent("PaginationButton", MyPaginationButton);
 * ```
 *
 * Pagination component support DI container and can be used with custom PaginationButton component.
 *
 * You can also override the Pagination component with your own implementation:
 *
 * ```tsx
 * function MyPagination(props: PaginationProps) {
 *
 * }
 *
 * registerComponent("Pagination", MyPagination);
 * ```
 */
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
