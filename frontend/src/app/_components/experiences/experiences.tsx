'use client';

import React from 'react';
import classNames from 'classnames';
import { Parallax } from 'react-scroll-parallax';
import { ExperienceModel } from '@models/home-page';
import { TExperienceDTO } from '@models/home-page/dto';
import { HeaderSection } from 'components/header-section';
import { useAnimations } from './hooks/use-animations';
import { Navigation } from './components/navigation';
import { CardMobile } from './components/card-mobile';
import styles from './experiences.module.scss';

type TExperience = {
  plainData: TExperienceDTO[];
};

export const Experiences: React.FC<Pick<React.HTMLAttributes<HTMLDivElement>, 'className'> & TExperience> = ({
  className,
  plainData,
}) => {
  const data = plainData.map((plainRow) => ExperienceModel.toModel(plainRow));
  const { cardSprings, progressSpring, handleScroll } = useAnimations(data.length);

  return (
    <div className={classNames(styles.experiences, className)}>
      <div className={classNames(styles.header, 'padding')}>
        <HeaderSection className={styles.title} component="h3">
          Expe
          {' '}
          <br />
          rience
          <i>.</i>
        </HeaderSection>
      </div>
      <div className={styles.body}>
        <Navigation className={styles.navigation} data={data} progressSpring={progressSpring} cardSprings={cardSprings} />

        <Parallax className={classNames(styles.cards)} onProgressChange={handleScroll}>
          {data.map((experience) => (
            <Parallax key={experience.id} className={styles.cardWrapper}>
              <CardMobile className={styles.card} data={experience} />
            </Parallax>
          ))}
        </Parallax>
      </div>
    </div>
  );
};
