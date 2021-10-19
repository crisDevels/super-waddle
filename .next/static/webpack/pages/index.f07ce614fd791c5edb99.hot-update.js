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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
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

  if (isLoading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    children: "..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 24
  }, this);
  if (isError) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    children: "Not found"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 22
  }, this);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_1__.default, {
      title: "Projects",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("ul", {
          className: styles.slide_projects,
          children: data.map(function (project) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                href: '/proyects/' + project.handle,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                    src: project.imageFeature,
                    alt: "Principal" + project.name,
                    width: 500,
                    height: 500
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 25,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
                    children: project.name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 31,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 24,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 23,
                columnNumber: 19
              }, _this)
            }, project.id, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjA3Y2U2MTRmZDc5MWM1ZWRiOTkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFZSxTQUFTSyxLQUFULEdBQWtCO0FBQUE7O0FBQUE7O0FBQy9CLGdCQUFxQ0gscURBQU0sQ0FBQyxlQUFELENBQTNDO0FBQUEsTUFBUUksSUFBUixXQUFRQSxJQUFSO0FBQUEsTUFBY0MsU0FBZCxXQUFjQSxTQUFkO0FBQUEsTUFBeUJDLE9BQXpCLFdBQXlCQSxPQUF6Qjs7QUFFQSxNQUFHRCxTQUFILEVBQWMsb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNkLE1BQUdDLE9BQUgsRUFBWSxvQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBRVosc0JBQ0U7QUFBQSwyQkFDRSw4REFBQyx1REFBRDtBQUFRLFdBQUssRUFBQyxVQUFkO0FBQUEsNkJBRUU7QUFBQSwrQkFDRTtBQUFJLG1CQUFTLEVBQUVDLE1BQU0sQ0FBQ0MsY0FBdEI7QUFBQSxvQkFFR0osSUFBSSxDQUFDSyxHQUFMLENBQVMsVUFBQUMsT0FBTyxFQUFJO0FBQ25CLGdDQUNFO0FBQUEscUNBQ0UsOERBQUMsa0RBQUQ7QUFBTSxvQkFBSSxFQUFFLGVBQWVBLE9BQU8sQ0FBQ0MsTUFBbkM7QUFBQSx1Q0FDRTtBQUFBLDBDQUNFLDhEQUFDLG1EQUFEO0FBQ0UsdUJBQUcsRUFBRUQsT0FBTyxDQUFDRSxZQURmO0FBRUUsdUJBQUcsRUFBRSxjQUFjRixPQUFPLENBQUNHLElBRjdCO0FBR0UseUJBQUssRUFBRSxHQUhUO0FBSUUsMEJBQU0sRUFBRTtBQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREYsZUFPRTtBQUFBLDhCQUFJSCxPQUFPLENBQUNHO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsZUFBU0gsT0FBTyxDQUFDSSxFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGO0FBZUQsV0FoQkE7QUFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQStCRDs7R0FyQ3VCWDtVQUNlSDs7O0tBRGZHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCdcclxuaW1wb3J0IHsgdXNlQVBJIH0gZnJvbSAnLi4vaG9va3MvdXNlQVBJJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXggKCkge1xyXG4gIGNvbnN0IHsgZGF0YSwgaXNMb2FkaW5nLCBpc0Vycm9yIH0gPSB1c2VBUEkoJy9hcGkvcHJvamVjdHMnKVxyXG5cclxuICBpZihpc0xvYWRpbmcpIHJldHVybiA8ZGl2Pi4uLjwvZGl2PlxyXG4gIGlmKGlzRXJyb3IpIHJldHVybiA8ZGl2Pk5vdCBmb3VuZDwvZGl2PlxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPExheW91dCB0aXRsZT0nUHJvamVjdHMnPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMuc2xpZGVfcHJvamVjdHN9PlxyXG5cclxuICAgICAgICAgICAge2RhdGEubWFwKHByb2plY3QgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtwcm9qZWN0LmlkfT5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Jy9wcm95ZWN0cy8nICsgcHJvamVjdC5oYW5kbGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9qZWN0LmltYWdlRmVhdHVyZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtcIlByaW5jaXBhbFwiICsgcHJvamVjdC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17NTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezUwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhPntwcm9qZWN0Lm5hbWV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSl9XHJcblxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJMYXlvdXQiLCJ1c2VBUEkiLCJMaW5rIiwiSW1hZ2UiLCJJbmRleCIsImRhdGEiLCJpc0xvYWRpbmciLCJpc0Vycm9yIiwic3R5bGVzIiwic2xpZGVfcHJvamVjdHMiLCJtYXAiLCJwcm9qZWN0IiwiaGFuZGxlIiwiaW1hZ2VGZWF0dXJlIiwibmFtZSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==