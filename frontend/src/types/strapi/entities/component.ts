export type TStrapiComponent<T extends Record<string, unknown>> = T & {
  id: number;
  __component: string;
}
