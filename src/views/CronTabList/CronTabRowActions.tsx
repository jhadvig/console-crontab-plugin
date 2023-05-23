import * as React from 'react';
import { CronTabKind } from 'src/types';
import {
  Dropdown,
  DropdownPosition,
  KebabToggle,
} from '@patternfly/react-core';

type CronTabRowActionsProps = {
  obj?: CronTabKind;
};

const CronTabRowActions: React.FC<CronTabRowActionsProps> = ({ obj }) => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  return (
    <Dropdown
      menuAppendTo={"parent"}
      onSelect={() => setIsDropdownOpen(false)}
      toggle={<KebabToggle onToggle={setIsDropdownOpen} id="toggle-id-disk" />}
      isOpen={isDropdownOpen}
      isPlain
      position={DropdownPosition.right}
    />
  );
};

export default CronTabRowActions;
