'use client';

import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import { useBreakpoints } from 'hooks/use-breakpoints';
import { TMedia } from '@models/types';

type TBanner = {
  data: TMedia;
};

export const Banner: React.FC<TBanner> = ({ data }) => {
  const { isScreenXsDown } = useBreakpoints();

  return (
    <ParallaxBanner
      style={{ height: isScreenXsDown ? '40vh' : '75vh' }}
      layers={[
        {
          image: data.url,
          speed: -15,
        },
      ]}
    />
  );
};
