import React from 'react';
import classNames from 'classnames';
import IcoWhatsapp from 'assets/icons/ico-whatsapp.svg';
import IcoTelegram from 'assets/icons/ico-telegram.svg';
import IcoGithub from 'assets/icons/ico-github.svg';
import IcoLinkedin from 'assets/icons/ico-linkedin.svg';
import { TTransformedHomePageDTO } from '@models/home-page/dto';
import styles from './social.module.scss';

type TSocial = {
  data: TTransformedHomePageDTO['social_media'];
};

const MediaIcon: React.FC<Pick<TTransformedHomePageDTO['social_media'][0], 'type'>> = ({ type }) => {
  if (type === 'whatsapp') return <IcoWhatsapp className={classNames(styles.whatsapp, styles.icon)} />;
  if (type === 'telegram') return <IcoTelegram className={classNames(styles.telegram, styles.icon)} />;
  if (type === 'github') return <IcoGithub className={classNames(styles.github, styles.icon)} />;
  if (type === 'linkedin') return <IcoLinkedin className={classNames(styles.linkedin, styles.icon)} />;

  return null;
};

export const Social: React.FC<Pick<React.HTMLAttributes<HTMLDivElement>, 'className'> & TSocial> = ({
  className,
  data,
}) => (
  <div className={classNames(styles.social, className)}>
    {data.map((media) => (
      <a key={media.id} href={media.url}>
        <MediaIcon type={media.type} />
      </a>
    ))}
  </div>
);
