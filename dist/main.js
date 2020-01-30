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

/***/ "./src/ball.js":
/*!*********************!*\
  !*** ./src/ball.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Ball {\n    constructor(game) {\n        this.image = document.getElementById('image-ball');\n\n        this.position = {\n            x: 10,\n            y: 10,\n        };\n\n        this.speed = {\n            x: 4,\n            y: 2,\n        };\n\n        this.size = 16;\n        this.gameWidth = game.gameWidth;\n        this.gameHeight = game.gameHeight;\n    }\n\n    draw(ctx) {\n        ctx.drawImage(this.image, this.position.x, this.position.y, this.size, this.size);\n    }\n\n    update(deltaTime) {\n        this.position.x += this.speed.x;\n        this.position.y += this.speed.y;\n\n        if (this.position.x + this.size > this.gameWidth || this.position.x < 0) {\n            this.speed.x = -this.speed.x;\n        }\n\n        if (this.position.y + this.size > this.gameHeight || this.position.y < 0) {\n            this.speed.y = -this.speed.y;\n        }\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ball);\n\n//# sourceURL=webpack:///./src/ball.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _paddle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paddle */ \"./src/paddle.js\");\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input */ \"./src/input.js\");\n/* harmony import */ var _ball__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ball */ \"./src/ball.js\");\n\n\n\n\nclass Game {\n    constructor(gameWidth, gameHeight) {\n        this.gameWidth = gameWidth;\n        this.gameHeight = gameHeight;\n    }\n\n    start() {\n        this.paddle = new _paddle__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this);\n        this.ball = new _ball__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this);\n\n        this.gameObjects = [\n            this.ball,\n            this.paddle,\n        ]\n\n        new _input__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.paddle);\n    }\n\n    update(deltaTime) {\n        // this.paddle.update(deltaTime);\n        // this.ball.update(deltaTime);\n\n        this.gameObjects.forEach((object) => object.update(deltaTime));\n    }\n\n    draw(ctx) {\n        // this.paddle.draw(ctx);\n        // this.ball.draw(ctx);\n\n        this.gameObjects.forEach((object) => object.draw(ctx));\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _paddle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paddle */ \"./src/paddle.js\");\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input */ \"./src/input.js\");\n/* harmony import */ var _ball__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ball */ \"./src/ball.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n// console.log(\"webpack is working\")\n\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const canvas = document.getElementById(\"game-canvas\");\n    const ctx = canvas.getContext(\"2d\");\n\n    ctx.clearRect(0, 0, 800, 800);\n\n    const GAME_WIDTH = 800;\n    const GAME_HEIGHT = 600;\n\n    // let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);\n    // let ball = new Ball(GAME_WIDTH, GAME_HEIGHT);\n\n    // new InputHandler(paddle);\n\n    let lastTime = 0;\n\n    let game = new _game__WEBPACK_IMPORTED_MODULE_3__[\"default\"](GAME_WIDTH, GAME_HEIGHT);\n    game.start();\n\n    // images\n    // let imgBall = document.getElementById('image-ball');\n\n    function gameLoop(timestamp) {\n        // calculates time passed\n        let deltaTime = timestamp - lastTime;\n        lastTime = timestamp;\n\n        ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT); // clears screen\n\n        // paddle.update(deltaTime); // updates the paddle\n        // paddle.draw(ctx); // redraws the paddle\n\n        // ball.update(deltaTime);\n        // ball.draw(ctx);\n\n        game.update(deltaTime);\n        game.draw(ctx);\n\n        // ctx.drawImage(imgBall, 10, 10, 16, 16);\n\n        requestAnimationFrame(gameLoop); // calls gameLoop again with the next timestamp\n    }\n\n    // gameLoop();\n    requestAnimationFrame(gameLoop); // calls gameLoop again with the next timestamp\n\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/input.js":
/*!**********************!*\
  !*** ./src/input.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass InputHandler {\n    constructor(paddle) {\n        document.addEventListener(\"keydown\", (e) => {\n            switch(e.keyCode) {\n                case 37: \n                    // alert('move left');\n                    paddle.moveLeft();\n                    break;\n                case 39:\n                    // alert('move right');\n                    paddle.moveRight();\n                    break;\n            }\n        });\n\n        document.addEventListener(\"keyup\", (e) => {\n            switch (e.keyCode) {\n                case 37:\n                    // alert('move left');\n                    // paddle.stop();\n                    if (paddle.speed < 0) paddle.stop();\n                    break;\n                case 39:\n                    // alert('move right');\n                    // paddle.stop();\n                    if (paddle.speed > 0) paddle.stop();\n                    break;\n            }\n        });\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (InputHandler);\n\n//# sourceURL=webpack:///./src/input.js?");

/***/ }),

/***/ "./src/paddle.js":
/*!***********************!*\
  !*** ./src/paddle.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Paddle {\n    constructor(game) {\n        this.gameWidth = game.gameWidth;\n        this.width = 150;\n        this.height = 30;\n\n        this.maxSpeed = 7;\n        this.speed = 0\n\n        this.position = {\n            x: game.gameWidth / 2 - this.width / 2,\n            y: game.gameHeight - this.height - 10,\n        };\n    }\n\n    moveLeft() {\n        this.speed = -this.maxSpeed\n    }\n\n    moveRight() {\n        this.speed = this.maxSpeed;\n    }\n\n    stop() {\n        this.speed = 0;\n    }\n\n    draw(ctx) {\n        ctx.fillStyle = '#0f0';\n        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);\n    }\n\n    update(deltaTime) {\n        // deltaTime is the change in time\n\n        // if (!deltaTime) return;\n\n        // this.position.x += 5 / deltaTime;\n\n        this.position.x += this.speed;\n\n        if (this.position.x < 0) this.position.x = 0;\n        if (this.position.x + this.width > this.gameWidth) this.position.x = this.gameWidth - this.width;\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Paddle);\n\n//# sourceURL=webpack:///./src/paddle.js?");

/***/ })

/******/ });