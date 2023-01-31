import { PageSection, Title } from '@patternfly/react-core';
import * as React from 'react';

import { RouteComponentProps } from "react-router";
import { CronTabDetailsGrid } from './components/CronTabDetailsGrid';


type CronTabDetailsPageProps = RouteComponentProps<{
    ns: string;
    name: string;
}> & {
        obj?: any;
};
  
const CronTabDetailsPage: React.FC<CronTabDetailsPageProps> = ({ obj }) => {
    return (
        <div>
        <PageSection>
            <Title headingLevel="h2" className="co-section-heading">
            CronTab details
            </Title>
        </PageSection>
        
        <PageSection>
            <CronTabDetailsGrid cronTab={obj}/>
        </PageSection>
        </div>
    );
};

export default CronTabDetailsPage;