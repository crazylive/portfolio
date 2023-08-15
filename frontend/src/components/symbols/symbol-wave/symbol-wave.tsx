'use client';

import React from 'react';
import {
  animated,
} from '@react-spring/web';
import { TSymbol } from 'components/symbols/types';

export const SymbolWave: React.FC<Pick<React.HTMLAttributes<SVGElement>, 'className'> & TSymbol> = ({
  className,
  width = '33px',
  height = '7px',
  pathElements = [],
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 73.94 14.19"
  >
    <animated.polyline
      className={pathElements?.[0]?.className}
      style={{ strokeDashoffset: pathElements?.[0]?.strokeDashoffset }}
      stroke="currentColor"
      strokeWidth="5px"
      strokeDasharray="100 100"
      fill="none"
      points="2.83 2.83 11.36 11.36 19.9 2.83 28.43 11.36 36.97 2.83 45.5 11.36 54.04 2.83 62.58 11.36 71.11 2.83"
    />
  </svg>
);
