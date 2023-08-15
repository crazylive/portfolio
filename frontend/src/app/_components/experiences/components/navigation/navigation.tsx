'use client';

import React from 'react';
import classNames from 'classnames';
import { animated, SpringValue } from '@react-spring/web';
import { ExperienceModel } from '@models/home-page';
import { TrackingWide } from '../tracking-wide';
import { CardDesktop } from '../card-desktop';
import styles from './navigation.module.scss';

type TNavigation = {
  data: ExperienceModel[];
  cardSprings: { translateX: SpringValue<string> }[];
  progressSpring: { height: SpringValue<string> };
};

export const Navigation: React.FC<Pick<React.HTMLAttributes<HTMLDivElement>, 'className'> & TNavigation> = ({
  className,
  data,
  cardSprings,
  progressSpring,
}) => (
  <div className={classNames(styles.navigation, className)}>
    <div className={styles.tabs}>
      <div className={styles.tabList}>
        {data.map(({ id, beginDate, endDate }) => (
          <div key={id} className={styles.tabItem}>
            <TrackingWide monthFormat="long" beginDate={beginDate} endDate={endDate} />
          </div>
        ))}
      </div>
      <animated.div className={styles.progress} style={{ height: progressSpring.height }} />
      <div className={styles.content}>
        {data.map((experience, index) => (
          <animated.div
            key={experience.id}
            className={styles.card}
            style={{
              transform: cardSprings[index]!.translateX,
              zIndex: index,
            }}
          >
            <CardDesktop data={experience} index={index + 1} />
          </animated.div>
        ))}
      </div>
    </div>
  </div>
);
