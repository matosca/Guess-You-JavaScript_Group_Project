const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require("../helpers/request_helper.js");

const GuessWho = function(url){
  this.url = url;
  this.request = new RequestHelper(this.url);
  this.gameData = null;
  this.allQuestions = null;
  this.characters = null;
  this.hiddenCard = null;
};

GuessWho.prototype.bindEvents = function () {
  const hiddenCard = this.getHiddenCard();
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
    this.characters = gameData.characters;
  }
    questions => {
    PubSub.publish("GuessWho:all-questions-ready", questions);
  })
  .catch(console.error);
};

GuessWho.prototype.getResult = function (questionId) {
  const cardsToEliminate = this.getCardsToEliminate(questionId);
  const updatedCards = this.updateCards(cardsToEliminate);
  PubSub.publish("GuessWho:updated-grid-view-ready", updatedCards);
};

GuessWho.prototype.getCardsToEliminate = function (questionId) {
  const cardsToEliminate = []
  const questions = this.allQuestions
  for (question in questions) {
    if questionId === question.id

  };
};



module.exports = GuessWho;
