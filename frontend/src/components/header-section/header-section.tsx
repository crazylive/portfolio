import React from 'react';
import classNames from 'classnames';
import { SymbolWave } from 'components/symbols/symbol-wave';
import styles from './header-section.module.scss';

type THeaderSection = {
  component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
};

export const HeaderSection: React.FC<Pick<React.HTMLAttributes<HTMLDivElement>, 'className' | 'children'> & THeaderSection> = ({
  className,
  children,
  component: Component = 'h2',
}) => (
  <Component className={classNames(styles.headerSection, className)}>
    <SymbolWave className={styles.wave} />
    <span>{children}</span>
  </Component>
);
