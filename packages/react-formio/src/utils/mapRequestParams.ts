import { QueryOptions } from "../interfaces/QueryOptions";
import { clean } from "./clean";

export interface RequestParamsOptions extends QueryOptions {
  select: string | string[];
  query: {
    [key: string]: string;
  };
  [key: string]: any;
}

export function mapRequestParams({
  query,
  pageSize = 10,
  pageIndex = 0,
  select,
  filters,
  sortBy
}: Partial<RequestParamsOptions>) {
  const requestParams: any = {
    ...clean(query),
    limit: pageSize,
    skip: pageIndex * pageSize
  };

  if (select && select.length) {
    requestParams.select = Array.isArray(select) ? select.join(",") : select;
  }

  if (filters && filters.length) {
    filters.forEach((filter) => {
      if (filter.value) {
        requestParams[`${filter.id}__regex`] = new RegExp(
          filter.value,
          "gi"
        ).toString();
      }
    });
  }

  if (sortBy && sortBy.length) {
    requestParams.sort = (sortBy[0].desc ? "-" : "") + sortBy[0].id;
  }

  return requestParams;
}
