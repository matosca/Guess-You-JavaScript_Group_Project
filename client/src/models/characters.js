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
    // console.log('character', gameData);
    PubSub.publish('Characters:characters-data-loaded', gameData);
      const hiddenCharacter = this.getHiddenCharacter();
      this.hiddenCharacter = hiddenCharacter;
  })
  .catch( (err) => console.error(err) );
};

Characters.prototype.getCharactersToEliminate = function (relatedKey, attribute) {
  console.log(this.hiddenCharacter);
  const charactersToEliminate = [];
  const characters = this.characters;
  for (let character in characters){
    if (attribute !== this.hiddenCharacter.relatedKey) { //related key to be accessed
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
  const charactersInGridView = this.characters;
  for (card in charactersInGridView ) {
    for (character in charactersToEliminate){
      if (card == character){
        card.inplay = false
      };
    };
  };
};

module.exports = Characters;
