/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss ***!
  \******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100..900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  font-family: "Lexend Deca", "Arial", sans-serif;
  color: #13aa65;
}

body {
  background-color: #FFFFFF;
}

.btn--skip {
  margin: 0 auto;
  background-color: transparent;
  border: none;
  padding: 0.5rem;
  position: fixed;
  top: 60%;
  left: 48.5%;
  text-align: center;
  font-size: 2rem;
  z-index: 99;
}

.btn--skip:hover {
  cursor: pointer;
}

.splash-container--overlay {
  background-color: #FFFFFF;
  width: 100%;
  height: 100%;
  position: fixed;
  inset: 0;
  z-index: 98;
}

.splash {
  opacity: 0;
  visibility: hidden;
  transform: translateY(0px);
  background-color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  transition: opacity 1s ease, transform 1s ease;
}
.splash p {
  font-size: 3rem;
}

.grid-wrapper {
  width: 100%;
  height: 100vh;
  display: grid;
  justify-items: center;
  grid-template-columns: 15% auto 15%;
  grid-template-rows: 0.5fr 2fr 0.25fr;
  column-gap: 1rem;
  opacity: 0;
  transform: translateY(0px);
  transition: opacity 1s ease;
}
.grid-wrapper > * {
  width: 100%;
}
.grid-wrapper .hamburger {
  grid-column: 1/2;
  grid-row: 1/2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: 5px;
  padding-top: 1rem;
  background-color: white;
  transition: transform 0.3s ease;
}
.grid-wrapper .hamburger span {
  width: 25px;
  height: 3px;
  background-color: #13aa65;
  transition: 0.3s ease;
}
.grid-wrapper .hamburger.active {
  background-color: #13aa65;
}
.grid-wrapper .hamburger.active span {
  background-color: #FFFFFF;
}
.grid-wrapper .hamburger.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}
.grid-wrapper .hamburger.active span:nth-child(2) {
  opacity: 0;
}
.grid-wrapper .hamburger.active span:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}
.grid-wrapper .nav-container {
  grid-column: 1/2;
  grid-row: 2/4;
}
.grid-wrapper .nav-container .nav-menu {
  padding: 1rem 0 0 1.5rem;
  display: flex;
  height: 100%;
  font-size: 2.5rem;
  gap: 2rem;
  flex-direction: column;
  list-style: none;
  transition: 0.3s ease;
  position: relative;
  top: 0;
  left: 0;
  opacity: 0;
  transition: transform 0.3s ease;
  transform: translateX(-100%);
}
.grid-wrapper .nav-container .nav-menu.active {
  opacity: 1;
  transform: translateX(0);
  background-color: #13aa65;
  transition: transform 0.3s ease;
}
.grid-wrapper .nav-container .nav-menu.closed {
  opacity: 0;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
}
.grid-wrapper .nav-container .nav-menu a {
  text-decoration: none;
  color: #FFFFFF;
  transition: transform 0.3s ease;
}
.grid-wrapper .nav-container .nav-menu a:hover {
  text-decoration: underline;
}
.grid-wrapper .resources-container {
  grid-column: 3/4;
  grid-row: 1/2;
  display: flex;
  gap: 1rem;
  justify-content: space-evenly;
  align-items: center;
}
.grid-wrapper .resources-container i {
  cursor: pointer;
  font-size: 1.75rem;
}
.grid-wrapper .main-container {
  grid-column: 2/3;
  grid-row: 2/3;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
}
.grid-wrapper .main-container--grid {
  display: grid;
  grid-template-rows: 2fr 1fr;
  gap: 2rem;
}
.grid-wrapper .main-container .main-container__header {
  margin: 1rem;
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-self: center;
  margin-right: 40%;
}
.grid-wrapper .main-container .main-container__header h1 {
  font-size: 3rem;
  font-weight: 400;
}
.grid-wrapper .main-container .main-container__header h2 {
  font-size: 1.5rem;
  text-align: right;
  font-weight: 200;
}
.grid-wrapper .main-container .main-container__form {
  grid-column: 2/3;
  grid-row: 2/3;
  display: flex;
  height: 100%;
}
.grid-wrapper .main-container .main-container__form form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.grid-wrapper .main-container .main-container__form form textarea {
  font-size: 1rem;
  resize: none;
  border: 2px #13aa65 solid;
  border-radius: 1rem;
  width: 50%;
  height: 65%;
  min-height: 50%;
  padding: 1rem;
  transition: 0.3s;
}
.grid-wrapper .main-container .main-container__form form textarea::placeholder {
  font-style: italic;
  color: grey;
}
.grid-wrapper .main-container .main-container__form form textarea:focus {
  outline: none;
  font-style: normal;
  color: black;
  box-shadow: -5px 5px 0px 1px #13aa65;
  -webkit-box-shadow: -5px 5px 0px 1px #13aa65;
  -moz-box-shadow: -5px 5px 0px 1px #13aa65;
}
.grid-wrapper .main-container .main-container__form form textarea:focus::placeholder {
  color: transparent;
}
.grid-wrapper .main-container .chat-wrapper {
  border: 2px solid #13aa65;
  border-radius: 1rem;
  margin: 1rem;
  padding: 1rem;
  overflow-y: auto;
}
.grid-wrapper .main-container .chat__form {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}
.grid-wrapper .main-container .chat__form .chat__textarea {
  height: 100%;
  resize: none;
  border: 2px #13aa65 solid;
  border-radius: 1rem;
  width: 75%;
  padding: 1rem;
  transition: 0.3s;
}
.grid-wrapper .main-container .chat__form .chat__textarea:focus {
  outline: none;
  font-style: normal;
  color: black;
  box-shadow: -5px 5px 0px 1px #13aa65;
  -webkit-box-shadow: -5px 5px 0px 1px #13aa65;
  -moz-box-shadow: -5px 5px 0px 1px #13aa65;
}
.grid-wrapper .btn {
  font-size: 1.15rem;
  border: 2px #13aa65 solid;
  border-radius: 0.5rem;
  margin: 1rem;
  background-color: #13aa65;
  color: #FFFFFF;
  font-weight: 500;
  padding: 0.5rem 1rem;
  width: fit-content;
  transition: 0.3s;
}
.grid-wrapper .btn:hover {
  box-shadow: -3px 4px 0px 1px #70ca70;
  -webkit-box-shadow: -3px 4px 0px 1px #70ca70;
  -moz-box-shadow: -3px 4px 0px 1px #70ca70;
  cursor: pointer;
}

@keyframes fadeOutUp {
  to {
    opacity: 0;
    transform: translateY(-20px);
  }
}
@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}`, "",{"version":3,"sources":["webpack://./src/styles.scss"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100..900&display=swap');\r\n\r\n\r\n$background: #FFFFFF;\r\n$primary-color: #13aa65;\r\n$secondary-color: #70ca70;\r\n\r\n*{\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: 'Lexend Deca', 'Arial', sans-serif;\r\n  color: $primary-color;\r\n}\r\n\r\nbody{\r\n  background-color: $background;\r\n}\r\n\r\n .btn--skip{\r\n   margin: 0 auto;\r\n   background-color: transparent;\r\n   border: none;\r\n   padding: .5rem;\r\n   position: fixed;\r\n   top: 60%;\r\n   left: 48.5%;\r\n   text-align: center;\r\n   font-size: 2rem;\r\n   z-index: 99;\r\n  }\r\n\r\n.btn--skip:hover{\r\n  cursor: pointer;\r\n}\r\n\r\n.splash-container--overlay{\r\n  background-color: $background;\r\n  width: 100%;\r\n  height: 100%;\r\n  position: fixed;\r\n  inset: 0;\r\n  z-index: 98;\r\n}\r\n\r\n.splash {\r\n  opacity: 0;\r\n  visibility: hidden;\r\n  transform: translateY(0px);\r\n  background-color: $background;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  transition: opacity 1s ease, transform 1s ease;\r\n  p{\r\n    font-size: 3rem;\r\n  }\r\n}\r\n\r\n.grid-wrapper{\r\n  width: 100%;\r\n  height: 100vh;\r\n  display: grid;\r\n  justify-items: center;\r\n  grid-template-columns: 15% auto 15%;\r\n  grid-template-rows: .5fr 2fr .25fr;\r\n  column-gap: 1rem;\r\n  opacity: 0;\r\n  transform: translateY(0px);\r\n  transition: opacity 1s ease;\r\n  \r\n  > *{\r\n    width: 100%;\r\n  }\r\n    .hamburger {\r\n      grid-column: 1/2;\r\n      grid-row: 1/2;\r\n      display: flex;\r\n      flex-direction: column;\r\n      justify-content: center;\r\n      align-items: center;\r\n      cursor: pointer;\r\n      gap: 5px;\r\n      padding-top: 1rem;\r\n      background-color: white;\r\n      transition: transform 0.3s ease;\r\n      span {\r\n        width: 25px;\r\n        height: 3px;\r\n        background-color: $primary-color;\r\n        transition: 0.3s ease;\r\n      }\r\n      &.active {\r\n        background-color: $primary-color;\r\n        span{\r\n          background-color: $background;\r\n        }\r\n        span:nth-child(1) {\r\n          transform: rotate(45deg) translate(5px, 5px);\r\n        }\r\n        span:nth-child(2) {\r\n          opacity: 0;\r\n        }\r\n        span:nth-child(3) {\r\n          transform: rotate(-45deg) translate(6px, -6px);\r\n        }\r\n      }\r\n  }\r\n  .nav-container{\r\n    grid-column: 1/2;\r\n    grid-row: 2/4;\r\n    .nav-menu{\r\n      padding: 1rem 0 0 1.5rem;\r\n      display: flex;\r\n      height: 100%;\r\n      font-size: 2.5rem;\r\n      gap: 2rem;\r\n      flex-direction: column;\r\n      list-style: none;\r\n      transition: 0.3s ease; \r\n      position: relative;\r\n      top: 0;\r\n      left: 0;\r\n      opacity: 0;\r\n      transition: transform 0.3s ease;\r\n      transform: translateX(-100%);\r\n      &.active{\r\n        opacity: 1;\r\n        transform: translateX(0);\r\n        background-color: $primary-color;\r\n        transition: transform 0.3s ease;\r\n      }\r\n      &.closed{\r\n        opacity: 0;\r\n        transform: translateX(-100%);\r\n        transition: transform 0.3s ease;\r\n      }\r\n      a{\r\n        text-decoration: none;\r\n        color: $background;\r\n        transition: transform 0.3s ease;\r\n        &:hover{\r\n          text-decoration: underline;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  .resources-container{\r\n    grid-column: 3/4;\r\n    grid-row: 1/2;\r\n    display: flex;\r\n    gap: 1rem;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    i{\r\n      cursor: pointer;\r\n      font-size: 1.75rem;\r\n    }\r\n  }\r\n\r\n\r\n  .main-container{\r\n    grid-column: 2/3;\r\n    grid-row: 2/3;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: stretch;\r\n    width: 100%;\r\n    &--grid{\r\n      display: grid;\r\n      grid-template-rows: 2fr 1fr;\r\n      gap: 2rem;\r\n    }\r\n    .main-container__header{\r\n      margin: 1rem;\r\n      display: flex;\r\n      flex-direction: column;\r\n      width: fit-content;\r\n      align-self: center;\r\n      margin-right: 40%;\r\n      h1{\r\n        font-size: 3rem;\r\n        font-weight: 400;\r\n      }\r\n      h2{\r\n        font-size: 1.5rem;\r\n        text-align: right;\r\n        font-weight: 200;\r\n      }\r\n    }\r\n    .main-container__form{\r\n      grid-column: 2/3;\r\n      grid-row: 2/3;\r\n      display: flex;\r\n      height: 100%;\r\n      form{\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n        width: 100%;\r\n        textarea{\r\n          font-size: 1rem;\r\n          resize: none;\r\n        border: 2px $primary-color solid;\r\n        border-radius: 1rem;\r\n        width: 50%;\r\n        height: 65%;\r\n        min-height: 50%;\r\n        padding: 1rem;\r\n        transition: 0.3s;\r\n          &::placeholder{\r\n            font-style: italic;\r\n            color: grey;\r\n          }\r\n          &:focus{\r\n            outline: none;\r\n            font-style: normal;\r\n            color: black;\r\n            box-shadow: -5px 5px 0px 1px $primary-color;\r\n-webkit-box-shadow: -5px 5px 0px 1px $primary-color;\r\n-moz-box-shadow: -5px 5px 0px 1px $primary-color;\r\n            &::placeholder{\r\n              color: transparent;\r\n            }\r\n          }\r\n      }\r\n      }\r\n    }\r\n    .chat-wrapper{\r\n      border: 2px solid $primary-color;\r\n      border-radius: 1rem;\r\n      margin: 1rem;\r\n      padding: 1rem;\r\n      overflow-y: auto;\r\n    }\r\n    .chat__form{\r\n      display: flex;\r\n      flex-direction: column;\r\n      align-items: center;\r\n      height: 100%;\r\n      .chat__textarea{\r\n        height: 100%;\r\n        resize: none;\r\n        border: 2px $primary-color solid;\r\n        border-radius: 1rem;\r\n        width: 75%;\r\n        padding: 1rem;\r\n        transition: 0.3s;\r\n        &:focus{\r\n            outline: none;\r\n            font-style: normal;\r\n            color: black;\r\n            box-shadow: -5px 5px 0px 1px $primary-color;\r\n-webkit-box-shadow: -5px 5px 0px 1px $primary-color;\r\n-moz-box-shadow: -5px 5px 0px 1px $primary-color;\r\n        }\r\n      }\r\n    }\r\n  }\r\n        .btn{\r\n          font-size: 1.15rem;\r\n          border: 2px $primary-color solid;\r\n          border-radius: .5rem;\r\n          margin: 1rem;\r\n          background-color: $primary-color;\r\n          color: $background;\r\n          font-weight: 500;\r\n          padding: .5rem 1rem;\r\n          width: fit-content;\r\n          transition: 0.3s;\r\n          &:hover{\r\n            box-shadow: -3px 4px 0px 1px $secondary-color; \r\n-webkit-box-shadow: -3px 4px 0px 1px $secondary-color;\r\n-moz-box-shadow: -3px 4px 0px 1px $secondary-color;\r\n            cursor: pointer;\r\n          }\r\n        }\r\n}\r\n\r\n\r\n\r\n@keyframes fadeOutUp {\r\n  to {\r\n    opacity: 0;\r\n    transform: translateY(-20px);\r\n  }\r\n}\r\n\r\n@keyframes fadeInUp {\r\n  to {\r\n    opacity: 1;\r\n    transform: translateY(0);\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ "./src/styles.scss");


//SPLASH SCREENS
const splashScreens = document.querySelectorAll(".splash");

let splashScreensLength = splashScreens.length;

//SKIP BUTTON
const skipButton = document.querySelector('.btn--skip');
const splashStyleSheet = document.createElement('style');
document.head.appendChild(splashStyleSheet);


//SPLASH SCREENS FUNCTIONALITY

const spaceBetweenScreens = 4;
const visibleDuration = 3;

splashScreens.forEach((currVal, index) => {

  const delayIn = index * spaceBetweenScreens;
  const delayOut = delayIn + visibleDuration;

  const className = `splash-auto-${index}`;
  splashStyleSheet.sheet.insertRule(`
      .${className} {
        visibility: visible;
        animation: 
          fadeInUp 1.5s ease forwards ${delayIn}s, 
          fadeOutUp 1s ease forwards ${delayOut}s; 
      }
    `);

  currVal.classList.add(className);
});

let splashTimeout = setTimeout(() => {
  const splashOverlay = document.querySelector('.splash-container--overlay');
  splashOverlay.style.display = 'none';
  
  const mainContainer = document.querySelector('.grid-wrapper');
  mainContainer.style.opacity = 1;
  
  skipButton.style.display = 'none';
}, splashScreensLength * spaceBetweenScreens * 1000);

skipButton.addEventListener('click', () => {
  clearTimeout(splashTimeout);
  console.log("Button Clicked");
  
  const splashOverlay = document.querySelector('.splash-container--overlay');
  const mainContainer = document.querySelector('.grid-wrapper');

  // Fade out splash overlay immediately
  splashOverlay.style.transition = 'opacity 0.5s ease';
  splashOverlay.style.opacity = 0;

  // Fade in main content
  setTimeout(() => {
    splashOverlay.style.display = 'none';
    mainContainer.style.opacity = 1;
  }, 500);
  
  skipButton.style.display = 'none';
});

//HAMBURGER MENU

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  hamburger.classList.toggle('active');
});

if(hamburger.classList.contains('active')){
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('closed');
  });
}

//FORM API
const form = document.getElementById('chat-form');
const input = document.getElementById('user-input');

form.addEventListener("submit", (e) =>{
   e.preventDefault();
   const message = input.value.trim();
  if(!message) return;

  createChatHTML(message);
});


function createChatHTML(firstMessage){
  const chatContainer = document.querySelector('.main-container');
  chatContainer.classList.add('main-container--grid');
  chatContainer.innerHTML = '';
  
  const chat = document.createElement('div');
  chat.classList.add('chat-wrapper');
  chatContainer.appendChild(chat);
  
  const chatForm = document.createElement('form');
  chatForm.classList.add('chat__form');
  chatForm.setAttribute('id', 'chat-form');
  chatContainer.appendChild(chatForm);
  
  const chatTextarea = document.createElement('textarea');
  chatTextarea.classList.add('chat__textarea');
  chatTextarea.setAttribute('id', 'user-input');
  chatTextarea.setAttribute('rows', '3');
  chatTextarea.setAttribute('name', 'text');
  chatTextarea.required = true;
  chatForm.appendChild(chatTextarea);
  
  
  const sendButton = document.createElement('button');
  sendButton.classList.add('btn', 'chat__button');
  sendButton.type= 'submit';
  sendButton.innerHTML = "Send";
  chatForm.appendChild(sendButton);
  
  addMessage('You', firstMessage);
  sendMessage(firstMessage);
  
  //Wire Form
  chatForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const message = chatTextarea.value.trim();
    if (!message) return;
    addMessage('You', message);
    sendMessage(message);
    chatTextarea.value = '';
  });
}


function addMessage(sender, text){
  
  const chatBox = document.querySelector('.chat-wrapper');
  const para = document.createElement('p');
  
  para.innerHTML = `<strong>${sender}</strong>${': ' + text}`;
  
  chatBox.appendChild(para);
}

async function sendMessage(messageText){
  
 const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: "POST",
    headers: {
      'Authorization': 'Bearer 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',
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
       model: 'mistralai/mistral-7b-instruct',
         messages: [
        { role: 'system', content: 'You are a helpful mental health support assistant.' },
        { role: 'user', content: messageText }
      ]
      })
  });
  
  const data = await response.json();
  
  const botReply = data?.choices?.[0]?.message?.content || "Something went wrong";
  
  addMessage('Therapist Bot', botReply);
}

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map