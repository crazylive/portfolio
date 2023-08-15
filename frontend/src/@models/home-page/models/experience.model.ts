import {
  Expose, instanceToPlain, plainToInstance, Transform, Type,
} from 'class-transformer';
import { TExperienceDTO } from '../dto';

type TTransformedExperiencePosition = Pick<TExperienceDTO['positions']['data'][0], 'id'> & TExperienceDTO['positions']['data'][0]['attributes'];
type TTransformedExperienceTag = Pick<TExperienceDTO['tags']['data'][0], 'id'> & TExperienceDTO['tags']['data'][0]['attributes'];

export class ExperienceModel {
  @Expose()
    id: TExperienceDTO['id'];

  @Expose({ name: 'begin_date' })
  @Type(() => Date)
    beginDate: TExperienceDTO['begin_date'];

  @Expose({ name: 'end_date' })
  @Type(() => Date)
    endDate: TExperienceDTO['end_date'];

  @Expose({ name: 'company_name' })
    companyName: TExperienceDTO['company_name'];

  @Expose()
    description: TExperienceDTO['description'];

  @Expose()
  @Transform(({ value } : { value: TExperienceDTO['positions']; }) => value.data.map(
    (item) => ({
      id: item.id,
      ...item.attributes,
    }),
  ), { toClassOnly: true })
  @Transform(
    ({ value } : { value: TTransformedExperiencePosition[]; }) => ({
      data: value.map(({ id, ...attributes }) => ({
        id,
        attributes,
      })),
    }),
    { toPlainOnly: true },
  )
    positions: TTransformedExperiencePosition[];

  @Expose()
  @Transform(({ value } : { value: TExperienceDTO['tags']; }) => value.data.map(
    (item) => ({
      id: item.id,
      ...item.attributes,
    }),
  ), { toClassOnly: true })
  @Transform(
    ({ value } : { value: TTransformedExperienceTag[]; }) => ({
      data: value.map(({ id, ...attributes }) => ({
        id,
        attributes,
      })),
    }),
    { toPlainOnly: true },
  )
    tags: TTransformedExperienceTag[];

  static toModel(plain: TExperienceDTO) {
    return plainToInstance(ExperienceModel, plain, { excludeExtraneousValues: true });
  }

  public toPlain(): TExperienceDTO {
    return instanceToPlain(this) as TExperienceDTO;
  }
}
