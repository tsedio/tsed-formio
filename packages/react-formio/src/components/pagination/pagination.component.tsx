import classnames from "classnames";
import React, { PropsWithChildren } from "react";
import { Select } from "../select/select.component";
import {
  getPageNumbers,
  LEFT_PAGE,
  RIGHT_PAGE
} from "../table/utils/getPageNumbers";

function PaginationButton(
  props: PropsWithChildren<
    {
      component?: any;
      disabled?: boolean;
      className?: string;
      active?: boolean;
    } & Record<string, any>
  >
) {
  const {
    component: Component = "button",
    children,
    disabled,
    active,
    ...otherProps
  } = props;

  return (
    <Component
      {...otherProps}
      disabled={disabled}
      className={classnames(
        "page-link",
        disabled ? "disabled" : "",
        active ? "" : "",
        props.className
      )}
    >
      {children}
    </Component>
  );
}

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
  pageOptions?: any;
  pageSize: number;
  setPageSize: any;
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
    pageIndex,
    pageOptions,
    pageSize,
    setPageSize,
    i18n = (f: string) => f
  } = props;

  const pageNumbers = getPageNumbers({
    currentPage: pageIndex,
    // pageNeighbours,
    totalPages: pageCount
  });
  const choices: any[] = pageSizes.map((value) => ({ value, label: value }));

  return (
    <nav
      aria-label='Page navigation'
      className={classnames("pagination-group", className)}
    >
      <ul className='pagination'>
        <li className={classnames("page-item", !canPreviousPage && "disabled")}>
          <PaginationButton
            tabIndex={-1}
            disabled={!canPreviousPage}
            onClick={() => previousPage()}
          >
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
            <li
              className={classnames("page-item", active && "active")}
              key={page}
            >
              <PaginationButton
                tabIndex={pageIndex}
                active={active}
                onClick={() => gotoPage(page - 1)}
              >
                {page}
              </PaginationButton>
            </li>
          );
        })}

        <li className={classnames("page-item", !canNextPage && "disabled")}>
          <PaginationButton
            tabIndex={pageNumbers.length}
            disabled={!canNextPage}
            onClick={() => nextPage()}
          >
            {i18n("Next")}
          </PaginationButton>
        </li>
      </ul>

      <li className='px-3 flex items-center'>
        <Select
          name={"page"}
          value={pageSize}
          choices={choices}
          onChange={(name: string, value: number) => {
            setPageSize(value);
          }}
        />
        <span className={"pl-3"}>{i18n("items per page")}</span>
      </li>
      {pageOptions && (
        <li className={"flex items-center"}>
          <span>{i18n("Page")}&nbsp;</span>
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </li>
      )}
    </nav>
  );
}