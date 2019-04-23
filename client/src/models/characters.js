const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require("../helpers/request.js");

const Characters = function (url) {
  this.url = url;
  this.request = new RequestHelper(this.url);
  this.characters = null;
  this.hiddenCharacter = null;
  this.relatedKey = null;
  this.attribute = null;
}

Characters.prototype.bindEventsCharacters = function () {
  PubSub.subscribe('Questions:get-results-send-question-information', (evt) => {
    this.relatedKey = evt.detail.relatedKey;
    this.attribute = evt.detail.attribute;
    let charactersToEliminate = this.getCharactersToEliminate();
    console.log('hidden', this.hiddenCharacter);
    console.log('chars to elim', charactersToEliminate);
    PubSub.publish('Characters:updated-characters-data-loaded', charactersToEliminate);
  });
};

Characters.prototype.getData = function () {
  this.request.get()
  .then((gameData) => {
    this.characters = gameData;
    PubSub.publish('Characters:characters-data-loaded', gameData);
    const hiddenCharacter = this.getHiddenCharacter();
    this.hiddenCharacter = hiddenCharacter;
  })
  .catch( (err) => console.error(err) );
};

Characters.prototype.getCharactersToEliminate = function () {
  const charactersToEliminate = [];
  const characters = this.characters;
  if (this.attribute === this.hiddenCharacter[this.relatedKey]){
    for (let character of characters){
      if (character[this.relatedKey] !== this.hiddenCharacter[this.relatedKey]){
        character.inplay = "false";
        // character.image_url = "";
        charactersToEliminate.push(character);
      };
    };
  }
  else {
    for (let character of characters){
      if (character[this.relatedKey] === this.attribute){
        character.inplay = "false";
        // character.image_url = "";
        charactersToEliminate.push(character);
      };
    };
  };
return charactersToEliminate;
};

Characters.prototype.getHiddenCharacter = function() {
  let hiddenCharacter = this.characters[Math.floor(Math.random()*this.characters.length)];
  return hiddenCharacter;
};

module.exports = Characters;
