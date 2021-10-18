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
        /*#__PURE__*/
        (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_profile_skill__WEBPACK_IMPORTED_MODULE_2__.Skill, {
          data: skill
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWJvdXQuOTEwMDZhYzliMzUxODNhNTliM2EuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1HLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFDbEIsZ0JBQXFDRixxREFBTSxDQUFDLGNBQUQsQ0FBM0M7QUFBQSxNQUFRRyxJQUFSLFdBQVFBLElBQVI7QUFBQSxNQUFjQyxPQUFkLFdBQWNBLE9BQWQ7QUFBQSxNQUF1QkMsU0FBdkIsV0FBdUJBLFNBQXZCOztBQUVBLE1BQUlELE9BQUosRUFBYSxvQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBQ2IsTUFBSUMsU0FBSixFQUFlLG9CQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFFZixzQkFDRTtBQUFBLDRCQUNFO0FBQUEsZ0RBQWdDRixJQUFJLENBQUNHLFNBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBQSxnQkFDR0gsSUFBSSxDQUFDSSxNQUFMLENBQVlDLEdBQVosQ0FBZ0IsVUFBQUMsS0FBSyxFQUFJO0FBQ3hCO0FBQUEsc0VBQUMsNERBQUQ7QUFBTyxjQUFJLEVBQUVBO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNELE9BRkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFVRCxDQWhCRDs7R0FBTVA7VUFDaUNGOzs7S0FEakNFO0FBa0JOLCtEQUFlQSxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Fib3V0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlQVBJIH0gZnJvbSAnLi4vaG9va3MvdXNlQVBJJ1xyXG5pbXBvcnQgeyBTa2lsbCB9IGZyb20gJy4vY29tcG9uZW50cy9wcm9maWxlL3NraWxsJ1xyXG5cclxuY29uc3QgQWJvdXQgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBkYXRhLCBpc0Vycm9yLCBpc0xvYWRpbmcgfSA9IHVzZUFQSSgnL2FwaS9wcm9maWxlJylcclxuXHJcbiAgaWYgKGlzRXJyb3IpIHJldHVybiA8ZGl2Pk5PIEZJRUxEUzwvZGl2PlxyXG4gIGlmIChpc0xvYWRpbmcpIHJldHVybiA8ZGl2Pi4uLjwvZGl2PlxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgyPkhlbGxvIHN0cmFuZ2VyLCBteSBuYW1lIGlzIHtkYXRhLmZpcnN0TmFtZX08L2gyPlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAge2RhdGEuc2tpbGxzLm1hcChza2lsbCA9PiB7XHJcbiAgICAgICAgICA8U2tpbGwgZGF0YT17c2tpbGx9IC8+XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFib3V0O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VBUEkiLCJTa2lsbCIsIkFib3V0IiwiZGF0YSIsImlzRXJyb3IiLCJpc0xvYWRpbmciLCJmaXJzdE5hbWUiLCJza2lsbHMiLCJtYXAiLCJza2lsbCJdLCJzb3VyY2VSb290IjoiIn0=