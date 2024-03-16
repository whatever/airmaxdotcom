/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var airmaxdotcom;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Countdown.js":
/*!**********************!*\
  !*** ./Countdown.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Countdown: () => (/* binding */ Countdown)\n/* harmony export */ });\n/**\n * Countdown\n */\nclass Countdown {\n  constructor(el) {\n    this.el = el;\n    this.target = new Date(\"2024-03-26T12:00:00\");\n    this.until = undefined;\n  }\n  update() {\n    let until = this.target - new Date();\n    let seconds = Math.floor(until / 1000);\n    let minutes = Math.floor(seconds / 60);\n    let hours = Math.floor(minutes / 60);\n    let days = Math.floor(hours / 24);\n    this.until = {\n      milliseconds: until % 1000,\n      seconds: seconds % 60,\n      minutes: minutes % 60,\n      hours: hours % 24,\n      days: days\n    };\n  }\n  draw() {\n    let {\n      seconds,\n      minutes,\n      hours,\n      days\n    } = this.until;\n    seconds = String(seconds).padStart(2, \"0\");\n    minutes = String(minutes).padStart(2, \"0\");\n    hours = String(hours).padStart(2, \"0\");\n    days = String(days).padStart(2, \"0\");\n    let frac = this.until.milliseconds / 1000;\n    this.el.innerHTML = `\n    <div class=\"countdown-grid\">\n\n      <!-- DAYS -->\n      <div class=\"days\">\n        <div class=\"numeric\">${days}</div><div class=\"label\">&nbsp;days</div>\n      </div>\n\n      <!-- HOURS -->\n      <div class=\"hours\">\n        <div class=\"numeric\">:${hours}</div>\n        <div class=\"label\">HR</div>\n      </div>\n\n      <!-- MINUTES -->\n      <div class=\"minutes\">\n        <div class=\"numeric\">:${minutes}</div>\n        <div class=\"label\">MIN</div>\n      </div>\n\n      <!-- SECONDS -->\n      <div class=\"seconds\">\n        <div class=\"numeric\">:${seconds}</div>\n        <div class=\"label\">SEC</div>\n      </div>\n\n    </div>\n    `;\n  }\n}\n\n//# sourceURL=webpack://airmaxdotcom/./Countdown.js?");

/***/ }),

/***/ "./ScrollingText.js":
/*!**************************!*\
  !*** ./ScrollingText.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ScrollingText: () => (/* binding */ ScrollingText)\n/* harmony export */ });\nfunction mod(x, n) {\n  while (x < 0) {\n    x += n;\n  }\n  return x % n;\n}\nclass ScrollingText extends HTMLElement {\n  constructor() {\n    super();\n  }\n  resize() {}\n  connectedCallback() {\n    this.resize();\n    this.canvas = document.createElement(\"canvas\");\n    this.text = \"THE MOST EXCLUSIVE AIR MAX DROP EVER\";\n    this.canvas.style.height = \"100%\";\n    this.canvas.style.width = \"100%\";\n    this.appendChild(this.canvas);\n    this.app = new ScrollingTextApp(this.canvas, this.text, this.attributes.direction.value == \"left\");\n    let app = this.app;\n    (function loop() {\n      app.update();\n      app.draw();\n      requestAnimationFrame(loop);\n    })();\n  }\n}\nclass ScrollingTextApp {\n  constructor(el, text, reverse) {\n    this.el = el;\n    this.text = text;\n    this.reverse = !!reverse;\n    this.context = this.el.getContext(\"2d\");\n    this.blurb = this.generateBlurb();\n  }\n  generateBlurb() {\n    const ctx = this.context;\n    const w = this.el.width;\n    const h = this.el.height;\n    let text = this.text + \" \" + this.text + \" \";\n    let measurements;\n    ctx.save();\n    ctx.font = \"bold italic \" + h + \"px Franie\";\n    ;\n    measurements = ctx.measureText(text);\n    ctx.restore();\n    return {\n      width: measurements.width,\n      height: measurements.height,\n      text: text\n    };\n  }\n  update() {\n    let h = this.el.height;\n    const ctx = this.context;\n    ctx.save();\n    ctx.font = \"bold italic \" + (h - 10) + \"px Franie\";\n    ;\n    ctx.lineWidth = 1;\n    ctx.strokeStyle = \"yellow\";\n    ctx.fillStyle = \"yellow\";\n    let box = ctx.measureText(this.blurb.text);\n    ctx.restore();\n    const w = Math.max(box.width, 1);\n    const t = new Date() / 9.5 % w;\n    this.offset = Math.floor(t);\n  }\n  draw() {\n    const bbox = this.el.getBoundingClientRect();\n    this.el.width = bbox.width * 2;\n    this.el.height = bbox.height * 2;\n    let w = this.el.width;\n    let h = this.el.height;\n    const ctx = this.context;\n    ctx.clearRect(0, 0, w, h);\n\n    //\n    let x = this.offset * (this.reverse ? -1 : 1);\n    let y = h - 10;\n    ctx.save();\n    ctx.font = \"bold italic \" + (h - 10) + \"px Franie\";\n    ;\n    ctx.lineWidth = 1.0;\n    ctx.strokeStyle = \"yellow\";\n    ctx.fillStyle = \"yellow\";\n    let box = ctx.measureText(this.blurb.text);\n    ctx.strokeText(this.blurb.text, x - box.width, y);\n    ctx.strokeText(this.blurb.text, x, y);\n    ctx.strokeText(this.blurb.text, x + box.width, y);\n    ctx.restore();\n  }\n}\n\n//# sourceURL=webpack://airmaxdotcom/./ScrollingText.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clickThrough: () => (/* binding */ clickThrough),\n/* harmony export */   startCountdown: () => (/* binding */ startCountdown)\n/* harmony export */ });\n/* harmony import */ var _Countdown_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Countdown.js */ \"./Countdown.js\");\n/* harmony import */ var _ScrollingText_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScrollingText.js */ \"./ScrollingText.js\");\n// AIRMAXDOTCOM\n\n\n\n\n/**\n * Yikes\n */\nfunction startCountdown(el) {\n  let countdown = new _Countdown_js__WEBPACK_IMPORTED_MODULE_0__.Countdown(el);\n  (function loop() {\n    countdown.update();\n    countdown.draw();\n    requestAnimationFrame(loop);\n  })();\n}\ncustomElements.define(\"scrolling-text\", _ScrollingText_js__WEBPACK_IMPORTED_MODULE_1__.ScrollingText);\nfunction clickThrough() {\n  document.body.classList.remove(\"splash\");\n  document.body.classList.add(\"no-splash\");\n  window.removeEventListener(\"click\", clickThrough);\n  window.removeEventListener(\"touchstart\", clickThrough);\n  window.removeEventListener(\"wheel\", clickThrough);\n}\nwindow.addEventListener(\"load\", function () {\n  window.addEventListener(\"click\", clickThrough);\n  window.addEventListener(\"touchstart\", clickThrough);\n  window.addEventListener(\"wheel\", clickThrough);\n});\n\n//# sourceURL=webpack://airmaxdotcom/./index.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	airmaxdotcom = __webpack_exports__;
/******/ 	
/******/ })()
;