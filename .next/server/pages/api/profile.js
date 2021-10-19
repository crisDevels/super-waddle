"use strict";
(() => {
var exports = {};
exports.id = "pages/api/profile";
exports.ids = ["pages/api/profile"];
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
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo, nibh sollicitudin dignissim sodales, turpis erat suscipit turpis, nec maximus ligula purus ac nisi. Nam volutpat tellus ut odio tristique dapibus. Sed in egestas turpis, vitae congue velit. Aenean sagittis metus ullamcorper libero tincidunt, id euismod neque finibus. Aenean semper consectetur iaculis. Quisque metus nulla, tincidunt viverra cursus quis, lobortis in nibh. Vivamus tincidunt eros leo, maximus dapibus orci accumsan id. Mauris quis sapien risus. In erat lectus, bibendum ut ornare sit amet, blandit vitae magna",
  imageFeature: "/projects/mina-storm/principal-mina.jpg"
}, {
  id: 2,
  handle: "panda-tea",
  name: "Panda Tea",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo, nibh sollicitudin dignissim sodales, turpis erat suscipit turpis, nec maximus ligula purus ac nisi. Nam volutpat tellus ut odio tristique dapibus. Sed in egestas turpis, vitae congue velit. Aenean sagittis metus ullamcorper libero tincidunt, id euismod neque finibus. Aenean semper consectetur iaculis. Quisque metus nulla, tincidunt viverra cursus quis, lobortis in nibh. Vivamus tincidunt eros leo, maximus dapibus orci accumsan id. Mauris quis sapien risus. In erat lectus, bibendum ut ornare sit amet, blandit vitae magna",
  imageFeature: "/projects/panda-tea/principal-panda.jpg"
}];

/***/ }),

/***/ "./pages/api/profile/index.js":
/*!************************************!*\
  !*** ./pages/api/profile/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ profileHandler)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data */ "./data.js");

function profileHandler(req, res) {
  res.status(200).json(_data__WEBPACK_IMPORTED_MODULE_0__.profile);
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/profile/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL3Byb2ZpbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sTUFBTUEsT0FBTyxHQUFHO0FBQ3JCQyxFQUFBQSxTQUFTLEVBQUUsVUFEVTtBQUVyQkMsRUFBQUEsUUFBUSxFQUFFLFNBRlc7QUFHckJDLEVBQUFBLFlBQVksRUFBRSx1QkFITztBQUlyQkMsRUFBQUEsTUFBTSxFQUFFLDBsQkFKYTtBQUtyQkMsRUFBQUEsTUFBTSxFQUFFLENBQ047QUFDRUMsSUFBQUEsRUFBRSxFQUFFLENBRE47QUFFRUMsSUFBQUEsSUFBSSxFQUFFLFlBRlI7QUFHRUMsSUFBQUEsS0FBSyxFQUFFO0FBSFQsR0FETSxFQU1OO0FBQ0VGLElBQUFBLEVBQUUsRUFBRSxDQUROO0FBRUVDLElBQUFBLElBQUksRUFBRSxRQUZSO0FBR0VDLElBQUFBLEtBQUssRUFBRTtBQUhULEdBTk07QUFMYSxDQUFoQjtBQW1CQSxNQUFNQyxRQUFRLEdBQUcsQ0FDdEI7QUFDRUgsRUFBQUEsRUFBRSxFQUFFLENBRE47QUFFRUksRUFBQUEsTUFBTSxFQUFFLFlBRlY7QUFHRUgsRUFBQUEsSUFBSSxFQUFFLFlBSFI7QUFJRUksRUFBQUEsV0FBVyxFQUFFLDBsQkFKZjtBQUtFUixFQUFBQSxZQUFZLEVBQUU7QUFMaEIsQ0FEc0IsRUFRdEI7QUFDRUcsRUFBQUEsRUFBRSxFQUFFLENBRE47QUFFRUksRUFBQUEsTUFBTSxFQUFFLFdBRlY7QUFHRUgsRUFBQUEsSUFBSSxFQUFFLFdBSFI7QUFJRUksRUFBQUEsV0FBVyxFQUFFLDBsQkFKZjtBQUtFUixFQUFBQSxZQUFZLEVBQUU7QUFMaEIsQ0FSc0IsQ0FBakI7Ozs7Ozs7Ozs7Ozs7OztBQ25CUDtBQUVlLFNBQVNTLGNBQVQsQ0FBeUJDLEdBQXpCLEVBQThCQyxHQUE5QixFQUFtQztBQUNoREEsRUFBQUEsR0FBRyxDQUFDQyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJoQiwwQ0FBckI7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL3N1cGVyLXdhZGRsZS8uL2RhdGEuanMiLCJ3ZWJwYWNrOi8vc3VwZXItd2FkZGxlLy4vcGFnZXMvYXBpL3Byb2ZpbGUvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHByb2ZpbGUgPSB7XHJcbiAgZmlyc3ROYW1lOiBcIkNyaXN0aWFuXCIsXHJcbiAgbGFzdE5hbWU6IFwiVmVsYXNjb1wiLFxyXG4gIGltYWdlRmVhdHVyZTogXCIvcHJvZmlsZS9jcmlzdGlhbi5qcGdcIixcclxuICByZXN1bWU6IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gUHJhZXNlbnQgY29tbW9kbywgbmliaCBzb2xsaWNpdHVkaW4gZGlnbmlzc2ltIHNvZGFsZXMsIHR1cnBpcyBlcmF0IHN1c2NpcGl0IHR1cnBpcywgbmVjIG1heGltdXMgbGlndWxhIHB1cnVzIGFjIG5pc2kuIE5hbSB2b2x1dHBhdCB0ZWxsdXMgdXQgb2RpbyB0cmlzdGlxdWUgZGFwaWJ1cy4gU2VkIGluIGVnZXN0YXMgdHVycGlzLCB2aXRhZSBjb25ndWUgdmVsaXQuIEFlbmVhbiBzYWdpdHRpcyBtZXR1cyB1bGxhbWNvcnBlciBsaWJlcm8gdGluY2lkdW50LCBpZCBldWlzbW9kIG5lcXVlIGZpbmlidXMuIEFlbmVhbiBzZW1wZXIgY29uc2VjdGV0dXIgaWFjdWxpcy4gUXVpc3F1ZSBtZXR1cyBudWxsYSwgdGluY2lkdW50IHZpdmVycmEgY3Vyc3VzIHF1aXMsIGxvYm9ydGlzIGluIG5pYmguIFZpdmFtdXMgdGluY2lkdW50IGVyb3MgbGVvLCBtYXhpbXVzIGRhcGlidXMgb3JjaSBhY2N1bXNhbiBpZC4gTWF1cmlzIHF1aXMgc2FwaWVuIHJpc3VzLiBJbiBlcmF0IGxlY3R1cywgYmliZW5kdW0gdXQgb3JuYXJlIHNpdCBhbWV0LCBibGFuZGl0IHZpdGFlIG1hZ25hXCIsXHJcbiAgc2tpbGxzOiBbXHJcbiAgICB7XHJcbiAgICAgIGlkOiAxLFxyXG4gICAgICBuYW1lOiBcIkphdmFTY3JpcHRcIixcclxuICAgICAgaW1hZ2U6IFwiL3Byb2ZpbGUvamF2YXNjcmlwdC5zdmdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDIsXHJcbiAgICAgIG5hbWU6IFwiTmV4dEpTXCIsXHJcbiAgICAgIGltYWdlOiBcIi9wcm9maWxlL2phdmFzY3JpcHQuc3ZnXCJcclxuICAgIH1cclxuICBdLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcHJvamVjdHMgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBoYW5kbGU6IFwibWluYS1zdG9ybVwiLFxyXG4gICAgbmFtZTogXCJNaW5hIFN0b3JtXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBQcmFlc2VudCBjb21tb2RvLCBuaWJoIHNvbGxpY2l0dWRpbiBkaWduaXNzaW0gc29kYWxlcywgdHVycGlzIGVyYXQgc3VzY2lwaXQgdHVycGlzLCBuZWMgbWF4aW11cyBsaWd1bGEgcHVydXMgYWMgbmlzaS4gTmFtIHZvbHV0cGF0IHRlbGx1cyB1dCBvZGlvIHRyaXN0aXF1ZSBkYXBpYnVzLiBTZWQgaW4gZWdlc3RhcyB0dXJwaXMsIHZpdGFlIGNvbmd1ZSB2ZWxpdC4gQWVuZWFuIHNhZ2l0dGlzIG1ldHVzIHVsbGFtY29ycGVyIGxpYmVybyB0aW5jaWR1bnQsIGlkIGV1aXNtb2QgbmVxdWUgZmluaWJ1cy4gQWVuZWFuIHNlbXBlciBjb25zZWN0ZXR1ciBpYWN1bGlzLiBRdWlzcXVlIG1ldHVzIG51bGxhLCB0aW5jaWR1bnQgdml2ZXJyYSBjdXJzdXMgcXVpcywgbG9ib3J0aXMgaW4gbmliaC4gVml2YW11cyB0aW5jaWR1bnQgZXJvcyBsZW8sIG1heGltdXMgZGFwaWJ1cyBvcmNpIGFjY3Vtc2FuIGlkLiBNYXVyaXMgcXVpcyBzYXBpZW4gcmlzdXMuIEluIGVyYXQgbGVjdHVzLCBiaWJlbmR1bSB1dCBvcm5hcmUgc2l0IGFtZXQsIGJsYW5kaXQgdml0YWUgbWFnbmFcIixcclxuICAgIGltYWdlRmVhdHVyZTogXCIvcHJvamVjdHMvbWluYS1zdG9ybS9wcmluY2lwYWwtbWluYS5qcGdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyLFxyXG4gICAgaGFuZGxlOiBcInBhbmRhLXRlYVwiLFxyXG4gICAgbmFtZTogXCJQYW5kYSBUZWFcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFByYWVzZW50IGNvbW1vZG8sIG5pYmggc29sbGljaXR1ZGluIGRpZ25pc3NpbSBzb2RhbGVzLCB0dXJwaXMgZXJhdCBzdXNjaXBpdCB0dXJwaXMsIG5lYyBtYXhpbXVzIGxpZ3VsYSBwdXJ1cyBhYyBuaXNpLiBOYW0gdm9sdXRwYXQgdGVsbHVzIHV0IG9kaW8gdHJpc3RpcXVlIGRhcGlidXMuIFNlZCBpbiBlZ2VzdGFzIHR1cnBpcywgdml0YWUgY29uZ3VlIHZlbGl0LiBBZW5lYW4gc2FnaXR0aXMgbWV0dXMgdWxsYW1jb3JwZXIgbGliZXJvIHRpbmNpZHVudCwgaWQgZXVpc21vZCBuZXF1ZSBmaW5pYnVzLiBBZW5lYW4gc2VtcGVyIGNvbnNlY3RldHVyIGlhY3VsaXMuIFF1aXNxdWUgbWV0dXMgbnVsbGEsIHRpbmNpZHVudCB2aXZlcnJhIGN1cnN1cyBxdWlzLCBsb2JvcnRpcyBpbiBuaWJoLiBWaXZhbXVzIHRpbmNpZHVudCBlcm9zIGxlbywgbWF4aW11cyBkYXBpYnVzIG9yY2kgYWNjdW1zYW4gaWQuIE1hdXJpcyBxdWlzIHNhcGllbiByaXN1cy4gSW4gZXJhdCBsZWN0dXMsIGJpYmVuZHVtIHV0IG9ybmFyZSBzaXQgYW1ldCwgYmxhbmRpdCB2aXRhZSBtYWduYVwiLFxyXG4gICAgaW1hZ2VGZWF0dXJlOiBcIi9wcm9qZWN0cy9wYW5kYS10ZWEvcHJpbmNpcGFsLXBhbmRhLmpwZ1wiLFxyXG4gIH0sXHJcbl0iLCJpbXBvcnQgeyBwcm9maWxlIH0gZnJvbSAnLi4vLi4vLi4vZGF0YSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb2ZpbGVIYW5kbGVyIChyZXEsIHJlcykge1xyXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHByb2ZpbGUpXHJcbn0iXSwibmFtZXMiOlsicHJvZmlsZSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiaW1hZ2VGZWF0dXJlIiwicmVzdW1lIiwic2tpbGxzIiwiaWQiLCJuYW1lIiwiaW1hZ2UiLCJwcm9qZWN0cyIsImhhbmRsZSIsImRlc2NyaXB0aW9uIiwicHJvZmlsZUhhbmRsZXIiLCJyZXEiLCJyZXMiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==