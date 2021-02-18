export function mapPagination({
  skip,
  limit,
  serverCount,
  length
}: any = {}): any {
  skip = skip || 0;
  limit = limit || 10;
  serverCount = serverCount || length;

  return {
    pageIndex: Math.floor(skip / limit),
    pageSize: limit,
    pageCount: Math.ceil(serverCount / limit)
  };
}
