import qs from 'qs';
import urlJoin from 'url-join';
import { BASE_URL } from '@constants';
import { TStrapiRequestParams, TStrapiResponse } from 'types/strapi';

type TGetRequest<T> = {
  url: string;
  cacheTags: string[];
  params?: TStrapiRequestParams<T>;
  config?: Omit<RequestInit, 'method' | 'next'>;
};

export abstract class Resolver {
  private request = fetch;

  protected async get<T extends Record<string, unknown>>({
    url, cacheTags, params, config,
  }: TGetRequest<T>): Promise<TStrapiResponse<T>> {
    let qsUrl = urlJoin(BASE_URL(), url);
    if (params) {
      qsUrl += `?${qs.stringify(params)}`;
    }

    const result = await this.request(qsUrl, {
      method: 'GET',
      next: {
        tags: cacheTags,
      },
      ...config,
    });

    return result.json();
  }
}
