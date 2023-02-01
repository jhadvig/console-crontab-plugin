import { CronTabKind/*, cronTabModelRef*/ } from "@crontab-model";
// import { useK8sModel } from "@openshift-console/dynamic-plugin-sdk";
import { Button, Popover, Split, SplitItem } from "@patternfly/react-core";
import { PencilAltIcon } from '@patternfly/react-icons';
import React from "react";

export const DetailsItem: React.FC<DetailsItemProps> = ({
    children,
    defaultValue = '-',
    description,
    editAsGroup,
    label,
    labelClassName,
    obj,
    onEdit,
    canEdit = true,
    path,
    valueClassName,
  }) => {
    // const { t } = useTranslation();
    // const [model] = useK8sModel(obj ? cronTabModelRef : '');
    const popoverContent: string = 'popoverContent;'/*description ?? getPropertyDescription(model, path);*/
    const value: React.ReactNode = children;
    const editable = onEdit && canEdit;
    return /*hide*/false ? null : (
      <>
        <dt
        //   className={classnames('details-item__label', labelClassName)}
          data-test-selector={`details-item-label__${label}`}
        >
          <Split>
            <SplitItem className="details-item__label">
              {popoverContent || path ? (
                <Popover
                  headerContent={<div>{label}</div>}
                  {...(popoverContent && {
                    bodyContent: (
                    //   <LinkifyExternal>
                    //     <div className="co-pre-line">{popoverContent}</div>
                    //   </LinkifyExternal>
                    <>Link?</>
                    ),
                  })}
                //   {...(path && { footerContent: <PropertyPath kind={model?.kind} path={path} /> })}
                  maxWidth="30rem"
                >
                  <Button data-test={label} variant="plain" className="details-item__popover-button">
                    {label}
                  </Button>
                </Popover>
              ) : (
                label
              )}
            </SplitItem>
            {/*editable && editAsGroup*/true && (
              <>
                <SplitItem isFilled />
                <SplitItem>
                  <EditButton testId={label} onClick={onEdit}>
                    {/*t(*/'public~Edit'/*)*/}
                  </EditButton>
                </SplitItem>
              </>
            )}
          </Split>
        </dt>
        <dd
        //   className={classnames('details-item__value', valueClassName, {
        //     'details-item__value--group': editable && editAsGroup,
        //   })}
          data-test-selector={`details-item-value__${label}`}
        >
          {editable && !editAsGroup ? (
            <EditButton testId={label} onClick={onEdit}>
              {value}
            </EditButton>
          ) : (
            value
          )}
        </dd>
      </>
    );
  };
  
export type DetailsItemProps = {
    canEdit?: boolean;
    defaultValue?: React.ReactNode;
    description?: string;
    editAsGroup?: boolean;
    hideEmpty?: boolean;
    label: string;
    labelClassName?: string;
    obj?: CronTabKind;
    onEdit?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    path?: string | string[];
    valueClassName?: string;
};

const EditButton: React.SFC<EditButtonProps> = (props) => {
    return (
        <Button
        type="button"
        variant="link"
        isInline
        onClick={props.onClick}
        data-test={
            props.testId ? `${props.testId}-details-item__edit-button` : 'details-item__edit-button'
        }
        >
        {props.children}
        <PencilAltIcon className="co-icon-space-l pf-c-button-icon--plain" />
        </Button>
    );
};

type EditButtonProps = {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    testId?: string;
  };

//   export const PropertyPath: React.FC<{ kind: string; path: string | string[] }> = ({
//     kind,
//     path,
//   }) => {
//     const pathArray: string[] = _.toPath(path);
//     return (
//       <Breadcrumb className="co-breadcrumb">
//         <BreadcrumbItem>{kind}</BreadcrumbItem>
//         {pathArray.map((property, i) => {
//           const isLast = i === pathArray.length - 1;
//           return (
//             <BreadcrumbItem key={i} isActive={isLast}>
//               {property}
//             </BreadcrumbItem>
//           );
//         })}
//       </Breadcrumb>
//     );
//   };