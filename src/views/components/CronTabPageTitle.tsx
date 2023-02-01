import * as React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from '@patternfly/react-core';
import { CronTabKind, cronTabModelRef } from '../../models/CronTabModel';
import { DEFAULT_NAMESPACE } from '@crontab-utils/constants';
// import DataSourceActions from '../actions/DataSourceActions';
// import { isDataSourceReady } from '../utils';

type CronTabPageTitleProps = {
  cronTab: CronTabKind;
  name: string;
  namespace: string;
};

const CronTabPageTitle: React.FC<CronTabPageTitleProps> = ({
  cronTab,
  name,
  namespace,
}) => {
  return (
    <>
      <div className="pf-c-page__main-breadcrumb">
        <Breadcrumb className="pf-c-breadcrumb co-breadcrumb">
          <BreadcrumbItem>
            <Link to={`/k8s/ns/${namespace || DEFAULT_NAMESPACE}/${cronTabModelRef}`}>
              {'CronTabs'}
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>{'CronTab Details'}</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="co-m-nav-title co-m-nav-title--detail co-m-nav-title--breadcrumbs">
        <span className="co-m-pane__heading">
          <h1 className="co-m-pane__name co-resource-item">
            <span className="co-m-resource-icon co-m-resource-icon--lg">{'DS'}</span>
            <span data-test-id="resource-title" className="co-resource-item__resource-name">
              {name ?? cronTab?.metadata?.name}{' '}
            </span>
            {/* {isDataSourceReady(dataSource) && (
              <span className="dps-resource-item__resource-status hidden-xs">
                <Label isCompact>{t('Ready')}</Label>
              </span>
            )} */}
          </h1>
          <div className="co-actions">
            {/* <DataSourceActions dataSource={dataSource} /> */}
          </div>
        </span>
      </div>
    </>
  );
};

export default CronTabPageTitle;
