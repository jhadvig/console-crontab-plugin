import React from 'react';

import { CronTabKind } from 'src/types';
import {
  Dropdown,
  DropdownPosition,
  DropdownToggle,
  KebabToggle,
} from '@patternfly/react-core';

import './CronTabActions.scss';
import { useCronTabTranslation } from '@crontab-utils/hooks/useCronTabTranslation';

type CronTabActionProps = {
  cronTab: CronTabKind;
  isKebabToggle?: boolean;
};

export const CronTabActions: React.FC<CronTabActionProps> = ({ cronTab, isKebabToggle }) => {
  const { t } = useCronTabTranslation();
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const onDropDownToggle = (value: boolean) => {
    setIsOpen(value);
  };

  return (
    <Dropdown
      menuAppendTo={"parent"}
      isPlain={isKebabToggle}
      isOpen={isOpen}
      position={DropdownPosition.right}
      toggle={
        isKebabToggle ? (
          <KebabToggle onToggle={onDropDownToggle} />
        ) : (
          <DropdownToggle onToggle={onDropDownToggle}>{t('Actions')}</DropdownToggle>
        )
      }
    />
  );
};
