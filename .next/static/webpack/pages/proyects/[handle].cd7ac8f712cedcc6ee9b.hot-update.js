"use strict";
self["webpackHotUpdate_N_E"]("pages/proyects/[handle]",{

/***/ "./pages/proyects/[handle].js":
/*!************************************!*\
  !*** ./pages/proyects/[handle].js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useAPI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useAPI */ "./hooks/useAPI/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\crisdevels\\super-waddle\\pages\\proyects\\[handle].js",
    _this = undefined,
    _s = $RefreshSig$();






var Proyect = function Proyect() {
  _s();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();

  var _useAPI = (0,_hooks_useAPI__WEBPACK_IMPORTED_MODULE_2__.useAPI)("/api/projects/".concat(router.query.handle)),
      data = _useAPI.data,
      isError = _useAPI.isError,
      isLoading = _useAPI.isLoading;

  if (isLoading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    children: "..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 25
  }, _this);
  if (isError) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    children: "Not found"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 23
  }, _this);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
      children: data.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, _this);
};

_s(Proyect, "jaAKqsTakCX3jnr+UOpnVgXEChE=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter, _hooks_useAPI__WEBPACK_IMPORTED_MODULE_2__.useAPI];
});

_c = Proyect;
/* harmony default export */ __webpack_exports__["default"] = (Proyect);

var _c;

$RefreshReg$(_c, "Proyect");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJveWVjdHMvW2hhbmRsZV0uY2Q3YWM4ZjcxMmNlZGNjNmVlOWIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFFQSxJQUFNRyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQ3BCLE1BQU1DLE1BQU0sR0FBR0gsc0RBQVMsRUFBeEI7O0FBRUEsZ0JBQXFDQyxxREFBTSx5QkFBa0JFLE1BQU0sQ0FBQ0MsS0FBUCxDQUFhQyxNQUEvQixFQUEzQztBQUFBLE1BQVFDLElBQVIsV0FBUUEsSUFBUjtBQUFBLE1BQWNDLE9BQWQsV0FBY0EsT0FBZDtBQUFBLE1BQXVCQyxTQUF2QixXQUF1QkEsU0FBdkI7O0FBRUEsTUFBSUEsU0FBSixFQUFlLG9CQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDZixNQUFJRCxPQUFKLEVBQWEsb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUViLHNCQUNFO0FBQUEsMkJBQ0U7QUFBQSxnQkFBUUQsSUFBSSxDQUFDRztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFLRCxDQWJEOztHQUFNUDtVQUNXRixvREFFc0JDOzs7S0FIakNDO0FBZU4sK0RBQWVBLE9BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJveWVjdHMvW2hhbmRsZV0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlQVBJIH0gZnJvbSBcIi4uLy4uL2hvb2tzL3VzZUFQSVwiO1xyXG5cclxuY29uc3QgUHJveWVjdCA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBcclxuICBjb25zdCB7IGRhdGEsIGlzRXJyb3IsIGlzTG9hZGluZyB9ID0gdXNlQVBJKGAvYXBpL3Byb2plY3RzLyR7cm91dGVyLnF1ZXJ5LmhhbmRsZX1gKVxyXG5cclxuICBpZiAoaXNMb2FkaW5nKSByZXR1cm4gPGRpdj4uLi48L2Rpdj5cclxuICBpZiAoaXNFcnJvcikgcmV0dXJuIDxkaXY+Tm90IGZvdW5kPC9kaXY+XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8c3Bhbj57IGRhdGEubmFtZSB9PC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm95ZWN0OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJvdXRlciIsInVzZUFQSSIsIlByb3llY3QiLCJyb3V0ZXIiLCJxdWVyeSIsImhhbmRsZSIsImRhdGEiLCJpc0Vycm9yIiwiaXNMb2FkaW5nIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=