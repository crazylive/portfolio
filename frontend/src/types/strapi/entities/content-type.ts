export type TStrapiContentType<T extends Record<string, unknown> | Record<string, unknown>[]> = {
  data: T extends Record<string, unknown>[]
    ? TStrapiContentTypeData<T[0]>[]
    : T extends Record<string, unknown>
      ? TStrapiContentTypeData<T>
      : never;
}

type TStrapiContentTypeData<T extends Record<string, unknown>> = {
  id: number;
  attributes: T;
}
