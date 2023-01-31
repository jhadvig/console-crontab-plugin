"use strict";
(self["webpackChunkcrontab_plugin"] = self["webpackChunkcrontab_plugin"] || []).push([["exposed-yamlTemplates"],{

/***/ "./templates/crontab-yaml.ts":
/*!***********************************!*\
  !*** ./templates/crontab-yaml.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultCronTabYamlTemplate": () => (/* binding */ defaultCronTabYamlTemplate)
/* harmony export */ });
const defaultCronTabYamlTemplate = `
apiVersion: "stable.example.com/v1"
kind: CronTab
metadata:
  name: my-new-cron-object
spec:
  cronSpec: "* * * * */5"
  image: my-awesome-cron-image
`;


/***/ }),

/***/ "./templates/index.ts":
/*!****************************!*\
  !*** ./templates/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultCronTabYamlTemplate": () => (/* reexport safe */ _crontab_yaml__WEBPACK_IMPORTED_MODULE_0__.defaultCronTabYamlTemplate)
/* harmony export */ });
/* harmony import */ var _crontab_yaml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crontab-yaml */ "./templates/crontab-yaml.ts");



/***/ })

}]);
//# sourceMappingURL=exposed-yamlTemplates-chunk.js.map