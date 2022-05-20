/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ \"./styles.scss\");\n\r\nconst petsInfo = __webpack_require__(/*! ./petsInfo.json */ \"./petsInfo.json\")\r\n\r\nif (window.innerWidth <= 768) {\r\n    var windowWidth = 'sm'\r\n} else if (window.innerWidth <=1280) {\r\n    var windowWidth = 'm'\r\n} else if (window.innerWidth > 1280) {\r\n    var windowWidth = 'l'\r\n}\r\n\r\nconst sliderConfig = {\r\n    'sm': {width: 1, offset: 310},\r\n    'm': {width: 2, offset: 310},\r\n    'l': {width: 3, offset: 360}\r\n}\r\n\r\nconsole.log(windowWidth)\r\n\r\nlet offset = 0;\r\n\r\n\r\nif (location.pathname === '/') {\r\nvar     leftButton = document.getElementById('left-button'),\r\n        rightButton = document.getElementById('right-button'),\r\n        sliderBox = document.getElementsByClassName('slider-items')[0];\r\nleftButton.addEventListener('click', prevSlide);\r\nrightButton.addEventListener('click', nextSlide);\r\n}\r\nconst items = [...document.getElementsByClassName('card')];\r\nitems.map(el => el.childNodes[5].addEventListener('click', () => createModal(el.childNodes[3].textContent)))\r\n\r\nfunction prevSlide() {\r\n    console.log('clicked')\r\n    if (offset === 0) return\r\n    \r\n    offset = offset - sliderConfig[windowWidth].offset\r\n    sliderBox.style.transform = `translateX(${-offset}px)`\r\n    console.log(offset)\r\n}\r\n\r\nfunction nextSlide() {\r\n    console.log('clicked')\r\n    if (offset == sliderConfig[windowWidth].offset * (items.length-sliderConfig[windowWidth].width)) return\r\n    offset = offset + sliderConfig[windowWidth].offset\r\n    sliderBox.style.transform = `translateX(${-offset}px)`\r\n    console.log(offset)\r\n}\r\n\r\nfunction createModal(name) {\r\n    let modal = document.createElement('div')\r\n    modal.className = 'modal'\r\n\r\n    let modalWindow = document.createElement('div')\r\n    modalWindow.className = 'modal-window'\r\n\r\n    let closeButton = document.createElement('button')\r\n    closeButton.className = 'button-round close'\r\n    \r\n    let closeIcon = document.createElement('img');\r\n    closeIcon.src = './assets/icons/close.svg'\r\n    closeIcon.alt = 'close'\r\n    closeButton.append(closeIcon)\r\n\r\n    closeButton.addEventListener('click', () => modal.remove())\r\n\r\n    let petImage = document.createElement('img')\r\n    petImage.src = \"./assets/images/pets/pets-\" + name.toLowerCase() + \".png\" \r\n    petImage.alt = name;\r\n\r\n    let content = document.createElement('div');\r\n    content.className = 'content'\r\n\r\n    let title = document.createElement('h3')\r\n    title.textContent = name;\r\n    console.log(name)\r\n\r\n    let petType = document.createElement('h4')\r\n    petType.textContent = petsInfo[name].type\r\n\r\n    let petDescription = document.createElement('h5')\r\n    petDescription.className = 'description'\r\n    petDescription.textContent = petsInfo[name].description\r\n\r\n    let list = document.createElement('ul')\r\n\r\n    let Age = document.createElement('li');\r\n    Age.innerHTML = '<h5><b>Age: </b>2 months</h5>'\r\n\r\n    let inoculations = document.createElement('li');\r\n    inoculations.innerHTML = '<h5><b>Inoculations: </b>2 months</h5>'\r\n\r\n    let diseases = document.createElement('li');\r\n    diseases.innerHTML = '<h5><b>Diseases: </b>none</h5>'\r\n\r\n    let parasites = document.createElement('li');\r\n    parasites.innerHTML = '<h5><b>Parasites: </b>none</h5>'\r\n\r\n    list.append(Age, inoculations, diseases, parasites)\r\n\r\n    content.append(title, petType, petDescription, list)\r\n\r\n    modalWindow.append(closeButton, petImage, content)\r\n\r\n    modal.append(modalWindow)\r\n\r\n\r\n    document.getElementsByClassName('wrapper')[0].append(modal)\r\n}\r\n\r\n\n\n//# sourceURL=webpack://portfolio/./app.js?");

/***/ }),

/***/ "./styles.scss":
/*!*********************!*\
  !*** ./styles.scss ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://portfolio/./styles.scss?");

/***/ }),

/***/ "./petsInfo.json":
/*!***********************!*\
  !*** ./petsInfo.json ***!
  \***********************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"Jennifer\":{\"type\":\"Dog - Labrador\",\"description\":\"Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won\\'t hesitate to play up a storm in the house if she has all of her favorite toys.\"},\"Sophia\":{\"type\":\"Dog - Shih tzu\",\"description\":\"Sophia here and I\\'m looking for my forever home to live out the best years of my life. I am full of energy. Everyday I\\'m learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.\"},\"Woody\":{\"type\":\"Dog - Golden Retriever\",\"description\":\"Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.\"},\"Scarlett\":{\"type\":\"Dog - Jack Russell Terrier\",\"description\":\"Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.\"},\"Katrine\":{\"type\":\"Cat - British Shorthair\",\"description\":\"Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.\"},\"Timmy\":{\"type\":\"Cat - British Shorthair\",\"description\":\"Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.\"},\"Freddie\":{\"type\":\"Cat - British Shorthair\",\"description\":\"Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.\"},\"Charly\":{\"type\":\"Dog - Jack Russell Terrier\",\"description\":\"This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.\"}}');\n\n//# sourceURL=webpack://portfolio/./petsInfo.json?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./app.js");
/******/ 	
/******/ })()
;