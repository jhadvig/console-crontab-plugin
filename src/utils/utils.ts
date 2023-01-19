import { K8sModel } from '@openshift-console/dynamic-plugin-sdk/lib/api/common-types';

export const modelToGroupVersionKind = (obj: K8sModel) => ({
  version: obj.apiVersion,
  kind: obj.kind,
  group: obj.apiGroup,
});