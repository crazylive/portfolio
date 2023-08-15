import urlJoin from 'url-join';

export const BASE_URL = (() => {
  if (
    !process.env.STRAPI_API_PROTOCOL
    || !process.env.STRAPI_API_HOST
    || !process.env.STRAPI_API_SUFFIX
  ) {
    throw new Error('ENV such as STRAPI_API_PROTOCOL, STRAPI_API_HOST, STRAPI_API_SUFFIX must be defined');
  }

  let url = `${process.env.STRAPI_API_PROTOCOL}://${process.env.STRAPI_API_HOST}`;
  if (process.env.STRAPI_API_PORT) {
    url += `:${process.env.STRAPI_API_PORT}`;
  }

  return urlJoin(url, process.env.STRAPI_API_SUFFIX);
});
