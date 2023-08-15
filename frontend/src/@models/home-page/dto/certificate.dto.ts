import { TStrapiComponent, TStrapiContentType, TStrapiMedia } from 'types/strapi';

export type TCertificateDTO = TStrapiComponent<{
  certificate: TStrapiContentType<TStrapiMedia>;
  issued: Date;
  title: string;
  isDisabled: boolean;
}>
