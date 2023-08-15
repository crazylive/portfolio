import { TStrapiComponent, TStrapiContentType } from 'types/strapi';

export type TExperienceDTO = TStrapiComponent<{
  begin_date: Date;
  end_date: Date;
  company_name: string;
  description: string;
  positions: TStrapiContentType<{
    name: string;
  }[]>
  tags: TStrapiContentType<{
    name: string;
  }[]>
}>
