"use strict";
self["webpackHotUpdate_N_E"]("pages/about",{

/***/ "./hooks/useAPI/index.js":
/*!*******************************!*\
  !*** ./hooks/useAPI/index.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useAPI": function() { return /* binding */ useAPI; }
/* harmony export */ });
/* harmony import */ var C_crisdevels_super_waddle_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_crisdevels_super_waddle_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_crisdevels_super_waddle_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_crisdevels_super_waddle_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ "./node_modules/swr/dist/index.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _s = $RefreshSig$();





var fetcher = /*#__PURE__*/function () {
  var _ref = (0,C_crisdevels_super_waddle_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_crisdevels_super_waddle_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(url) {
    var request;
    return C_crisdevels_super_waddle_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_2___default()(url);

          case 2:
            request = _context.sent;
            return _context.abrupt("return", request.data);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fetcher(_x) {
    return _ref.apply(this, arguments);
  };
}();

var useAPI = function useAPI(url) {
  _s();

  var _useSWR = (0,swr__WEBPACK_IMPORTED_MODULE_3__.default)(url, fetcher),
      data = _useSWR.data,
      error = _useSWR.error;

  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  };
};

_s(useAPI, "r2QYs02BSrn+Eu/1uMGZi8N+HnQ=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_3__.default];
});

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


/***/ }),

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useAPI */ "./hooks/useAPI/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
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

  if (isError) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    children: "NO FIELDS"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 23
  }, _this);
  if (isLoading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    children: "..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 25
  }, _this);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h2", {
      children: ["Hello stranger, my name is ", data.firstName]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWJvdXQuNmFiMmIwNDA4NTYzMWEyZWU4ZWMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNRSxPQUFPO0FBQUEsbVFBQUcsaUJBQU9DLEdBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDU0gsNENBQUssQ0FBQ0csR0FBRCxDQURkOztBQUFBO0FBQ1JDLFlBQUFBLE9BRFE7QUFBQSw2Q0FFUEEsT0FBTyxDQUFDQyxJQUZEOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVBILE9BQU87QUFBQTtBQUFBO0FBQUEsR0FBYjs7QUFLTyxJQUFNSSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDSCxHQUFELEVBQVM7QUFBQTs7QUFDN0IsZ0JBQXdCRiw0Q0FBTSxDQUFDRSxHQUFELEVBQU1ELE9BQU4sQ0FBOUI7QUFBQSxNQUFRRyxJQUFSLFdBQVFBLElBQVI7QUFBQSxNQUFjRSxLQUFkLFdBQWNBLEtBQWQ7O0FBRUEsU0FBTztBQUNKRixJQUFBQSxJQUFJLEVBQUVBLElBREY7QUFFSkcsSUFBQUEsU0FBUyxFQUFFLENBQUNELEtBQUQsSUFBVSxDQUFDRixJQUZsQjtBQUdKSSxJQUFBQSxPQUFPLEVBQUVGO0FBSEwsR0FBUDtBQUtELENBUk07O0dBQU1EO1VBQ2FMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUMUI7QUFDQTs7O0FBRUEsSUFBTVUsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUNsQixnQkFBcUNMLHFEQUFNLENBQUMsY0FBRCxDQUEzQztBQUFBLE1BQVFELElBQVIsV0FBUUEsSUFBUjtBQUFBLE1BQWNJLE9BQWQsV0FBY0EsT0FBZDtBQUFBLE1BQXVCRCxTQUF2QixXQUF1QkEsU0FBdkI7O0FBRUEsTUFBSUMsT0FBSixFQUFhLG9CQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDYixNQUFJRCxTQUFKLEVBQWUsb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUVmLHNCQUNFO0FBQUEsMkJBQ0U7QUFBQSxnREFBZ0NILElBQUksQ0FBQ08sU0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBS0QsQ0FYRDs7R0FBTUQ7VUFDaUNMOzs7S0FEakNLO0FBYU4sK0RBQWVBLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlQVBJL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9hYm91dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XHJcblxyXG5jb25zdCBmZXRjaGVyID0gYXN5bmMgKHVybCkgPT4ge1xyXG4gIGNvbnN0IHJlcXVlc3QgPSAgYXdhaXQgYXhpb3ModXJsKVxyXG4gIHJldHVybiByZXF1ZXN0LmRhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VBUEkgPSAodXJsKSA9PiB7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKHVybCwgZmV0Y2hlcilcclxuICBcclxuICByZXR1cm4ge1xyXG4gICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgaXNMb2FkaW5nOiAhZXJyb3IgJiYgIWRhdGEsXHJcbiAgICAgaXNFcnJvcjogZXJyb3IsXHJcbiAgIH1cclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlQVBJIH0gZnJvbSAnLi4vaG9va3MvdXNlQVBJJ1xyXG5cclxuY29uc3QgQWJvdXQgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBkYXRhLCBpc0Vycm9yLCBpc0xvYWRpbmcgfSA9IHVzZUFQSSgnL2FwaS9wcm9maWxlJylcclxuXHJcbiAgaWYgKGlzRXJyb3IpIHJldHVybiA8ZGl2Pk5PIEZJRUxEUzwvZGl2PlxyXG4gIGlmIChpc0xvYWRpbmcpIHJldHVybiA8ZGl2Pi4uLjwvZGl2PlxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgyPkhlbGxvIHN0cmFuZ2VyLCBteSBuYW1lIGlzIHtkYXRhLmZpcnN0TmFtZX08L2gyPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBYm91dDtcclxuIl0sIm5hbWVzIjpbImF4aW9zIiwidXNlU1dSIiwiZmV0Y2hlciIsInVybCIsInJlcXVlc3QiLCJkYXRhIiwidXNlQVBJIiwiZXJyb3IiLCJpc0xvYWRpbmciLCJpc0Vycm9yIiwiUmVhY3QiLCJBYm91dCIsImZpcnN0TmFtZSJdLCJzb3VyY2VSb290IjoiIn0=