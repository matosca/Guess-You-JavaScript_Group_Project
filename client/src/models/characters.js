const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require("../helpers/request.js");

const Characters = function (url) {
  this.url = url;
  this.request = new RequestHelper(this.url);
  this.characters = null;
  this.hiddenCharacter = null;
}

Characters.prototype.bindEventsCharacters = function () {

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

Characters.prototype.getCharactersToEliminate = function (relatedKey, attribute) {
  const charactersToEliminate = [];
  const characters = this.characters;
  for (let character in characters){
    if (character.attribute !== this.hiddenCharacter.attribute) {
      charactersToEliminate.push(character);
    };
  };
  return charactersToEliminate;
};

Characters.prototype.getHiddenCharacter = function() {
  let hiddenCharacter = this.characters[Math.floor(Math.random()*this.characters.length)];
  return hiddenCharacter;
};

Characters.prototype.updateCards = function (charactersToEliminate) {
  const charactersTobeChangedinView = charactersToEliminate;
  const charactersInGridView = this.characters;
  for (card of charactersInGridView ) {
    for (character of charactersToEliminate){
      if (card === character){
        card.inplay === false
      }
    }

  }
};

module.exports = Characters;
