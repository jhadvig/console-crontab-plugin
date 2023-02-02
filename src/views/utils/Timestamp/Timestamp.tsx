import * as React from 'react';
import classnames from 'classnames';

import { pluralize, Tooltip } from '@patternfly/react-core';
import { GlobeAmericasIcon } from '@patternfly/react-icons';

import { MAX_CLOCK_SKEW_MS, NO_DATA_DASH, TEN_AND_HALF_MINUTES_IN_MS } from './constants';
import { dateTimeFormatter, fromNow } from './datetime';

export type TimestampProps = {
  timestamp: string | number;
  omitSuffix?: boolean;
  className?: string;
  hideIcon?: boolean;
};

const Timestamp: React.FC<TimestampProps> = ({
  timestamp,
  omitSuffix,
  className,
  hideIcon = false,
}) => {
  // Check for null. If props.timestamp is null, it returns incorrect date and time of Wed Dec 31 1969 19:00:00 GMT-0500 (Eastern Standard Time)
  if (!timestamp || !isValid(new Date(timestamp))) {
    return <div className="co-timestamp">-</div>;
  }

  const mdate = new Date(timestamp);

  const newTimestamp = timestampFor(mdate, new Date(Date.now()), omitSuffix);

  const timeStamp = omitSuffix
    ? pluralize(newTimestamp['value'], newTimestamp['time'])
    : newTimestamp;

  return (
    <div className={classnames('co-timestamp', 'co-icon-and-text', className)}>
      {!hideIcon && <GlobeAmericasIcon className="co-icon-and-text__icon" />}
      <Tooltip
        content={[
          <span className="co-nowrap" key="co-timestamp">
            {utcDateTimeFormatter.format(mdate)}
          </span>,
        ]}
      >
        <span data-test="timestamp">{timeStamp}</span>
      </Tooltip>
    </div>
  );
};

export default Timestamp;

export const isValid = (dateTime: Date): boolean =>
    dateTime instanceof Date && !isNaN(dateTime.valueOf());

export const dateTimeFormatterOptions: Intl.DateTimeFormatOptions = {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    year: 'numeric',
};

export const utcDateTimeFormatterOptions: Intl.DateTimeFormatOptions = {
    ...dateTimeFormatterOptions,
    timeZone: 'UTC',
    timeZoneName: 'short',
};

export const utcDateTimeFormatter = new Intl.DateTimeFormat(undefined, utcDateTimeFormatterOptions);

export const timestampFor = (mdate: Date, now: Date, omitSuffix: boolean) => {
    if (!isValid(mdate)) {
      return NO_DATA_DASH;
    }
  
    const timeDifference = now.getTime() - mdate.getTime();
    if (omitSuffix) {
      return fromNow(mdate, undefined, { omitSuffix: true });
    }
  
    // Show a relative time if within 10.5 minutes in the past from the current time.
    if (timeDifference > MAX_CLOCK_SKEW_MS && timeDifference < TEN_AND_HALF_MINUTES_IN_MS) {
      return fromNow(mdate);
    }
  
    // Apr 23, 2021, 4:33 PM
    return dateTimeFormatter.format(mdate);
  };
