'use client';

import React from 'react';
import {
  animated,
} from '@react-spring/web';
import { TSymbol } from 'components/symbols/types';

type TSymbolExclamation = {
  uniqueName: string;
}
export const SymbolExclamation: React.FC<Pick<React.HTMLAttributes<SVGElement>, 'className'> & TSymbol & TSymbolExclamation> = ({
  className,
  uniqueName,
  width = '26px',
  height = '7px',
  pathElements = [],
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 68 268"
  >
    <clipPath id={uniqueName}>
      <path
        fillRule="evenodd"
        fill="rgb(223, 35, 35)"
        d="M11.999 168.999 2 77.999 2 0 65.999 0 64.999 77.999 54.999 168.999 11.999 168.999Z"
      />
    </clipPath>
    <animated.path
      className={pathElements?.[0]?.className}
      clipPath={`url(#${uniqueName})`}
      stroke="currentColor"
      strokeWidth="68px"
      fill="none"
      strokeDasharray="450 450"
      style={{ strokeDashoffset: pathElements?.[0]?.strokeDashoffset }}
      d="M34,0 L34,168.999"
    />
    <animated.circle
      className={pathElements?.[1]?.className}
      cx="34"
      cy="233"
      r={pathElements?.[1]?.radius}
    />
  </svg>
);
