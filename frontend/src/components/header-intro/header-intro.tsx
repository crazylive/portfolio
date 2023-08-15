import React from 'react';
import classNames from 'classnames';
import styles from './header-intro.module.scss';

type THeaderIntro = {
  dotColor?: string;
  component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
};

export const HeaderIntro: React.FC<React.HTMLAttributes<HTMLDivElement> & THeaderIntro> = ({
  className,
  children,
  dotColor,
  component: Component = 'h3',
  ...attrs
}) => (
  <Component className={classNames(styles.headerIntro, className)} {...attrs}>
    {children}
    {
      Boolean(dotColor) && (
        <span className={styles.dot} style={{ color: dotColor }}>.</span>
      )
    }
  </Component>
);
