import React from 'react';
import { useSpring, SpringRef, animated } from '@react-spring/web';
import classNames from 'classnames';
import styles from './curtains.module.scss';

type TCurtains = {
  springRef: SpringRef;
  isScrolled: boolean;
};

export const Curtains: React.FC<Pick<React.HTMLAttributes<HTMLDivElement>, 'className' | 'children'> & TCurtains> = ({
  className,
  springRef,
  isScrolled,
}) => {
  const backgroundSprings = useSpring({
    ref: springRef,
    translateX: isScrolled ? 'translateX(50%)' : 'translateX(0%)',
    from: { translateX: 'translateX(50%)' },
  });

  return (
    <div className={classNames(styles.curtains, className)}>
      <animated.div
        className={styles.leftHalf}
      />
      <animated.div
        className={styles.rightHalf}
        style={{
          transform: backgroundSprings.translateX,
        }}
      />
    </div>
  );
};
