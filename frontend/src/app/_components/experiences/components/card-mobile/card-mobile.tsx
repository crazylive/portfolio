import React from 'react';
import classNames from 'classnames';
import { SymbolWave } from 'components/symbols/symbol-wave';
import { HeaderIntro } from 'components/header-intro';
import { InnerHtml } from 'components/inner-html';
import { ExperienceModel } from '@models/home-page';
import { TrackingWide } from 'app/_components/experiences/components/tracking-wide';
import { Positions } from '../positions';
import { Tags } from '../tags';
import styles from './card-mobile.module.scss';

type TExperienceCardMobile = {
  data: ExperienceModel;
};

export const CardMobile: React.FC<Pick<React.HTMLAttributes<HTMLDivElement>, 'className'> & TExperienceCardMobile> = ({
  className,
  data,
}) => (
  <div className={classNames(styles.experienceCardMobile, className)}>
    <HeaderIntro className={styles.companyName} dotColor="#F5581E">
      <SymbolWave className={styles.wave} />
      {data.companyName}
    </HeaderIntro>

    <TrackingWide monthFormat="short" beginDate={data.beginDate} endDate={data.endDate} />

    <Positions className={styles.positions} positions={data.positions} />

    <InnerHtml className={styles.content} html={data.description} />

    { Boolean(data.tags.length) && (<Tags tags={data.tags} />) }
  </div>
);
