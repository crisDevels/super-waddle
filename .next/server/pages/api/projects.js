"use strict";
(() => {
var exports = {};
exports.id = "pages/api/projects";
exports.ids = ["pages/api/projects"];
exports.modules = {

/***/ "./data.js":
/*!*****************!*\
  !*** ./data.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "profile": () => (/* binding */ profile),
/* harmony export */   "projects": () => (/* binding */ projects)
/* harmony export */ });
const profile = {
  firstName: "Cristian",
  lastName: "Velasco",
  imageFeature: "/profile/cristian.jpg",
  resume: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo, nibh sollicitudin dignissim sodales, turpis erat suscipit turpis, nec maximus ligula purus ac nisi. Nam volutpat tellus ut odio tristique dapibus. Sed in egestas turpis, vitae congue velit. Aenean sagittis metus ullamcorper libero tincidunt, id euismod neque finibus. Aenean semper consectetur iaculis. Quisque metus nulla, tincidunt viverra cursus quis, lobortis in nibh. Vivamus tincidunt eros leo, maximus dapibus orci accumsan id. Mauris quis sapien risus. In erat lectus, bibendum ut ornare sit amet, blandit vitae magna",
  skills: [{
    id: 1,
    name: "JavaScript",
    image: "/profile/javascript.svg"
  }, {
    id: 2,
    name: "NextJS",
    image: "/profile/javascript.svg"
  }]
};
const projects = [{
  id: 1,
  handle: "mina-storm",
  name: "Mina Storm",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo, nibh sollicitudin dignissim sodales, turpis erat suscipit turpis, nec maximus ligula purus ac nisi. Nam volutpat tellus ut odio tristique dapibus. Sed in egestas turpis, vitae congue velit. Aenean sagittis metus ullamcorper libero tincidunt, id euismod neque finibus. Aenean semper consectetur iaculis. Quisque metus nulla, tincidunt viverra cursus quis, lobortis in nibh. Vivamus tincidunt eros leo, maximus dapibus orci accumsan id. Mauris quis sapien risus. In erat lectus, bibendum ut ornare sit amet, blandit vitae magna"
}, {
  id: 2,
  handle: "panda-tea",
  name: "Panda Tea",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo, nibh sollicitudin dignissim sodales, turpis erat suscipit turpis, nec maximus ligula purus ac nisi. Nam volutpat tellus ut odio tristique dapibus. Sed in egestas turpis, vitae congue velit. Aenean sagittis metus ullamcorper libero tincidunt, id euismod neque finibus. Aenean semper consectetur iaculis. Quisque metus nulla, tincidunt viverra cursus quis, lobortis in nibh. Vivamus tincidunt eros leo, maximus dapibus orci accumsan id. Mauris quis sapien risus. In erat lectus, bibendum ut ornare sit amet, blandit vitae magna"
}];

/***/ }),

/***/ "./pages/api/projects/index.js":
/*!*************************************!*\
  !*** ./pages/api/projects/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ projectsHandler)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data */ "./data.js");

function projectsHandler(req, res) {
  res.status(200).json(_data__WEBPACK_IMPORTED_MODULE_0__.projects);
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/projects/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL3Byb2plY3RzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLE1BQU1BLE9BQU8sR0FBRztBQUNyQkMsRUFBQUEsU0FBUyxFQUFFLFVBRFU7QUFFckJDLEVBQUFBLFFBQVEsRUFBRSxTQUZXO0FBR3JCQyxFQUFBQSxZQUFZLEVBQUUsdUJBSE87QUFJckJDLEVBQUFBLE1BQU0sRUFBRSwwbEJBSmE7QUFLckJDLEVBQUFBLE1BQU0sRUFBRSxDQUNOO0FBQ0VDLElBQUFBLEVBQUUsRUFBRSxDQUROO0FBRUVDLElBQUFBLElBQUksRUFBRSxZQUZSO0FBR0VDLElBQUFBLEtBQUssRUFBRTtBQUhULEdBRE0sRUFNTjtBQUNFRixJQUFBQSxFQUFFLEVBQUUsQ0FETjtBQUVFQyxJQUFBQSxJQUFJLEVBQUUsUUFGUjtBQUdFQyxJQUFBQSxLQUFLLEVBQUU7QUFIVCxHQU5NO0FBTGEsQ0FBaEI7QUFtQkEsTUFBTUMsUUFBUSxHQUFHLENBQ3RCO0FBQ0VILEVBQUFBLEVBQUUsRUFBRSxDQUROO0FBRUVJLEVBQUFBLE1BQU0sRUFBRSxZQUZWO0FBR0VILEVBQUFBLElBQUksRUFBRSxZQUhSO0FBSUVJLEVBQUFBLFdBQVcsRUFBRTtBQUpmLENBRHNCLEVBT3RCO0FBQ0VMLEVBQUFBLEVBQUUsRUFBRSxDQUROO0FBRUVJLEVBQUFBLE1BQU0sRUFBRSxXQUZWO0FBR0VILEVBQUFBLElBQUksRUFBRSxXQUhSO0FBSUVJLEVBQUFBLFdBQVcsRUFBRTtBQUpmLENBUHNCLENBQWpCOzs7Ozs7Ozs7Ozs7Ozs7QUNuQlA7QUFFZSxTQUFTQyxlQUFULENBQTBCQyxHQUExQixFQUErQkMsR0FBL0IsRUFBb0M7QUFDakRBLEVBQUFBLEdBQUcsQ0FBQ0MsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCUCwyQ0FBckI7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL3N1cGVyLXdhZGRsZS8uL2RhdGEuanMiLCJ3ZWJwYWNrOi8vc3VwZXItd2FkZGxlLy4vcGFnZXMvYXBpL3Byb2plY3RzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBwcm9maWxlID0ge1xyXG4gIGZpcnN0TmFtZTogXCJDcmlzdGlhblwiLFxyXG4gIGxhc3ROYW1lOiBcIlZlbGFzY29cIixcclxuICBpbWFnZUZlYXR1cmU6IFwiL3Byb2ZpbGUvY3Jpc3RpYW4uanBnXCIsXHJcbiAgcmVzdW1lOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFByYWVzZW50IGNvbW1vZG8sIG5pYmggc29sbGljaXR1ZGluIGRpZ25pc3NpbSBzb2RhbGVzLCB0dXJwaXMgZXJhdCBzdXNjaXBpdCB0dXJwaXMsIG5lYyBtYXhpbXVzIGxpZ3VsYSBwdXJ1cyBhYyBuaXNpLiBOYW0gdm9sdXRwYXQgdGVsbHVzIHV0IG9kaW8gdHJpc3RpcXVlIGRhcGlidXMuIFNlZCBpbiBlZ2VzdGFzIHR1cnBpcywgdml0YWUgY29uZ3VlIHZlbGl0LiBBZW5lYW4gc2FnaXR0aXMgbWV0dXMgdWxsYW1jb3JwZXIgbGliZXJvIHRpbmNpZHVudCwgaWQgZXVpc21vZCBuZXF1ZSBmaW5pYnVzLiBBZW5lYW4gc2VtcGVyIGNvbnNlY3RldHVyIGlhY3VsaXMuIFF1aXNxdWUgbWV0dXMgbnVsbGEsIHRpbmNpZHVudCB2aXZlcnJhIGN1cnN1cyBxdWlzLCBsb2JvcnRpcyBpbiBuaWJoLiBWaXZhbXVzIHRpbmNpZHVudCBlcm9zIGxlbywgbWF4aW11cyBkYXBpYnVzIG9yY2kgYWNjdW1zYW4gaWQuIE1hdXJpcyBxdWlzIHNhcGllbiByaXN1cy4gSW4gZXJhdCBsZWN0dXMsIGJpYmVuZHVtIHV0IG9ybmFyZSBzaXQgYW1ldCwgYmxhbmRpdCB2aXRhZSBtYWduYVwiLFxyXG4gIHNraWxsczogW1xyXG4gICAge1xyXG4gICAgICBpZDogMSxcclxuICAgICAgbmFtZTogXCJKYXZhU2NyaXB0XCIsXHJcbiAgICAgIGltYWdlOiBcIi9wcm9maWxlL2phdmFzY3JpcHQuc3ZnXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAyLFxyXG4gICAgICBuYW1lOiBcIk5leHRKU1wiLFxyXG4gICAgICBpbWFnZTogXCIvcHJvZmlsZS9qYXZhc2NyaXB0LnN2Z1wiXHJcbiAgICB9XHJcbiAgXSxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHByb2plY3RzID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgaGFuZGxlOiBcIm1pbmEtc3Rvcm1cIixcclxuICAgIG5hbWU6IFwiTWluYSBTdG9ybVwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gUHJhZXNlbnQgY29tbW9kbywgbmliaCBzb2xsaWNpdHVkaW4gZGlnbmlzc2ltIHNvZGFsZXMsIHR1cnBpcyBlcmF0IHN1c2NpcGl0IHR1cnBpcywgbmVjIG1heGltdXMgbGlndWxhIHB1cnVzIGFjIG5pc2kuIE5hbSB2b2x1dHBhdCB0ZWxsdXMgdXQgb2RpbyB0cmlzdGlxdWUgZGFwaWJ1cy4gU2VkIGluIGVnZXN0YXMgdHVycGlzLCB2aXRhZSBjb25ndWUgdmVsaXQuIEFlbmVhbiBzYWdpdHRpcyBtZXR1cyB1bGxhbWNvcnBlciBsaWJlcm8gdGluY2lkdW50LCBpZCBldWlzbW9kIG5lcXVlIGZpbmlidXMuIEFlbmVhbiBzZW1wZXIgY29uc2VjdGV0dXIgaWFjdWxpcy4gUXVpc3F1ZSBtZXR1cyBudWxsYSwgdGluY2lkdW50IHZpdmVycmEgY3Vyc3VzIHF1aXMsIGxvYm9ydGlzIGluIG5pYmguIFZpdmFtdXMgdGluY2lkdW50IGVyb3MgbGVvLCBtYXhpbXVzIGRhcGlidXMgb3JjaSBhY2N1bXNhbiBpZC4gTWF1cmlzIHF1aXMgc2FwaWVuIHJpc3VzLiBJbiBlcmF0IGxlY3R1cywgYmliZW5kdW0gdXQgb3JuYXJlIHNpdCBhbWV0LCBibGFuZGl0IHZpdGFlIG1hZ25hXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIGhhbmRsZTogXCJwYW5kYS10ZWFcIixcclxuICAgIG5hbWU6IFwiUGFuZGEgVGVhXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBQcmFlc2VudCBjb21tb2RvLCBuaWJoIHNvbGxpY2l0dWRpbiBkaWduaXNzaW0gc29kYWxlcywgdHVycGlzIGVyYXQgc3VzY2lwaXQgdHVycGlzLCBuZWMgbWF4aW11cyBsaWd1bGEgcHVydXMgYWMgbmlzaS4gTmFtIHZvbHV0cGF0IHRlbGx1cyB1dCBvZGlvIHRyaXN0aXF1ZSBkYXBpYnVzLiBTZWQgaW4gZWdlc3RhcyB0dXJwaXMsIHZpdGFlIGNvbmd1ZSB2ZWxpdC4gQWVuZWFuIHNhZ2l0dGlzIG1ldHVzIHVsbGFtY29ycGVyIGxpYmVybyB0aW5jaWR1bnQsIGlkIGV1aXNtb2QgbmVxdWUgZmluaWJ1cy4gQWVuZWFuIHNlbXBlciBjb25zZWN0ZXR1ciBpYWN1bGlzLiBRdWlzcXVlIG1ldHVzIG51bGxhLCB0aW5jaWR1bnQgdml2ZXJyYSBjdXJzdXMgcXVpcywgbG9ib3J0aXMgaW4gbmliaC4gVml2YW11cyB0aW5jaWR1bnQgZXJvcyBsZW8sIG1heGltdXMgZGFwaWJ1cyBvcmNpIGFjY3Vtc2FuIGlkLiBNYXVyaXMgcXVpcyBzYXBpZW4gcmlzdXMuIEluIGVyYXQgbGVjdHVzLCBiaWJlbmR1bSB1dCBvcm5hcmUgc2l0IGFtZXQsIGJsYW5kaXQgdml0YWUgbWFnbmFcIixcclxuICB9LFxyXG5dIiwiaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tICcuLi8uLi8uLi9kYXRhJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvamVjdHNIYW5kbGVyIChyZXEsIHJlcykge1xyXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHByb2plY3RzKVxyXG59Il0sIm5hbWVzIjpbInByb2ZpbGUiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImltYWdlRmVhdHVyZSIsInJlc3VtZSIsInNraWxscyIsImlkIiwibmFtZSIsImltYWdlIiwicHJvamVjdHMiLCJoYW5kbGUiLCJkZXNjcmlwdGlvbiIsInByb2plY3RzSGFuZGxlciIsInJlcSIsInJlcyIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9