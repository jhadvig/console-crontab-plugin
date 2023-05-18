import React from 'react';

import { CronTabKind, cronTabModelRef } from '@crontab-model';
import { Action } from '@openshift-console/dynamic-plugin-sdk';

type UseCronTabActionsProvider = (
  cronTab: CronTabKind,
) => [actions: Action[] /*, onOpen: () => void*/];
const t = (key: string) => key;

export const useCronTabActionsProvider: UseCronTabActionsProvider = (cronTab) => {

  const actions = React.useMemo(
    () => [
      {
        id: 'crontab-action-edit-crontab',
        disabled: false,
        label: t('Edit'),
        cta: {
          href: `/k8s/ns/${cronTab.metadata.namespace}/${cronTabModelRef}/${cronTab.metadata.name}/yaml`,
        },
      },
    ],
    [],
  );

  return [actions];
};
