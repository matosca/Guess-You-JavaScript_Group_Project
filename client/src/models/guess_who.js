const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require("../helpers/request.js");

const GuessWho = function(category, url){
  this.category = category;
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
    PubSub.publish(`GuessWho:${this.category}-data-loaded`, gameData);
    if (this.category === 'questions'){
      this.allQuestions = gameData;
    }
    else if (this.category === 'characters'){
      this.characters = gameData;
      const hiddenCharacter = this.getHiddenCharacter();
      this.hiddenCharacter = hiddenCharacter;
    };
  })
  .catch( (err) => console.error(err) );
};

GuessWho.prototype.findQuestionByContent = function (questionContent) {
  this.allQuestions.find( () => {

  })
};

GuessWho.prototype.getResult = function (questionContent) {
  console.log(questionContent);
  const selectedQuestion = this.getSelectedQuestion(questionContent);
  const relatedKey = selectedQuestion.related_key;
  const attribute = selectedQuestion.attribute;
  let charactersToEliminate = this.getCharactersToEliminate(relatedKey, attribute);
  const updatedCards = this.updateCards(charactersToEliminate);
  PubSub.publish("GuessWho:updated-grid-view-ready", updatedCards);
};

GuessWho.prototype.getCharactersToEliminate = function (relatedKey, attribute) {
  const charactersToEliminate = [];
  const characters = this.characters;
  for (let character in characters){
    if (character.attribute !== this.hiddenCharacter.attribute) {
      charactersToEliminate.push(character);
    };
  };
  return charactersToEliminate;
};

GuessWho.prototype.getHiddenCharacter = function() {
  let hiddenCharacter = this.characters[Math.floor(Math.random()*this.characters.length)];
  return hiddenCharacter;
};

GuessWho.prototype.getSelectedQuestion = function (questionContent) {
  const questions = this.allQuestions;
  for (let question in questions) {
    let selectedQuestion = [];
    if (questionContent === question.question){
      selectedQuestion = question;
    };
    return selectedQuestion;
  };

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
