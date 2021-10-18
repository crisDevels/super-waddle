"use strict";
self["webpackHotUpdate_N_E"]("pages/about",{

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useAPI */ "./hooks/useAPI/index.js");
/* harmony import */ var _components_profile_skill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/profile/skill */ "./pages/components/profile/skill.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\crisdevels\\super-waddle\\pages\\about.js",
    _this = undefined,
    _s = $RefreshSig$();






var About = function About() {
  _s();

  var _useAPI = (0,_hooks_useAPI__WEBPACK_IMPORTED_MODULE_1__.useAPI)('/api/profile'),
      data = _useAPI.data,
      isError = _useAPI.isError,
      isLoading = _useAPI.isLoading;

  if (isError) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    children: "NO FIELDS"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 23
  }, _this);
  if (isLoading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    children: "..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 25
  }, _this);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h2", {
      children: ["Hello stranger, my name is ", data.firstName]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("ul", {
      children: data.skills.map(function (skill) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_profile_skill__WEBPACK_IMPORTED_MODULE_2__.Skill, {
          data: skill
        }, skill.id, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 18
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, _this);
};

_s(About, "RPOimRQOqa9G/XgpOTufqCB/zrc=", false, function () {
  return [_hooks_useAPI__WEBPACK_IMPORTED_MODULE_1__.useAPI];
});

_c = About;
/* harmony default export */ __webpack_exports__["default"] = (About);

var _c;

$RefreshReg$(_c, "About");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWJvdXQuOWZlMDlmYmRlMDczY2YzOWU5MDMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1HLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFDbEIsZ0JBQXFDRixxREFBTSxDQUFDLGNBQUQsQ0FBM0M7QUFBQSxNQUFRRyxJQUFSLFdBQVFBLElBQVI7QUFBQSxNQUFjQyxPQUFkLFdBQWNBLE9BQWQ7QUFBQSxNQUF1QkMsU0FBdkIsV0FBdUJBLFNBQXZCOztBQUVBLE1BQUlELE9BQUosRUFBYSxvQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBQ2IsTUFBSUMsU0FBSixFQUFlLG9CQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFFZixzQkFDRTtBQUFBLDRCQUNFO0FBQUEsZ0RBQWdDRixJQUFJLENBQUNHLFNBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBR0U7QUFBQSxnQkFDR0gsSUFBSSxDQUFDSSxNQUFMLENBQVlDLEdBQVosQ0FBZ0IsVUFBQUMsS0FBSyxFQUFJO0FBQ3hCLDRCQUFPLDhEQUFDLDREQUFEO0FBQXNCLGNBQUksRUFBRUE7QUFBNUIsV0FBWUEsS0FBSyxDQUFDQyxFQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFQO0FBQ0QsT0FGQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVlELENBbEJEOztHQUFNUjtVQUNpQ0Y7OztLQURqQ0U7QUFvQk4sK0RBQWVBLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWJvdXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VBUEkgfSBmcm9tICcuLi9ob29rcy91c2VBUEknXHJcbmltcG9ydCB7IFNraWxsIH0gZnJvbSAnLi9jb21wb25lbnRzL3Byb2ZpbGUvc2tpbGwnXHJcblxyXG5jb25zdCBBYm91dCA9ICgpID0+IHtcclxuICBjb25zdCB7IGRhdGEsIGlzRXJyb3IsIGlzTG9hZGluZyB9ID0gdXNlQVBJKCcvYXBpL3Byb2ZpbGUnKVxyXG5cclxuICBpZiAoaXNFcnJvcikgcmV0dXJuIDxkaXY+Tk8gRklFTERTPC9kaXY+XHJcbiAgaWYgKGlzTG9hZGluZykgcmV0dXJuIDxkaXY+Li4uPC9kaXY+XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDI+SGVsbG8gc3RyYW5nZXIsIG15IG5hbWUgaXMge2RhdGEuZmlyc3ROYW1lfTwvaDI+XHJcbiAgICAgIFxyXG4gICAgICA8dWw+XHJcbiAgICAgICAge2RhdGEuc2tpbGxzLm1hcChza2lsbCA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gPFNraWxsIGtleT17c2tpbGwuaWR9IGRhdGE9e3NraWxsfSAvPlxyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L3VsPlxyXG5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWJvdXQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUFQSSIsIlNraWxsIiwiQWJvdXQiLCJkYXRhIiwiaXNFcnJvciIsImlzTG9hZGluZyIsImZpcnN0TmFtZSIsInNraWxscyIsIm1hcCIsInNraWxsIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9