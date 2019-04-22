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
    const hiddenCharacter = this.getHiddenCharacter(); // where will I be?
    this.hiddenCharacter = hiddenCharacter;
    // PubSub.publish("GuessWho:all-questions-ready", questions);
    // PubSub.publish("Guesswho:character-data-ready", characters);
    // Amy: commented these out but unsure if we might need them
  })
  // .catch( (err) => console.error(err) );

  // This might not go in here, although I do not understand what this bit means. Maybe in a separate function or bindEvents if we are doing something to it. Maria
  //I think this may be the only place this makes sense. we need to have this.characters set up before we can run hiddenCharacter() i think. :/ Confused David

  // .catch((error) => {
  //   PubSub.publish("GuessWho:error", err));//maybe not needed if below
}; //maybe we can do just .catch( (err) => console.error(err) ); ??? JUST SUGGESTING


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

GuessWho.prototype.getHiddenCharacter = function() {
  let hiddenCharacter = this.characters[Math.floor(Math.random()*this.characters.length)]
  console.log(hiddenCharacter);
  return hiddenCharacter;
};

GuessWho.prototype.getSelectedQuestion = function (questionId) {
  const selectedQuestion = null;
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
