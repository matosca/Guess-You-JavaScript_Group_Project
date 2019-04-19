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

  PubSub.subscribe('SelectView:question-selected', (evt) => {
    this.getResult(evt.detail);
  });
};

GuessWho.prototype.getData = function () {
  this.request
  .get()
  .then((gameData) => {
    this.gameData = gameData;
    const questions = this.getAllQuestions();
    this.allQuestions = questions
    const characters = this.getAllCharacters();
    this.characters = characters
  }
    PubSub.publish("GuessWho:all-questions-ready", questions);
    PubSub.publish("Guesswho:character-data-ready", characters);
    const hiddenCard = this.getHiddenCard(); // where will I be?
    this.hiddenCard = hiddenCard
  })
  .catch(error) => {
    PubSub.publish("GuessWho:error", err);
  }
};

GuessWho.prototype.getResult = function (questionId) {
  const cardsToEliminate = this.getCardsToEliminate(questionId);
  const updatedCards = this.updateCards(cardsToEliminate);
  PubSub.publish("GuessWho:updated-grid-view-ready", updatedCards);
};

GuessWho.prototype.getCardsToEliminate = function (questionId) {
  const cardsToEliminate = []
  const selectedQuestion = this.getSelectedQuestion(questionId);
  
  };
};

GuessWho.prototype.getSelectedQuestion = function (questionId) {
  const selectedQuestion = null
  const questions = this.allQuestions
  for (question in questions) {
    if questionId === question.id;
    selectedQuestion = question
  };
    return selectedQuestion;
};



module.exports = GuessWho;
