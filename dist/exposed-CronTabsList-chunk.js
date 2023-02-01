"use strict";
(self["webpackChunkcrontab_plugin"] = self["webpackChunkcrontab_plugin"] || []).push([["exposed-CronTabsList"],{

/***/ "./models/CronTabModel.ts":
/*!********************************!*\
  !*** ./models/CronTabModel.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CronTabModel": () => (/* binding */ CronTabModel),
/* harmony export */   "cronTabModelRef": () => (/* binding */ cronTabModelRef)
/* harmony export */ });
/* harmony import */ var _crontab_utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @crontab-utils/utils */ "./utils/utils.ts");

const CronTabModel = {
    label: 'CronTab',
    labelPlural: 'CronTabs',
    apiVersion: 'v1',
    apiGroup: 'stable.example.com',
    plural: 'crontabs',
    abbr: 'crontabs',
    namespaced: true,
    kind: 'CronTab',
    id: 'crontab',
    crd: true,
};
const cronTabModelRef = (0,_crontab_utils_utils__WEBPACK_IMPORTED_MODULE_0__.modelToRef)(CronTabModel);


/***/ }),

/***/ "./models/index.ts":
/*!*************************!*\
  !*** ./models/index.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CronTabModel": () => (/* reexport safe */ _CronTabModel__WEBPACK_IMPORTED_MODULE_0__.CronTabModel),
/* harmony export */   "cronTabModelRef": () => (/* reexport safe */ _CronTabModel__WEBPACK_IMPORTED_MODULE_0__.cronTabModelRef)
/* harmony export */ });
/* harmony import */ var _CronTabModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CronTabModel */ "./models/CronTabModel.ts");



/***/ }),

/***/ "./utils/components/ModalProvider/ModalProvider.tsx":
/*!**********************************************************!*\
  !*** ./utils/components/ModalProvider/ModalProvider.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalContext": () => (/* binding */ ModalContext),
/* harmony export */   "ModalProvider": () => (/* binding */ ModalProvider),
/* harmony export */   "useModal": () => (/* binding */ useModal),
/* harmony export */   "useModalValue": () => (/* binding */ useModalValue)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react?558d");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ModalContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext({});
/**
 * A hook that returns a global modal context. This context is used to inject a modal component to the dom.
 * @example
 * const { createModal } = useModal();
 *
 * createModal(({ isOpen, onClose, appendTo }) => (
 *  <ExampleModal isOpen={isOpen} onClose={onClose} appendTo={appendTo} />
 * ))
 */
const useModal = () => react__WEBPACK_IMPORTED_MODULE_0__.useContext(ModalContext);
const useModalValue = () => {
    const [modal, setModal] = react__WEBPACK_IMPORTED_MODULE_0__.useState();
    const [isOpen, setIsOpen] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
    const createModal = (newModal) => {
        setIsOpen(true);
        setModal(() => newModal);
    };
    const onClose = () => {
        setIsOpen(false);
        setModal(undefined);
    };
    return { modal, isOpen, createModal, onClose };
};
const ModalProvider = ({ value = {}, children }) => {
    const { modal: Modal, isOpen, onClose } = value;
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(ModalContext.Provider, { value: value },
        Modal && isOpen && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(Modal, { isOpen: true, onClose: onClose, appendTo: () => document.querySelector('#modal-container') })),
        children));
};


/***/ }),

/***/ "./utils/utils.ts":
/*!************************!*\
  !*** ./utils/utils.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "modelToGroupVersionKind": () => (/* binding */ modelToGroupVersionKind),
/* harmony export */   "modelToRef": () => (/* binding */ modelToRef)
/* harmony export */ });
const modelToRef = (obj) => `${obj.apiGroup}~${obj.apiVersion}~${obj.kind}`;
const modelToGroupVersionKind = (obj) => ({
    version: obj.apiVersion,
    kind: obj.kind,
    group: obj.apiGroup,
});



/***/ }),

/***/ "./views/CronTabsList.tsx":
/*!********************************!*\
  !*** ./views/CronTabsList.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react?558d");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _crontab_utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @crontab-utils/utils */ "./utils/utils.ts");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @openshift-console/dynamic-plugin-sdk */ "webpack/sharing/consume/default/@openshift-console/dynamic-plugin-sdk");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _crontab_model_CronTabModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @crontab-model/CronTabModel */ "./models/CronTabModel.ts");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-table */ "webpack/sharing/consume/default/@patternfly/react-table");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_CronTabActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/CronTabActions */ "./views/components/CronTabActions.tsx");







const CronTabsList = ({ kind, namespace }) => {
    const [cronTabs, loaded, loadError] = (0,_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_2__.useK8sWatchResource)({
        isList: true,
        groupVersionKind: {
            "group": "stable.example.com",
            "kind": "CronTab",
            "version": "v1"
        },
        namespaced: true,
        namespace,
    });
    // const { t } = useTranslation();
    const columns = useCronTabColumns();
    const [data, filteredData, onFilterChange] = (0,_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_2__.useListPageFilter)(cronTabs);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_2__.ListPageHeader, { title: 'CronTab' },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_2__.ListPageCreate, { groupVersionKind: (0,_crontab_utils_utils__WEBPACK_IMPORTED_MODULE_1__.modelToRef)(_crontab_model_CronTabModel__WEBPACK_IMPORTED_MODULE_3__.CronTabModel) }, "Create CronTab")),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_2__.ListPageBody, null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_2__.ListPageFilter, { data: data, loaded: loaded, onFilterChange: onFilterChange }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_2__.VirtualizedTable, { data: filteredData, unfilteredData: cronTabs, loaded: loaded, loadError: loadError, columns: columns, Row: cronTabsListRow }))));
};
const cronTabsListRow = ({ obj, activeColumnIDs, }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_2__.TableData, { id: "name", activeColumnIDs: activeColumnIDs, className: "pf-m-width-15" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_2__.ResourceLink, { groupVersionKind: (0,_crontab_utils_utils__WEBPACK_IMPORTED_MODULE_1__.modelToGroupVersionKind)(_crontab_model_CronTabModel__WEBPACK_IMPORTED_MODULE_3__.CronTabModel), name: obj.metadata.name, namespace: obj.metadata.namespace })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_2__.TableData, { id: "namespace", activeColumnIDs: activeColumnIDs, className: "pf-m-width-15" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_2__.ResourceLink, { kind: "Namespace", name: obj.metadata.namespace })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_2__.TableData, { id: "cronspec", activeColumnIDs: activeColumnIDs, className: "pf-m-width-15" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_2__.ResourceLink, { kind: "cronspec", name: obj.spec.cronSpec, hideIcon: true })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_2__.TableData, { id: "image", activeColumnIDs: activeColumnIDs, className: "pf-m-width-15" }, obj.spec.image),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_2__.TableData, { id: "replicas", activeColumnIDs: activeColumnIDs, className: "pf-m-width-15" }, obj.spec.replicas),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_2__.TableData, { id: "created", activeColumnIDs: activeColumnIDs, className: "pf-m-width-15" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_2__.Timestamp, { timestamp: obj.metadata.creationTimestamp })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_CronTabActions__WEBPACK_IMPORTED_MODULE_5__["default"], { obj: obj })));
};
const useCronTabColumns = () => {
    const columns = react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(() => [
        {
            title: 'Name',
            id: 'name',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__.sortable],
            sort: 'metadata.name',
            props: { className: 'pf-m-width-15' },
        },
        {
            title: 'Namespace',
            id: 'namespace',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__.sortable],
            sort: 'metadata.namespace',
            props: { className: 'pf-m-width-15' },
        },
        {
            title: 'CronSpec',
            id: 'cronspec',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__.sortable],
            sort: 'spec.cronSpec',
            props: { className: 'pf-m-width-15' },
        },
        {
            title: 'Image',
            id: 'image',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__.sortable],
            sort: 'spec.image',
            props: { className: 'pf-m-width-15' },
        },
        {
            title: 'Replicas',
            id: 'replicas',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__.sortable],
            sort: 'spec.replicas',
            props: { className: 'pf-m-width-15' },
        },
        {
            title: 'Created',
            id: 'created',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__.sortable],
            sort: 'metadata.creationTimestamp',
            props: { className: 'pf-m-width-15' },
        },
        {
            title: '',
            id: 'actions',
            props: { className: 'dropdown-kebab-pf pf-c-table__action' },
        },
    ], []);
    return columns;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CronTabsList);


/***/ }),

/***/ "./views/components/ConfirmActionMessage/ConfirmActionMessage.tsx":
/*!************************************************************************!*\
  !*** ./views/components/ConfirmActionMessage/ConfirmActionMessage.tsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react?558d");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_1__);


const ConfirmActionMessage = ({ obj, action = 'delete' }) => {
    var _a, _b;
    const t = (key) => key;
    const objNamespace = (_a = obj === null || obj === void 0 ? void 0 : obj.metadata) === null || _a === void 0 ? void 0 : _a.namespace;
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_i18next__WEBPACK_IMPORTED_MODULE_1__.Trans, { t: t },
        "Are you sure you want to ",
        action,
        " ",
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, (_b = obj === null || obj === void 0 ? void 0 : obj.metadata) === null || _b === void 0 ? void 0 : _b.name),
        objNamespace && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
            ' ',
            "in namespace ",
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, objNamespace))),
        "?"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConfirmActionMessage);


/***/ }),

/***/ "./views/components/CronTabActions.tsx":
/*!*********************************************!*\
  !*** ./views/components/CronTabActions.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getContentScrollableElement": () => (/* binding */ getContentScrollableElement)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react?558d");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @openshift-console/dynamic-plugin-sdk */ "webpack/sharing/consume/default/@openshift-console/dynamic-plugin-sdk");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _crontab_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @crontab-model */ "./models/index.ts");
/* harmony import */ var _TabModal_TabModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TabModal/TabModal */ "./views/components/TabModal/TabModal.tsx");
/* harmony import */ var _ConfirmActionMessage_ConfirmActionMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ConfirmActionMessage/ConfirmActionMessage */ "./views/components/ConfirmActionMessage/ConfirmActionMessage.tsx");
/* harmony import */ var _crontab_utils_components_ModalProvider_ModalProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @crontab-utils/components/ModalProvider/ModalProvider */ "./utils/components/ModalProvider/ModalProvider.tsx");
// import { KebabToggle } from "@patternfly/react-core";
// import { CustomActionsToggleProps, IAction } from "@patternfly/react-table";
// import React from "react";
// export const defaultActions: IAction[] = [
//     {
//       title: 'Some action',
//       onClick: event => {
//         event.stopPropagation();
//         console.log('clicked on Some action');
//       }
//     },
//     {
//       title: <a href="https://www.patternfly.org">Link action</a>,
//       onClick: event => {
//         event.stopPropagation();
//         console.log('clicked on Link action');
//       }
//     },
//     {
//       isSeparator: true
//     },
//     {
//       title: 'Third action',
//       onClick: event => {
//         event.stopPropagation();
//         console.log('clicked on Third action');
//       }
//     }
// ];
// export const customActionsToggle = (props: CustomActionsToggleProps) => (
//     <KebabToggle
//       isDisabled={props.isDisabled}
//       onToggle={(value, event) => {
//         props.onToggle(value);
//         event.stopPropagation();
//       }}
//     />
//   );







const CronTabActions = ({ obj }) => {
    //   const { t } = useKubevirtTranslation();
    //   const { vm, updateVM, tabsData, updateTabsData } = useWizardVMContext();
    const { createModal } = (0,_crontab_utils_components_ModalProvider_ModalProvider__WEBPACK_IMPORTED_MODULE_6__.useModal)();
    const [isDropdownOpen, setIsDropdownOpen] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
    //   const deleteBtnText = t('Detach');
    //   const { initialDiskState, initialDiskSourceState } = useEditDiskStates(vm, diskName);
    const onDelete = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
        return (0,_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.k8sDelete)({
            model: _crontab_model__WEBPACK_IMPORTED_MODULE_3__.CronTabModel,
            resource: obj,
        })
            .catch(console.error);
        // .finally(() => updateVM(vmWithDeletedDisk)) as Promise<V1VirtualMachine>;
        // return updateVM(vmWithDeletedDisk);
    }, [obj /*diskName, tabsData?.disks?.dataVolumesToAddOwnerRef, updateVM, vm*/]);
    const t = (key) => key;
    const onDeleteModalToggle = () => {
        createModal(({ isOpen, onClose }) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TabModal_TabModal__WEBPACK_IMPORTED_MODULE_4__["default"], { onClose: onClose, isOpen: isOpen, obj: obj, onSubmit: onDelete, headerText: t('Detach disk?'), submitBtnText: 'deleteBtnText', submitBtnVariant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.ButtonVariant.danger },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ConfirmActionMessage_ConfirmActionMessage__WEBPACK_IMPORTED_MODULE_5__["default"], { obj: obj, action: "detach" }))));
    };
    //   const onEditModalToggle = () => {
    //     createModal(({ isOpen, onClose }) => (
    //       <EditDiskModal
    //         vm={vm}
    //         isOpen={isOpen}
    //         onClose={onClose}
    //         headerText={t('Edit disk')}
    //         onSubmit={updateVM}
    //         initialDiskState={initialDiskState}
    //         initialDiskSourceState={initialDiskSourceState}
    //         createOwnerReference={false}
    //         onUploadedDataVolume={(dataVolume) =>
    //           updateTabsData((draft) => {
    //             ensurePath(draft, 'disks.dataVolumesToAddOwnerRef');
    //             if (draft.disks) {
    //               draft.disks.dataVolumesToAddOwnerRef = [
    //                 ...(tabsData?.disks?.dataVolumesToAddOwnerRef || []),
    //                 dataVolume,
    //               ];
    //             }
    //           })
    //         }
    //       />
    //     ));
    //   };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Dropdown, { menuAppendTo: getContentScrollableElement, onSelect: () => setIsDropdownOpen(false), toggle: react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.KebabToggle, { onToggle: setIsDropdownOpen, id: "toggle-id-disk" }), isOpen: isDropdownOpen, isPlain: true, dropdownItems: [
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.DropdownItem, { onClick: () => { } /*onEditModalToggle*/, key: "disk-edit" }, /*t(*/ 'Edit' /*)*/),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.DropdownItem, { onClick: onDeleteModalToggle, key: "disk-delete" }, 'deleteBtnText'),
        ], position: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.DropdownPosition.right }));
};
const getContentScrollableElement = () => document.getElementById('content-scrollable');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CronTabActions);


/***/ }),

/***/ "./views/components/TabModal/TabModal.tsx":
/*!************************************************!*\
  !*** ./views/components/TabModal/TabModal.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react?558d");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__);


const TabModal = react__WEBPACK_IMPORTED_MODULE_0__.memo(({ obj, onSubmit, isOpen, onClose, headerText, children, isDisabled, submitBtnText, modalVariant, positionTop = true, submitBtnVariant, titleIconVariant, }) => {
    const [isSubmitting, setIsSubmitting] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
    const [error, setError] = react__WEBPACK_IMPORTED_MODULE_0__.useState(undefined);
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(undefined);
        onSubmit(obj)
            .then(onClose)
            .catch(setError)
            .finally(() => setIsSubmitting(false));
    };
    const t = (key) => key;
    const closeModal = () => {
        setError(undefined);
        setIsSubmitting(false);
        const promise = onClose();
        if (promise)
            promise === null || promise === void 0 ? void 0 : promise.catch(setError);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Modal, { variant: modalVariant !== null && modalVariant !== void 0 ? modalVariant : 'small', position: positionTop ? 'top' : undefined, className: "ocs-modal", onClose: closeModal, title: headerText, titleIconVariant: titleIconVariant, footer: react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Stack, { className: "kv-tabmodal-footer", hasGutter: true },
            error && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.StackItem, null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Alert, { isInline: true, variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.AlertVariant.danger, title: t('An error occurred') },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Stack, { hasGutter: true },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.StackItem, null, error.message),
                        (error === null || error === void 0 ? void 0 : error.href) && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.StackItem, null,
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", { href: error.href, target: "_blank", rel: "noreferrer" }, error.href))))))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.StackItem, null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.ActionList, null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.ActionListItem, null,
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Button, { onClick: handleSubmit, isDisabled: isDisabled || isSubmitting, isLoading: isSubmitting, variant: submitBtnVariant !== null && submitBtnVariant !== void 0 ? submitBtnVariant : 'primary' }, submitBtnText || t('Save'))),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.ActionListItem, null,
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Button, { onClick: closeModal, variant: "link" }, t('Cancel')))))), isOpen: isOpen, id: "tab-modal" }, children));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TabModal);


/***/ })

}]);
//# sourceMappingURL=exposed-CronTabsList-chunk.js.map