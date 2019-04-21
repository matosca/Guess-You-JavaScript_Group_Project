const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require("../helpers/request.js");

const GuessWho = function(url){
  this.url = url;
  this.request = new RequestHelper(this.url);
  this.gameData = null;
  this.allQuestions = null;
  this.characters = null;
  this.hiddenCharacter = null;
};

GuessWho.prototype.bindEvents = function () {

  PubSub.subscribe('SelectView:question-selected', (evt) => {
    this.getResult(evt.detail);
  });
};

GuessWho.prototype.getData = function () {
  this.request.get()
  .then((gameData) => {
    this.gameData = gameData;
    const questions = this.getAllQuestions(gameData);
    this.allQuestions = questions;
    const characters = this.getAllCharacters(gameData);
    this.characters = characters;
    PubSub.publish("GuessWho:all-questions-ready", questions);
    PubSub.publish("Guesswho:character-data-ready", characters);
  })
  .catch( (err) => console.error(err) );

  // This might not go in here, although I do not understand what this bit means. Maybe in a separate function or bindEvents if we are doing something to it. Maria

  // const hiddenCharacter = this.getHiddenCharacter(); // where will I be?
  // this.hiddenCharacter = hiddenCharacter;

  // .catch((error) => {
  //   PubSub.publish("GuessWho:error", err));//maybe not needed if below
}; //maybe we can do just .catch( (err) => console.error(err) ); ??? JUST SUGGESTING


GuessWho.prototype.getResult = function (questionId) {
  const selectedQuestion = this.getSelectedQuestion(questionId);
  const relatedKey = selectedQuestion.related_key;
  const attribute = selectedQuestion.attribute;
  const charactersToEliminate = this.getCharactersToEliminate(relatedKey, attribute);
  const updatedCards = this.updateCards(charactersToEliminate);
  PubSub.publish("GuessWho:updated-grid-view-ready", updatedCards);
};

GuessWho.prototype.getCharactersToEliminate = function (relatedKey, attribute) {
  const charactersToEliminate = [];
  const characters = this.characters;
  for (character of characters){
    if (character.attribute !== this.hiddenCharacter.attribute) { //shouldn't this line be 'character.attribute' without interpolation
      charactersToEliminate.push(character);
    };
  };
  return charactersToEliminate;
};


GuessWho.prototype.getAllQuestions = function(gameData) {
  console.log(gameData);
  let questions = gameData.questions; //go inside log and find correct route
  return questions;
};

Guesswho.prototype.getAllCharacters = function(gameData) {
  console.log(gameData);
  let questions = gameData.questions;//go inside log and find correct route
  return questions;
};

GuessWho.prototype.getSelectedQuestion = function (questionId) {
  const selectedQuestion = null;
  const questions = this.allQuestions;

  for (let question of questions) {
    if questionId === question.id;
    selectedQuestion = question;
  };
  return selectedQuestion;
};

GuessWho.prototype.updateCards = function (charactersToEliminate) {
  const charactersToEliminate = charactersToEliminate;
  const charactersInGridView = this.characters;
  for (character of charactersToEliminate){
    this.request
    .update(character.id)
    .then(remainingCharacters => this.characters = remainingCharacters);
  }
  .catch(error) => {
    PubSub.publish("GuessWho:error", err);  //maybe we can do just .catch( (err) => console.error(err) ); ??? JUST SUGGESTING
  };
};

module.exports = GuessWho;
