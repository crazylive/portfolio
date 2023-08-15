'use client';

import React, { useCallback, useRef } from 'react';
import classNames from 'classnames';
import { useScroll } from '@react-spring/web';
import styles from './highlight.module.scss';

type THighlight = {
  color?: string;
  transparent?: number;
}

export const Highlight: React.FC<Pick<React.HTMLAttributes<HTMLDivElement>, 'className' | 'children'> & THighlight> = ({
  className,
  children,
  color = 'rgba(255 219 212, 0.05)',
  transparent = 80,
}) => {
  const containerRef = useRef<HTMLElement | null>(null);
  const highlightRef = useRef<HTMLDivElement | null>(null);
  const mouseYPosition = useRef<number | undefined>();
  const scrollYRef = useRef<number | undefined>();

  const handleMouseMove = useCallback(({ clientY, clientX }: React.MouseEvent<HTMLElement>) => {
    if (!containerRef.current || !highlightRef.current) return;

    const containerPosition = containerRef.current.getBoundingClientRect();
    const x = clientX - containerPosition.left;
    const y = clientY - containerPosition.top;
    mouseYPosition.current = y;

    highlightRef.current.style.setProperty('background', `radial-gradient(600px at ${x}px ${y}px, ${color}, transparent ${transparent}%)`);
  }, [color, transparent]);

  useScroll({
    container: containerRef.current === null ? undefined : containerRef as React.MutableRefObject<HTMLElement>,
    onChange: ({ value: current }) => {
      const prevScrollY = scrollYRef.current || 0;
      const scrollDiff = current.scrollY - prevScrollY;

      if (!containerRef.current || !highlightRef.current || !mouseYPosition.current) { scrollYRef.current = current.scrollY; return; }

      mouseYPosition.current += scrollDiff;

      if (mouseYPosition.current > 0) {
        const backgroundXY = highlightRef.current.style.getPropertyValue('background')
          ?.match(/at (\d*).+ (\d*).+/);

        const x = !backgroundXY ? '50%' : `${backgroundXY?.[1]}px`;

        highlightRef.current.style.setProperty(
          'background',
          `radial-gradient(600px at ${x} ${mouseYPosition.current}px, ${color}, transparent ${transparent}%)`,
        );
      }

      scrollYRef.current = current.scrollY;
    },
    default: {
      immediate: true,
    },
  });

  return (
    <section ref={containerRef} className={classNames(styles.highlight, className)} onMouseMove={handleMouseMove}>
      <div className={styles.cursor} ref={highlightRef} />
      {children}
    </section>
  );
};
