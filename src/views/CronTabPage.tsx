/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-env node */
import * as React from 'react';

import Loading from '@crontab-utils/Loading';
// import { CronTabModel } from '@crontab-model/CronTabModel';
import { HorizontalNav, useK8sWatchResource, K8sResourceCommon } from '@openshift-console/dynamic-plugin-sdk';
import { Bullseye, PageSection, Title } from '@patternfly/react-core';

import { RouteComponentProps } from 'react-router';

type CronTabPageProps = {
  name: string;
  namespace: string;
  kind: string;
};

const CronTabNavPage: React.FC<CronTabPageProps> = ({ name, namespace, kind }) => {
  // const { t } = useKubevirtTranslation();
  const [dataSource, loaded] = useK8sWatchResource<K8sResourceCommon>({
    groupVersionKind: {
      "group": "stable.example.com",
      "kind": "CronTab",
      "version": "v1"
    },
    kind,
    name,
    namespace,
  });

  const pages = React.useMemo(
    () => [
      {
        href: '',
        name: 'Details',
        component: CronTabDetailsPage,
      },
      // {
      //   href: 'yaml',
      //   name: t('YAML'),
      //   component: DataSourceYAMLPage,
      // },
    ],
    [],
  );

  return (
    <>
      {/* <DataSourcePageTitle dataSource={dataSource} namespace={namespace} name={name} /> */}
      
      TEST
      {loaded ? (
        <HorizontalNav pages={pages} resource={dataSource} />
      ) : (
        <Bullseye>
          <Loading />
        </Bullseye>
      )}
    </>
  );
};

type CronTabDetailsPageProps = RouteComponentProps<{
  ns: string;
  name: string;
}> & {
  obj?: any;
};

const CronTabDetailsPage: React.FC<CronTabDetailsPageProps> = ({ obj: dataSource }) => {

  return (
    <div>
      <PageSection>
        <Title headingLevel="h2" className="co-section-heading">
          CronTab details
        </Title>
      </PageSection>
    </div>
  );
};

export default CronTabNavPage;