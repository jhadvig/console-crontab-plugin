import * as React from 'react';
import { 
    DescriptionList,
    DescriptionListDescription,
    DescriptionListTermHelpText,
    DescriptionListTermHelpTextButton,
    Grid,
    GridItem,
    Popover,
} from '@patternfly/react-core';
import { CronTabKind, CronTabModel } from '@crontab-model';
import { LabelsModal } from '../modals/LabelsModal/LabelsModal';
import { useModal } from '@crontab-utils/components/ModalProvider/ModalProvider';
import { k8sPatch, ResourceLink, Timestamp } from '@openshift-console/dynamic-plugin-sdk';
import DescriptionItem from './DescriptionItem/DescriptionItem';
import MetadataLabels from '../utils/MetadataLabels/MetadataLabels';

export type CronTabDetailsGridProps = {
    cronTab: CronTabKind;
}

export const CronTabDetailsGrid: React.FC<CronTabDetailsGridProps> = ({ cronTab }) => {
    const t = (key: string) => key;
    const { createModal } = useModal();
    return (
        <Grid hasGutter>
            <GridItem span={5}>
                <DescriptionList>
                    <DescriptionItem
                        descriptionData={cronTab?.metadata?.name}
                        descriptionHeader={t('Name')}
                        isPopover
                        // body-content text copied from: https://github.com/kubevirt-ui/kubevirt-api/blob/main/containerized-data-importer/models/V1ObjectMeta.ts#L96
                        // TODO: content
                        bodyContent={t(
                        'Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. ',
                        )}
                        moreInfoURL="http://kubernetes.io/docs/user-guide/identifiers#names"
                        breadcrumb="CronTab.metadata.name"
                        data-test-id={`${cronTab?.metadata?.name}-name`}
                    />

                    <DescriptionItem
                        descriptionData={
                        <ResourceLink kind="Namespace" name={cronTab?.metadata?.namespace} />
                        }
                        descriptionHeader={t('Namespace')}
                        isPopover
                        // body-content text copied from: https://github.com/kubevirt-ui/kubevirt-api/blob/main/containerized-data-importer/models/V1ObjectMeta.ts#L102-L104
                        // TODO: content
                        bodyContent={t(
                        'Namespace defines the space within which each name must be unique. An empty namespace is equivalent to the "default" namespace, but "default" is the canonical representation. Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty. Must be a DNS_LABEL. Cannot be updated. ',
                        )}
                        moreInfoURL="http://kubernetes.io/docs/user-guide/namespaces"
                        breadcrumb="CronTab.metadata.namespace"
                    />

                    <DescriptionItem
                        descriptionData={<MetadataLabels labels={cronTab?.metadata?.labels} />}
                        descriptionHeader={t('Labels')}
                        isPopover
                        // body-content text copied from: https://github.com/kubevirt-ui/kubevirt-api/blob/main/containerized-data-importer/models/V1ObjectMeta.ts#L84
                        bodyContent={t(
                        'Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. ',
                        )}
                        moreInfoURL="http://kubernetes.io/docs/user-guide/labels"
                        breadcrumb="CronTab.metadata.labels"
                        isEdit
                        showEditOnTitle
                        onEditClick={() =>
                        createModal(({ isOpen, onClose }) => (
                            <LabelsModal
                            obj={cronTab}
                            isOpen={isOpen}
                            onClose={onClose}
                            onLabelsSubmit={(labels) =>
                                k8sPatch({
                                model: CronTabModel,
                                resource: cronTab,
                                data: [
                                    {
                                    op: 'replace',
                                    path: '/metadata/labels',
                        
                                    },
                                ],
                                })
                            }
                            />
                        ))
                        }
                        data-test-id={`${cronTab?.metadata?.name}-labels`}
                    />

                    <DescriptionListTermHelpText>
                        <Popover headerContent={<div>Cronspec</div>} bodyContent={<div>Additional cronspec info</div>}>
                            <DescriptionListTermHelpTextButton> Cronspec </DescriptionListTermHelpTextButton>
                        </Popover>
                    </DescriptionListTermHelpText>
                    <DescriptionListDescription>{cronTab.spec.cronSpec}</DescriptionListDescription>

                    <DescriptionItem
                        descriptionData={<Timestamp timestamp={cronTab?.metadata?.creationTimestamp} />}
                        descriptionHeader={t('Created at')}
                        isPopover
                        // body-content text copied from: https://github.com/kubevirt-ui/kubevirt-api/blob/main/containerized-data-importer/models/V1ObjectMeta.ts#L84
                        bodyContent={t(
                        'Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.',
                        )}
                        breadcrumb="DataImportCron.metadata.creationTimestamp"
                    />
                
                    </DescriptionList>

            </GridItem>
        </Grid>
    )
}