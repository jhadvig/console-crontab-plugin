"use strict";
self["webpackHotUpdatecrontab_plugin"]("exposed-CronTabDetails",{

/***/ "./views/CronTabDetails.tsx":
/*!**********************************!*\
  !*** ./views/CronTabDetails.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _crontab_utils_Loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @crontab-utils/Loading */ "./utils/Loading.tsx");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @openshift-console/dynamic-plugin-sdk */ "webpack/sharing/consume/default/@openshift-console/dynamic-plugin-sdk");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _CronTabYAMLPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CronTabYAMLPage */ "./views/CronTabYAMLPage.tsx");
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-env node */


// import { CronTabModel } from '@crontab-model/CronTabModel';



const CronTabNavPage = ({ name, namespace, kind }) => {
    // const { t } = useKubevirtTranslation();
    const [dataSource, loaded] = (0,_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_2__.useK8sWatchResource)({
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
            component: CronTabDetailsPage,
        },
        {
            href: 'yaml',
            name: 'YAML',
            component: _CronTabYAMLPage__WEBPACK_IMPORTED_MODULE_4__["default"],
        },
    ], []);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        "TEST",
        loaded ? (
        // <HorizontalNav pages={pages} resource={dataSource} />
        // <ResourceDetailsPage
        //   {...props}
        //   getResourceStatus={nodeStatus}
        //   menuActions={menuActions}
        //   pagesFor={pagesFor}
        // />
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null)) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.Bullseye, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_crontab_utils_Loading__WEBPACK_IMPORTED_MODULE_1__["default"], null)))));
};
const CronTabDetailsPage = ({ obj: dataSource }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.PageSection, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.Title, { headingLevel: "h2", className: "co-section-heading" }, "CronTab details"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CronTabNavPage);


/***/ })

});
//# sourceMappingURL=exposed-CronTabDetails.7b1440b441cc2c3ab10c.hot-update.js.map