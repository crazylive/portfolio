'use client';

import React from 'react';
import {
  animated,
} from '@react-spring/web';
import { TSymbol } from 'components/symbols/types';

export const SymbolT: React.FC<Pick<React.HTMLAttributes<SVGElement>, 'className'> & TSymbol> = ({
  className,
  width = '19px',
  height = '26px',
  pathElements = [],
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 196 263"
  >
    <animated.path
      className={pathElements?.[0]?.className}
      stroke="currentColor"
      strokeWidth="60px"
      fill="none"
      strokeDasharray="450 450"
      style={{ strokeDashoffset: pathElements?.[0]?.strokeDashoffset }}
      d="M0 30 196.5 30"
    />
    <animated.path
      className={pathElements?.[1]?.className}
      stroke="currentColor"
      strokeWidth="60px"
      fill="none"
      strokeDasharray="450 450"
      style={{ strokeDashoffset: pathElements?.[1]?.strokeDashoffset }}
      d="M98.5.5 98.5 263.5"
    />
  </svg>
);
