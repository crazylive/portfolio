export type TStrapiFilterParams<T> = {
  [K in keyof T]?: T[K] | T[K][] | TAttributeOperators<T, K>;
} & TLogicalOperators<T>;

type TLogicalOperators<T> = {
  $and?: TStrapiFilterParams<T>[];
  $or?: TStrapiFilterParams<T>[];
  $not?: TStrapiFilterParams<T>;
};

type TAttributeOperators<T, K extends keyof T> = {
  $eq?: T[K] | Array<T[K]>;
  $ne?: T[K] | Array<T[K]>;
  $nei?: T[K] | Array<T[K]>;
  $in?: T[K][];
  $notIn?: T[K][];
  $lt?: T[K];
  $lte?: T[K];
  $gt?: T[K];
  $gte?: T[K];
  $between?: [T[K], T[K]];
  $contains?: T[K];
  $notContains?: T[K];
  $containsi?: T[K];
  $notContainsi?: T[K];
  $startsWith?: T[K];
  $endsWith?: T[K];
  $null?: boolean;
  $notNull?: boolean;
  $not?: TStrapiFilterParams<T> | TAttributeOperators<T, K>;
};
