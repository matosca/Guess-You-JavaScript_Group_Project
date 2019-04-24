const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require("../helpers/request.js");


const Questions = function (url){
  this.url = url;
  this.request = new RequestHelper(this.url);
  this.allQuestions = null;
  this.characters = null;
  this.turnLimit = 10 //setting up storage for the turn limit to be accessed throughout the model. Set this to the total number of cards

};

Questions.prototype.bindEventsQuestions = function () {
  PubSub.subscribe('SelectView:question-selected', (evt) => {
    this.turnLimitdown() //a questions had been recieved so call the function to lower the turn limit by one. this is a function so it will be easier to publish the information directly to card grid view from question.js(a channel which doesn't exist yet)
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
};

Questions.prototype.turnLimitdown = function () {
  const remainingTurns = this.turnLimit -= 1 //this lowers the turn limit set up in the class config by 1. we save this in a new variable so we can easily pass it into the publish below.
  console.log('turnlimitdown function, remaing turns', remainingTurns);
  PubSub.publish('Questions:turns-remainging', remainingTurns);
};

module.exports = Questions;
