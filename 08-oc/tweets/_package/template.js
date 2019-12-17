var oc=oc||{};oc.components=oc.components||{};oc.components['b43ee6a11044a9601e095cf6613428b796fa0042']=function(model){
  var template = /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./tweets/view.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./tweets/css/styles.css":
/*!*******************************!*\
  !*** ./tweets/css/styles.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"tweets\":\"oc__tweets-css-styles-css__tweets__1HSzTR0z\"};\n\n//# sourceURL=webpack:///./tweets/css/styles.css?");

/***/ }),

/***/ "./tweets/tweets/tweets.service.js":
/*!*****************************************!*\
  !*** ./tweets/tweets/tweets.service.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar TWEETS = [{ id: 1, tweetText: \"Hello World!!!\", author: \"@Sven\" }, { id: 2, tweetText: \"Hello Welt\", author: \"@Lars\" }];\n\nmodule.exports = {\n    findAll: function findAll() {\n        return [].concat(TWEETS).reverse();\n    },\n    save: function save(tweet) {\n        var newTweet = _extends({}, tweet, { id: TWEETS.length + 1 });\n        TWEETS.push(newTweet);\n        return newTweet;\n    }\n};\n\n//# sourceURL=webpack:///./tweets/tweets/tweets.service.js?");

/***/ }),

/***/ "./tweets/view.js":
/*!************************!*\
  !*** ./tweets/view.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/styles.css */ \"./tweets/css/styles.css\");\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_styles_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _tweets_tweets_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tweets/tweets.service */ \"./tweets/tweets/tweets.service.js\");\n/* harmony import */ var _tweets_tweets_service__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tweets_tweets_service__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (_ref) {\n    var user = _ref.user;\n    return '\\n<div class=' + _css_styles_css__WEBPACK_IMPORTED_MODULE_0___default.a.tweets + '>\\n    <h1>Tweets of ' + user + '</h1>\\n    <ul>\\n        ' + _tweets_tweets_service__WEBPACK_IMPORTED_MODULE_1___default.a.findAll().map(function (tweet) {\n        return '\\n              <li>' + tweet.tweetText + '</li>\\n        ';\n    }).join('') + '\\n    </ul>\\n</div>\\n';\n});\n\n//# sourceURL=webpack:///./tweets/view.js?");

/***/ })

/******/ });;
  return '' + 
    template.default(model) +
    '<style>.oc__tweets-css-styles-css__tweets__1HSzTR0z{background:#0c5460;color:#fff}ul{list-style:none;margin:0;padding:0}</style><script>window.oc = window.oc || {};oc.cmd = oc.cmd || [];oc.cmd.push(function(oc){oc.events.fire(\'oc:cssDidMount\', \'.oc__tweets-css-styles-css__tweets__1HSzTR0z{background:#0c5460;color:#fff}ul{list-style:none;margin:0;padding:0}\');});</script>'
      
}