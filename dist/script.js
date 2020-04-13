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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_label_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/label.js */ \"./src/js/label.js\");\n/* harmony import */ var _js_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/menu.js */ \"./src/js/menu.js\");\n/* harmony import */ var _js_pages_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/pages.js */ \"./src/js/pages.js\");\n\r\n\r\n\r\n\r\nObject(_js_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"activeLink\"])();\r\nObject(_js_label_js__WEBPACK_IMPORTED_MODULE_0__[\"switchLabel\"])();\r\nObject(_js_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"changeMenu\"])();\r\nObject(_js_pages_js__WEBPACK_IMPORTED_MODULE_2__[\"moveLink\"])();\r\n\r\n/* switch1.addEventListener('click', () => {\r\n    import('./js/label.js').then(module =>{\r\n        module.switchLabel();\r\n    });\r\n}); */\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/cards.js":
/*!*************************!*\
  !*** ./src/js/cards.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst cards = [\n  [\"Main Page\", \"Action (set A)\", \"Action (set B)\", \"Action (set C)\", \"Adjective\",\n    \"Animal (set A)\", \"Animal (set B)\", \"Clothes\", \"Emotion\"],\n  [\n    {\n      word: \"cry\",\n      translation: \"плакать\",\n      image: \"img/cry.jpg\",\n      audioSrc: \"audio/cry.mp3\",\n    },\n    {\n      word: \"dance\",\n      translation: \"танцевать\",\n      image: \"img/dance.jpg\",\n      audioSrc: \"audio/dance.mp3\",\n    },\n    {\n      word: \"dive\",\n      translation: \"нырять\",\n      image: \"img/dive.jpg\",\n      audioSrc: \"audio/dive.mp3\",\n    },\n    {\n      word: \"draw\",\n      translation: \"рисовать\",\n      image: \"img/draw.jpg\",\n      audioSrc: \"audio/draw.mp3\",\n    },\n    {\n      word: \"fish\",\n      translation: \"ловить рыбу\",\n      image: \"img/fish.jpg\",\n      audioSrc: \"audio/fish.mp3\",\n    },\n    {\n      word: \"fly\",\n      translation: \"летать\",\n      image: \"img/fly.jpg\",\n      audioSrc: \"audio/fly.mp3\",\n    },\n    {\n      word: \"hug\",\n      translation: \"обнимать\",\n      image: \"img/hug.jpg\",\n      audioSrc: \"audio/hug.mp3\",\n    },\n    {\n      word: \"jump\",\n      translation: \"прыгать\",\n      image: \"img/jump.jpg\",\n      audioSrc: \"audio/jump.mp3\",\n    },\n  ],\n  [\n    {\n      word: \"open\",\n      translation: \"открывать\",\n      image: \"img/open.jpg\",\n      audioSrc: \"audio/open.mp3\",\n    },\n    {\n      word: \"play\",\n      translation: \"играть\",\n      image: \"img/play.jpg\",\n      audioSrc: \"audio/play.mp3\",\n    },\n    {\n      word: \"point\",\n      translation: \"указывать\",\n      image: \"img/point.jpg\",\n      audioSrc: \"audio/point.mp3\",\n    },\n    {\n      word: \"ride\",\n      translation: \"ездить\",\n      image: \"img/ride.jpg\",\n      audioSrc: \"audio/ride.mp3\",\n    },\n    {\n      word: \"run\",\n      translation: \"бегать\",\n      image: \"img/run.jpg\",\n      audioSrc: \"audio/run.mp3\",\n    },\n    {\n      word: \"sing\",\n      translation: \"петь\",\n      image: \"img/sing.jpg\",\n      audioSrc: \"audio/sing.mp3\",\n    },\n    {\n      word: \"skip\",\n      translation: \"пропускать, прыгать\",\n      image: \"img/skip.jpg\",\n      audioSrc: \"audio/skip.mp3\",\n    },\n    {\n      word: \"swim\",\n      translation: \"плавать\",\n      image: \"img/swim.jpg\",\n      audioSrc: \"audio/swim.mp3\",\n    },\n  ],\n  [\n    {\n      word: \"argue\",\n      translation: \"открывать\",\n      image: \"img/argue.jpg\",\n      audioSrc: \"audio/open.mp3\",\n    },\n    {\n      word: \"build\",\n      translation: \"играть\",\n      image: \"img/build.jpg\",\n      audioSrc: \"audio/play.mp3\",\n    },\n    {\n      word: \"carry\",\n      translation: \"указывать\",\n      image: \"img/carry.jpg\",\n      audioSrc: \"audio/point.mp3\",\n    },\n    {\n      word: \"catch\",\n      translation: \"ездить\",\n      image: \"img/catch.jpg\",\n      audioSrc: \"audio/ride.mp3\",\n    },\n    {\n      word: \"drive\",\n      translation: \"бегать\",\n      image: \"img/drive.jpg\",\n      audioSrc: \"audio/run.mp3\",\n    },\n    {\n      word: \"drop\",\n      translation: \"петь\",\n      image: \"img/drop.jpg\",\n      audioSrc: \"audio/sing.mp3\",\n    },\n    {\n      word: \"pull\",\n      translation: \"пропускать, прыгать\",\n      image: \"img/skip.jpg\",\n      audioSrc: \"audio/skip.mp3\",\n    },\n    {\n      word: \"push\",\n      translation: \"плавать\",\n      image: \"img/push.jpg\",\n      audioSrc: \"audio/swim.mp3\",\n    },\n  ],\n  [\n    {\n      word: \"big\",\n      translation: \"открывать\",\n      image: \"img/big.jpg\",\n      audioSrc: \"audio/open.mp3\",\n    },\n    {\n      word: \"small\",\n      translation: \"играть\",\n      image: \"img/small.jpg\",\n      audioSrc: \"audio/play.mp3\",\n    },\n    {\n      word: \"fast\",\n      translation: \"указывать\",\n      image: \"img/fast.jpg\",\n      audioSrc: \"audio/point.mp3\",\n    },\n    {\n      word: \"slow\",\n      translation: \"ездить\",\n      image: \"img/slow.jpg\",\n      audioSrc: \"audio/ride.mp3\",\n    },\n    {\n      word: \"friendly\",\n      translation: \"бегать\",\n      image: \"img/friendly.jpg\",\n      audioSrc: \"audio/run.mp3\",\n    },\n    {\n      word: \"unfriendly\",\n      translation: \"петь\",\n      image: \"img/unfriendly.jpg\",\n      audioSrc: \"audio/sing.mp3\",\n    },\n    {\n      word: \"young\",\n      translation: \"пропускать, прыгать\",\n      image: \"img/young.jpg\",\n      audioSrc: \"audio/skip.mp3\",\n    },\n    {\n      word: \"old\",\n      translation: \"плавать\",\n      image: \"img/old.jpg\",\n      audioSrc: \"audio/swim.mp3\",\n    },\n  ],\n  [\n    {\n      word: \"cat\",\n      translation: \"кот\",\n      image: \"img/cat.jpg\",\n      audioSrc: \"audio/cat.mp3\",\n    },\n    {\n      word: \"chick\",\n      translation: \"цыплёнок\",\n      image: \"img/chick.jpg\",\n      audioSrc: \"audio/chick.mp3\",\n    },\n    {\n      word: \"chicken\",\n      translation: \"курица\",\n      image: \"img/chicken.jpg\",\n      audioSrc: \"audio/chicken.mp3\",\n    },\n    {\n      word: \"dog\",\n      translation: \"собака\",\n      image: \"img/dog.jpg\",\n      audioSrc: \"audio/dog.mp3\",\n    },\n    {\n      word: \"horse\",\n      translation: \"лошадь\",\n      image: \"img/horse.jpg\",\n      audioSrc: \"audio/horse.mp3\",\n    },\n    {\n      word: \"pig\",\n      translation: \"свинья\",\n      image: \"img/pig.jpg\",\n      audioSrc: \"audio/pig.mp3\",\n    },\n    {\n      word: \"rabbit\",\n      translation: \"кролик\",\n      image: \"img/rabbit.jpg\",\n      audioSrc: \"audio/rabbit.mp3\",\n    },\n    {\n      word: \"sheep\",\n      translation: \"овца\",\n      image: \"img/sheep.jpg\",\n      audioSrc: \"audio/sheep.mp3\",\n    },\n  ],\n  [\n    {\n      word: \"bird\",\n      translation: \"птица\",\n      image: \"img/bird.jpg\",\n      audioSrc: \"audio/bird.mp3\",\n    },\n    {\n      word: \"fish\",\n      translation: \"рыба\",\n      image: \"img/fish1.jpg\",\n      audioSrc: \"audio/fish.mp3\",\n    },\n    {\n      word: \"frog\",\n      translation: \"жаба\",\n      image: \"img/frog.jpg\",\n      audioSrc: \"audio/frog.mp3\",\n    },\n    {\n      word: \"giraffe\",\n      translation: \"жирафа\",\n      image: \"img/giraffe.jpg\",\n      audioSrc: \"audio/giraffe.mp3\",\n    },\n    {\n      word: \"lion\",\n      translation: \"лев\",\n      image: \"img/lion.jpg\",\n      audioSrc: \"audio/lion.mp3\",\n    },\n    {\n      word: \"mouse\",\n      translation: \"мышь\",\n      image: \"img/mouse.jpg\",\n      audioSrc: \"audio/mouse.mp3\",\n    },\n    {\n      word: \"turtle\",\n      translation: \"черепаха\",\n      image: \"img/turtle.jpg\",\n      audioSrc: \"audio/turtle.mp3\",\n    },\n    {\n      word: \"dolphin\",\n      translation: \"дельфин\",\n      image: \"img/dolphin.jpg\",\n      audioSrc: \"audio/dolphin.mp3\",\n    },\n  ],\n  [\n    {\n      word: \"skirt\",\n      translation: \"юбка\",\n      image: \"img/skirt.jpg\",\n      audioSrc: \"audio/skirt.mp3\",\n    },\n    {\n      word: \"pants\",\n      translation: \"брюки\",\n      image: \"img/pants.jpg\",\n      audioSrc: \"audio/pants.mp3\",\n    },\n    {\n      word: \"blouse\",\n      translation: \"блузка\",\n      image: \"img/blouse.jpg\",\n      audioSrc: \"audio/blouse.mp3\",\n    },\n    {\n      word: \"dress\",\n      translation: \"платье\",\n      image: \"img/dress.jpg\",\n      audioSrc: \"audio/dress.mp3\",\n    },\n    {\n      word: \"boot\",\n      translation: \"ботинок\",\n      image: \"img/boot.jpg\",\n      audioSrc: \"audio/boot.mp3\",\n    },\n    {\n      word: \"shirt\",\n      translation: \"рубашка\",\n      image: \"img/shirt.jpg\",\n      audioSrc: \"audio/shirt.mp3\",\n    },\n    {\n      word: \"coat\",\n      translation: \"пальто\",\n      image: \"img/coat.jpg\",\n      audioSrc: \"audio/coat.mp3\",\n    },\n    {\n      word: \"shoe\",\n      translation: \"туфли\",\n      image: \"img/shoe.jpg\",\n      audioSrc: \"audio/shoe.mp3\",\n    },\n  ],\n  [\n    {\n      word: \"sad\",\n      translation: \"грустный\",\n      image: \"img/sad.jpg\",\n      audioSrc: \"audio/sad.mp3\",\n    },\n    {\n      word: \"angry\",\n      translation: \"сердитый\",\n      image: \"img/angry.jpg\",\n      audioSrc: \"audio/angry.mp3\",\n    },\n    {\n      word: \"happy\",\n      translation: \"счастливый\",\n      image: \"img/happy.jpg\",\n      audioSrc: \"audio/happy.mp3\",\n    },\n    {\n      word: \"tired\",\n      translation: \"уставший\",\n      image: \"img/tired.jpg\",\n      audioSrc: \"audio/tired.mp3\",\n    },\n    {\n      word: \"surprised\",\n      translation: \"удивлённый\",\n      image: \"img/surprised.jpg\",\n      audioSrc: \"audio/surprised.mp3\",\n    },\n    {\n      word: \"scared\",\n      translation: \"испуганный\",\n      image: \"img/scared.jpg\",\n      audioSrc: \"audio/scared.mp3\",\n    },\n    {\n      word: \"smile\",\n      translation: \"улыбка\",\n      image: \"img/smile.jpg\",\n      audioSrc: \"audio/smile.mp3\",\n    },\n    {\n      word: \"laugh\",\n      translation: \"смех\",\n      image: \"img/laugh.jpg\",\n      audioSrc: \"audio/laugh.mp3\",\n    },\n  ],\n];\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (cards);\n\n\n//# sourceURL=webpack:///./src/js/cards.js?");

/***/ }),

/***/ "./src/js/label.js":
/*!*************************!*\
  !*** ./src/js/label.js ***!
  \*************************/
/*! exports provided: switchLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"switchLabel\", function() { return switchLabel; });\nfunction switchLabel() {\r\n  switch1.addEventListener(\"click\", () => {\r\n    if (switch1.checked) {\r\n      label1.innerText = \"Play\";\r\n      label1.classList.add(\"labelPlay\");\r\n      listMenu.classList.add(\"list-menu-label\");\r\n      document.querySelectorAll(\".card\").forEach((card) => {\r\n        card.classList.add(\"cardPlay\");\r\n      });\r\n    } else {\r\n      document.querySelectorAll(\".card\").forEach((card) => {\r\n        card.classList.remove(\"cardPlay\");\r\n      });\r\n      label1.classList.remove(\"labelPlay\");\r\n      label1.innerText = \"Train\";\r\n      listMenu.classList.remove(\"list-menu-label\");\r\n    }\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/label.js?");

/***/ }),

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/*! exports provided: changeMenu, activeLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeMenu\", function() { return changeMenu; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"activeLink\", function() { return activeLink; });\nconst MAX_LEFT = -100;\r\nconst MIN_LEFT = -500;\r\n\r\nfunction animationVisibleMenu() {\r\n  let left = MIN_LEFT;\r\n  setInterval(() => {\r\n    if (left < MAX_LEFT) {\r\n      left += 10; listMenu.style.left = `${left}px`;\r\n    }\r\n  }, 10);\r\n}\r\n\r\nfunction animationHideMenu() {\r\n  let left = MAX_LEFT;\r\n  let interval = setInterval(() => {\r\n    if (left > MIN_LEFT) {\r\n      left -= 10; listMenu.style.left = `${left}px`;\r\n    } else {\r\n      listMenu.style.left = \"\";\r\n      clearInterval(interval);\r\n    }\r\n  }, 10);\r\n}\r\n\r\nfunction changeMenu() {\r\n  document.querySelector(\"html\").addEventListener(\"click\", (item) => {\r\n    if (burgerMenu.checked && item.target.id === \"burgerMenu\") {\r\n      animationVisibleMenu();\r\n      firstSpan.classList.add(\"span-first\");\r\n      secondSpan.classList.add(\"span-second\");\r\n      thirdSpan.classList.add(\"span-third\");\r\n    } else if (burgerMenu.checked || item.target.id === \"burgerMenu\") {\r\n      animationHideMenu();\r\n      burgerMenu.checked = false;\r\n      firstSpan.classList.remove(\"span-first\");\r\n      secondSpan.classList.remove(\"span-second\");\r\n      thirdSpan.classList.remove(\"span-third\");\r\n    }\r\n  });\r\n}\r\n\r\nfunction activeLink() {\r\n  listMenu.addEventListener(\"click\", (item) => {\r\n    let nameClass = item.target.className;\r\n    if (nameClass !== \"list-menu\" && nameClass !== \"list-menu list-menu-label\") {\r\n      document.querySelectorAll(\".page-link\").forEach((link) => {\r\n        link.classList.remove(\"active-link\");\r\n      });\r\n      item.target.classList.add(\"active-link\");\r\n    }\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/menu.js?");

/***/ }),

/***/ "./src/js/pages.js":
/*!*************************!*\
  !*** ./src/js/pages.js ***!
  \*************************/
/*! exports provided: moveLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"moveLink\", function() { return moveLink; });\n/* harmony import */ var _cards_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards.js */ \"./src/js/cards.js\");\n\r\n\r\nlet pageCards = [];\r\ndocument.querySelectorAll(\".textCard\").forEach((card) => {\r\n  pageCards.push(card);\r\n});\r\nlet page = \"Main Page\";\r\nlet numberPages = {};\r\nfor (let i = 0; i < 9; i++) {\r\n  numberPages[_cards_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][0][i]] = i;\r\n}\r\n\r\nfunction changePage() {\r\n  if (page === \"Main Page\") {\r\n      document.querySelectorAll(\".card\").forEach((item) => {\r\n          item.classList.remove(\"card-game\");\r\n          item.style.backgroundImage = \"\";\r\n      });\r\n      document.querySelectorAll(\"img\").forEach((item) => {\r\n          item.style.display = \"block\";\r\n      });\r\n    for (let i = 0; i < pageCards.length; i++) {\r\n      pageCards[i].innerText = _cards_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][numberPages[page]][i + 1];\r\n    }\r\n  } else {\r\n      let numberCards = 0;\r\n      document.querySelectorAll(\".card\").forEach((item) => {\r\n          item.classList.add(\"card-game\");\r\n          item.style.backgroundImage = `url(\\\"${_cards_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][numberPages[page]][numberCards++].image}\\\")`;\r\n      });\r\n    for (let i = 0; i < pageCards.length; i++) {\r\n      pageCards[i].innerText = _cards_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][numberPages[page]][i].word;\r\n      document.querySelectorAll(\"img\").forEach((item) => {\r\n          item.style.display = \"none\";\r\n      });\r\n    }\r\n  }\r\n}\r\n\r\nfunction moveLink() {\r\n  listMenu.addEventListener(\"click\", (item) => {\r\n    let nameClass = item.target.className;\r\n    if (nameClass !== \"list-menu\" && nameClass !== \"list-menu list-menu-label\") {\r\n      page = item.target.innerText;\r\n      changePage();\r\n    }\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/pages.js?");

/***/ })

/******/ });