import noop from "lodash/noop";
import React, { PropsWithChildren } from "react";
import { CellProps, FilterProps, Renderer, TableOptions, useFilters, useGroupBy, usePagination, useSortBy, useTable } from "react-table";

import { OnClickOperation, Operation, QueryOptions } from "../../../interfaces";
import { Pagination as DefaultPagination } from "../../pagination/pagination.component";
import { DefaultArrowSort } from "../components/defaultArrowSort.component";
import { DefaultCellHeader, DefaultCellHeaderProps } from "../components/defaultCellHeader.component";
import { DefaultRow, DefaultRowProps } from "../components/defaultRow.component";
import { DefaultColumnFilter } from "../filters/defaultColumnFilter.component";
import { useOperations } from "./useOperations.hook";

export interface TableProps<Data extends object = any> extends TableOptions<Data>, Partial<QueryOptions> {
  className?: string;
  /**
   * Call the listener when a filter / pagination  / sort change.
   */
  onChange?: (query: QueryOptions) => void;
  /**
   * Call the listener when a line is clicked.
   */
  onClick?: OnClickOperation<Data>;
  /**
   * Pagination steps list
   */
  pageSizes?: number[];
  /**
   *
   */
  isLoading?: boolean;
  /**
   * Custom EmptyData displayed when there is no data
   */
  EmptyData?: React.ComponentType;
  /**
   * Custom ArrowSort
   */
  ArrowSort?: React.ComponentType;
  /**
   * Custom default ColumnFilter
   */
  ColumnFilter?: Renderer<FilterProps<Data>>;
  /**
   * Custom cell
   */
  Cell?: React.ComponentType<CellProps<Data>>;
  /**
   * Custom Row
   */
  Row?: React.ComponentType<DefaultRowProps<Data>>;
  /**
   *
   */
  CellHeader?: React.ComponentType<DefaultCellHeaderProps<Data>>;
  /**
   *
   */
  CellOperations?: React.ComponentType;
  /**
   * Custom Loader
   */
  Loader?: React.ComponentType;
  /**
   * Custom Loader
   */
  Pagination?: React.ComponentType;
  /**
   * Disable filters
   */
  disableFilters?: boolean;
  /**
   * Disable pagination
   */
  disablePagination?: boolean;
  manualPagination?: boolean;
  manualSortBy?: boolean;
  manualFilters?: boolean;
  /**
   * Configuration operation for each line.
   */
  operations?: Operation[];

  i18n?: (f: string) => string;
}

export function getOperationCallback(operations: Operation[], onClick: OnClickOperation) {
  return (data: any, action: string) => {
    const operation = operations.find((operation) => operation.action === action || operation.alias === action);
    if (operation) {
      onClick(data, operation);
    }
  };
}

function DefaultLoader() {
  return <div className={"text-center p-2 pb-4 font-bold"}>Loading in progress</div>;
}

function DefaultEmptyData() {
  return <div className='text-center p-2 pb-4 font-bold'>No data found</div>;
}

const hooks = [useFilters, useGroupBy, useSortBy, usePagination];

export function useCustomTable<Data extends object = {}>(props: PropsWithChildren<TableProps<Data>>) {
  const {
    children,
    className = "",
    columns,
    data,
    onChange = noop,
    onClick = noop,
    operations = [],
    pageSizes = [10, 25, 50, 100],
    filters: controlledFilters,
    filterId: controlledFilterId,
    pageSize: controlledPageSize,
    pageIndex: controlledPageIndex,
    sortBy: controlledSortBy,
    isLoading,
    disableFilters,
    disablePagination,
    ArrowSort = DefaultArrowSort,
    ColumnFilter = DefaultColumnFilter,
    EmptyData = DefaultEmptyData,
    Loader = DefaultLoader,
    Pagination = DefaultPagination,
    Row = DefaultRow,
    CellHeader = DefaultCellHeader as any,
    CellOperations,
    i18n = (f: string) => f,
    ...ctx
  } = props;

  const _onClick = getOperationCallback(operations, onClick);

  const defaultColumn = React.useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: ColumnFilter,
      ArrowSort
    }),
    [ColumnFilter, ArrowSort]
  ) as any;

  const [filterId, setFilterId] = React.useState(controlledFilterId);

  const tableInstance = useTable<Data>(
    {
      ...props,
      columns,
      data,
      ctx,
      defaultColumn,
      initialState: {
        ...(props.initialState || {}),
        filters: controlledFilters || [],
        pageIndex: controlledPageIndex || 0,
        pageSize: controlledPageSize || 10,
        sortBy: controlledSortBy || []
      } as any,
      manualPagination: props.manualPagination === undefined ? true : props.manualPagination,
      manualSortBy: props.manualSortBy === undefined ? true : props.manualPagination,
      manualFilters: props.manualFilters === undefined ? true : props.manualFilters,
      disableFilters,
      filterId,
      setFilterId
    } as any,
    ...hooks,
    useOperations({ operations, CellOperations, onClick: _onClick, ctx, i18n })
  );

  const {
    setPageSize,
    state: { pageIndex, pageSize, sortBy, filters }
  } = tableInstance;

  React.useEffect(() => {
    onChange({
      pageIndex,
      pageSize,
      sortBy,
      filters,
      filterId
    });
  }, [onChange, pageIndex, pageSize, sortBy, filters, filterId]);

  return {
    ...props,
    className,
    tableInstance,
    CellHeader,
    isLoading,
    onClick: _onClick,
    Loader,
    EmptyData,
    Row,
    data,
    disablePagination,
    Pagination,
    pageIndex,
    pageSize,
    pageSizes,
    setPageSize,
    i18n,
    children
  };
}
