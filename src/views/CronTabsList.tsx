import React from 'react';
// import { useHistory } from 'react-router-dom';
// import { DEFAULT_NAMESPACE } from '@crontab-utils/constants';
import { modelToGroupVersionKind } from '@crontab-utils/utils';
import {
  ListPageBody,
  // ListPageCreateDropdown,
  // ListPageFilter,
  ListPageHeader,
  useK8sWatchResource,
  K8sResourceCommon,
  // useListPageFilter,
  VirtualizedTable,
} from '@openshift-console/dynamic-plugin-sdk';
import { CronTabModel } from '@crontab-model/CronTabModel';
import { sortable } from '@patternfly/react-table';

import { ResourceLink, RowProps, TableData } from '@openshift-console/dynamic-plugin-sdk';
import { TableColumn } from '@openshift-console/dynamic-plugin-sdk';


// import './DataSourcesList.scss';

type CronTabsListProps = {
  kind: string;
  namespace: string;
};

const CronTabsList: React.FC<CronTabsListProps> = ({ kind, namespace }) => {
  // const history = useHistory();

  const [dataSources, loaded, loadError] = useK8sWatchResource<K8sResourceCommon[]>({
    isList: true,
    groupVersionKind: {
      "group": "stable.example.com",
      "kind": "CronTab",
      "version": "v1"
    },
    namespaced: true,
    namespace,
  });
  const columns = useCronTabColumns();
  // const [unfilteredData, data, onFilterChange] = useListPageFilter(dataSources, filters);

  return (
    <>
      <ListPageHeader title={'CronTab'}>
      </ListPageHeader>
      <ListPageBody>
        <VirtualizedTable<K8sResourceCommon>
          data={dataSources}
          unfilteredData={dataSources}
          loaded={loaded}
          loadError={loadError}
          columns={columns}
          Row={DataSourcesListRow}
        />
      </ListPageBody>
    </>
  );
};

const DataSourcesListRow: React.FC<RowProps<K8sResourceCommon>> = ({
  obj,
  activeColumnIDs,
}) => {

  return (
    <>
      <TableData id="name" activeColumnIDs={activeColumnIDs} className="pf-m-width-15">
        <ResourceLink
          groupVersionKind={modelToGroupVersionKind(CronTabModel)}
          name={obj.metadata.name}
          namespace={obj.metadata.namespace}
        />
      </TableData>
      <TableData id="namespace" activeColumnIDs={activeColumnIDs} className="pf-m-width-15">
        <ResourceLink kind="Namespace" name={obj.metadata.namespace} />
      </TableData>
    </>
  );
};

const useCronTabColumns = () => {

  const columns: TableColumn<K8sResourceCommon>[] = React.useMemo(
    () => [
      {
        title: 'Name',
        id: 'name',
        transforms: [sortable],
        sort: 'metadata.name',
        props: { className: 'pf-m-width-15' },
      },
      {
        title: 'Namespace',
        id: 'namespace',
        transforms: [sortable],
        sort: 'metadata.namespace',
        props: { className: 'pf-m-width-15' },
      },
    ],
    [],
  );

  return columns;
};

export default CronTabsList;
