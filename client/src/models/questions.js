const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require("../helpers/request.js");


const Questions = function (url){
  this.url = url;
  this.request = new RequestHelper(this.url);
  this.allQuestions = null;
  this.characters = null;
};

Questions.prototype.bindEventsQuestions = function () {
  PubSub.subscribe('SelectView:question-selected', (evt) => {
    this.getResult(evt.detail);

  });
  PubSub.subscribe('Characters:characters-data-loaded', (evt) => {
    this.characters = evt.detail;
  });
};

Questions.prototype.getData = function () {
  this.request.get()
  .then((gameData) => {
    this.allQuestions = gameData;
    PubSub.publish('Questions:questions-data-loaded', gameData);
  })
  .catch( (err) => console.error(err) );
};

Questions.prototype.findQuestionByContent = function (questionContent) {
  return this.allQuestions.find(question => question.question === questionContent);
};

Questions.prototype.getResult = function (questionContent) {
  const selectedQuestion = this.findQuestionByContent(questionContent);
  const questionInfo = {
    relatedKey: selectedQuestion.related_key,
    attribute: selectedQuestion.attribute
  }
  PubSub.publish('Questions:get-results-send-question-information', questionInfo);
  // let charactersToEliminate = this.characters.getCharactersToEliminate(relatedKey, attribute);
  // //console.log(charactersToEliminate);
  // const updatedCards = this.characters.updateCards(charactersToEliminate);
  // //console.log(updatedCards);
  // PubSub.publish('Characters:characters-data-loaded', updatedCards);
};

// Questions.prototype.getSelectedQuestion = function (questionContent) {
//   const questions = this.allQuestions;
//   for (let question in questions) {
//     let selectedQuestion = [];
//     if (questionContent === question.question){
//       selectedQuestion = question;
//     };
//     return selectedQuestion;
//   };
// };



module.exports = Questions;
