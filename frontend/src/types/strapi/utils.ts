import { TStrapiContentType, TStrapiComponent } from './entities';

export type TExtractKeysOfSimpleTypes<T> = {
  [K in keyof T]: T extends Array<infer U>
    ? TExtractKeysOfSimpleTypes<U>
    : T[K] extends Array<infer U>
      ? TExtractKeysOfSimpleTypes<U>
      : T[K] extends Record<string, unknown>
        ? never
        : K
}[keyof T];

export type TExtractKeysOfComplexTypes<T> = {
  [K in keyof T]: T[K] extends Array<unknown>
    ? K
    : T[K] extends Record<string, unknown>
      ? K
      : never
}[keyof T];

export type TExtractObject<T> = T extends TStrapiContentType<infer X>
  ? (X extends Array<infer U> ? U : X)
  : T extends TStrapiComponent<infer X>
    ? (X extends Array<infer U> ? U : X)
    : T extends Array<infer U> ? U : T;
