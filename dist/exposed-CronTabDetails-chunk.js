"use strict";
(self["webpackChunkcrontab_plugin"] = self["webpackChunkcrontab_plugin"] || []).push([["exposed-CronTabDetails"],{

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

/***/ "./utils/Loading.tsx":
/*!***************************!*\
  !*** ./utils/Loading.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react?558d");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Loading = () => (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "co-m-loader co-an-fade-in-out", "data-test": "loading-indicator" },
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "co-m-loader-dot__one" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "co-m-loader-dot__two" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "co-m-loader-dot__three" })));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (react__WEBPACK_IMPORTED_MODULE_0__.memo(Loading));


/***/ }),

/***/ "./utils/constants.ts":
/*!****************************!*\
  !*** ./utils/constants.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_NAMESPACE": () => (/* binding */ DEFAULT_NAMESPACE)
/* harmony export */ });
const DEFAULT_NAMESPACE = 'default';


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

/***/ "./views/CronTabDetails.tsx":
/*!**********************************!*\
  !*** ./views/CronTabDetails.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react?558d");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _crontab_utils_Loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @crontab-utils/Loading */ "./utils/Loading.tsx");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @openshift-console/dynamic-plugin-sdk */ "webpack/sharing/consume/default/@openshift-console/dynamic-plugin-sdk");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _CronTabYAMLPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CronTabYAMLPage */ "./views/CronTabYAMLPage.tsx");
/* harmony import */ var _CronTabDetailsPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CronTabDetailsPage */ "./views/CronTabDetailsPage.tsx");
/* harmony import */ var _components_CronTabPageTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/CronTabPageTitle */ "./views/components/CronTabPageTitle.tsx");







const CronTabNavPage = ({ name, namespace, kind }) => {
    // const { t } = useKubevirtTranslation();
    const [cronTab, loaded] = (0,_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_2__.useK8sWatchResource)({
        groupVersionKind: {
            "group": "stable.example.com",
            "kind": "CronTab",
            "version": "v1"
        },
        kind,
        name,
        namespace,
    });
    const pages = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => [
        {
            href: '',
            name: 'Details',
            component: _CronTabDetailsPage__WEBPACK_IMPORTED_MODULE_5__["default"],
        },
        {
            href: 'yaml',
            name: 'YAML',
            component: _CronTabYAMLPage__WEBPACK_IMPORTED_MODULE_4__["default"],
        },
    ], []);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_CronTabPageTitle__WEBPACK_IMPORTED_MODULE_6__["default"], { cronTab: cronTab, namespace: namespace, name: name }),
        loaded ? (
        // <HorizontalNav pages={pages} resource={dataSource} />
        // <ResourceDetailsPage
        //   {...props}
        //   getResourceStatus={nodeStatus}
        //   menuActions={menuActions}
        //   pagesFor={pagesFor}
        // />
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_2__.HorizontalNav, { pages: pages, resource: cronTab })) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.Bullseye, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_crontab_utils_Loading__WEBPACK_IMPORTED_MODULE_1__["default"], null)))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CronTabNavPage);


/***/ }),

/***/ "./views/CronTabDetailsPage.tsx":
/*!**************************************!*\
  !*** ./views/CronTabDetailsPage.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react?558d");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_CronTabDetailsGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/CronTabDetailsGrid */ "./views/components/CronTabDetailsGrid.tsx");



const CronTabDetailsPage = ({ obj }) => {
    return (react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_1__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_0__.PageSection, null,
            react__WEBPACK_IMPORTED_MODULE_1__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_0__.Title, { headingLevel: "h2", className: "co-section-heading" }, "CronTab details")),
        react__WEBPACK_IMPORTED_MODULE_1__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_0__.PageSection, null,
            react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_CronTabDetailsGrid__WEBPACK_IMPORTED_MODULE_2__.CronTabDetailsGrid, { cronTab: obj }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CronTabDetailsPage);


/***/ }),

/***/ "./views/CronTabYAMLPage.tsx":
/*!***********************************!*\
  !*** ./views/CronTabYAMLPage.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react?558d");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _crontab_utils_Loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @crontab-utils/Loading */ "./utils/Loading.tsx");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @openshift-console/dynamic-plugin-sdk */ "webpack/sharing/consume/default/@openshift-console/dynamic-plugin-sdk");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__);




const CronTabYAMLPage = ({ obj: cronTab }) => {
    return !cronTab ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.PageSection, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.Title, { headingLevel: "h2", className: "co-section-heading" }, "CronTab details")))) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, { fallback: _crontab_utils_Loading__WEBPACK_IMPORTED_MODULE_1__["default"] },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_2__.ResourceYAMLEditor, { initialResource: cronTab, header: 'CronTab' })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CronTabYAMLPage);


/***/ }),

/***/ "./views/components/CronTabDetailsGrid.tsx":
/*!*************************************************!*\
  !*** ./views/components/CronTabDetailsGrid.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CronTabDetailsGrid": () => (/* binding */ CronTabDetailsGrid)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react?558d");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_DetailsItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/DetailsItem */ "./views/utils/DetailsItem.tsx");



const CronTabDetailsGrid = ({ cronTab }) => {
    // const { createModal } = useModal();
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.DescriptionList, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.DescriptionListGroup, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.DescriptionListTermHelpText, null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Popover, { headerContent: react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "Name"), bodyContent: react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "Additional name info") },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.DescriptionListTermHelpTextButton, null, " Name "))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.DescriptionListDescription, null, cronTab.metadata.name)),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.DescriptionListGroup, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.DescriptionListTerm, null, "Namespace"),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.DescriptionListDescription, null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", { href: "#" }, "mary-test"))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.DescriptionListGroup, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.DescriptionListTermHelpText, null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Popover, { headerContent: react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "Labels"), bodyContent: react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "Additional labels info") },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.DescriptionListTermHelpTextButton, null, " Labels "))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_utils_DetailsItem__WEBPACK_IMPORTED_MODULE_2__.DetailsItem, { label: /*t(*/ 'public~Labels' /*)*/, obj: cronTab, path: "metadata.labels", valueClassName: "details-item__value--labels", 
                // onEdit={(e) => editLabelsModal(e, { resource, kind: model })}
                canEdit: /*showLabelEditor && canUpdate*/ true, editAsGroup: true }))));
};


/***/ }),

/***/ "./views/components/CronTabPageTitle.tsx":
/*!***********************************************!*\
  !*** ./views/components/CronTabPageTitle.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react?558d");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_CronTabModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/CronTabModel */ "./models/CronTabModel.ts");
/* harmony import */ var _crontab_utils_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @crontab-utils/constants */ "./utils/constants.ts");





const CronTabPageTitle = ({ cronTab, name, namespace, }) => {
    var _a;
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "pf-c-page__main-breadcrumb" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Breadcrumb, { className: "pf-c-breadcrumb co-breadcrumb" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbItem, null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, { to: `/k8s/ns/${namespace || _crontab_utils_constants__WEBPACK_IMPORTED_MODULE_4__.DEFAULT_NAMESPACE}/${_models_CronTabModel__WEBPACK_IMPORTED_MODULE_3__.cronTabModelRef}` }, 'CronTabs')),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbItem, null, 'CronTab Details'))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "co-m-nav-title co-m-nav-title--detail co-m-nav-title--breadcrumbs" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "co-m-pane__heading" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", { className: "co-m-pane__name co-resource-item" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "co-m-resource-icon co-m-resource-icon--lg" }, 'DS'),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { "data-test-id": "resource-title", className: "co-resource-item__resource-name" }, name !== null && name !== void 0 ? name : (_a = cronTab === null || cronTab === void 0 ? void 0 : cronTab.metadata) === null || _a === void 0 ? void 0 : _a.name,
                        ' ')),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "co-actions" })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CronTabPageTitle);


/***/ }),

/***/ "./views/utils/DetailsItem.tsx":
/*!*************************************!*\
  !*** ./views/utils/DetailsItem.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsItem": () => (/* binding */ DetailsItem)
/* harmony export */ });
/* harmony import */ var _crontab_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @crontab-model */ "./models/index.ts");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @openshift-console/dynamic-plugin-sdk */ "webpack/sharing/consume/default/@openshift-console/dynamic-plugin-sdk");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-icons */ "../node_modules/@patternfly/react-icons/dist/esm/icons/pencil-alt-icon.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react?558d");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);





const DetailsItem = ({ children, defaultValue = '-', description, editAsGroup, label, labelClassName, obj, onEdit, canEdit = true, path, valueClassName, }) => {
    // const { t } = useTranslation();
    const [model] = (0,_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.useK8sModel)(obj ? _crontab_model__WEBPACK_IMPORTED_MODULE_0__.cronTabModelRef : '');
    const popoverContent = 'popoverContent;'; /*description ?? getPropertyDescription(model, path);*/
    const value = children;
    const editable = onEdit && canEdit;
    return /*hide*/  false ? 0 : (react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("dt", { "data-test-selector": `details-item-label__${label}` },
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Split, null,
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.SplitItem, { className: "details-item__label" }, popoverContent || path ? (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Popover, Object.assign({ headerContent: react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", null, label) }, (popoverContent && {
                    bodyContent: (
                    //   <LinkifyExternal>
                    //     <div className="co-pre-line">{popoverContent}</div>
                    //   </LinkifyExternal>
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null, "Link?")),
                }), { 
                    //   {...(path && { footerContent: <PropertyPath kind={model?.kind} path={path} /> })}
                    maxWidth: "30rem" }),
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Button, { "data-test": label, variant: "plain", className: "details-item__popover-button" }, label))) : (label)),
                 true && (react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.SplitItem, { isFilled: true }),
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.SplitItem, null,
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(EditButton, { testId: label, onClick: onEdit }, /*t(*/ 'public~Edit' /*)*/)))))),
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("dd", { "data-test-selector": `details-item-value__${label}` }, editable && !editAsGroup ? (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(EditButton, { testId: label, onClick: onEdit }, value)) : (value))));
};
const EditButton = (props) => {
    return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Button, { type: "button", variant: "link", isInline: true, onClick: props.onClick, "data-test": props.testId ? `${props.testId}-details-item__edit-button` : 'details-item__edit-button' },
        props.children,
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_4__.PencilAltIcon, { className: "co-icon-space-l pf-c-button-icon--plain" })));
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


/***/ })

}]);
//# sourceMappingURL=exposed-CronTabDetails-chunk.js.map