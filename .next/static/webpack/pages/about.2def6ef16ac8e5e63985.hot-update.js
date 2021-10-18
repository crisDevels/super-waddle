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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
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

  if (isError) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    children: "NO FIELDS"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 23
  }, _this);
  if (isLoading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    children: "..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 25
  }, _this);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h2", {
      children: ["Hello stranger, my name is ", data.firstName]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("ul", {
      children: data.skills.map(function (skill) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_profile_skill__WEBPACK_IMPORTED_MODULE_2__.Skill, {
          data: skill
        }, skill.id, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
      href: "/",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
        children: "Return to home"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWJvdXQuMmRlZjZlZjE2YWM4ZTVlNjM5ODUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNSSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQ2xCLGdCQUFxQ0gscURBQU0sQ0FBQyxjQUFELENBQTNDO0FBQUEsTUFBUUksSUFBUixXQUFRQSxJQUFSO0FBQUEsTUFBY0MsT0FBZCxXQUFjQSxPQUFkO0FBQUEsTUFBdUJDLFNBQXZCLFdBQXVCQSxTQUF2Qjs7QUFFQSxNQUFJRCxPQUFKLEVBQWEsb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUNiLE1BQUlDLFNBQUosRUFBZSxvQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBRWYsc0JBQ0U7QUFBQSw0QkFDRTtBQUFBLGdEQUFnQ0YsSUFBSSxDQUFDRyxTQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUdFO0FBQUEsZ0JBQ0dILElBQUksQ0FBQ0ksTUFBTCxDQUFZQyxHQUFaLENBQWdCLFVBQUFDLEtBQUssRUFBSTtBQUN4Qiw0QkFDRSw4REFBQyw0REFBRDtBQUVFLGNBQUksRUFBRUE7QUFGUixXQUNPQSxLQUFLLENBQUNDLEVBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQUtELE9BTkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEYsZUFhRSw4REFBQyxrREFBRDtBQUFNLFVBQUksRUFBQyxHQUFYO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFvQkQsQ0ExQkQ7O0dBQU1SO1VBQ2lDSDs7O0tBRGpDRztBQTRCTiwrREFBZUEsS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hYm91dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZUFQSSB9IGZyb20gJy4uL2hvb2tzL3VzZUFQSSdcclxuaW1wb3J0IHsgU2tpbGwgfSBmcm9tICcuL2NvbXBvbmVudHMvcHJvZmlsZS9za2lsbCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuY29uc3QgQWJvdXQgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBkYXRhLCBpc0Vycm9yLCBpc0xvYWRpbmcgfSA9IHVzZUFQSSgnL2FwaS9wcm9maWxlJylcclxuXHJcbiAgaWYgKGlzRXJyb3IpIHJldHVybiA8ZGl2Pk5PIEZJRUxEUzwvZGl2PlxyXG4gIGlmIChpc0xvYWRpbmcpIHJldHVybiA8ZGl2Pi4uLjwvZGl2PlxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgyPkhlbGxvIHN0cmFuZ2VyLCBteSBuYW1lIGlzIHtkYXRhLmZpcnN0TmFtZX08L2gyPlxyXG4gICAgICBcclxuICAgICAgPHVsPlxyXG4gICAgICAgIHtkYXRhLnNraWxscy5tYXAoc2tpbGwgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFNraWxsXHJcbiAgICAgICAgICAgICAga2V5PXtza2lsbC5pZH1cclxuICAgICAgICAgICAgICBkYXRhPXtza2lsbH0gLz5cclxuICAgICAgICAgICkgXHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvdWw+XHJcblxyXG4gICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgIDxhPlJldHVybiB0byBob21lPC9hPlxyXG4gICAgICA8L0xpbms+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBYm91dDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQVBJIiwiU2tpbGwiLCJMaW5rIiwiQWJvdXQiLCJkYXRhIiwiaXNFcnJvciIsImlzTG9hZGluZyIsImZpcnN0TmFtZSIsInNraWxscyIsIm1hcCIsInNraWxsIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9