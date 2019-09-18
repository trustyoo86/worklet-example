/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Checkerboard.js":
/*!*****************************!*\
  !*** ./src/Checkerboard.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * checkboard (격자무늬) example\n * textarea내 격자무늬를 표시한다.\n */\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar CheckerboardPainter =\n/*#__PURE__*/\nfunction () {\n  function CheckerboardPainter() {\n    _classCallCheck(this, CheckerboardPainter);\n  }\n  /**\n   * paint 함수\n   * @param {Object} ctx canvas context\n   * @param {Object} geom geom 객체 (css내 property 객체)\n   */\n\n\n  _createClass(CheckerboardPainter, [{\n    key: \"paint\",\n    value: function paint(ctx, geom) {\n      var colors = ['red', 'green', 'blue'];\n      var size = 50;\n      /**\n       * css property에서 입력된 값들을 기준으로 loop돌며 격자 무늬를 생성한다.\n       */\n\n      for (var y = 0; y < geom.height / size; y++) {\n        for (var x = 0; x < geom.width / size; x++) {\n          var color = colors[(x + y) % colors.length]; // context path 시작\n\n          ctx.beginPath(); // fillStyle 정의\n\n          ctx.fillStyle = color;\n          ctx.rect(x * size, y * size, size, size);\n          ctx.fill();\n        }\n      }\n    }\n  }]);\n\n  return CheckerboardPainter;\n}();\n\nmodule.exports = CheckerboardPainter;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ2hlY2tlcmJvYXJkLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL0NoZWNrZXJib2FyZC5qcz85ZmU2Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogY2hlY2tib2FyZCAo6rKp7J6Q66y064qsKSBleGFtcGxlXG4gKiB0ZXh0YXJlYeuCtCDqsqnsnpDrrLTriqzrpbwg7ZGc7Iuc7ZWc64ukLlxuICovXG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxudmFyIENoZWNrZXJib2FyZFBhaW50ZXIgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBDaGVja2VyYm9hcmRQYWludGVyKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDaGVja2VyYm9hcmRQYWludGVyKTtcbiAgfVxuICAvKipcbiAgICogcGFpbnQg7ZWo7IiYXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjdHggY2FudmFzIGNvbnRleHRcbiAgICogQHBhcmFtIHtPYmplY3R9IGdlb20gZ2VvbSDqsJ3ssrQgKGNzc+uCtCBwcm9wZXJ0eSDqsJ3ssrQpXG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKENoZWNrZXJib2FyZFBhaW50ZXIsIFt7XG4gICAga2V5OiBcInBhaW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBhaW50KGN0eCwgZ2VvbSkge1xuICAgICAgdmFyIGNvbG9ycyA9IFsncmVkJywgJ2dyZWVuJywgJ2JsdWUnXTtcbiAgICAgIHZhciBzaXplID0gNTA7XG4gICAgICAvKipcbiAgICAgICAqIGNzcyBwcm9wZXJ0eeyXkOyEnCDsnoXroKXrkJwg6rCS65Ok7J2EIOq4sOykgOycvOuhnCBsb29w64+M66mwIOqyqeyekCDrrLTriqzrpbwg7IOd7ISx7ZWc64ukLlxuICAgICAgICovXG5cbiAgICAgIGZvciAodmFyIHkgPSAwOyB5IDwgZ2VvbS5oZWlnaHQgLyBzaXplOyB5KyspIHtcbiAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCBnZW9tLndpZHRoIC8gc2l6ZTsgeCsrKSB7XG4gICAgICAgICAgdmFyIGNvbG9yID0gY29sb3JzWyh4ICsgeSkgJSBjb2xvcnMubGVuZ3RoXTsgLy8gY29udGV4dCBwYXRoIOyLnOyekVxuXG4gICAgICAgICAgY3R4LmJlZ2luUGF0aCgpOyAvLyBmaWxsU3R5bGUg7KCV7J2YXG5cbiAgICAgICAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgICAgY3R4LnJlY3QoeCAqIHNpemUsIHkgKiBzaXplLCBzaXplLCBzaXplKTtcbiAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIENoZWNrZXJib2FyZFBhaW50ZXI7XG59KCk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2hlY2tlcmJvYXJkUGFpbnRlcjsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Checkerboard.js\n");

/***/ }),

/***/ "./src/Switch.js":
/*!***********************!*\
  !*** ./src/Switch.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar DEG_360 = Math.PI * 2;\nvar FG_COLOR = '#ffffff';\nvar CIRCLE_MARGIN = 3;\n\nvar Switch =\n/*#__PURE__*/\nfunction () {\n  function Switch() {\n    _classCallCheck(this, Switch);\n  }\n\n  _createClass(Switch, [{\n    key: \"paint\",\n    value: function paint(ctx, geom, props) {\n      var width = geom.width,\n          height = geom.height;\n      var halfOfCircleSize = height / 2;\n      var innerWidth = width - height;\n      var on = parseFloat(props.get('--switch-on').toString());\n      var posx = halfOfCircleSize + innerWidth * on;\n      this.renderBackground(ctx, width, height, halfOfCircleSize, innerWidth, props);\n      this.renderToggleButton(ctx, width, height, halfOfCircleSize, posx);\n    }\n  }, {\n    key: \"renderBackground\",\n    value: function renderBackground(ctx, width, height, halfOfCircleSize, innerWidth, props) {\n      // switch background\n      ctx.fillStyle = props.get('color').toString();\n      ctx.beginPath();\n      ctx.arc(halfOfCircleSize, halfOfCircleSize, halfOfCircleSize, 0, DEG_360);\n      ctx.arc(width - halfOfCircleSize, halfOfCircleSize, halfOfCircleSize, 0, DEG_360);\n      ctx.rect(halfOfCircleSize, 0, innerWidth, height);\n      ctx.fill(); // end switch background\n    }\n  }, {\n    key: \"renderToggleButton\",\n    value: function renderToggleButton(ctx, width, height, halfOfCircleSize, posx) {\n      ctx.fillStyle = FG_COLOR;\n      ctx.beginPath();\n      ctx.arc(posx, halfOfCircleSize, halfOfCircleSize - CIRCLE_MARGIN, 0, DEG_360);\n      ctx.fill();\n    }\n  }], [{\n    key: \"inputProperties\",\n    get: function get() {\n      return ['color', '--switch-on'];\n    }\n  }]);\n\n  return Switch;\n}();\n\nmodule.exports = Switch;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvU3dpdGNoLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL1N3aXRjaC5qcz8yMzUyIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG52YXIgREVHXzM2MCA9IE1hdGguUEkgKiAyO1xudmFyIEZHX0NPTE9SID0gJyNmZmZmZmYnO1xudmFyIENJUkNMRV9NQVJHSU4gPSAzO1xuXG52YXIgU3dpdGNoID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU3dpdGNoKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTd2l0Y2gpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFN3aXRjaCwgW3tcbiAgICBrZXk6IFwicGFpbnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGFpbnQoY3R4LCBnZW9tLCBwcm9wcykge1xuICAgICAgdmFyIHdpZHRoID0gZ2VvbS53aWR0aCxcbiAgICAgICAgICBoZWlnaHQgPSBnZW9tLmhlaWdodDtcbiAgICAgIHZhciBoYWxmT2ZDaXJjbGVTaXplID0gaGVpZ2h0IC8gMjtcbiAgICAgIHZhciBpbm5lcldpZHRoID0gd2lkdGggLSBoZWlnaHQ7XG4gICAgICB2YXIgb24gPSBwYXJzZUZsb2F0KHByb3BzLmdldCgnLS1zd2l0Y2gtb24nKS50b1N0cmluZygpKTtcbiAgICAgIHZhciBwb3N4ID0gaGFsZk9mQ2lyY2xlU2l6ZSArIGlubmVyV2lkdGggKiBvbjtcbiAgICAgIHRoaXMucmVuZGVyQmFja2dyb3VuZChjdHgsIHdpZHRoLCBoZWlnaHQsIGhhbGZPZkNpcmNsZVNpemUsIGlubmVyV2lkdGgsIHByb3BzKTtcbiAgICAgIHRoaXMucmVuZGVyVG9nZ2xlQnV0dG9uKGN0eCwgd2lkdGgsIGhlaWdodCwgaGFsZk9mQ2lyY2xlU2l6ZSwgcG9zeCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlckJhY2tncm91bmRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyQmFja2dyb3VuZChjdHgsIHdpZHRoLCBoZWlnaHQsIGhhbGZPZkNpcmNsZVNpemUsIGlubmVyV2lkdGgsIHByb3BzKSB7XG4gICAgICAvLyBzd2l0Y2ggYmFja2dyb3VuZFxuICAgICAgY3R4LmZpbGxTdHlsZSA9IHByb3BzLmdldCgnY29sb3InKS50b1N0cmluZygpO1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4LmFyYyhoYWxmT2ZDaXJjbGVTaXplLCBoYWxmT2ZDaXJjbGVTaXplLCBoYWxmT2ZDaXJjbGVTaXplLCAwLCBERUdfMzYwKTtcbiAgICAgIGN0eC5hcmMod2lkdGggLSBoYWxmT2ZDaXJjbGVTaXplLCBoYWxmT2ZDaXJjbGVTaXplLCBoYWxmT2ZDaXJjbGVTaXplLCAwLCBERUdfMzYwKTtcbiAgICAgIGN0eC5yZWN0KGhhbGZPZkNpcmNsZVNpemUsIDAsIGlubmVyV2lkdGgsIGhlaWdodCk7XG4gICAgICBjdHguZmlsbCgpOyAvLyBlbmQgc3dpdGNoIGJhY2tncm91bmRcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyVG9nZ2xlQnV0dG9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlclRvZ2dsZUJ1dHRvbihjdHgsIHdpZHRoLCBoZWlnaHQsIGhhbGZPZkNpcmNsZVNpemUsIHBvc3gpIHtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBGR19DT0xPUjtcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGN0eC5hcmMocG9zeCwgaGFsZk9mQ2lyY2xlU2l6ZSwgaGFsZk9mQ2lyY2xlU2l6ZSAtIENJUkNMRV9NQVJHSU4sIDAsIERFR18zNjApO1xuICAgICAgY3R4LmZpbGwoKTtcbiAgICB9XG4gIH1dLCBbe1xuICAgIGtleTogXCJpbnB1dFByb3BlcnRpZXNcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBbJ2NvbG9yJywgJy0tc3dpdGNoLW9uJ107XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFN3aXRjaDtcbn0oKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTd2l0Y2g7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Switch.js\n");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar Switch = __webpack_require__(/*! ./Switch */ \"./src/Switch.js\");\n\nvar Checkerboard = __webpack_require__(/*! ./Checkerboard */ \"./src/Checkerboard.js\");\n/**\n * css내 paint 함수 정의\n */\n\n\nregisterPaint('checkerboard', Checkerboard);\nregisterPaint('switch', Switch);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tYWluLmpzP2ZjM2MiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgU3dpdGNoID0gcmVxdWlyZSgnLi9Td2l0Y2gnKTtcblxudmFyIENoZWNrZXJib2FyZCA9IHJlcXVpcmUoJy4vQ2hlY2tlcmJvYXJkJyk7XG4vKipcbiAqIGNzc+uCtCBwYWludCDtlajsiJgg7KCV7J2YXG4gKi9cblxuXG5yZWdpc3RlclBhaW50KCdjaGVja2VyYm9hcmQnLCBDaGVja2VyYm9hcmQpO1xucmVnaXN0ZXJQYWludCgnc3dpdGNoJywgU3dpdGNoKTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main.js\n");

/***/ })

/******/ });