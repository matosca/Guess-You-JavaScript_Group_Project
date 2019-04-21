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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/app.js":
/*!***************************!*\
  !*** ./client/src/app.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const GuessWho = __webpack_require__(/*! ./models/guess_who.js */ \"./client/src/models/guess_who.js\");\nconst SelectView = __webpack_require__(/*! ./views/select_view.js */ \"./client/src/views/select_view.js\");\nconst CardsGridView = __webpack_require__(/*! ./views/cards_grid_view.js */ \"./client/src/views/cards_grid_view.js\");\nconst GameResultView = __webpack_require__(/*! ./views/game_result_view.js */ \"./client/src/views/game_result_view.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  console.log('JS loaded');\n\n  const questionSelectForm = document.querySelector('form#select-form');\n  const selectView = new SelectView(questionSelectForm);\n  selectView.bindEvents();\n\n  const characterGridDiv = document.querySelector('div#character-grid');\n  const cardsGridView = new CardsGridView(characterGridDiv);\n  cardsGridView.bindEvents();\n\n  const apiUrl = 'http://localhost:3000/api';\n\n  const charactersGame = new GuessWho( 'characters', `${apiUrl}/characters` );\n  charactersGame.bindEvents();\n  charactersGame.getData();\n\n  const questionsGame = new GuessWho( 'questions', `${apiUrl}/questions` );\n  questionsGame.bindEvents();\n  questionsGame.getData();\n\n});\n\n\n//# sourceURL=webpack:///./client/src/app.js?");

/***/ }),

/***/ "./client/src/helpers/pub_sub.js":
/*!***************************************!*\
  !*** ./client/src/helpers/pub_sub.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const PubSub = {\n  publish: function (channel, payload) {\n    const event = new CustomEvent(channel, {\n      detail: payload\n    });\n\n    document.dispatchEvent(event);\n  },\n\n  subscribe: function (channel, callback) {\n    document.addEventListener(channel, callback);\n  }\n};\n\nmodule.exports = PubSub;\n\n\n//# sourceURL=webpack:///./client/src/helpers/pub_sub.js?");

/***/ }),

/***/ "./client/src/models/guess_who.js":
/*!****************************************!*\
  !*** ./client/src/models/guess_who.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (82:7)\\nYou may need an appropriate loader to handle this file type.\\n| \\n|   for (let question of questions) {\\n>     if questionId === question.id;\\n|     selectedQuestion = question;\\n|   };\");\n\n//# sourceURL=webpack:///./client/src/models/guess_who.js?");

/***/ }),

/***/ "./client/src/views/cards_grid_view.js":
/*!*********************************************!*\
  !*** ./client/src/views/cards_grid_view.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\n\nconst CardsGridView = function (container) {\n  this.container = container;\n};\n\nCardsGridView.prototype.bindEvents = function () {\n  PubSub.subscribe('Guesswho:character-data-ready', (evt) => {\n    const charactersData = evt.detail;\n    this.render(charactersData);\n  });\n};\n\nCardsGridView.prototype.render = function (charactersData) {\n  charactersData.forEach( (card) => {\n    const cardContainer = this.createCards(card); //this creates every card in the format from below\n    this.container.appendChild(cardContainer); //appending each card into the main container\n  });\n};\n\n\nCardsGridView.prototype.createCards = function (card) {\n  const cardContainer = document.createElement('div'); //creating container for allocating the img\n  cardContainer.classList.add('card');\n\n  const characterImg = document.createElement('img');//creating tag img in html\n  characterImg.src = card.image_url;//setting the src to be the card's url from the database\n\n  cardContainer.appendChild(characterImg); //appending the img into the container\n  return cardContainer;\n};\n\nmodule.exports = CardsGridView;\n\n\n//# sourceURL=webpack:///./client/src/views/cards_grid_view.js?");

/***/ }),

/***/ "./client/src/views/game_result_view.js":
/*!**********************************************!*\
  !*** ./client/src/views/game_result_view.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\n\nconst GameResultView = function (container) {\n  this.container = container;\n};\n\nGameResultView.prototype.bindEvents = function () {\n  PubSub.subscribe('GuessWho:guessed-card-result', (evt) => {\n    const resultedCard = evt.detail;\n    this.renderResult(resultedCard);\n  });\n};\n\nGameResultView.prototype.renderResult = function (guessedCard) {\n\n  const resultMessage = this.createElement('h2', `Congratulations! You Guessed ${guessedCard.name}`);\n  this.container.appendChild(resultMessage);\n\n  const resultBox = document.createElement('div');\n  resultBox.classList.add('result');\n\n  const resultCharacter = document.createElement('img');\n  resultCharacter.src = guessedCard.image_url;\n  resultBox.appendChild(resultCharacter);\n\n  this.container.appendChild(resultBox);\n};\n\nGameResultView.prototype.createElement = function (elementType, text) {\n  const element = document.createElement(elementType);\n  element.textContent = text;\n  return element;\n};\n\nmodule.exports = GameResultView;\n\n\n//# sourceURL=webpack:///./client/src/views/game_result_view.js?");

/***/ }),

/***/ "./client/src/views/select_view.js":
/*!*****************************************!*\
  !*** ./client/src/views/select_view.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\n\nconst SelectView = function (form) {\n  this.form = form;\n};\n\nSelectView.prototype.bindEvents = function () {\n  PubSub.subscribe('GuessWho:all-questions-ready', (evt) => {\n    const questionsData = evt.detail;\n\n    const selectDropdown = document.querySelector('select#questions');\n\n    selectDropdown.populateSelect(questionsData);\n  });\n\n  this.form.addEventListener('submit', (evt) => {\n\n    const selectedQuestion = evt.target.questions.value;\n\n    PubSub.publish('SelectView:question-selected', selectedQuestion);\n  });\n};\n\nSelectView.prototype.populateSelect = function (questionsData) {\n  questionsData.forEach( (question, index) => {\n    const selectDropdown = document.querySelector('select#questions'); //selects the element 'select' from the DOM\n    const option = this.createQuestionOption(question, index);//creates the options to populate the select\n    selectDropdown.appendChild(option); //appending all the options in the dropdown select\n  });\n};\n\nSelectView.prototype.createQuestionOption = function (question, index) {\n  const option = document.createElement('option'); //creates a tag option for the select\n  option.textContent = question; //sets the textContent to be a question\n  option.value = index; //sets the value to be whatever index the question is\n  return option;\n};\n\nmodule.exports = SelectView;\n\n\n//# sourceURL=webpack:///./client/src/views/select_view.js?");

/***/ })

/******/ });