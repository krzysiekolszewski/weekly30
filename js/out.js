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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(4)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/resolve-url-loader/index.js!../node_modules/sass-loader/lib/loader.js!./main.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/resolve-url-loader/index.js!../node_modules/sass-loader/lib/loader.js!./main.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

$(document).ready(function () {

    //scroll down animation
    $('ul a').click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000);
        return false;
    });

    //mobile nav
    $(".fa-bars").on('click', function () {
        $('.overlay').css('display', 'flex');
    });

    $(".fa-times").on('click', function () {
        $('.overlay').css('display', 'none');
    });

    $(".overlay a").on('click', function () {
        $('.overlay').css('display', 'none');
    });
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, ".row:before,\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.grid {\n  width: 100%;\n  max-width: 70rem;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n[class*=\"col-\"] {\n  float: left;\n  min-height: 1px;\n  width: 100%;\n}\n\n@media (min-width: 20rem) {\n  .col-1 {\n    width: 8.33333%;\n  }\n\n  .col-2 {\n    width: 16.66667%;\n  }\n\n  .col-3 {\n    width: 25%;\n  }\n\n  .col-4 {\n    width: 33.33333%;\n  }\n\n  .col-5 {\n    width: 41.66667%;\n  }\n\n  .col-6 {\n    width: 50%;\n  }\n\n  .col-7 {\n    width: 58.33333%;\n  }\n\n  .col-8 {\n    width: 66.66667%;\n  }\n\n  .col-9 {\n    width: 75%;\n  }\n\n  .col-10 {\n    width: 83.33333%;\n  }\n\n  .col-11 {\n    width: 91.66667%;\n  }\n\n  .col-12 {\n    width: 100%;\n  }\n}\n\n.col-1 {\n  width: 8.33333%;\n}\n\n.col-2 {\n  width: 16.66667%;\n}\n\n.col-3 {\n  width: 25%;\n}\n\n.col-4 {\n  width: 33.33333%;\n}\n\n.col-5 {\n  width: 41.66667%;\n}\n\n.col-6 {\n  width: 50%;\n}\n\n.col-7 {\n  width: 58.33333%;\n}\n\n.col-8 {\n  width: 66.66667%;\n}\n\n.col-9 {\n  width: 75%;\n}\n\n.col-10 {\n  width: 83.33333%;\n}\n\n.col-11 {\n  width: 91.66667%;\n}\n\n.col-12 {\n  width: 100%;\n}\n\n#header {\n  height: 100vh;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n@media (min-width: 1024px) {\n  #header {\n    background-position: center;\n  }\n}\n\n#header p {\n  font-size: 4rem;\n  text-align: center;\n  padding-top: 60vh;\n}\n\n@media (min-width: 1024px) {\n  #header p {\n    font-weight: 300;\n    font-size: 1.5rem;\n    width: 50%;\n    float: right;\n    padding-top: 60vh;\n    text-align: right;\n  }\n}\n\n#text {\n  background-color: #efeee9;\n}\n\n@media (min-width: 1024px) {\n  #text {\n    padding: 11rem;\n  }\n}\n\n.text_cont {\n  padding: 2rem;\n}\n\n@media (min-width: 1024px) {\n  .text_cont {\n    width: 100%;\n    max-width: 730px;\n  }\n}\n\n.some_text {\n  background-color: white;\n  text-align: center;\n  padding: 100px 0;\n}\n\n.some_text h1 {\n  font-size: 2.5rem;\n  text-transform: uppercase;\n  font-family: 'Roboto Slab', serif;\n  font-weight: 300;\n  color: #686868;\n  text-align: center;\n}\n\n.some_text p {\n  font-size: 1.25rem;\n  font-weight: 300;\n  text-align: left;\n  padding: 5rem 0;\n}\n\n.some_text button {\n  border: 2px solid black;\n  background-color: white;\n  text-transform: uppercase;\n  width: 25rem;\n  height: 5rem;\n  font-size: 2rem;\n}\n\n@media (min-width: 1024px) {\n  .some_text button {\n    width: 13rem;\n    height: 3.75rem;\n    font-size: 1.1rem;\n  }\n}\n\n#some_text {\n  background-color: #efeee9;\n  padding: 11rem;\n}\n\n#some_text p {\n  font-size: 2.1rem;\n  text-align: center;\n  font-weight: 300;\n}\n\n#portfolio .row {\n  display: flex;\n  flex-direction: column;\n}\n\n@media (min-width: 1024px) {\n  #portfolio .row {\n    flex-direction: row;\n  }\n}\n\n#portfolio .col-4 {\n  padding: 0;\n  background-color: black;\n  width: 100%;\n}\n\n#portfolio img {\n  width: 100%;\n  height: auto;\n}\n\n@media (min-width: 1024px) {\n  #portfolio img:hover {\n    opacity: 0.2;\n  }\n}\n\n#buttons #button {\n  width: 100%;\n  height: auto;\n}\n\n@media (min-width: 1024px) {\n  #buttons #button {\n    display: none;\n  }\n}\n\n#buttons .row {\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n}\n\n@media (min-width: 1024px) {\n  #buttons .row {\n    flex-direction: row;\n    align-items: center;\n  }\n}\n\n#buttons .row .image img {\n  display: none;\n}\n\n@media (min-width: 1024px) {\n  #buttons .row .image img {\n    display: flex;\n    width: 100%;\n    height: auto;\n  }\n}\n\n#buttons .articles {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n#buttons .art_1 {\n  padding: 5rem 0;\n}\n\n@media (min-width: 1024px) {\n  #buttons .art_1 {\n    padding: 0;\n  }\n}\n\n#buttons .art_2 {\n  padding: 5rem 0;\n}\n\n#buttons .art_3 {\n  padding: 5rem 0;\n}\n\n@media (min-width: 1024px) {\n  #buttons .art_3 {\n    padding: 0;\n  }\n}\n\n#buttons article {\n  font-weight: 300;\n  text-align: center;\n}\n\n@media (min-width: 1024px) {\n  #buttons article {\n    width: 50%;\n    text-align: left;\n  }\n}\n\n#buttons article h1 {\n  text-transform: uppercase;\n  letter-spacing: 5px;\n  font-size: 5rem;\n}\n\n@media (min-width: 1024px) {\n  #buttons article h1 {\n    font-size: 0.85rem;\n    font-weight: 300;\n  }\n}\n\n#buttons article p {\n  font-size: 3rem;\n  padding-top: 2rem;\n}\n\n@media (min-width: 1024px) {\n  #buttons article p {\n    font-size: 0.85rem;\n    padding-top: 0;\n  }\n}\n\n#references .row {\n  display: flex;\n  flex-direction: column;\n}\n\n@media (min-width: 1024px) {\n  #references .row {\n    flex-direction: row;\n    padding: 6.25rem 0;\n  }\n}\n\n#references .row .col-4 {\n  text-align: center;\n  padding: 3rem;\n  width: 100%;\n  border-top: 5px solid black;\n}\n\n@media (min-width: 1024px) {\n  #references .row .col-4 {\n    border-top: none;\n    background-color: white;\n    width: 30%;\n  }\n}\n\n#references .row .col-4 h1 {\n  font-size: 1.1rem;\n}\n\n#references .row .col-4 p {\n  padding: 3rem 0;\n  font-size: 1rem;\n  text-align: justify;\n}\n\n@media (min-width: 1024px) {\n  #references .row .col-4 p {\n    text-align: center;\n  }\n}\n\n#map {\n  background-color: #353535;\n}\n\n#map .col-6 {\n  width: 100%;\n  padding: 5rem;\n}\n\n@media (min-width: 1024px) {\n  #map .col-6 {\n    padding: 0;\n  }\n}\n\n#map .info {\n  color: white;\n}\n\n@media (min-width: 1024px) {\n  #map .info {\n    padding-right: 15rem;\n  }\n}\n\n#map .info p {\n  font-size: 2.4rem;\n  text-align: justify;\n  padding-bottom: 10rem;\n}\n\n@media (min-width: 1024px) {\n  #map .info p {\n    font-size: 1rem;\n    text-align: left;\n    padding: 0;\n  }\n}\n\n#map .info .contact h1 {\n  font-size: 2rem;\n  text-transform: uppercase;\n  text-align: center;\n  letter-spacing: 0.5rem;\n}\n\n@media (min-width: 1024px) {\n  #map .info .contact h1 {\n    font-size: 1rem;\n    text-align: left;\n    text-transform: none;\n    letter-spacing: 0;\n  }\n}\n\n#map .info .contact p {\n  text-align: center;\n  padding: 1rem 0;\n  font-size: 3rem;\n}\n\n@media (min-width: 1024px) {\n  #map .info .contact p {\n    text-align: left;\n    padding: 0;\n    font-size: 1rem;\n  }\n}\n\n#map .info .first {\n  padding: 2rem 0;\n}\n\n#map .row {\n  display: flex;\n  flex-direction: column;\n}\n\n@media (min-width: 1024px) {\n  #map .row {\n    flex-direction: row;\n    align-items: center;\n  }\n}\n\n#map button {\n  width: 100%;\n  height: 10rem;\n  border: 5px solid white;\n  background: transparent;\n  margin: 3rem 0;\n}\n\n#map button a {\n  color: white;\n  font-size: 4rem;\n  line-height: 10rem;\n  letter-spacing: 1rem;\n  text-decoration: none;\n}\n\n@media (min-width: 1024px) {\n  #map button {\n    display: none;\n  }\n}\n\n@media (min-width: 1024px) {\n  #map .map {\n    position: relative;\n    padding-bottom: 75%;\n    height: 0;\n    overflow: hidden;\n  }\n}\n\n#map .map iframe {\n  display: none;\n}\n\n@media (min-width: 1024px) {\n  #map .map iframe {\n    display: flex;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100% !important;\n    height: 100% !important;\n  }\n}\n\n#footer .col-6 {\n  width: 100%;\n}\n\n#footer .row {\n  padding: 2rem 0;\n  display: flex;\n  flex-direction: column;\n}\n\n@media (min-width: 1024px) {\n  #footer .row {\n    flex-direction: row;\n  }\n}\n\n#footer .row .icons {\n  font-size: 7rem;\n  display: flex;\n  justify-content: space-between;\n}\n\n@media (min-width: 1024px) {\n  #footer .row .icons {\n    display: inline-block;\n    font-size: 1.2em;\n  }\n}\n\n#footer .row .icons i {\n  color: black;\n  padding-right: 1rem;\n}\n\n#footer .row .copy p {\n  text-align: center;\n  font-size: 0.8rem;\n  padding-top: 3rem;\n}\n\n@media (min-width: 1024px) {\n  #footer .row .copy p {\n    float: right;\n    font-size: 1rem;\n    padding: 0;\n  }\n}\n\nnav {\n  height: 11rem;\n  background-color: white;\n  opacity: 0.8;\n}\n\n.container ul {\n  line-height: 11rem;\n  list-style-type: none;\n  display: flex;\n  justify-content: center;\n}\n\n.container ul #logo {\n  display: inline-block;\n}\n\n.container ul #bars {\n  display: inline-block;\n  font-size: 5rem;\n  position: fixed;\n  right: 50px;\n}\n\n@media (min-width: 1024px) {\n  .container ul #bars {\n    display: none;\n  }\n}\n\n.container ul li {\n  display: none;\n  text-transform: uppercase;\n  letter-spacing: 3px;\n}\n\n@media (min-width: 1024px) {\n  .container ul li {\n    display: inline-block;\n    padding: 0 1.5rem;\n    margin: 0;\n    font-size: 0.625rem;\n    font-weight: 400;\n    color: #222222;\n  }\n}\n\n.container ul li a {\n  text-decoration: none;\n  color: black;\n}\n\n.container ul li span {\n  font-size: 4rem;\n  letter-spacing: 0.8rem;\n  font-weight: 300;\n}\n\n@media (min-width: 1024px) {\n  .container ul li span {\n    font-size: 1.5rem;\n    letter-spacing: 0.6rem;\n    font-weight: 300;\n  }\n}\n\n.overlay {\n  background-color: white;\n  width: 50%;\n  height: 100vh;\n  float: right;\n  position: fixed;\n  top: 0;\n  right: 0;\n  display: none;\n}\n\n.overlay .fa-times {\n  font-size: 5rem;\n  position: absolute;\n  right: 50px;\n  top: 50px;\n}\n\n.overlay ul {\n  padding-top: 10vh;\n  list-style-type: none;\n  font-size: 3rem;\n}\n\n.overlay ul li {\n  padding-top: 5rem;\n  display: flex;\n  flex-direction: column;\n}\n\n.overlay ul li a {\n  text-decoration: none;\n  text-transform: uppercase;\n  color: black;\n  letter-spacing: 1rem;\n}\n\n.overlay ul #top a {\n  color: blue;\n  font-weight: 700;\n}\n\n* {\n  margin: 0 auto;\n  font-family: 'Roboto', sans-serif;\n}\n\n.container {\n  width: 100%;\n  max-width: 1010px;\n}\n\nbody {\n  background-color: #efeee9;\n}", ""]);

// exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(5);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);