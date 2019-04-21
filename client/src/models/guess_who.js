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
  this.request
  .get()
  .then((gameData) => {
    this.gameData = gameData;
    const questions = this.getAllQuestions();
    this.allQuestions = questions;
    const characters = this.getAllCharacters();
    this.characters = characters;
  };
  PubSub.publish("GuessWho:all-questions-ready", questions);
  PubSub.publish("Guesswho:character-data-ready", characters);
  const hiddenCharacter = this.getHiddenCharacter(); // where will I be?
  this.hiddenCharacter = hiddenCharacter;
})
.catch(error) => {
  PubSub.publish("GuessWho:error", err);//maybe not needed if below
}; //maybe we can do just .catch( (err) => console.error(err) ); ??? JUST SUGGESTING

};

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
    // if character.inPlay === true
    if (character.${attribute} !== this.hiddenCharacter.${attribute}){
      charactersToEliminate.push(character);
      // character.inPlay = false
    };
  };
  return charactersToEliminate;
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
  const charactersInGridView = this.characters
  for (character of charactersToEliminate){
    this.request
    .update(character.id)
    .then(remainingCharacters => this.characters = remainingCharacters);
  }
  .catch(error) => {
    PubSub.publish("GuessWho:error", err);
  };
};

module.exports = GuessWho;
