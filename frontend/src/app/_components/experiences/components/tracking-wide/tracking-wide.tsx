import React from 'react';
import classNames from 'classnames';

type TTrackingWide = {
  beginDate: Date;
  endDate: Date;
  monthFormat?: 'long' | 'short'
};

export const TrackingWide: React.FC<Pick<React.HTMLAttributes<HTMLDivElement>, 'className'> & TTrackingWide> = ({
  className,
  monthFormat = 'short',
  beginDate,
  endDate,
}) => {
  const beginMonth = beginDate.toLocaleString(['en-US'], { month: monthFormat });
  const endMonth = endDate.toLocaleString(['en-US'], { month: monthFormat });

  return (
    <div className={classNames(className, 'text-3')}>
      {beginMonth}
      {' '}
      <i>{beginDate.getFullYear()}</i>
      {' - '}
      {endMonth}
      {' '}
      <i>{endDate.getFullYear()}</i>
    </div>
  );
};
