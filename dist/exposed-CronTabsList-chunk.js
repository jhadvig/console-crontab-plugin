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
/* harmony export */   "DataSourceModelRef": () => (/* binding */ DataSourceModelRef)
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
const DataSourceModelRef = (0,_crontab_utils_utils__WEBPACK_IMPORTED_MODULE_0__.modelToRef)(CronTabModel);


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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _crontab_utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @crontab-utils/utils */ "./utils/utils.ts");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @openshift-console/dynamic-plugin-sdk */ "webpack/sharing/consume/default/@openshift-console/dynamic-plugin-sdk");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _crontab_model_CronTabModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @crontab-model/CronTabModel */ "./models/CronTabModel.ts");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-table */ "webpack/sharing/consume/default/@patternfly/react-table");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__);






// const { common } = Kebab.factory;
// export const menuActions = [...Kebab.getExtensionsActionsForKind(CronJobModel), ...common];
// const kind = 'CronTab';
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
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_2__.TableData, { id: "image", activeColumnIDs: activeColumnIDs, className: "pf-m-width-15" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_2__.ResourceLink, { kind: "image", name: obj.spec.image, hideIcon: true })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_2__.TableData, { id: "replicas", activeColumnIDs: activeColumnIDs, className: "pf-m-width-15" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_2__.ResourceLink, { kind: "Replica", name: obj.spec.replicas, hideIcon: true })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_2__.TableData, { id: "created", activeColumnIDs: activeColumnIDs, className: "pf-m-width-15" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_2__.Timestamp, { timestamp: obj.metadata.creationTimestamp }))));
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
    ], []);
    return columns;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CronTabsList);


/***/ })

}]);
//# sourceMappingURL=exposed-CronTabsList-chunk.js.map