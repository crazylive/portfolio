import {
  Expose, instanceToPlain, plainToInstance, Transform, Type,
} from 'class-transformer';
import type { TMedia } from '@models/types';
import { TCertificateDTO } from '../dto';

export class CertificateModel {
  @Expose()
    id: TCertificateDTO['id'];

  @Expose()
  @Type(() => Date)
    issued: TCertificateDTO['issued'];

  @Expose()
    title: TCertificateDTO['title'];

  @Expose()
    isDisabled: TCertificateDTO['isDisabled'];

  @Expose()
  @Transform(({ value: { data: { id, attributes } } } : { value: TCertificateDTO['certificate']; }) => ({
    id,
    ...attributes,
  }), { toClassOnly: true })
  @Transform(({ value: { id, ...attributes } } : { value: TMedia; }) => ({
    id,
    ...attributes,
  }), { toPlainOnly: true })
    certificate: TMedia;

  static toModel(plain: TCertificateDTO) {
    return plainToInstance(CertificateModel, plain, { excludeExtraneousValues: true });
  }

  public toPlain(): TCertificateDTO {
    return instanceToPlain(this) as TCertificateDTO;
  }
}
