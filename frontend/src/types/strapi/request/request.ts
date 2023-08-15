import { TStrapiFilterParams } from './filters';
import {
  TStrapiSortStrings,
  TStrapiPaginationByOffset,
  TStrapiPaginationByPage,
} from './sort-pagination';
import {
  TExtractObject,
  TExtractKeysOfSimpleTypes,
  TExtractKeysOfComplexTypes,
} from '../utils';

export type TStrapiRequestParams<T> = {
  pagination?: TStrapiPaginationByPage | TStrapiPaginationByOffset;
  publicationState?: 'live' | 'preview';
  locale?: string;
} & TStrapiCommonRequestParams<T>;

type TStrapiCommonRequestParams<T> = {
  sort?: TStrapiSortStrings<TExtractKeysOfSimpleTypes<TExtractObject<T>>>
    | Array<TStrapiSortStrings<TExtractKeysOfSimpleTypes<TExtractObject<T>>>>;
  filters?: TStrapiFilterParams<TExtractObject<T>>;
  fields?: TExtractKeysOfSimpleTypes<TExtractObject<T>>[];
  populate?: {
    [k in TExtractKeysOfComplexTypes<TExtractObject<T>>]?: boolean | TStrapiCommonRequestParams<TExtractObject<T>[k]>
  };
};
