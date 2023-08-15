import axios from 'axios';
import { ApplicationError } from '@strapi/utils/dist/errors';

const getBaseURL = () => {
  if (!process.env.NEXTJS_HOST || !process.env.NEXTJS_PORT) {
    console.error('Next revalidation failed. ENV NEXTJS_HOST, NEXTJS_PORT must be defined.')
    return false;
  }

  const baseURL = new URL('http://localhost');
  baseURL.host = process.env.NEXTJS_HOST ?? '';
  baseURL.port = process.env.NEXTJS_PORT ?? '';

  return baseURL;
}

export const nextJsRevalidateTag = async (tag: string) => {
  if (!tag) throw new ApplicationError('nextJsRevalidateTag: tag must not be empty', 400);

  const baseURL = getBaseURL();
  if (!baseURL) return null;

  const revalidatePageURL = new URL(`/api/revalidate?tag=${tag}`, baseURL);
  const response = await axios<{revalidated: boolean}>(revalidatePageURL.href, {
    headers: {
      Authorization: `Bearer ${process.env.REVALIDATION_TOKEN}`,
    },
  }).catch((e) => console.error(`nextJsRevalidateTag: ${e?.message || e}`));

  if (response) console.log(`nextJsRevalidateTag: ${revalidatePageURL.href}`, response.data);

  return response;
}

// https://nextjs.org/docs/app/building-your-application/caching#time-based-revalidation
// The first time a fetch request with revalidate is called, the data will be fetched from the external data source and stored in the Data Cache.
// Any requests that are called within the specified timeframe (e.g. 60-seconds) will return the cached data.
// After the timeframe, the next request will *still return THE CACHED* (now stale) data.

// It is called in order to receive updates immediately
export const nextJsRevalidationPageUpdate = async (page: string) => {
  const baseURL = getBaseURL();
  if (!baseURL) return false;

  const targetPageURL = new URL(page, baseURL);
  await axios(targetPageURL.href).catch((e) => console.log(`nextJsUpdateData: ${e?.message || e}`));

  return true;
}
