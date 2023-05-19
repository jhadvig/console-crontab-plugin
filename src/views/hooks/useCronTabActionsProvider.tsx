import React from 'react';

import { CronTabKind } from 'src/types';
import { Action } from '@openshift-console/dynamic-plugin-sdk';

type UseCronTabActionsProvider = (
  cronTab: CronTabKind,
) => [actions: Action[]];

export const useCronTabActionsProvider: UseCronTabActionsProvider = (cronTab) => {

  const actions = React.useMemo(
    () => [],
    [],
  );

  return [actions];
};
