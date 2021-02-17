import { ColumnIdentifier } from "./ColumnIdentifier";

export type QueryOptions = {
  /**
   * Current displayed page
   */
  pageIndex: any;
  /**
   * Pagination size
   */
  pageSize: any;
  /**
   * SortBy state
   */
  sortBy: ColumnIdentifier[];
  /**
   * Filters state
   */
  filters: ColumnIdentifier[];
  /**
   * Focused input filter (let the Table component retrieve focus state when we fill the filter)
   */
  filterId: string;
};
