import noop from "lodash/noop";
import { ComponentType, CSSProperties, PropsWithChildren, useEffect, useState } from "react";
import {
  Cell,
  CellProps,
  Column,
  FilterProps,
  Renderer,
  TableOptions,
  useFilters,
  useGroupBy,
  usePagination,
  useSortBy,
  useTable
} from "react-table";

import { OnClickOperation, Operation, QueryOptions } from "../../../interfaces";
import { Pagination as DefaultPagination } from "../../../molecules/pagination/Pagination";
import { DefaultArrowSort } from "../components/DefaultArrowSort";
import { DefaultCellHeader, DefaultCellHeaderProps } from "../components/DefaultCellHeader";
import { DefaultRow, DefaultRowProps } from "../components/DefaultRow";
import { DefaultColumnFilter } from "../filters/DefaultColumnFilter";
import { swapElements } from "../utils/swapElements";
import { useOperations } from "./useOperations";

export interface ExtraColumnProps {
  colspan?: number;
  hidden?: boolean;
  className?: string;
  style?: CSSProperties;
}

export type ExtendedColumn<Data extends object = any> = Column<Data> & ExtraColumnProps;

export type ExtendedCell<Data extends object = any> = Cell<Data, any> & {
  column: ExtraColumnProps;
};

export interface TableProps<Data extends object = any> extends TableOptions<Data>, Partial<QueryOptions> {
  /**
   * extended columns interface
   */
  columns: ReadonlyArray<ExtendedColumn<Data>>;

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
   * Total length of the data
   */
  totalLength?: number;
  /**
   *
   */
  isLoading?: boolean;
  /**
   * Custom EmptyData displayed when there is no data
   */
  EmptyData?: ComponentType;
  /**
   * Custom ArrowSort
   */
  ArrowSort?: ComponentType;
  /**
   * Custom default ColumnFilter
   */
  ColumnFilter?: Renderer<FilterProps<Data>>;
  /**
   * Custom cell
   */
  Cell?: ComponentType<CellProps<Data>>;
  /**
   * Custom Row
   */
  Row?: ComponentType<DefaultRowProps<Data>>;
  /**
   *
   */
  CellHeader?: ComponentType<DefaultCellHeaderProps<Data>>;
  /**
   *
   */
  CellOperations?: ComponentType<any>;
  /**
   * Custom Loader
   */
  Loader?: ComponentType<any>;
  /**
   * Custom Loader
   */
  Pagination?: ComponentType<any>;
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

  /**
   * Enable drag and drop rows
   */
  enableDragNDrop?: boolean;
  onDrag?: (data: Data[]) => void;
  onDrop?: (item: Data) => void;
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
    onDrag = noop,
    onDrop = noop,
    operations = [],
    pageSizes = [10, 25, 50, 100],
    filters: controlledFilters,
    filterId: controlledFilterId,
    pageSize: controlledPageSize,
    pageIndex: controlledPageIndex,
    totalLength,
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

  const defaultColumn = {
    Filter: ColumnFilter,
    ArrowSort
  };

  const [filterId, setFilterId] = useState(controlledFilterId);

  // DND
  const [records, setRecords] = useState<readonly Data[]>(data);

  useEffect(() => {
    setRecords(data);
  }, [data]);

  const _onDrag = (dragIndex: number, hoverIndex: number) => {
    const newRecords = swapElements([...records], dragIndex, hoverIndex);

    setRecords(newRecords);

    onDrag(newRecords);
  };

  const tableInstance = useTable<Data>(
    {
      ...props,
      columns,
      data,
      ctx,
      defaultColumn,
      // getRowId,
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
  } = tableInstance as any;

  useEffect(() => {
    onChange({
      pageIndex,
      pageSize,
      sortBy,
      filters,
      filterId
    });
  }, [onChange, pageIndex, pageSize, sortBy, filters, filterId]);

  return {
    className,
    tableInstance,
    CellHeader,
    isLoading,
    Loader,
    EmptyData,
    Row,
    data,
    disablePagination,
    Pagination,
    pageIndex,
    pageSize,
    pageSizes,
    totalLength,
    setPageSize,
    i18n,
    children,
    onClick: _onClick as any,
    onDrag: _onDrag,
    onDrop: onDrop,
    enableDragNDrop: props.enableDragNDrop
  };
}
