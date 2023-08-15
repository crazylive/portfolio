// In order to use it, it should be wrapped in TStrapiContentType. Media can be an array or an object.
// Example: TStrapiContentType<TStrapiMedia> or TStrapiContentType<TStrapiMedia[]>
export type TStrapiMedia = {
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  formats: {
    small: TStrapiMediaFormat;
    medium: TStrapiMediaFormat;
    large: TStrapiMediaFormat;
    thumbnail: TStrapiMediaFormat;
  } | null;
}

type TStrapiMediaFormat = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
}
