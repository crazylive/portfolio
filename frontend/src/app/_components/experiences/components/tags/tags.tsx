import React from 'react';
import classNames from 'classnames';
import styles from './tags.module.scss';

type TTags = {
  tagClassName?: string;
  tags: { id: number; name: string; }[];
};

export const Tags: React.FC<Pick<React.HTMLAttributes<HTMLDivElement>, 'className'> & TTags> = ({
  className,
  tagClassName,
  tags,
}) => (
  <ul className={classNames(styles.tags, className, 'text-5')}>
    {tags.map((tag) => (
      <li key={tag.id} className={classNames(styles.tag, tagClassName)}>{tag.name}</li>
    ))}
  </ul>
);
