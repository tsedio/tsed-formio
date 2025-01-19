import classnames from "classnames";

import { getComponent, registerComponent } from "../../registries/components";
import type { Select as DefaultSelect } from "../forms/select/Select";
import { getPageNumbers, LEFT_PAGE, RIGHT_PAGE } from "../table";
import type { PaginationButton as DefaultPaginationButton } from "./PaginationButton";

export interface PaginationProps {
  className?: string;
  pageSizes?: number[];
  gotoPage: any;
  canPreviousPage: boolean;
  previousPage: any;
  nextPage: any;
  canNextPage: boolean;
  pageCount: number;
  pageIndex: number;
  pageOptions?: number[];
  pageSize: number;
  setPageSize: any;
  totalLength?: number;
  layout?: "html5" | "react" | "choicesjs";
  i18n?: (f: string) => string;
}

export function Pagination(props: PaginationProps) {
  const {
    className,
    pageSizes = [10, 25, 50, 100],
    gotoPage,
    canPreviousPage,
    previousPage,
    nextPage,
    canNextPage,
    pageCount,
    pageIndex = 1,
    pageOptions,
    pageSize,
    setPageSize,
    totalLength,
    i18n = (f: string) => f
  } = props;

  const pageNumbers = getPageNumbers({
    currentPage: pageIndex,
    // pageNeighbours,
    totalPages: pageCount
  });
  const choices: any[] = pageSizes.map((value) => ({ value, label: value }));
  const Select = getComponent<typeof DefaultSelect>("Select");
  const PaginationButton = getComponent<typeof DefaultPaginationButton>("PaginationButton");

  return (
    <nav aria-label='Page navigation' className={classnames("pagination-group -mb-3", className)}>
      <ul className='pagination mb-3 mr-3'>
        <li className={classnames("page-item", !canPreviousPage && "disabled")}>
          <PaginationButton tabIndex={-1} disabled={!canPreviousPage} onClick={() => previousPage()}>
            {i18n("Previous")}
          </PaginationButton>
        </li>

        {pageNumbers.map((page) => {
          if ([LEFT_PAGE, RIGHT_PAGE].includes(page)) {
            return (
              <li className='page-item' key={page}>
                <PaginationButton aria-hidden='true'>...</PaginationButton>
              </li>
            );
          }

          const active = page - 1 === pageIndex;
          return (
            <li className={classnames("page-item", active && "active")} key={page}>
              <PaginationButton tabIndex={pageIndex} active={active} onClick={() => gotoPage(page - 1)}>
                {page}
              </PaginationButton>
            </li>
          );
        })}

        <li className={classnames("page-item", !canNextPage && "disabled")}>
          <PaginationButton tabIndex={pageNumbers.length} disabled={!canNextPage} onClick={() => nextPage()}>
            {i18n("Next")}
          </PaginationButton>
        </li>
      </ul>

      <li className='mb-3 mr-3 flex items-center'>
        <Select<number>
          name={"page"}
          value={pageSize}
          options={choices}
          multiple={false}
          layout={props.layout}
          onChange={(_, value) => {
            setPageSize(+value);
          }}
        />
        <span className={"ml-3"}>{i18n("items per page")}</span>
      </li>
      {pageOptions && (
        <li className={"mb-3 mr-3 flex items-center"}>
          <span>{i18n("Page")}&nbsp;</span>
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </li>
      )}
      {totalLength !== undefined && (
        <li className={"mb-3 flex items-center"} data-testid='pagination-total-items'>
          {i18n("Total")}: <strong className='mx-1'>{new Intl.NumberFormat(undefined).format(totalLength)}</strong> {i18n("items")}
        </li>
      )}
    </nav>
  );
}

registerComponent("Pagination", Pagination);
