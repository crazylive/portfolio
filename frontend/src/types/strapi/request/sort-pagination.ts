export type TStrapiSortStrings<T> = T extends string ? `${T}:desc` | `${T}:asc` | T : never;

export type TStrapiPaginationByOffset = {
  start: number;
  limit: number;
  withCount?: boolean;
}

export type TStrapiPaginationByPage = {
  page: number;
  pageSize: number;
  withCount?: boolean;
}
