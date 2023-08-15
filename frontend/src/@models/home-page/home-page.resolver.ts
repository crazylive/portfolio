import { Resolver } from '@models/resolver';
import { THomePageDTO } from '@models/home-page/dto/home-page.dto';

export class HomePageResolver extends Resolver {
  async find(cacheTag: string[]) {
    return this.get<THomePageDTO>({
      url: '/home-page',
      cacheTags: cacheTag,
      params: {
        sort: ['end_date:desc'],
        populate: {
          welcome_messages: { fields: ['field'] },
          banner: true,
          about_photo: true,
          social_media: true,
          experience: {
            populate: {
              tags: { fields: ['name'] },
              positions: { fields: ['name'] },
            },
          },
          certificates: {
            populate: { certificate: true },
          },
        },
      },
    });
  }
}
