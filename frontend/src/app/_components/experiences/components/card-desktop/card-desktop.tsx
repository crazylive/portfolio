import React from 'react';
import classNames from 'classnames';
import { ExperienceModel } from '@models/home-page';
import { InnerHtml } from 'components/inner-html';
import { HeaderIntro } from 'components/header-intro';
import { SymbolWave } from 'components/symbols/symbol-wave';
import { Positions } from '../positions';
import { Tags } from '../tags';
import styles from './card-desktop.module.scss';

type TExperienceCardDesktop = {
  data: ExperienceModel;
  index?: number;
};

export const CardDesktop: React.FC<Pick<React.HTMLAttributes<HTMLDivElement>, 'className'> & TExperienceCardDesktop> = ({
  className,
  data,
  index,
}) => (
  <div className={classNames(styles.experienceCardDesktop, index && styles[index % 2 === 1 ? 'odd' : 'even'], className)}>
    <HeaderIntro className={styles.companyName}>
      <SymbolWave className={styles.wave} />
      {data.companyName}
      <span className={styles.dot}>.</span>
    </HeaderIntro>

    <Positions positions={data.positions} className={styles.positions} positionClassName={styles.position} />

    <InnerHtml className={styles.content} html={data.description} />

    { Boolean(data.tags.length) && (<Tags className={styles.tags} tagClassName={styles.tag} tags={data.tags} />) }
  </div>
);
