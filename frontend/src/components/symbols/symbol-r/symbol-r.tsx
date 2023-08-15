'use client';

/* eslint-disable max-len */

import React from 'react';
import {
  animated,
} from '@react-spring/web';
import { TSymbol } from 'components/symbols/types';

export const SymbolR: React.FC<Pick<React.HTMLAttributes<SVGElement>, 'className'> & TSymbol> = ({
  className,
  width = '20px',
  height = '26px',
  pathElements = [],
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 204 263"
  >
    <animated.path
      className={pathElements?.[0]?.className}
      stroke="currentColor"
      strokeWidth="60px"
      fill="none"
      strokeDasharray="450 450"
      style={{ strokeDashoffset: pathElements?.[0]?.strokeDashoffset }}
      d="M30.5 263.5 30.5.5M30.5 23.5 84.5 23.5"
    />
    <animated.path
      className={pathElements?.[1]?.className}
      stroke="currentColor"
      strokeWidth="60px"
      fill="none"
      strokeDasharray="450 450"
      style={{ strokeDashoffset: pathElements?.[1]?.strokeDashoffset }}
      d="M.5 23.5 112.615 23.5C120.6 23.905 128.375 25.93 135.5 29.5 144.832 34.176 152.96 41.401 158.5 50.541 161.718 55.85 166.368 68.336 166.5 83.5 166.638 99.425 161.865 112.264 158.5 117.582 153.686 125.187 146.184 132.277 135.5 137.5 128.359 140.99 120.606 143.8 112.615 143.5L.5 143.5"
    />
    <animated.path
      className={pathElements?.[2]?.className}
      stroke="currentColor"
      strokeWidth="60px"
      fill="none"
      strokeDasharray="450 450"
      style={{ strokeDashoffset: pathElements?.[2]?.strokeDashoffset }}
      d="M186.5 289 106 158"
    />
  </svg>
);
