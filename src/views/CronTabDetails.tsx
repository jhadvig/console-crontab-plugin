import * as React from 'react';

import Loading from '@crontab-utils/Loading';
import { 
  useK8sWatchResource, 
  K8sResourceCommon,
  HorizontalNav,
} from '@openshift-console/dynamic-plugin-sdk';
import { Bullseye } from '@patternfly/react-core';
import CronTabYAMLPage from './CronTabYAMLPage';
import CronTabDetailsPage from './CronTabDetailsPage';
import CronTabPageTitle from './components/CronTabPageTitle';

type CronTabPageProps = {
  name: string;
  namespace: string;
  kind: string;
};

const CronTabNavPage: React.FC<CronTabPageProps> = ({ name, namespace, kind }) => {
  // const { t } = useKubevirtTranslation();
  const [cronTab, loaded] = useK8sWatchResource<K8sResourceCommon>({
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
      {
        href: 'yaml',
        name: 'YAML',
        component: CronTabYAMLPage,
      },
    ],
    [],
  );

  return (
    <>
      <CronTabPageTitle cronTab={cronTab} namespace={namespace} name={name} />
    
      {loaded ? (
        // <HorizontalNav pages={pages} resource={dataSource} />
        // <ResourceDetailsPage
        //   {...props}
        //   getResourceStatus={nodeStatus}
        //   menuActions={menuActions}
        //   pagesFor={pagesFor}
        // />
        
        <HorizontalNav pages={pages} resource={cronTab} />
      ) : (
        <Bullseye>
          <Loading />
        </Bullseye>
      )}
    </>
  );  
};

export default CronTabNavPage;