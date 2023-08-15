'use client';

import React from 'react';
import {
  animated,
} from '@react-spring/web';
import { TSymbol } from 'components/symbols/types';

export const SymbolE: React.FC<Pick<React.HTMLAttributes<SVGElement>, 'className'> & TSymbol> = ({
  className,
  width = '16px',
  height = '26px',
  pathElements = [],
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 166 263"
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
    <animated.path
      className={pathElements?.[1]?.className}
      stroke="currentColor"
      strokeWidth="60px"
      fill="none"
      strokeDasharray="450 450"
      strokeDashoffset={pathElements?.[1]?.strokeDashoffset}
      style={{ strokeDashoffset: pathElements?.[1]?.strokeDashoffset }}
      d="M164.500,29.5 L0.5,29.5"
    />
    <animated.path
      className={pathElements?.[2]?.className}
      stroke="currentColor"
      strokeWidth="60px"
      fill="none"
      strokeDasharray="450 450"
      strokeDashoffset={pathElements?.[2]?.strokeDashoffset}
      style={{ strokeDashoffset: pathElements?.[2]?.strokeDashoffset }}
      d="M155.5,130 L0.5,130"
    />
    <animated.path
      className={pathElements?.[3]?.className}
      stroke="currentColor"
      strokeWidth="60px"
      fill="none"
      strokeDasharray="450 450"
      style={{ strokeDashoffset: pathElements?.[3]?.strokeDashoffset }}
      d="M166,234 L0.5,234"
    />
  </svg>
);
