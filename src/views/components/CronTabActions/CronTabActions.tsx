import React from 'react';
import { useCronTabActionsProvider } from 'src/views/hooks/useCronTabActionsProvider';

import { CronTabKind } from '@crontab-model';
import { Action } from '@openshift-console/dynamic-plugin-sdk';
import {
  Dropdown,
  DropdownItem,
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
  const [actions] = useCronTabActionsProvider(cronTab);

  const handleClick = (action: Action) => {
    if (typeof action?.cta === 'function') {
      action.cta();
    } else {
      console.error('CronTabActions: action.cta is not a function');
    }
    setIsOpen(false);
  };

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
      dropdownItems={actions?.map((action) => (
        <DropdownItem
          data-test-id={action?.id}
          key={action?.id}
          onClick={() => handleClick(action)}
          isDisabled={action?.disabled}
          description={action?.description}
        >
          {action?.label}
        </DropdownItem>
      ))}
    />
  );
};
