import * as React from 'react';
// import Loading from '@crontab-utils/Loading';
import { ResourceYAMLEditor } from '@openshift-console/dynamic-plugin-sdk';
import { PageSection, Title } from '@patternfly/react-core';
import { RouteComponentProps } from 'react-router';
import { CronTabKind } from '@crontab-model'; 

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
    // <React.Suspense fallback={Loading}>
        <ResourceYAMLEditor initialResource={cronTab} header={'CronTab'} />
    //</React.Suspense>
  )
};

export default CronTabYAMLPage;