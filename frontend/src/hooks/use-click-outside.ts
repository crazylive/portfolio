import { RefObject, useEffect } from 'react';

/**
 * Adds click outside event to given element ref
 *
 * Usage:
 * const ref = useRef<HTMLElement>(null);
 * useClickOutside(ref, handler);
 *
 * @param ref
 * @param handler
 */
export const useClickOutside = (ref: RefObject<HTMLElement>, handler: () => void) => {
  useEffect(() => {
    function handleClick(e: MouseEvent | TouchEvent) {
      if (!ref?.current || ref?.current.contains(e.target as Node)) {
        return;
      }

      handler();
    }

    document.addEventListener('mousedown', handleClick);
    document.addEventListener('touchstart', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('touchstart', handleClick);
    };
  }, [ref, handler]);
};
