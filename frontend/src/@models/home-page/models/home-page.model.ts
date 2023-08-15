import {
  Expose,
  Type,
  instanceToPlain,
  plainToInstance, Transform,
} from 'class-transformer';
import type { TMedia } from '@models/types';
import { THomePageDTO, TTransformedHomePageDTO } from '../dto';
import { ExperienceModel } from './experience.model';
import { CertificateModel } from './certificate.model';

export class HomePageModel {
  @Expose()
    id: TTransformedHomePageDTO['id'];

  @Expose({ name: 'welcome_title' })
    welcomeTitle: TTransformedHomePageDTO['welcome_title'];

  @Expose({ name: 'welcome_messages' })
    welcomeMessages: TTransformedHomePageDTO['welcome_messages'];

  @Expose()
  @Transform(({ value: { data: { id, attributes } } } : { value: TTransformedHomePageDTO['about_photo']; }) => ({
    id,
    ...attributes,
  }), { toClassOnly: true })
  @Transform(({ value: { id, ...attributes } } : { value: TMedia; }) => ({
    id,
    ...attributes,
  }), { toPlainOnly: true })
    banner: TMedia;

  @Expose({ name: 'about_title' })
    aboutTitle: TTransformedHomePageDTO['about_title'];

  @Expose({ name: 'about_content' })
    aboutContent: TTransformedHomePageDTO['about_content'];

  @Expose({ name: 'social_media' })
    socialMedia: TTransformedHomePageDTO['social_media'];

  @Expose({ name: 'about_photo' })
  @Transform(({ value: { data: { id, attributes } } } : { value: TTransformedHomePageDTO['about_photo']; }) => ({
    id,
    ...attributes,
  }), { toClassOnly: true })
  @Transform(({ value: { id, ...attributes } } : { value: TMedia; }) => ({
    id,
    ...attributes,
  }), { toPlainOnly: true })
    aboutPhoto: TMedia;

  @Expose()
  @Type(() => ExperienceModel)
    experience: ExperienceModel[];

  @Expose()
  @Type(() => CertificateModel)
    certificates: CertificateModel[];

  static toModel(plain: THomePageDTO) {
    const transformed: TTransformedHomePageDTO = {
      id: plain.data.id,
      ...plain.data.attributes,
    };

    return plainToInstance(HomePageModel, transformed, { excludeExtraneousValues: true });
  }

  public toPlain(): THomePageDTO {
    const { id, ...attributes } = instanceToPlain(this) as TTransformedHomePageDTO;

    return {
      data: {
        id,
        attributes,
      },
    };
  }
}
