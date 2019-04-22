const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require("../helpers/request.js");

const GuessWho = function(category, url){
  this.category = category;
  this.url = url;
  this.request = new RequestHelper(this.url);
  this.gameData = null;
  // this.allQuestions = null;
  // this.characters = null;
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
    PubSub.publish(`GuessWho:${this.category}-data-loaded`, gameData);
    if (this.category === 'characters'){
      const hiddenCharacter = this.getHiddenCharacter(gameData);
      this.hiddenCharacter = hiddenCharacter;
    }
  })
  .catch( (err) => console.error(err) );
};

GuessWho.prototype.getResult = function (questionId) {
  const selectedQuestion = this.getSelectedQuestion(questionId);
  const relatedKey = selectedQuestion.related_key;
  const attribute = selectedQuestion.attribute;
  let charactersToEliminate = this.getCharactersToEliminate(relatedKey, attribute);
  const updatedCards = this.updateCards(charactersToEliminate);
  PubSub.publish("GuessWho:updated-grid-view-ready", updatedCards);
};

GuessWho.prototype.getCharactersToEliminate = function (relatedKey, attribute) {
  const charactersToEliminate = [];
  const characters = this.characters;
  for (character of characters){
    if (character.attribute !== this.hiddenCharacter.attribute) {
      charactersToEliminate.push(character);
    };
  };
  return charactersToEliminate;
};

GuessWho.prototype.getHiddenCharacter = function(characters) {
  let hiddenCharacter = characters[Math.floor(Math.random()*characters.length)];
  return hiddenCharacter;
};

GuessWho.prototype.getSelectedQuestion = function (questionId) {
  const questions = this.allQuestions; 
  for (let question of questions) {
    if (questionId === question.id){
      selectedQuestion = question;
    };
  };
  return selectedQuestion;

};

GuessWho.prototype.updateCards = function (charactersToEliminate) {
  const charactersTobeChangedinView = charactersToEliminate;
  const charactersInGridView = this.characters;
  for (character of charactersTobeChangedinView ) {
    this.request
    .update(character.id)
    .then(remainingCharacters => this.characters = remainingCharacters);
  }
  // .catch( (err) => console.error(err) );
  // .catch(error) => {
  //   PubSub.publish("GuessWho:error", error);  //maybe we can do just .catch( (err) => console.error(err) ); ??? JUST SUGGESTING
  // Amy: good idea whilst we build the error view. Somehow still throws an error so I have commented out for now and we can discuss tomrrow.
};

module.exports = GuessWho;
