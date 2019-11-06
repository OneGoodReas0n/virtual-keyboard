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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ \"./src/styles/style.scss\");\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keyboard */ \"./src/keyboard/index.js\");\n\n\nvar keyboard = new _keyboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\nwindow.onload = function () {\n  if (localStorage.getItem('lang').length === 0) {\n    localStorage.setItem('lang', 'en');\n  }\n\n  var _document = document,\n      body = _document.body;\n  var containerDiv = document.createElement('div');\n  containerDiv.classList.add('container');\n  var textareaDiv = document.createElement('div');\n  textareaDiv.classList.add('textarea-wrapper');\n  var textareaElem = document.createElement('textarea');\n  textareaElem.id = 'textarea';\n  textareaElem.classList.add('textarea-wrapper__textarea');\n  textareaDiv.appendChild(textareaElem);\n  containerDiv.appendChild(textareaDiv);\n  containerDiv.appendChild(keyboard.renderKeyboard(localStorage.getItem('lang')));\n  document.addEventListener('keydown', function (e) {\n    keyboard.keyDownHandler(e, containerDiv);\n  });\n  document.addEventListener('keyup', function (e) {\n    keyboard.keyUpHandler(e, containerDiv);\n  });\n  keyboard.addVirtualHandler(containerDiv);\n  body.appendChild(containerDiv);\n};\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/keyboard/index.js":
/*!*******************************!*\
  !*** ./src/keyboard/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Keyboard = function Keyboard() {\n  var _this = this;\n\n  _classCallCheck(this, Keyboard);\n\n  this.keyModificator = {\n    ctrl: false,\n    alt: false,\n    virtualShift: false,\n    capsLock: false\n  };\n  this.ruPattern = \"\\u0451 1|! 2|\\\" 3|\\u2116 4|; 5|% 6|: 7|? 8|* 9|( 0|) -|_ =|+\\n\\u0439 \\u0446 \\u0443 \\u043A \\u0435 \\u043D \\u0433 \\u0448 \\u0449 \\u0437 \\u0445 \\u044A \\\\|/\\n\" + \"\\u0444 \\u044B \\u0432 \\u0430 \\u043F \\u0440 \\u043E \\u043B \\u0434 \\u0436 \\u044D\\n\\u044F \\u0447 \\u0441 \\u043C \\u0438 \\u0442 \\u044C \\u0431 \\u044E .|,\";\n  this.enPattern = \"`|~ 1|! 2|@ 3|# 4|$ 5|% 6|^ 7|& 8|* 9|( 0|) -|_ =|+\\nQ W E R T Y U I O P [|{ ]|} \\\\||\\n\" + \"A S D F G H J K L ;|: '|\\\"\\nZ X C V B N M ,|< .|> /|?\";\n  this.keywords = \"Backspace,Tab, Delete,CapsLock,Enter, ShiftLeft, ArrowUp, ShiftRight, ControlLeft,\" + \"Lang, MetaLeft, AltLeft,Space, AltRight, ArrowLeft, ArrowDown, ArrowRight, ControlRight\";\n  this.specialKeys = ['Backquote', 'Minus', 'Equal', 'Backslash', 'Semicolon', 'Quote', 'Comma', 'Period', 'Slash', 'BracketLeft', 'BracketRight'];\n\n  this.getArrFromStr = function (str) {\n    return str.split(',');\n  };\n\n  this.getKeyboardArrFromStr = function (str) {\n    var lineArr = str.split('\\n');\n    var symbolsArr = lineArr.map(function (e) {\n      return String(e).toLowerCase().split(' ');\n    });\n\n    for (var i = 0; i < symbolsArr.length; i += 1) {\n      for (var j = 0; j < symbolsArr[i].length; j += 1) {\n        if (String(symbolsArr[i][j]).length > 1 && String(symbolsArr[i][j]).includes('|')) {\n          if (String(symbolsArr[i][j]).includes('||')) {\n            symbolsArr[i][j] = [String(symbolsArr[i][j]).charAt(0), String(symbolsArr[i][j]).charAt(String(symbolsArr[i][j]).length - 1)];\n          } else {\n            symbolsArr[i][j] = String(symbolsArr[i][j]).toLowerCase().split('|');\n          }\n        }\n      }\n    }\n\n    return symbolsArr;\n  };\n\n  this.defineSpecElem = function (str) {\n    switch (str) {\n      case '`':\n        return _this.specialKeys[0];\n\n      case '-':\n        return _this.specialKeys[1];\n\n      case '=':\n        return _this.specialKeys[2];\n\n      case '\\\\':\n        return _this.specialKeys[3];\n\n      case ';':\n        return _this.specialKeys[4];\n\n      case \"'\":\n        return _this.specialKeys[5];\n\n      case ',':\n        return _this.specialKeys[6];\n\n      case '.':\n        return _this.specialKeys[7];\n\n      case '/':\n        return _this.specialKeys[8];\n\n      case '[':\n        return _this.specialKeys[9];\n\n      case ']':\n        return _this.specialKeys[10];\n\n      default:\n        return '';\n    }\n  };\n\n  this.getDefKeybrdObjs = function (enKeyboardValues, ruKeyboardValues) {\n    var keyboardButtonsArr = [];\n\n    for (var i = 0; i < enKeyboardValues.length; i += 1) {\n      var line = [];\n\n      for (var j = 0; j < enKeyboardValues[i].length; j += 1) {\n        var enSymbolObj = enKeyboardValues[i][j];\n        var ruSymbolObj = ruKeyboardValues[i][j];\n        var keyboardBtn = {\n          key: '',\n          langVal: {\n            ru: {\n              initVal: '',\n              additVal: '',\n              type: ''\n            },\n            en: {\n              initVal: '',\n              additVal: '',\n              type: ''\n            }\n          }\n        };\n\n        if (typeof enSymbolObj === 'string') {\n          keyboardBtn.key = \"Key\".concat(String(enSymbolObj).toUpperCase());\n          keyboardBtn.langVal.ru.initVal = ruSymbolObj;\n          keyboardBtn.langVal.ru.additVal = String(ruSymbolObj).toUpperCase();\n          keyboardBtn.langVal.ru.type = typeof ruSymbolObj === 'string' ? 'Single' : 'Multiply';\n          keyboardBtn.langVal.en.initVal = enSymbolObj;\n          keyboardBtn.langVal.en.additVal = String(enSymbolObj).toUpperCase();\n          keyboardBtn.langVal.en.type = 'Single';\n        } else {\n          var _ruSymbolObj = _slicedToArray(ruSymbolObj, 2),\n              ruVal = _ruSymbolObj[0],\n              ruAddVal = _ruSymbolObj[1];\n\n          var _enSymbolObj = _slicedToArray(enSymbolObj, 2),\n              enVal = _enSymbolObj[0],\n              enAddVal = _enSymbolObj[1];\n\n          if (!Number.isNaN(parseInt(enVal, 10))) {\n            keyboardBtn.key = \"Digit\".concat(enVal);\n            keyboardBtn.langVal.ru.additVal = ruAddVal;\n          } else if (ruAddVal === undefined) {\n            keyboardBtn.key = _this.defineSpecElem(enVal);\n            keyboardBtn.langVal.ru.additVal = ruVal.toUpperCase();\n          } else {\n            keyboardBtn.key = _this.defineSpecElem(enVal);\n            keyboardBtn.langVal.ru.additVal = ruAddVal;\n          }\n\n          keyboardBtn.langVal.ru.initVal = ruVal;\n          keyboardBtn.langVal.ru.type = typeof ruSymbolObj === 'string' ? 'Single' : 'Multiply';\n          keyboardBtn.langVal.en.initVal = enVal;\n          keyboardBtn.langVal.en.additVal = enAddVal;\n          keyboardBtn.langVal.en.type = 'Multiply';\n        }\n\n        line.push(keyboardBtn);\n      }\n\n      keyboardButtonsArr.push(line);\n    }\n\n    return keyboardButtonsArr;\n  };\n\n  this.getTypeOfBtn = function (obj, lang) {\n    if (lang === 'en' && obj.type === undefined) {\n      return obj.langVal.en.type;\n    }\n\n    if (lang === 'ru' && obj.type === undefined) {\n      return obj.langVal.ru.type;\n    }\n\n    return obj.type;\n  };\n\n  this.addAdditionalKeyObjects = function (arr, keysArr) {\n    var _arr2 = _slicedToArray(arr, 4),\n        line1 = _arr2[0],\n        line2 = _arr2[1],\n        line3 = _arr2[2],\n        line4 = _arr2[3];\n\n    var specialKeyObjs = [];\n\n    for (var i = 0; i < keysArr.length; i += 1) {\n      if (keysArr[i].includes('Arrow')) {\n        var key = keysArr[i].trim();\n\n        switch (key) {\n          case 'ArrowUp':\n            specialKeyObjs.push({\n              key: key,\n              val: '&#8593',\n              type: 'Special-letter'\n            });\n            break;\n\n          case 'ArrowDown':\n            specialKeyObjs.push({\n              key: key,\n              val: '&#8595',\n              type: 'Special-letter'\n            });\n            break;\n\n          case 'ArrowLeft':\n            specialKeyObjs.push({\n              key: key,\n              val: '&#8592',\n              type: 'Special-letter'\n            });\n            break;\n\n          case 'ArrowRight':\n            specialKeyObjs.push({\n              key: key,\n              val: '&#8594',\n              type: 'Special-letter'\n            });\n            break;\n\n          default:\n            break;\n        }\n      } else if (keysArr[i] === 'Space') {\n        specialKeyObjs.push({\n          key: keysArr[i].trim(),\n          val: ' ',\n          type: 'Special-big'\n        });\n      } else if (keysArr[i].includes('Shift') || keysArr[i].includes('Alt') || keysArr[i].includes('Control') || keysArr[i].includes('Meta')) {\n        var val = keysArr[i].trim();\n        val = val.includes('Shift') ? 'Shift' : val.includes('Alt') ? 'Alt' : val.includes('Control') ? 'Ctrl' : 'Win';\n\n        if (keysArr[i].includes('ShiftRight')) {\n          specialKeyObjs.push({\n            key: keysArr[i].trim(),\n            val: val,\n            type: 'Special-letter-end'\n          });\n        } else {\n          specialKeyObjs.push({\n            key: keysArr[i].trim(),\n            val: val,\n            type: 'Special'\n          });\n        }\n      } else {\n        specialKeyObjs.push({\n          key: keysArr[i].trim(),\n          val: keysArr[i].trim(),\n          type: 'Special'\n        });\n      }\n    }\n\n    line1.push(specialKeyObjs[0]);\n    line2.unshift(specialKeyObjs[1]);\n    line2.push(specialKeyObjs[2]);\n    line3.unshift(specialKeyObjs[3]);\n    line3.push(specialKeyObjs[4]);\n    line4.unshift(specialKeyObjs[5]);\n    line4.push(specialKeyObjs[6]);\n    line4.push(specialKeyObjs[7]);\n    var line5 = [];\n\n    for (var k = 8; k < keysArr.length; k += 1) {\n      line5.push(specialKeyObjs[k]);\n    }\n\n    arr.push(line5);\n    return arr;\n  };\n\n  this.renderKeyboard = function (lang) {\n    var shift = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n    var capsLock = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n    var keyboardDiv = document.createElement('div');\n    keyboardDiv.classList.add('keyboard');\n\n    var keyboardObjs = _this.addAdditionalKeyObjects(_this.getDefKeybrdObjs(_this.getKeyboardArrFromStr(_this.enPattern), _this.getKeyboardArrFromStr(_this.ruPattern)), _this.getArrFromStr(_this.keywords));\n\n    for (var i = 0; i < keyboardObjs.length; i += 1) {\n      var rowDiv = document.createElement('div');\n      rowDiv.classList.add('row');\n      var btnDiv = {};\n\n      for (var j = 0; j < keyboardObjs[i].length; j += 1) {\n        var symbolObj = keyboardObjs[i][j];\n        btnDiv = document.createElement('div');\n        btnDiv.classList.add('btn-key');\n        var spanElem1 = document.createElement('span');\n        spanElem1.classList.add('text');\n        var spanElem2 = document.createElement('span');\n        spanElem2.classList.add('text');\n        spanElem2.classList.add('text_smaller');\n        spanElem2.classList.add('symbol-upper');\n\n        switch (_this.getTypeOfBtn(symbolObj, lang)) {\n          case 'Special-letter-end':\n            btnDiv.classList.add('btn-key-word-with-space');\n            btnDiv.classList.add('btn-key-word-with-space_right-shift');\n            btnDiv.id = symbolObj.key;\n            spanElem1.innerHTML = symbolObj.val;\n            btnDiv.appendChild(spanElem1);\n            break;\n\n          case 'Special-big':\n            btnDiv.classList.add('btn-key-big');\n            btnDiv.id = symbolObj.key;\n            spanElem1.innerHTML = symbolObj.val;\n            btnDiv.appendChild(spanElem1);\n            break;\n\n          case 'Special-letter':\n            btnDiv.classList.add('btn-key-letter');\n            btnDiv.id = symbolObj.key;\n            spanElem1.innerHTML = symbolObj.val;\n            btnDiv.appendChild(spanElem1);\n            break;\n\n          case 'Special':\n            btnDiv.classList.add('btn-key-word-with-space');\n            btnDiv.id = symbolObj.key;\n            spanElem1.innerHTML = symbolObj.val;\n            btnDiv.appendChild(spanElem1);\n            break;\n\n          case 'Single':\n            btnDiv.classList.add('btn-key-letter');\n            btnDiv.id = symbolObj.key;\n            spanElem1.innerHTML = shift || capsLock ? symbolObj.langVal[lang].additVal : symbolObj.langVal[lang].initVal;\n            btnDiv.appendChild(spanElem1);\n            break;\n\n          case 'Multiply':\n            btnDiv.classList.add('btn-key-double-symbol');\n            btnDiv.id = symbolObj.key;\n\n            if (shift) {\n              spanElem1.innerHTML = symbolObj.langVal[lang].additVal;\n              btnDiv.appendChild(spanElem1);\n            } else {\n              spanElem1.innerHTML = symbolObj.langVal[lang].initVal;\n              spanElem2.innerHTML = symbolObj.langVal[lang].additVal;\n              btnDiv.appendChild(spanElem1);\n              btnDiv.appendChild(spanElem2);\n            }\n\n            break;\n\n          default:\n            break;\n        }\n\n        rowDiv.appendChild(btnDiv);\n      }\n\n      keyboardDiv.appendChild(rowDiv);\n    }\n\n    return keyboardDiv;\n  };\n\n  this.addVirtualHandler = function (div) {\n    div.lastChild.childNodes.forEach(function (row) {\n      row.childNodes.forEach(function (btn) {\n        btn.addEventListener('click', function () {\n          _this.keyDownHandler(btn, div);\n\n          setTimeout(_this.keyUpHandler(btn, div), 200);\n        });\n      });\n    });\n  };\n\n  this.checkIfKeyboardKey = function (name) {\n    return String(name).includes('Digit') || String(name).includes('Key') || _this.specialKeys.includes(name) || _this.keywords.includes(name) || String(name).includes('Tab') || String(name).includes('Control') || String(name).includes('Alt') || String(name).includes('Shift');\n  };\n\n  this.changeState = function (str, containerDiv) {\n    if (str === 'Shift') {\n      if (_this.keyModificator.virtualShift) {\n        _this.keyModificator.virtualShift = false;\n\n        while (containerDiv.children.length > 1) {\n          containerDiv.removeChild(containerDiv.lastChild);\n        }\n\n        containerDiv.appendChild(_this.renderKeyboard(localStorage.getItem('lang')));\n      } else {\n        _this.keyModificator.virtualShift = true;\n\n        while (containerDiv.children.length > 1) {\n          containerDiv.removeChild(containerDiv.lastChild);\n        }\n\n        containerDiv.appendChild(_this.renderKeyboard(localStorage.getItem('lang'), true));\n      }\n\n      _this.addVirtualHandler(containerDiv);\n    } else if (str === 'CapsLock') {\n      if (_this.keyModificator.capsLock) {\n        _this.keyModificator.capsLock = false;\n\n        while (containerDiv.children.length > 1) {\n          containerDiv.removeChild(containerDiv.lastChild);\n        }\n\n        containerDiv.appendChild(_this.renderKeyboard(localStorage.getItem('lang')));\n      } else {\n        _this.keyModificator.capsLock = true;\n\n        while (containerDiv.children.length > 1) {\n          containerDiv.removeChild(containerDiv.lastChild);\n        }\n\n        containerDiv.appendChild(_this.renderKeyboard(localStorage.getItem('lang'), false, true));\n      }\n\n      _this.addVirtualHandler(containerDiv);\n    }\n  };\n\n  this.keyUpHandler = function (e, containerDiv) {\n    var virtual = true;\n    var name = e.id;\n\n    if (e.code !== undefined) {\n      name = e.code;\n      virtual = false;\n    }\n\n    if (_this.checkIfKeyboardKey(name)) {\n      if (!virtual) {\n        if (name.includes('Shift')) {\n          while (containerDiv.children.length > 1) {\n            containerDiv.removeChild(containerDiv.lastChild);\n          }\n\n          containerDiv.appendChild(_this.renderKeyboard(localStorage.getItem('lang'), false));\n\n          _this.addVirtualHandler(containerDiv);\n        } else if (String(name).includes('Control')) {\n          _this.keyModificator.ctrl = false;\n        } else if (String(name).includes('Alt')) {\n          _this.keyModificator.alt = false;\n        }\n\n        if (!String(name).includes('CapsLock')) {\n          var elem = document.getElementById(name);\n          setTimeout(function () {\n            elem.classList.remove('btn-key_active');\n          }, 100);\n        }\n      } else if (!name.includes('Shift') && !name.includes('CapsLock')) {\n        var _elem = document.getElementById(name);\n\n        setTimeout(function () {\n          _elem.classList.remove('btn-key_active');\n        }, 100);\n      }\n    }\n  };\n\n  this.keyDownHandler = function (e, containerDiv) {\n    var textarea = document.getElementById('textarea');\n    var name = e.id;\n    var virtual = true;\n    textarea.focus();\n\n    if (e.code !== undefined) {\n      name = e.code;\n      virtual = false;\n    }\n\n    if (_this.checkIfKeyboardKey(name)) {\n      if (String(name).includes('Digit') || String(name).includes('Key') || _this.specialKeys.includes(name) || String(name).includes('Tab')) {\n        if (!virtual) {\n          e.preventDefault();\n        }\n\n        if (name.includes('Tab')) {\n          textarea.value += '\\t';\n        } else {\n          textarea.value += document.getElementById(name).children.item(0).innerHTML;\n        }\n      } else if (name.includes('Shift') && !virtual) {\n        while (containerDiv.children.length > 1) {\n          containerDiv.removeChild(containerDiv.lastChild);\n        }\n\n        containerDiv.appendChild(_this.renderKeyboard(localStorage.getItem('lang'), true));\n\n        _this.addVirtualHandler(containerDiv);\n      } else if (name.includes('Shift') && virtual) {\n        _this.changeState('Shift', containerDiv);\n      } else if (name.includes('Space') && virtual) {\n        textarea.value += ' ';\n      } else if (name.includes('Lang')) {\n        while (containerDiv.children.length > 1) {\n          containerDiv.removeChild(containerDiv.lastChild);\n        }\n\n        _this.toggleLang(localStorage.getItem('lang'));\n\n        containerDiv.appendChild(_this.renderKeyboard(localStorage.getItem('lang')));\n\n        _this.addVirtualHandler(containerDiv);\n      } else if (name.includes('CapsLock')) {\n        _this.changeState('CapsLock', containerDiv);\n      } else if (String(name).includes('Control')) {\n        _this.keyModificator.ctrl = true;\n      } else if (String(name).includes('Alt')) {\n        if (!virtual) {\n          e.preventDefault();\n        }\n\n        _this.keyModificator.alt = true;\n      }\n\n      if (_this.keyModificator.alt && _this.keyModificator.ctrl) {\n        _this.toggleLang(localStorage.getItem('lang'));\n\n        while (containerDiv.children.length > 1) {\n          containerDiv.removeChild(containerDiv.lastChild);\n        }\n\n        containerDiv.appendChild(_this.renderKeyboard(localStorage.getItem('lang')));\n\n        _this.addVirtualHandler(containerDiv);\n      }\n\n      var elem = document.getElementById(name);\n\n      if (name.includes('Shift') && virtual && !_this.keyModificator.virtualShift || name.includes('CapsLock') && !_this.keyModificator.capsLock) {\n        elem.classList.remove('btn-key_active');\n      } else {\n        elem.classList.add('btn-key_active');\n      }\n    }\n  };\n\n  this.toggleLang = function (lang) {\n    if (lang === 'en') {\n      localStorage.setItem('lang', 'ru');\n    } else {\n      localStorage.setItem('lang', 'en');\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Keyboard);\n\n//# sourceURL=webpack:///./src/keyboard/index.js?");

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/styles/style.scss?");

/***/ })

/******/ });