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

eval("const Characters = __webpack_require__(/*! ./models/characters.js */ \"./client/src/models/characters.js\");\nconst Questions = __webpack_require__(/*! ./models/questions.js */ \"./client/src/models/questions.js\");\nconst SelectView = __webpack_require__(/*! ./views/select_view.js */ \"./client/src/views/select_view.js\");\nconst CardsGridView = __webpack_require__(/*! ./views/cards_grid_view.js */ \"./client/src/views/cards_grid_view.js\");\nconst GameResultView = __webpack_require__(/*! ./views/game_result_view.js */ \"./client/src/views/game_result_view.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n\n  const resultContainer = document.querySelector('#result-container');\n  const gameResultView = new GameResultView(resultContainer);\n  gameResultView.bindEvents();\n  \n  const characterGridDiv = document.querySelector('div.character-grid');\n  const newCharactersGridView = new CardsGridView(characterGridDiv);\n  newCharactersGridView.bindEvents();\n\n  const questionSelect = document.querySelector('#questions');\n  const selectView = new SelectView(questionSelect);\n  selectView.bindEvents();\n\n  const apiUrl = 'http://localhost:3000/api';\n\n  const charactersGame = new Characters(`${apiUrl}/characters` );\n  charactersGame.bindEventsCharacters();\n  charactersGame.getData();\n\n  const questionsGame = new Questions( `${apiUrl}/questions` );\n  questionsGame.bindEventsQuestions();\n  questionsGame.getData();\n\n});\n\n\n//# sourceURL=webpack:///./client/src/app.js?");

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

/***/ "./client/src/models/characters.js":
/*!*****************************************!*\
  !*** ./client/src/models/characters.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\nconst RequestHelper = __webpack_require__(/*! ../helpers/request.js */ \"./client/src/helpers/request.js\");\n\nconst Characters = function (url) {\n  this.url = url;\n  this.request = new RequestHelper(this.url);\n  this.characters = null;\n  this.hiddenCharacter = null;\n  this.relatedKey = null;\n  this.attribute = null;\n}\n\nCharacters.prototype.bindEventsCharacters = function () {\n  PubSub.subscribe('Questions:get-results-send-question-information', (evt) => {\n    this.relatedKey = evt.detail.relatedKey;\n    this.attribute = evt.detail.attribute;\n    this.getCharactersToEliminate();\n    PubSub.publish('Characters:characters-data-loaded', this.characters);\n  });\n};\n\nCharacters.prototype.finalCard = function () {\n  let inplayCounter = 0;\n  for (let character of this.characters)  {\n    console.log('character in finalCArd', character);\n    if (character.inplay === 'true'){\n      inplayCounter += 1;\n      console.log('inplay counter', inplayCounter);\n    };\n  };\n\n  if ( inplayCounter === 1 ){\n    PubSub.publish('Characters:guessed-card-result', this.hiddenCharacter);\n  };\n};\n\nCharacters.prototype.getData = function () {\n  this.request.get()\n  .then((gameData) => {\n    this.characters = gameData;\n    PubSub.publish('Characters:characters-data-loaded', gameData);\n    const hiddenCharacter = this.getHiddenCharacter();\n    this.hiddenCharacter = hiddenCharacter;\n    PubSub.publish('Characters:hidden-character-selected', hiddenCharacter);\n    console.log('hidden char', hiddenCharacter);\n  })\n  .catch( (err) => console.error(err) );\n};\n\n// ALERT BOX\nfunction CustomAlert(){\n\n  this.ok = function(){\n    document.getElementById('dialogbox').style.display = \"none\";\n    document.getElementById('dialogoverlay').style.display = \"none\";\n  };\n\n  this.render = function(dialog){\n    var winW = window.innerWidth;\n    var winH = window.innerHeight;\n    var dialogoverlay = document.getElementById('dialogoverlay');\n    var dialogbox = document.getElementById('dialogbox');\n    dialogoverlay.style.display = \"block\";\n    dialogoverlay.style.height = winH+\"px\";\n    dialogbox.style.left = (winW/2) - (550 * .5)+\"px\";\n    dialogbox.style.top = \"100px\";\n    dialogbox.style.display = \"block\";\n    // document.getElementById('dialogboxhead').innerHTML = \"\";\n    document.getElementById('dialogboxbody').innerHTML = dialog;\n    document.getElementById('dialogboxfoot').innerHTML = '<button onclick=\"Alert.ok()\">OK</button>';\n  };\n};\n\nCharacters.prototype.getCharactersToEliminate = function () {\n  const characters = this.characters;\n  if (this.attribute === this.hiddenCharacter[this.relatedKey]){\n    // const Alert = new CustomAlert();\n    // Alert.render(`Yes! The hidden character does have ${this.relatedKey} ${this.attribute}.`)\n    alert(`Yes! The hidden character does have ${this.relatedKey} ${this.attribute}.`);\n    for (let character of characters){\n      if (character[this.relatedKey] !== this.hiddenCharacter[this.relatedKey]){\n        character.inplay = \"false\";\n        character.image_url = \"../images/monster.png\";\n      };\n    };\n  }\n  else {\n    // const Alert = new CustomAlert();\n    // Alert.render(`No! The hidden character does not have ${this.relatedKey} ${this.attribute}.`);\n    alert(`No! The hidden character does not have ${this.relatedKey} ${this.attribute}.`);\n    for (let character of characters){\n      if (character[this.relatedKey] === this.attribute){\n        character.inplay = \"false\";\n        character.image_url = \"../images/monster.png\";\n      };\n    };\n  };\n  this.finalCard();\n};\n\nCharacters.prototype.getHiddenCharacter = function() {\n  let hiddenCharacter = this.characters[Math.floor(Math.random()*this.characters.length)];\n  return hiddenCharacter;\n};\n\n\nmodule.exports = Characters;\n\n\n//# sourceURL=webpack:///./client/src/models/characters.js?");

/***/ }),

/***/ "./client/src/models/questions.js":
/*!****************************************!*\
  !*** ./client/src/models/questions.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\nconst RequestHelper = __webpack_require__(/*! ../helpers/request.js */ \"./client/src/helpers/request.js\");\n\n\nconst Questions = function (url){\n  this.url = url;\n  this.request = new RequestHelper(this.url);\n  this.allQuestions = null;\n  this.characters = null;\n};\n\nQuestions.prototype.bindEventsQuestions = function () {\n  PubSub.subscribe('SelectView:question-selected', (evt) => {\n    this.getResult(evt.detail);\n\n  });\n  PubSub.subscribe('Characters:characters-data-loaded', (evt) => {\n    this.characters = evt.detail;\n  });\n};\n\nQuestions.prototype.getData = function () {\n  this.request.get()\n  .then((gameData) => {\n    this.allQuestions = gameData;\n    PubSub.publish('Questions:questions-data-loaded', gameData);\n  })\n  .catch( (err) => console.error(err) );\n};\n\nQuestions.prototype.findQuestionByContent = function (questionContent) {\n  return this.allQuestions.find(question => question.question === questionContent);\n};\n\nQuestions.prototype.getResult = function (questionContent) {\n  const selectedQuestion = this.findQuestionByContent(questionContent);\n  const questionInfo = {\n    relatedKey: selectedQuestion.related_key,\n    attribute: selectedQuestion.attribute\n  }\n  PubSub.publish('Questions:get-results-send-question-information', questionInfo);\n  // let charactersToEliminate = this.characters.getCharactersToEliminate(relatedKey, attribute);\n  // //console.log(charactersToEliminate);\n  // const updatedCards = this.characters.updateCards(charactersToEliminate);\n  // //console.log(updatedCards);\n  // PubSub.publish('Characters:characters-data-loaded', updatedCards);\n};\n\n// Questions.prototype.getSelectedQuestion = function (questionContent) {\n//   const questions = this.allQuestions;\n//   for (let question in questions) {\n//     let selectedQuestion = [];\n//     if (questionContent === question.question){\n//       selectedQuestion = question;\n//     };\n//     return selectedQuestion;\n//   };\n// };\n\n\n\nmodule.exports = Questions;\n\n\n//# sourceURL=webpack:///./client/src/models/questions.js?");

/***/ }),

/***/ "./client/src/views/cards_grid_view.js":
/*!*********************************************!*\
  !*** ./client/src/views/cards_grid_view.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\n\nconst CardsGridView = function (container) {\n  this.container = container;\n};\n\nCardsGridView.prototype.bindEvents = function () {\n  PubSub.subscribe('Characters:characters-data-loaded', (evt) => {\n    const charactersData = evt.detail;\n    this.render(charactersData);\n  });\n  // PubSub.subscribe('Characters:updated-characters-data-loaded', (evt) => {\n  //   const updatedCharactersData = evt.detail;\n  //   console.log('updated chars', updatedCharactersData);\n  //   this.render(updatedCharactersData);\n  // });\n};\n\nCardsGridView.prototype.render = function (charactersData) {\n  this.container.innerHTML = \"\";\n  charactersData.forEach( (card) => {\n    const cardContainer = this.createCards(card); //this creates every card in the format from below\n    this.container.appendChild(cardContainer); //appending each card into the main container\n  });\n};\n\n\nCardsGridView.prototype.createCards = function (card) {\n  const cardContainer = document.createElement('div'); //creating container for allocating the img\n  cardContainer.classList.add('card');\n\n  const characterImg = document.createElement('img');//creating tag img in html\n  characterImg.src = card.image_url;//setting the src to be the card's url from the database\n  characterImg.addEventListener('click', (evt) => {\n    evt.preventDefault();\n    const guessedCard = card;\n    PubSub.publish('Characters:guessed-card-result', guessedCard);\n  })\n\n  cardContainer.appendChild(characterImg); //appending the img into the container\n  return cardContainer;\n};\n\nmodule.exports = CardsGridView;\n\n\n//# sourceURL=webpack:///./client/src/views/cards_grid_view.js?");

/***/ }),

/***/ "./client/src/views/game_result_view.js":
/*!**********************************************!*\
  !*** ./client/src/views/game_result_view.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\n\nconst GameResultView = function (container) {\n  this.container = container;\n  this.hiddenCharacter = null;\n};\n\nGameResultView.prototype.bindEvents = function () {\n  PubSub.subscribe('Characters:guessed-card-result', (evt) => {\n    const resultedCard = evt.detail;\n    console.log('resulted card', resultedCard);\n    const gameContainer = document.querySelector('#game-container');\n    gameContainer.innerHTML = \"\";\n    console.log('hidden card', this.hiddenCharacter);\n    this.renderResult(resultedCard);\n  });\n  PubSub.subscribe('Characters:hidden-character-selected', (evt) => {\n    this.hiddenCharacter = evt.detail;\n  });\n};\n\nGameResultView.prototype.renderResult = function (guessedCard) {\n  if (guessedCard == this.hiddenCharacter){\n    const resultMessage = this.createElement('h2', `Congratulations, you won! It was ${guessedCard.name}!`);\n    this.container.appendChild(resultMessage);\n\n    const resultBox = document.createElement('div');\n    resultBox.classList.add('result');\n\n    const resultCharacter = document.createElement('img');\n    resultCharacter.src = guessedCard.image_url;\n    resultBox.appendChild(resultCharacter);\n\n    this.container.appendChild(resultBox);\n  }\n  else {\n    const resultMessage = this.createElement('h2', `${guessedCard.name} is wrong! It was ${this.hiddenCharacter.name}. You lose!`);\n    this.container.appendChild(resultMessage);\n\n    const hiddenCharacter = document.createElement('img');\n    hiddenCharacter.src = this.hiddenCharacter.image_url;\n    this.container.appendChild(hiddenCharacter);\n  };\n\n};\n\nGameResultView.prototype.createElement = function (elementType, text) {\n  const element = document.createElement(elementType);\n  element.textContent = text;\n  return element;\n};\n\nmodule.exports = GameResultView;\n\n\n//# sourceURL=webpack:///./client/src/views/game_result_view.js?");

/***/ }),

/***/ "./client/src/views/select_view.js":
/*!*****************************************!*\
  !*** ./client/src/views/select_view.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\n\nconst SelectView = function (select) {\n  this.select = select;\n};\n\nSelectView.prototype.bindEvents = function () {\n  PubSub.subscribe('Questions:questions-data-loaded', (evt) => {\n    const questionsData = evt.detail;\n    this.populateSelect(questionsData);\n    //A: there's something wrong with the way we're calling populateSelect\n  });\n\n  const questionForm = document.querySelector('.select-form');\n  questionForm.addEventListener('submit', (evt) => {\n    evt.preventDefault();\n    const selectedQuestion = evt.target.questions.value;\n\n    PubSub.publish('SelectView:question-selected', selectedQuestion);\n  });\n};\n\nSelectView.prototype.populateSelect = function (questionsData) {\n  questionsData.forEach( (question, index) => {\n    // const selectDropdown = document.querySelector('select#questions'); //selects the element 'select' from the DOM\n    const option = this.createQuestionOption(question, index);\n    // console.log('this are the options', option);\n\n    this.select.appendChild(option);//creates the options to populate the select\n    // selectDropdown.appendChild(option); //appending all the options in the dropdown select\n  });\n};\n\nSelectView.prototype.createQuestionOption = function (question, index) {\n  const option = document.createElement('option'); //creates a tag option for the select\n  option.textContent = question.question; //sets the textContent to be a question\n  option.value = index; //sets the value to be whatever index the question is\n  option.value = question.question; //sets the value to be whatever index the question is\n  return option;\n};\n\nmodule.exports = SelectView;\n\n\n//# sourceURL=webpack:///./client/src/views/select_view.js?");

/***/ })

/******/ });