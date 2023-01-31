/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-env node */
import Loading from '@crontab-utils/Loading';
import { K8sResourceCommon, ResourceYAMLEditor } from '@openshift-console/dynamic-plugin-sdk';
import { PageSection, Title } from '@patternfly/react-core';
import * as React from 'react';
import { RouteComponentProps } from 'react-router';

// import Loading from '@crontab-utils/Loading';
// // import { CronTabModel } from '@crontab-model/CronTabModel';
// import { HorizontalNav, useK8sWatchResource, K8sResourceCommon } from '@openshift-console/dynamic-plugin-sdk';
// import { Bullseye, PageSection, Title } from '@patternfly/react-core';

// import { RouteComponentProps } from 'react-router';

export type CronTabKind = K8sResourceCommon & {
    spec?: {
      [key: string]: any;
    };
    status?: { [key: string]: any };
  };


type CronTabYAMLPageProps = RouteComponentProps<{
    ns: string;
    name: string;
}> & {
    obj?: CronTabKind;
}

const CronTabYAMLPage: React.FC<CronTabYAMLPageProps> = ({ obj: cronTab }) => {
  return !cronTab ? (
    <div>
      <PageSection>
        <Title headingLevel="h2" className="co-section-heading">
          CronTab details
        </Title>
      </PageSection>
    </div>
  ) : (
    <React.Suspense fallback={Loading}>
        <ResourceYAMLEditor initialResource={cronTab} header={'CronTab'} />
    </React.Suspense>
  )
};

export default CronTabYAMLPage;