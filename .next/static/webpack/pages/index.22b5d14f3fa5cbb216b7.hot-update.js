"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Index; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _hooks_useAPI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useAPI */ "./hooks/useAPI/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\crisdevels\\super-waddle\\pages\\index.js",
    _s = $RefreshSig$();






function Index() {
  _s();

  var _this = this;

  var _useAPI = (0,_hooks_useAPI__WEBPACK_IMPORTED_MODULE_2__.useAPI)('/api/projects'),
      data = _useAPI.data,
      isLoading = _useAPI.isLoading,
      isError = _useAPI.isError;

  if (isLoading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    children: "..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 24
  }, this);
  if (isError) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    children: "Not found"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 22
  }, this);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_1__.default, {
      title: "Projects",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("ul", {
        children: data.map(function (project) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("li", {
            children: project.name
          }, project.id, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

_s(Index, "QwEU9Zsnw+qKiG9Nm3JTs5aoKoU=", false, function () {
  return [_hooks_useAPI__WEBPACK_IMPORTED_MODULE_2__.useAPI];
});

_c = Index;

var _c;

$RefreshReg$(_c, "Index");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjJiNWQxNGYzZmE1Y2JiMjE2YjcuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBRWUsU0FBU0csS0FBVCxHQUFrQjtBQUFBOztBQUFBOztBQUMvQixnQkFBcUNELHFEQUFNLENBQUMsZUFBRCxDQUEzQztBQUFBLE1BQVFFLElBQVIsV0FBUUEsSUFBUjtBQUFBLE1BQWNDLFNBQWQsV0FBY0EsU0FBZDtBQUFBLE1BQXlCQyxPQUF6QixXQUF5QkEsT0FBekI7O0FBRUEsTUFBR0QsU0FBSCxFQUFjLG9CQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDZCxNQUFHQyxPQUFILEVBQVksb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUVaLHNCQUNFO0FBQUEsMkJBQ0UsOERBQUMsdURBQUQ7QUFBUSxXQUFLLEVBQUMsVUFBZDtBQUFBLDZCQUNFO0FBQUEsa0JBQ0dGLElBQUksQ0FBQ0csR0FBTCxDQUFTLFVBQUFDLE9BQU8sRUFBSTtBQUNuQiw4QkFDRTtBQUFBLHNCQUNHQSxPQUFPLENBQUNDO0FBRFgsYUFBU0QsT0FBTyxDQUFDRSxFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGO0FBS0QsU0FOQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFlRDs7R0FyQnVCUDtVQUNlRDs7O0tBRGZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCdcclxuaW1wb3J0IHsgdXNlQVBJIH0gZnJvbSAnLi4vaG9va3MvdXNlQVBJJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXggKCkge1xyXG4gIGNvbnN0IHsgZGF0YSwgaXNMb2FkaW5nLCBpc0Vycm9yIH0gPSB1c2VBUEkoJy9hcGkvcHJvamVjdHMnKVxyXG5cclxuICBpZihpc0xvYWRpbmcpIHJldHVybiA8ZGl2Pi4uLjwvZGl2PlxyXG4gIGlmKGlzRXJyb3IpIHJldHVybiA8ZGl2Pk5vdCBmb3VuZDwvZGl2PlxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPExheW91dCB0aXRsZT1cIlByb2plY3RzXCI+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAge2RhdGEubWFwKHByb2plY3QgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxsaSBrZXk9e3Byb2plY3QuaWR9PlxyXG4gICAgICAgICAgICAgICAge3Byb2plY3QubmFtZX1cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGF5b3V0IiwidXNlQVBJIiwiSW5kZXgiLCJkYXRhIiwiaXNMb2FkaW5nIiwiaXNFcnJvciIsIm1hcCIsInByb2plY3QiLCJuYW1lIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9