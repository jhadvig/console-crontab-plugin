import * as React from 'react';
import { 
    DescriptionList,
    DescriptionListDescription,
    DescriptionListGroup,
    DescriptionListTerm,
    DescriptionListTermHelpText,
    DescriptionListTermHelpTextButton,
    Popover,
} from '@patternfly/react-core';
import { CronTabKind, CronTabModel } from '@crontab-model';
import { DetailsItem } from '../utils/DetailsItem';
import { LabelsModal } from '../modals/LabelsModal/LabelsModal';
import { useModal } from '../modals/ModalProvider/ModalProvider';
import { k8sPatch } from '@openshift-console/dynamic-plugin-sdk';

export type CronTabDetailsGridProps = {
    cronTab: CronTabKind;
}

export const CronTabDetailsGrid: React.FC<CronTabDetailsGridProps> = ({ cronTab }) => {
    const t = (key: string) => key;
    
    const editLabelsModal = (e, ct: CronTabKind) => {
        const { createModal } = useModal();
        createModal(({ isOpen, onClose }) => (
            <LabelsModal
              obj={ct}
              isOpen={isOpen}
              onClose={onClose}
              onLabelsSubmit={(labels) =>
                k8sPatch({
                  model: CronTabModel,
                  resource: ct,
                  data: [
                    {
                      op: 'replace',
                      path: '/metadata/labels',
                      value: labels,
                    },
                  ],
                })
              }
            />
          ))
    };
    
    return (
        <DescriptionList>
            <DescriptionListGroup>
                <DescriptionListTermHelpText>
                    <Popover headerContent={<div>Name</div>} bodyContent={<div>Additional name info</div>}>
                        <DescriptionListTermHelpTextButton> Name </DescriptionListTermHelpTextButton>
                    </Popover>
                </DescriptionListTermHelpText>
                <DescriptionListDescription>{cronTab.metadata.name}</DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
                <DescriptionListTerm>Namespace</DescriptionListTerm>
                <DescriptionListDescription>
                    <a href="#">mary-test</a>
                </DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
                <DescriptionListTermHelpText>
                    <Popover headerContent={<div>Labels</div>} bodyContent={<div>Additional labels info</div>}>
                        <DescriptionListTermHelpTextButton> Labels </DescriptionListTermHelpTextButton>
                    </Popover>
                </DescriptionListTermHelpText>
                <DetailsItem
                    label={t('public~Labels')}
                    obj={cronTab}
                    path="metadata.labels"
                    valueClassName="details-item__value--labels"
                    onEdit={(e) => editLabelsModal(e, cronTab)}
                    canEdit={/*showLabelEditor && canUpdate*/true}
                    editAsGroup
                ></DetailsItem>
            </DescriptionListGroup>
        </DescriptionList>
    )
}