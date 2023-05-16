import * as React from 'react';
import { useHistory } from 'react-router-dom';

import { CronTabKind, cronTabModelRef } from '@crontab-model';
import { DEFAULT_NAMESPACE } from '@crontab-utils/constants';
import {
  Dropdown,
  DropdownItem,
  DropdownPosition,
  KebabToggle,
} from '@patternfly/react-core';

type CronTabRowActionsProps = {
  obj?: CronTabKind;
};

const CronTabRowActions: React.FC<CronTabRowActionsProps> = ({ obj }) => {
  const history = useHistory();
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  const onEditCronTab = () => {
    const cta = {
      href: `/k8s/ns/${obj.metadata.namespace || DEFAULT_NAMESPACE}/${cronTabModelRef}/${
        obj.metadata.name
      }/yaml`,
    };
    history.push(cta.href);
  };

  return (
    <Dropdown
      menuAppendTo={getContentScrollableElement}
      onSelect={() => setIsDropdownOpen(false)}
      toggle={<KebabToggle onToggle={setIsDropdownOpen} id="toggle-id-disk" />}
      isOpen={isDropdownOpen}
      isPlain
      dropdownItems={[
        <DropdownItem onClick={onEditCronTab} key="crontab-edit-yaml">
          {'Edit CronTab'}
        </DropdownItem>,
      ]}
      position={DropdownPosition.right}
    />
  );
};

export const getContentScrollableElement = (): HTMLElement =>
  document.getElementById('content-scrollable');

export default CronTabRowActions;
