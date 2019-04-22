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

eval("const GuessWho = __webpack_require__(/*! ./models/guess_who.js */ \"./client/src/models/guess_who.js\");\nconst SelectView = __webpack_require__(/*! ./views/select_view.js */ \"./client/src/views/select_view.js\");\nconst CardsGridView = __webpack_require__(/*! ./views/cards_grid_view.js */ \"./client/src/views/cards_grid_view.js\");\nconst GameResultView = __webpack_require__(/*! ./views/game_result_view.js */ \"./client/src/views/game_result_view.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  console.log('JS loaded');\n\n  const questionSelect = document.querySelector('#questions');\n  const selectView = new SelectView(questionSelect);\n  selectView.bindEvents();\n\n  const characterGridDiv = document.querySelector('div#character-grid');\n  const newCharactersGridView = new CardsGridView(characterGridDiv);\n  newCharactersGridView.bindEvents();\n\n  const apiUrl = 'http://localhost:3000/api';\n\n  const questionsGame = new GuessWho( 'questions', `${apiUrl}/questions` );\n  questionsGame.bindEvents();\n  questionsGame.getData();\n\n  const charactersGame = new GuessWho( 'characters', `${apiUrl}/characters` );\n  charactersGame.bindEvents();\n  charactersGame.getData();\n\n});\n\n\n//# sourceURL=webpack:///./client/src/app.js?");

/***/ }),

/***/ "./client/src/helpers/pub_sub.js":
/*!***************************************!*\
  !*** ./client/src/helpers/pub_sub.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const PubSub = {\n  publish: function (channel, payload) {\n    const event = new CustomEvent(channel, {\n      detail: payload\n    });\n\n    document.dispatchEvent(event);\n  },\n\n  subscribe: function (channel, callback) {\n    document.addEventListener(channel, callback);\n  }\n};\n\nmodule.exports = PubSub;\n\n\n//# sourceURL=webpack:///./client/src/helpers/pub_sub.js?");

/***/ }),

/***/ "./client/src/helpers/request.js":
/*!***************************************!*\
  !*** ./client/src/helpers/request.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const RequestHelper = function (url) {\n  this.url = url;\n};\n\nRequestHelper.prototype.get = function () {\n  return fetch(this.url, {\n    mode: 'no-cors', // to fetch resource with CORS disabled\n    headers: { 'Content-Type':'application/json' }\n  })\n    .then( (response) => response.json() )\n    .catch( (err) => console.error(err) );\n};\n\nRequestHelper.prototype.post = function (payload) {\n  return fetch(this.url, {\n    method: 'POST',\n    body: JSON.stringify(payload),\n    headers: {'Content-Type':'application/json'}\n  })\n    .then( (response) => response.json() )\n    .catch( (err) => console.error(err) );\n};\n\nRequestHelper.prototype.put = function (payload) {\n  return fetch(this.url, {\n    method: 'PUT',\n    body: JSON.stringify(payload),\n    headers: {'Content-Type':'application/json'}\n  })\n    .then( (response) => response.json() )\n    .catch( (err) => console.error(err) );\n}\n\nmodule.exports = RequestHelper;\n\n\n//# sourceURL=webpack:///./client/src/helpers/request.js?");

/***/ }),

/***/ "./client/src/models/guess_who.js":
/*!****************************************!*\
  !*** ./client/src/models/guess_who.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\nconst RequestHelper = __webpack_require__(/*! ../helpers/request.js */ \"./client/src/helpers/request.js\");\n\nconst GuessWho = function(category, url){\n  this.category = category;\n  this.url = url;\n  this.request = new RequestHelper(this.url);\n  this.gameData = null;\n  this.allQuestions = null;\n  this.characters = null;\n  this.hiddenCharacter = null;\n};\n\nGuessWho.prototype.bindEvents = function () {\n  PubSub.subscribe('SelectView:question-selected', (evt) => {\n    this.getResult(evt.detail);\n  });\n};\n\nGuessWho.prototype.getData = function () {\n  this.request.get()\n  .then((gameData) => {\n    this.gameData = gameData;\n    console.log('Boo!', gameData);\n    PubSub.publish(`GuessWho:${this.category}-data-loaded`, gameData);\n    const hiddenCharacter = this.getHiddenCharacter(); // where will I be?\n    this.hiddenCharacter = hiddenCharacter;\n    // PubSub.publish(\"GuessWho:all-questions-ready\", questions);\n    // PubSub.publish(\"Guesswho:character-data-ready\", characters);\n    // Amy: commented these out but unsure if we might need them\n  })\n  .catch( (err) => console.error(err) );\n\n  // This might not go in here, although I do not understand what this bit means. Maybe in a separate function or bindEvents if we are doing something to it. Maria\n  //I think this may be the only place this makes sense. we need to have this.characters set up before we can run hiddenCharacter() i think. :/ Confused David\n\n  // .catch((error) => {\n  //   PubSub.publish(\"GuessWho:error\", err));//maybe not needed if below\n}; //maybe we can do just .catch( (err) => console.error(err) ); ??? JUST SUGGESTING\n\n\nGuessWho.prototype.getResult = function (questionId) {\n  const selectedQuestion = this.getSelectedQuestion(questionId);\n  const relatedKey = selectedQuestion.related_key;\n  const attribute = selectedQuestion.attribute;\n  let charactersToEliminate = this.getCharactersToEliminate(relatedKey, attribute);\n  const updatedCards = this.updateCards(charactersToEliminate);\n  PubSub.publish(\"GuessWho:updated-grid-view-ready\", updatedCards);\n};\n\nGuessWho.prototype.getCharactersToEliminate = function (relatedKey, attribute) {\n  const charactersToEliminate = [];\n  const characters = this.characters;\n  for (character of characters){\n    if (character.attribute !== this.hiddenCharacter.attribute) {\n    charactersToEliminate.push(character);\n  };\n};\nreturn charactersToEliminate;\n};\n\nGuessWho.prototype.getHiddenCharacter = function() {\n  let hiddenCharacter = this.characters[Math.floor(Math.random()*this.characters.length)];\n  return hiddenCharacter;\n};\n\nGuessWho.prototype.getSelectedQuestion = function (questionId) {\n  const selectedQuestion = null;\n  const questions = this.allQuestions;\n\n  for (let question of questions) {\n    if (questionId === question.id){\n      selectedQuestion = question;\n    };\n  };\n  return selectedQuestion;\n};\n\nGuessWho.prototype.updateCards = function (charactersToEliminate) {\n  const charactersTobeChangedinView = charactersToEliminate;\n  const charactersInGridView = this.characters;\n  for (character of charactersTobeChangedinView ) {\n    this.request\n    .update(character.id)\n    .then(remainingCharacters => this.characters = remainingCharacters);\n  }\n  // .catch( (err) => console.error(err) );\n  // .catch(error) => {\n  //   PubSub.publish(\"GuessWho:error\", error);  //maybe we can do just .catch( (err) => console.error(err) ); ??? JUST SUGGESTING\n  // Amy: good idea whilst we build the error view. Somehow still throws an error so I have commented out for now and we can discuss tomrrow.\n  };\n\nmodule.exports = GuessWho;\n\n\n//# sourceURL=webpack:///./client/src/models/guess_who.js?");

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

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\n\nconst SelectView = function (select) {\n  this.select = select;\n};\n\nSelectView.prototype.bindEvents = function () {\n  PubSub.subscribe(`GuessWho:questions-data-loaded`, (evt) => {\n    const questionsData = evt.detail;\n    console.log('Moo!', questionsData);\n    this.populateSelect(questionsData);\n    //A: there's something wrong with the way we're calling populateSelect\n\n  });\n\n  const questionForm = document.querySelector('.select-form');\n  questionForm.addEventListener('submit', (evt) => {\n    evt.preventDefault();\n    const selectedQuestion = evt.target.questions.value;\n\n    PubSub.publish('SelectView:question-selected', selectedQuestion);\n  });\n};\n\nSelectView.prototype.populateSelect = function (questionsData) {\n  questionsData.forEach( (question, index) => {\n    // const selectDropdown = document.querySelector('select#questions'); //selects the element 'select' from the DOM\n    const option = this.createQuestionOption(question, index);\n    this.select.appendChild(option);//creates the options to populate the select\n    // selectDropdown.appendChild(option); //appending all the options in the dropdown select\n  });\n};\n\nSelectView.prototype.createQuestionOption = function (question, index) {\n  const option = document.createElement('option'); //creates a tag option for the select\n  option.textContent = question.question; //sets the textContent to be a question\n  option.value = index; //sets the value to be whatever index the question is\n  return option;\n};\n\nmodule.exports = SelectView;\n\n\n//# sourceURL=webpack:///./client/src/views/select_view.js?");

/***/ })

/******/ });