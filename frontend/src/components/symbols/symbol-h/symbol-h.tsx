'use client';

import React from 'react';
import {
  animated,
} from '@react-spring/web';
import { TSymbol } from 'components/symbols/types';

export const SymbolH: React.FC<Pick<React.HTMLAttributes<SVGElement>, 'className'> & TSymbol> = ({
  className,
  width = '24px',
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
      strokeWidth="61px"
      fill="none"
      strokeDasharray="450 450"
      style={{ strokeDashoffset: pathElements?.[0]?.strokeDashoffset }}
      d="M30,263.5 L30,0.5"
    />
    <animated.path
      className={pathElements?.[1]?.className}
      stroke="currentColor"
      strokeWidth="60px"
      fill="none"
      strokeDasharray="450 450"
      style={{ strokeDashoffset: pathElements?.[1]?.strokeDashoffset }}
      d="M0.5,130 L203,130"
    />
    <animated.path
      className={pathElements?.[2]?.className}
      stroke="currentColor"
      strokeWidth="61px"
      fill="none"
      strokeDasharray="450 450"
      style={{ strokeDashoffset: pathElements?.[2]?.strokeDashoffset }}
      d="M174,263.5 L174,0.5"
    />
  </svg>
);
