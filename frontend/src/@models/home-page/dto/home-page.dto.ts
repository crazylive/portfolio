import { TStrapiComponent, TStrapiContentType, TStrapiMedia } from 'types/strapi';
import { TExtractObject } from 'types/strapi/utils';
import { TCertificateDTO } from './certificate.dto';
import { TExperienceDTO } from './experience.dto';

export type TTransformedHomePageDTO = Pick<THomePageDTO['data'], 'id'> & TExtractObject<THomePageDTO>;

export type THomePageDTO = TStrapiContentType<{
  welcome_title: string;
  welcome_messages: TStrapiComponent<{
    field: string;
  }>[];
  banner: TStrapiContentType<TStrapiMedia>;
  about_title: string;
  about_content: string;
  about_photo: TStrapiContentType<TStrapiMedia>;
  social_media: TStrapiComponent<{
    url: string;
    type: 'whatsapp' | 'telegram' | 'github' | 'linkedin';
  }>[];
  experience: TExperienceDTO[];
  certificates: TCertificateDTO[];
}>
