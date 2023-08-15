'use client';

import { useEffect, useState } from 'react';
import { BREAKPOINT } from '@constants';

type TStateBreakpoint = {
  up: boolean
  down: boolean
  exact: boolean
}

/**
 * Returns object where key is breakpoint name and value is objects with boolean values:
 * up: current screen width is greater or equal than breakpoint value
 * down: current screen width is less than breakpoint value
 * exact: current screen width is less than breakpoint value
 * and greater than previous breakpoint value
 */
const getCurrentState = () => Object.keys(BREAKPOINT)
  .reduce<Record<string, TStateBreakpoint>>((acc, key, index, breakpoints) => {
    const { innerWidth } = window;
    let exact = false;
    if (index === 0) {
      exact = innerWidth < BREAKPOINT[key]!;
    } else if (index === breakpoints.length) {
      exact = innerWidth >= BREAKPOINT[key]!;
    } else {
      const prevKey = breakpoints[index - 1];
      exact = innerWidth < BREAKPOINT[key]! && innerWidth >= BREAKPOINT[prevKey!]!;
    }
    acc[key] = {
      up: innerWidth >= BREAKPOINT[key]!,
      down: innerWidth < BREAKPOINT[key]!,
      exact,
    };
    return acc;
  }, {});

/**
 * Returns a list of boolean values
 * Every value means that window size is currently in the range
 * from BREAKPOINTS constant
 *
 * isScreenMd - width > 1024 and width < 1280
 * isScreenMdDown - width < 1024
 * isScreenMdUp - width >= 1024
 *
 * Usage:
 * const {isScreenXs} = useBreakpoints();
 */
export const useBreakpoints = () => {
  const [state, setState] = useState<Record<string, TStateBreakpoint>>();

  const onResize = () => {
    setState(getCurrentState());
  };

  useEffect(() => {
    window.addEventListener('resize', onResize);
    setState(getCurrentState());

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return {
    isScreenXs: state?.xs?.exact,
    isScreenXsDown: state?.xs?.down,
    isScreenXsUp: state?.xs?.up,
    isScreenSm: state?.sm?.exact,
    isScreenSmDown: state?.sm?.down,
    isScreenSmUp: state?.sm?.up,
    isScreenMd: state?.md?.exact,
    isScreenMdDown: state?.md?.down,
    isScreenMdUp: state?.md?.up,
  };
};
