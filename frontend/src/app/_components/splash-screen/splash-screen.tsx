'use client';

import React, { useRef, useState } from 'react';
import {
  useSpringRef,
  useChain, useScroll,
} from '@react-spring/web';

import classNames from 'classnames';
import { HiThere } from './components/hi-there';
import { Curtains } from './components/curtains';
import { WelcomeMessage } from './components/welcome-message';
import styles from './splash-screen.module.scss';

type TSplashScreen = {
  data: {
    welcomeTitle: string;
    welcomeMessages: {
      id: number;
      field: string;
    }[]
  }
}

export const SplashScreen: React.FC<Pick<React.HTMLAttributes<HTMLDivElement>, 'className'> & TSplashScreen> = ({ className, data }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const bodyRef = useRef<HTMLDivElement | null>(null);

  const curtainsSpringRef = useSpringRef();
  const symbolSpringRef = useSpringRef();

  useScroll({
    container: bodyRef.current === null ? undefined : bodyRef as React.MutableRefObject<HTMLDivElement>,
    onChange: ({ value: { scrollYProgress: progress } }) => {
      setIsScrolled(progress > 0);
    },
    default: {
      immediate: true,
    },
  });

  useChain([curtainsSpringRef, symbolSpringRef]);

  return (
    <section className={classNames(styles.splashScreen, className)} ref={bodyRef}>
      <Curtains springRef={curtainsSpringRef} isScrolled={isScrolled} />
      <HiThere
        isScrolled={isScrolled}
        symbolSpringRef={symbolSpringRef}
      />
      <WelcomeMessage
        isVisible={isScrolled}
        data={{
          title: data.welcomeTitle,
          messages: data.welcomeMessages,
        }}
      />
    </section>
  );
};
