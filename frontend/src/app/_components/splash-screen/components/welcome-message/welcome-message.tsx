'use client';

import React from 'react';
import classNames from 'classnames';
import { SymbolWave } from 'components/symbols/symbol-wave';
import {
  useTrail, animated,
} from '@react-spring/web';
import { Parallax } from 'react-scroll-parallax';
import styles from './welcome-message.module.scss';

type TWelcomeMessageSpring = {
  strokeDashoffset: number;
  titleTranslateX: string;
  opacity: number;
  bodyTranslateY: string;
}

type TWelcomeMessage = {
  isVisible: boolean;
  data: {
    title: string;
    messages: { id: number; field: string }[]
  }
};

export const WelcomeMessage: React.FC<Pick<React.HTMLAttributes<HTMLDivElement>, 'className'> & TWelcomeMessage> = ({
  className,
  data,
  isVisible,
}) => {
  const trail = useTrail<TWelcomeMessageSpring>(data.messages.length, {
    strokeDashoffset: isVisible ? 0 : 100,
    titleTranslateX: isVisible ? 'translateX(10%)' : 'translateX(-22%)',
    opacity: isVisible ? 1 : 0,
    bodyTranslateY: isVisible ? 'translateY(0%)' : 'translateY(200%)',
    from: {
      strokeDashoffset: 100,
      titleTranslateX: 'translateX(-22%)',
      opacity: 0,
      bodyTranslateY: 'translateY(200%)',
    },
  });

  return (
    <section className={classNames(styles.welcomeMessage, className)}>
      <div className={classNames(styles.wrapper)}>
        <Parallax className={styles.block} speed={-10}>
          <div className={classNames(styles.head, 'text-3')}>
            <SymbolWave pathElements={[
              { className: styles.wave, strokeDashoffset: trail[0]?.strokeDashoffset },
            ]}
            />
            <animated.span
              className={styles.title}
              style={{ opacity: trail[1]?.opacity, transform: trail[1]?.titleTranslateX }}
            >
              {data.title}
            </animated.span>
          </div>
          <div className={classNames(styles.body, 'text-1')}>
            {data.messages.map((message, idx) => (
              <div key={message.id} className={styles.bodyHidden}>
                <animated.span style={{ transform: trail[idx]?.bodyTranslateY }}>
                  {message.field}
                </animated.span>
              </div>
            ))}
          </div>
        </Parallax>
      </div>
    </section>
  );
};
