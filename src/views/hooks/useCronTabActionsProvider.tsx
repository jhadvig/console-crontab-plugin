import React from 'react';
import { useHistory } from 'react-router-dom';

import { AnnotationsModal } from '../modals/AnnotationsModal/AnnotationsModal';
import { Action, k8sDelete, k8sPatch } from '@openshift-console/dynamic-plugin-sdk';
import { CronTabKind, CronTabModel, cronTabModelRef } from '@crontab-model';

import { useModal } from '../modals/ModalProvider/ModalProvider';
import DeleteModal from '../modals/DeleteModal/DeleteModal';
import { LabelsModal } from '../modals/LabelsModal/LabelsModal';

type UseCronTabActionsProvider = (
  cronTab: CronTabKind,
) => [actions: Action[]/*, onOpen: () => void*/];

export const useCronTabActionsProvider: UseCronTabActionsProvider = (
    cronTab,
) => {
  // const dataSourceName = cronTab?.spec?.managedDataSource;
  // const [dataSource, setDataSource] = React.useState<V1beta1DataSource>();
  const [isLoading/*, setIsLoading*/] = React.useState<boolean>(false);
  // const { t } = useKubevirtTranslation();
  const t = (key: string) => key;
  const { createModal } = useModal();
  const history = useHistory();

  // const lazyLoadDataSource = React.useCallback(() => {
  //   if (!cronTab) {
  //     setIsLoading(true);
  //     k8sGet<K8sResourceCommon>({
  //       model: CronTabModel,
  //       resource: cronTab,
  //       ns: cronTab?.metadata?.namespace,
  //     })
  //       .then((ds) => setDataSource(ds))
  //       .catch(console.error)
  //       .finally(() => setIsLoading(false));
  //   }
  // }, [dataSource, dataSourceName, cronTab?.metadata?.namespace]);

  const actions = React.useMemo(
    () => [
    //   {
    //     id: 'crontab-action-manage-source',
    //     label: (
    //       <Split hasGutter>
    //         <SplitItem>{t('Manage source')}</SplitItem>{' '}
    //         {isLoading && (
    //           <SplitItem>
    //             <Loading />
    //           </SplitItem>
    //         )}
    //       </Split>
    //     ),
    //     disabled: !cronTab || isOwnedBySSP || isLoading,
    //     cta: () =>
    //       createModal(({ isOpen, onClose }) => (
    //         <DataImportCronManageModal
    //           dataImportCron={cronTab}
    //           dataSource={dataSource}
    //           isOpen={isOpen}
    //           onClose={() => {
    //             onClose();
    //             setDataSource(undefined);
    //           }}
    //         />
    //       )),
    //   },
      {
        id: 'dataimportcron-action-edit-labels',
        disabled: false,
        label: t('Edit labels'),
        cta: () =>
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
                      value: labels,
                    },
                  ],
                })
              }
            />
          )),
      },
      {
        id: 'crontab-action-edit-annotations',
        disabled: false,
        label: t('Edit annotations'),
        cta: () =>
          createModal(({ isOpen, onClose }) => (
            <AnnotationsModal
              obj={cronTab}
              isOpen={isOpen}
              onClose={onClose}
              onSubmit={(updatedAnnotations) =>
                k8sPatch({
                  model: CronTabModel,
                  resource: cronTab,
                  data: [
                    {
                      op: 'replace',
                      path: '/metadata/annotations',
                      value: updatedAnnotations,
                    },
                  ],
                })
              }
            />
          )),
      },
      {
        id: 'crontab-action-edit-crontab',
        disabled: false,
        label: t('Edit'),
        cta: () =>
          history.push(
            `/k8s/ns/${cronTab.metadata.namespace}/${cronTabModelRef}/${cronTab.metadata.name}/yaml`,
          ),
      },
      {
        id: 'crontab-action-delete',
        label: t('Delete'),
        cta: () =>
          createModal(({ isOpen, onClose }) => (
            <DeleteModal
              obj={cronTab}
              isOpen={isOpen}
              onClose={onClose}
              headerText={t('Delete CronTab?')}
              onDeleteSubmit={() =>
                k8sDelete({
                  model: CronTabModel,
                  resource: cronTab,
                })
              }
            />
          ))
        //   ,accessReview: asAccessReview(DataImportCronModel, cronTab, 'delete'),
      },
    ],
    [t, isLoading, cronTab, createModal/*, dataSource*/, history],
  );

  return [actions];
};
