'use client';

import React, { useCallback, useRef } from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import { useSpring, to, animated } from '@react-spring/web';
import { CertificateModel } from '@models/home-page';
import { useHover, useMove } from '@use-gesture/react';
import styles from './certificate.module.scss';

const calcX = (y: number, ly: number) => -(y - ly - window.innerHeight / 2) / 20;

type TCertificate = {
  data: CertificateModel;
};
export const Certificate: React.FC<React.HTMLAttributes<HTMLDivElement> & TCertificate> = ({
  className,
  data,
  ...attrs
}) => {
  const { certificate } = data;
  const containerRef = useRef<HTMLElement | null>(null);

  const calcY = useCallback((x: number, lx: number) => {
    if (!containerRef.current) return null;

    return (x - lx - containerRef.current.offsetWidth / 2) / 20;
  }, []);

  const [{
    x,
    y,
    rotateX,
    rotateY,
    rotateZ,
    zoom,
    scale,
    overlayOpacity,
  }, api] = useSpring(
    () => ({
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      scale: 1,
      zoom: 0,
      overlayOpacity: 1,
      x: 0,
      y: 0,
      config: { mass: 5, tension: 350, friction: 40 },
    }),
  );

  useMove(({ xy: [px, py], dragging }) => {
    if (dragging || data.isDisabled || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();

    containerRef.current.style.setProperty('z-index', '2');

    api({
      overlayOpacity: 0,
      rotateX: calcX(py, y.get()),
      rotateY: calcY(px - rect.left, x.get()),
      scale: 1.8,
    });
  }, { target: containerRef, eventOptions: { passive: false } });

  useHover(({ hovering }) => {
    if (hovering || data.isDisabled || !containerRef.current) return;
    containerRef.current.style.setProperty('z-index', '0');

    api({
      rotateX: 0, rotateY: 0, scale: 1, overlayOpacity: 1,
    });
  }, { target: containerRef, eventOptions: { passive: false } });

  return (
    <div className={className} {...attrs}>
      <animated.figure
        ref={containerRef}
        className={styles.certificate}
        style={data.isDisabled ? undefined : {
          transform: 'perspective(600px)',
          x,
          y,
          scale: to([scale, zoom], (s, z) => s + z),
          rotateX,
          rotateY,
          rotateZ,
        }}
      >
        <Image
          className="image-responsive"
          src={certificate.url}
          width={certificate.width}
          height={certificate.height}
          alt={certificate.alternativeText ?? ''}
        />
        <figcaption className={styles.caption}>
          <animated.span
            className={classNames(styles.overlay)}
            style={{ opacity: overlayOpacity }}
          />
        </figcaption>
      </animated.figure>
    </div>
  );
};
