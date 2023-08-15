import React from 'react';
import classNames from 'classnames';
import styles from './positions.module.scss';

type TPositions = {
  positions: { id: number; name: string; }[];
  positionClassName?: string;
};

export const Positions: React.FC<Pick<React.HTMLAttributes<HTMLDivElement>, 'className'> & TPositions> = ({
  className,
  positionClassName,
  positions,
}) => (
  <ul className={classNames(className, 'header-5')}>
    {
      positions.map((position) => (
        <li key={position.id} className={classNames(styles.position, positionClassName)}>{position.name}</li>
      ))
    }
  </ul>
);
