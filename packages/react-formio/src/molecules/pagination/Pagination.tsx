import clsx from "clsx";

import { useI18n } from "../../hooks/useI18n.js";
import type { FormOptions } from "../../interfaces/index.js";
import { getComponent, registerComponent } from "../../registries/components";
import type { Select as DefaultSelect } from "../forms/select/Select";
import type { PaginationButton as DefaultPaginationButton } from "./PaginationButton";
import { getPageNumbers, LEFT_PAGE, RIGHT_PAGE } from "./utils/getPageNumbers.js";

export interface PaginationProps {
  className?: string;
  pageSizes?: number[];
  canPreviousPage: boolean;
  canNextPage: boolean;
  pageCount: number;
  pageIndex: number;
  pageOptions?: number[];
  pageSize: number;
  rowCount?: number;
  layout?: "html5" | "react" | "choicesjs";
  i18n?: FormOptions["i18n"];
  onPageIndexChange: (pageIndex: number) => void;
  onClickPreviousPage: () => void;
  onClickNextPage: () => void;
  onPageSizeChange: (pageSize: number) => void;
}

export function Pagination(props: PaginationProps) {
  const {
    className,
    pageSizes = [10, 25, 50, 100],
    onPageIndexChange,
    canPreviousPage,
    onClickPreviousPage,
    onClickNextPage,
    canNextPage,
    pageCount,
    pageIndex = 1,
    pageOptions,
    pageSize,
    onPageSizeChange,
    rowCount
  } = props;
  const { t } = useI18n(props.i18n);

  const pageNumbers = getPageNumbers({
    currentPage: pageIndex,
    // pageNeighbours,
    totalPages: pageCount
  });

  const options: any[] = pageSizes.map((value) => ({ value, label: value }));
  const Select = getComponent<typeof DefaultSelect>("Select");
  const PaginationButton = getComponent<typeof DefaultPaginationButton>("PaginationButton");

  return (
    <nav aria-label='Page navigation' className={clsx("pagination-group -mb-3", className)}>
      <ul className='pagination mb-3 mr-3'>
        <li className={clsx("page-item", !canPreviousPage && "disabled")}>
          <PaginationButton tabIndex={-1} disabled={!canPreviousPage} onClick={() => onClickPreviousPage()}>
            {t("Previous")}
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
            <li className={clsx("page-item", active && "active")} key={page}>
              <PaginationButton tabIndex={pageIndex} active={active} onClick={() => onPageIndexChange(page - 1)}>
                {page}
              </PaginationButton>
            </li>
          );
        })}

        <li className={clsx("page-item", !canNextPage && "disabled")}>
          <PaginationButton tabIndex={pageNumbers.length} disabled={!canNextPage} onClick={() => onClickNextPage()}>
            {t("Next")}
          </PaginationButton>
        </li>
      </ul>

      <li className='mb-3 mr-3 flex items-center'>
        <Select<number>
          name={"page"}
          value={pageSize}
          options={options}
          multiple={false}
          layout={props.layout}
          onChange={(_, value) => {
            onPageSizeChange(+value);
          }}
        />
        <span className={"ml-3"}>{t("items per page")}</span>
      </li>
      {pageOptions && (
        <li className={"mb-3 mr-3 flex items-center"}>
          <span>{t("Page")}&nbsp;</span>
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </li>
      )}
      {rowCount !== undefined && (
        <li className={"mb-3 flex items-center"} data-testid='pagination-total-items'>
          {t("Total")}: <strong className='mx-1'>{new Intl.NumberFormat(undefined).format(rowCount)}</strong> {t("items")}
        </li>
      )}
    </nav>
  );
}

registerComponent("Pagination", Pagination);
