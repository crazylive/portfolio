'use client';

import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
import {
  SpringRef, SpringValue, useSpringRef, useTrail, useTransition,
} from '@react-spring/web';
import { Parallax } from 'react-scroll-parallax';
import { WordHi } from '../word-hi';
import { WordThere } from '../word-there';
import styles from './hi-there.module.scss';

export type TSymbolSpring = {
  dashoffset: SpringValue<number>;
  dashoffsetReverse: SpringValue<number>;
  radius: SpringValue<number>;
}

export type TWordSpring = {
  right: SpringValue<string>;
}

type THiThere = {
  isScrolled: boolean;
  symbolSpringRef: SpringRef;
};

export const HiThere: React.FC<Pick<React.HTMLAttributes<HTMLDivElement>, 'className'> & THiThere> = ({
  className,
  isScrolled,
  symbolSpringRef,
}) => {
  const firstLoad = useRef(true);

  const [symbolSprings] = useTrail<TSymbolSpring>(5, {
    ref: symbolSpringRef,
    from: {
      dashoffset: isScrolled ? 0 : 450,
      dashoffsetReverse: isScrolled ? 0 : -450,
      radius: isScrolled ? 34 : 0,
    },
    to: {
      dashoffset: 0,
      dashoffsetReverse: 0,
      radius: 34,
    },
  }, []);

  const wordSpringRef = useSpringRef();
  const wordTransitions = useTransition<boolean, TWordSpring>(isScrolled, {
    ref: wordSpringRef,
    from: {
      right: isScrolled ? '50%' : '2.5%',
    },
    enter: {
      right: isScrolled ? '2.5%' : '50%',
    },
    config: {
      tension: 280, friction: 60,
    },
  });

  useEffect(() => {
    if (firstLoad.current) {
      wordSpringRef.set({
        right: '50%',
      });
      firstLoad.current = false;
    } else {
      wordSpringRef.start();
    }
  }, [wordSpringRef, isScrolled]);

  return (
    <>
      {wordTransitions((transitions) => (
        <Parallax className={classNames(styles.hiThere, className)} speed={-30}>
          <WordHi className={styles.word} wordSpring={transitions} symbolSprings={symbolSprings} />
          <WordThere className={styles.word} wordSpring={transitions} symbolSprings={symbolSprings} />
        </Parallax>
      ))}
    </>
  );
};
