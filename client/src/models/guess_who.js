const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require("../helpers/request_helper.js");

const GuessWho = function(url){
  this.url = url;
  this.request = new RequestHelper(this.url);
  this.gameData = null;
  this.allQuestions = null;
  this.characters = null;
};

GuessWho.prototype.bindEvents = function () {
  PubSub.subscribe('SelectView:question-selected', (evt) => {
    this.getResult(evt.detail);
  });
};

GuessWho.prototype.getData = function () {
  this.request
  .get()
  .then((gameData) => {
    this.gameData = gameData;
    this.allQuestions = gameData.questions;
    this.character = gameData.characters;
  }
    questions => {
    PubSub.publish("GuessWho:all-questions-ready", questions);
  })
  .catch(console.error);
};

GuessWho.prototype.getResult = function (questionId) {
  this.getCardsToEliminate(questionId)
};

GuessWho.prototype.getCardsToEliminate = function (questionId) {
  const cardsToEliminate = []
  const questions =
  for (question in questions) {
    if questioniD === question.id

  };
};



module.exports = GuessWho;
