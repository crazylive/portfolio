'use client';

import React from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import { Parallax } from 'react-scroll-parallax';
import { TMedia } from '@models/types';
import { HeaderIntro } from 'components/header-intro';
import { InnerHtml } from 'components/inner-html';
import { Social } from 'app/_components/social';
import { TTransformedHomePageDTO } from '@models/home-page/dto';
import styles from './about.module.scss';

type TAbout = {
  data: {
    aboutTitle: string;
    aboutContent: string;
    aboutPhoto: TMedia
    socialMedia: TTransformedHomePageDTO['social_media'],
  }
};

export const About: React.FC<Pick<React.HTMLAttributes<HTMLDivElement>, 'className' | 'children'> & TAbout> = ({
  className,
  data,
}) => (
  <div className={classNames(styles.about, 'padding', className)}>
    <Parallax className={styles.photo} speed={-7}>
      <Image
        className={classNames(styles.photoImg, 'image-responsive')}
        src={data.aboutPhoto.url}
        width={data.aboutPhoto.width}
        height={data.aboutPhoto.height}
        alt={data.aboutPhoto.alternativeText ?? ''}
      />
    </Parallax>

    <HeaderIntro id="about" className={styles.intro} dotColor="#F5581E" component="h1">
      <InnerHtml html={data.aboutTitle} useStylesForContent={false} component="span" />
    </HeaderIntro>

    <Social data={data.socialMedia} />

    <div className={styles.content}>
      <InnerHtml className={styles.description} html={data.aboutContent} useStylesForContent={false} />
    </div>
  </div>
);
