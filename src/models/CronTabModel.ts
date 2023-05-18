import { modelToRef } from '@crontab-utils/utils';
import { K8sResourceCommon } from '@openshift-console/dynamic-plugin-sdk';
import { K8sModel } from '@openshift-console/dynamic-plugin-sdk/lib/api/common-types';

export const CronTabModel: K8sModel = {
  label: 'CronTab',
  labelPlural: 'CronTabs',
  apiVersion: 'v1',
  apiGroup: 'stable.example.com',
  plural: 'crontabs',
  abbr: 'ct',
  namespaced: true,
  kind: 'CronTab',
  id: 'crontab',
  crd: true,
};

export type CronTabKind = K8sResourceCommon & {
  spec?: {
    cronSpec: string;
    image: string;
    replicas: number;
  };
};

export const cronTabModelRef = modelToRef(CronTabModel);
