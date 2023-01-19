import { K8sModel } from '@openshift-console/dynamic-plugin-sdk/lib/api/common-types';

export const CronTabModel: K8sModel = {
  label: 'CronTab',
  labelPlural: 'CronTabs',
  apiVersion: 'v1',
  apiGroup: 'stable.example.com',
  plural: 'crontabs',
  abbr: 'crontabs',
  namespaced: true,
  kind: 'CronTab',
  id: 'crontab',
  crd: true,
};