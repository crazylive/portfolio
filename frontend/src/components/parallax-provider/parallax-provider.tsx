'use client';

import React from 'react';
import { ParallaxProvider as Provider } from 'react-scroll-parallax';
import { useBreakpoints } from 'hooks/use-breakpoints';

export const ParallaxProvider: React.FC<Pick<React.HTMLAttributes<HTMLDivElement>, 'children'>> = ({
  children,
}) => {
  const { isScreenXsDown } = useBreakpoints();

  return (
    <Provider isDisabled={isScreenXsDown}>
      {children}
    </Provider>
  );
};
