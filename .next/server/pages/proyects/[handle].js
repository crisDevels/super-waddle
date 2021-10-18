"use strict";
(() => {
var exports = {};
exports.id = "pages/proyects/[handle]";
exports.ids = ["pages/proyects/[handle]"];
exports.modules = {

/***/ "./hooks/useAPI/index.js":
/*!*******************************!*\
  !*** ./hooks/useAPI/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useAPI": () => (/* binding */ useAPI)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ "swr");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_1__);



const fetcher = async url => {
  const request = await axios__WEBPACK_IMPORTED_MODULE_0___default()(url);
  return request.data;
};

const useAPI = url => {
  const {
    data,
    error
  } = swr__WEBPACK_IMPORTED_MODULE_1___default()(url, fetcher);
  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  };
};

/***/ }),

/***/ "./pages/proyects/[handle].js":
/*!************************************!*\
  !*** ./pages/proyects/[handle].js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useAPI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useAPI */ "./hooks/useAPI/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\crisdevels\\super-waddle\\pages\\proyects\\[handle].js";





const Proyect = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const {
    data,
    isError,
    isLoading
  } = (0,_hooks_useAPI__WEBPACK_IMPORTED_MODULE_2__.useAPI)(`/api/projects/${router.query.handle}`);
  if (isLoading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    children: "..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 25
  }, undefined);
  if (isError) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    children: "Not found"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 23
  }, undefined);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
      children: data.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Proyect);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("swr");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/proyects/[handle].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvcHJveWVjdHMvW2hhbmRsZV0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNRSxPQUFPLEdBQUcsTUFBT0MsR0FBUCxJQUFlO0FBQzdCLFFBQU1DLE9BQU8sR0FBSSxNQUFNSiw0Q0FBSyxDQUFDRyxHQUFELENBQTVCO0FBQ0EsU0FBT0MsT0FBTyxDQUFDQyxJQUFmO0FBQ0QsQ0FIRDs7QUFLTyxNQUFNQyxNQUFNLEdBQUlILEdBQUQsSUFBUztBQUM3QixRQUFNO0FBQUVFLElBQUFBLElBQUY7QUFBUUUsSUFBQUE7QUFBUixNQUFrQk4sMENBQU0sQ0FBQ0UsR0FBRCxFQUFNRCxPQUFOLENBQTlCO0FBRUEsU0FBTztBQUNMRyxJQUFBQSxJQUFJLEVBQUVBLElBREQ7QUFFTEcsSUFBQUEsU0FBUyxFQUFFLENBQUNELEtBQUQsSUFBVSxDQUFDRixJQUZqQjtBQUdMSSxJQUFBQSxPQUFPLEVBQUVGO0FBSEosR0FBUDtBQUtELENBUk07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSUDtBQUNBO0FBQ0E7OztBQUVBLE1BQU1LLE9BQU8sR0FBRyxNQUFNO0FBQ3BCLFFBQU1DLE1BQU0sR0FBR0Ysc0RBQVMsRUFBeEI7QUFFQSxRQUFNO0FBQUVOLElBQUFBLElBQUY7QUFBUUksSUFBQUEsT0FBUjtBQUFpQkQsSUFBQUE7QUFBakIsTUFBK0JGLHFEQUFNLENBQUUsaUJBQWdCTyxNQUFNLENBQUNDLEtBQVAsQ0FBYUMsTUFBTyxFQUF0QyxDQUEzQztBQUVBLE1BQUlQLFNBQUosRUFBZSxvQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ2YsTUFBSUMsT0FBSixFQUFhLG9CQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFFYixzQkFDRTtBQUFBLDJCQUNFO0FBQUEsZ0JBQVFKLElBQUksQ0FBQ1c7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBS0QsQ0FiRDs7QUFlQSxpRUFBZUosT0FBZjs7Ozs7Ozs7OztBQ25CQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3VwZXItd2FkZGxlLy4vaG9va3MvdXNlQVBJL2luZGV4LmpzIiwid2VicGFjazovL3N1cGVyLXdhZGRsZS8uL3BhZ2VzL3Byb3llY3RzL1toYW5kbGVdLmpzIiwid2VicGFjazovL3N1cGVyLXdhZGRsZS9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vc3VwZXItd2FkZGxlL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9zdXBlci13YWRkbGUvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3N1cGVyLXdhZGRsZS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL3N1cGVyLXdhZGRsZS9leHRlcm5hbCBcInN3clwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcclxuXHJcbmNvbnN0IGZldGNoZXIgPSBhc3luYyAodXJsKSA9PiB7XHJcbiAgY29uc3QgcmVxdWVzdCA9ICBhd2FpdCBheGlvcyh1cmwpXHJcbiAgcmV0dXJuIHJlcXVlc3QuZGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUFQSSA9ICh1cmwpID0+IHtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IodXJsLCBmZXRjaGVyKVxyXG4gIFxyXG4gIHJldHVybiB7XHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gICAgaXNMb2FkaW5nOiAhZXJyb3IgJiYgIWRhdGEsXHJcbiAgICBpc0Vycm9yOiBlcnJvcixcclxuICAgfVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlQVBJIH0gZnJvbSBcIi4uLy4uL2hvb2tzL3VzZUFQSVwiO1xyXG5cclxuY29uc3QgUHJveWVjdCA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBcclxuICBjb25zdCB7IGRhdGEsIGlzRXJyb3IsIGlzTG9hZGluZyB9ID0gdXNlQVBJKGAvYXBpL3Byb2plY3RzLyR7cm91dGVyLnF1ZXJ5LmhhbmRsZX1gKVxyXG5cclxuICBpZiAoaXNMb2FkaW5nKSByZXR1cm4gPGRpdj4uLi48L2Rpdj5cclxuICBpZiAoaXNFcnJvcikgcmV0dXJuIDxkaXY+Tm90IGZvdW5kPC9kaXY+XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8c3Bhbj57IGRhdGEubmFtZSB9PC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm95ZWN0OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzd3JcIik7Il0sIm5hbWVzIjpbImF4aW9zIiwidXNlU1dSIiwiZmV0Y2hlciIsInVybCIsInJlcXVlc3QiLCJkYXRhIiwidXNlQVBJIiwiZXJyb3IiLCJpc0xvYWRpbmciLCJpc0Vycm9yIiwiUmVhY3QiLCJ1c2VSb3V0ZXIiLCJQcm95ZWN0Iiwicm91dGVyIiwicXVlcnkiLCJoYW5kbGUiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==