'use client';

import React from 'react';
import {
  animated,
} from '@react-spring/web';
import { TSymbol } from 'components/symbols/types';

export const SymbolI: React.FC<Pick<React.HTMLAttributes<SVGElement>, 'className'> & TSymbol> = ({
  className,
  width = '6px',
  height = '26px',
  pathElements = [],
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 60 263"
  >
    <animated.path
      className={pathElements?.[0]?.className}
      stroke="currentColor"
      strokeWidth="60px"
      fill="none"
      strokeDasharray="450 450"
      style={{ strokeDashoffset: pathElements?.[0]?.strokeDashoffset }}
      d="M30,263.5 L30,0.5"
    />
  </svg>
);
