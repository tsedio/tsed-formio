import { QueryOptions } from "@tsed/react-formio";
import isEqual from "lodash/isEqual";
import pick from "lodash/pick";
import { useCallback } from "react";

export function shouldUpdate(
  options: Partial<QueryOptions>,
  cmp: Partial<QueryOptions>
) {
  return !isEqual(
    pick(options, ["pageSize", "pageIndex", "sortBy", "filters"]),
    pick(cmp, ["pageSize", "pageIndex", "sortBy", "filters"])
  );
}

export function useQuery(fetch: any, parameters: Partial<QueryOptions>) {
  return useCallback(
    (options) => {
      if (shouldUpdate(options, parameters)) {
        fetch(options);
      }
    },
    [fetch]
  );
}
