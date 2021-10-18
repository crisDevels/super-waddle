"use strict";
(() => {
var exports = {};
exports.id = "pages/proyect/[handle]";
exports.ids = ["pages/proyect/[handle]"];
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

/***/ "./pages/proyect/[handle].js":
/*!***********************************!*\
  !*** ./pages/proyect/[handle].js ***!
  \***********************************/
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
var _jsxFileName = "C:\\crisdevels\\super-waddle\\pages\\proyect\\[handle].js";





const Proyect = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const {
    data,
    isError,
    isLoading
  } = (0,_hooks_useAPI__WEBPACK_IMPORTED_MODULE_2__.useAPI)(`/projects/${router.query.handle}`);
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
      lineNumber: 14,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
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
var __webpack_exports__ = (__webpack_exec__("./pages/proyect/[handle].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvcHJveWVjdC9baGFuZGxlXS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1FLE9BQU8sR0FBRyxNQUFPQyxHQUFQLElBQWU7QUFDN0IsUUFBTUMsT0FBTyxHQUFJLE1BQU1KLDRDQUFLLENBQUNHLEdBQUQsQ0FBNUI7QUFDQSxTQUFPQyxPQUFPLENBQUNDLElBQWY7QUFDRCxDQUhEOztBQUtPLE1BQU1DLE1BQU0sR0FBSUgsR0FBRCxJQUFTO0FBQzdCLFFBQU07QUFBRUUsSUFBQUEsSUFBRjtBQUFRRSxJQUFBQTtBQUFSLE1BQWtCTiwwQ0FBTSxDQUFDRSxHQUFELEVBQU1ELE9BQU4sQ0FBOUI7QUFFQSxTQUFPO0FBQ0xHLElBQUFBLElBQUksRUFBRUEsSUFERDtBQUVMRyxJQUFBQSxTQUFTLEVBQUUsQ0FBQ0QsS0FBRCxJQUFVLENBQUNGLElBRmpCO0FBR0xJLElBQUFBLE9BQU8sRUFBRUY7QUFISixHQUFQO0FBS0QsQ0FSTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JQO0FBQ0E7QUFDQTs7O0FBRUEsTUFBTUssT0FBTyxHQUFHLE1BQU07QUFDcEIsUUFBTUMsTUFBTSxHQUFHRixzREFBUyxFQUF4QjtBQUVBLFFBQU07QUFBRU4sSUFBQUEsSUFBRjtBQUFRSSxJQUFBQSxPQUFSO0FBQWlCRCxJQUFBQTtBQUFqQixNQUErQkYscURBQU0sQ0FBRSxhQUFZTyxNQUFNLENBQUNDLEtBQVAsQ0FBYUMsTUFBTyxFQUFsQyxDQUEzQztBQUVBLE1BQUlQLFNBQUosRUFBZSxvQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ2YsTUFBSUMsT0FBSixFQUFhLG9CQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDYixzQkFDRTtBQUFBLDJCQUNFO0FBQUEsZ0JBQVFKLElBQUksQ0FBQ1c7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBS0QsQ0FaRDs7QUFjQSxpRUFBZUosT0FBZjs7Ozs7Ozs7OztBQ2xCQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3VwZXItd2FkZGxlLy4vaG9va3MvdXNlQVBJL2luZGV4LmpzIiwid2VicGFjazovL3N1cGVyLXdhZGRsZS8uL3BhZ2VzL3Byb3llY3QvW2hhbmRsZV0uanMiLCJ3ZWJwYWNrOi8vc3VwZXItd2FkZGxlL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9zdXBlci13YWRkbGUvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL3N1cGVyLXdhZGRsZS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vc3VwZXItd2FkZGxlL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vc3VwZXItd2FkZGxlL2V4dGVybmFsIFwic3dyXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xyXG5cclxuY29uc3QgZmV0Y2hlciA9IGFzeW5jICh1cmwpID0+IHtcclxuICBjb25zdCByZXF1ZXN0ID0gIGF3YWl0IGF4aW9zKHVybClcclxuICByZXR1cm4gcmVxdWVzdC5kYXRhO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlQVBJID0gKHVybCkgPT4ge1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUih1cmwsIGZldGNoZXIpXHJcbiAgXHJcbiAgcmV0dXJuIHtcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgICBpc0xvYWRpbmc6ICFlcnJvciAmJiAhZGF0YSxcclxuICAgIGlzRXJyb3I6IGVycm9yLFxyXG4gICB9XHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VBUEkgfSBmcm9tIFwiLi4vLi4vaG9va3MvdXNlQVBJXCI7XHJcblxyXG5jb25zdCBQcm95ZWN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIFxyXG4gIGNvbnN0IHsgZGF0YSwgaXNFcnJvciwgaXNMb2FkaW5nIH0gPSB1c2VBUEkoYC9wcm9qZWN0cy8ke3JvdXRlci5xdWVyeS5oYW5kbGV9YClcclxuXHJcbiAgaWYgKGlzTG9hZGluZykgcmV0dXJuIDxkaXY+Li4uPC9kaXY+XHJcbiAgaWYgKGlzRXJyb3IpIHJldHVybiA8ZGl2Pk5vdCBmb3VuZDwvZGl2PlxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8c3Bhbj57IGRhdGEubmFtZSB9PC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm95ZWN0OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzd3JcIik7Il0sIm5hbWVzIjpbImF4aW9zIiwidXNlU1dSIiwiZmV0Y2hlciIsInVybCIsInJlcXVlc3QiLCJkYXRhIiwidXNlQVBJIiwiZXJyb3IiLCJpc0xvYWRpbmciLCJpc0Vycm9yIiwiUmVhY3QiLCJ1c2VSb3V0ZXIiLCJQcm95ZWN0Iiwicm91dGVyIiwicXVlcnkiLCJoYW5kbGUiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==