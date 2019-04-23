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
    const updatedCards = this.updateCards(charactersToEliminate);
    PubSub.publish('Characters:characters-data-loaded', updatedCards);
  });
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

Characters.prototype.getCharactersToEliminate = function () {
  const charactersToEliminate = [];
  const characters = this.characters;
  console.log('hidden char', this.hiddenCharacter);
  if (this.attribute === this.hiddenCharacter[this.relatedKey]){
    for (let character of characters){
      if (character[this.relatedKey] !== this.hiddenCharacter[this.relatedKey]){
        charactersToEliminate.push(character);
      };
    };
  }
  else {
    for (let character of characters){
      if (character[this.relatedKey] === this.attribute){
        charactersToEliminate.push(character);
      };
    };
  };
//   for (let character of characters){
//     if (character[this.relatedKey] !== this.hiddenCharacter[this.relatedKey] && this.attribute === character[this.relatedKey]) { //related key to be accessed
//       console.log('hidden char', this.hiddenCharacter);
//       console.log('relatedKey from q', this.relatedKey);
//       charactersToEliminate.push(character);
//       console.log('chars to elim', charactersToEliminate);
//     }
//     else if (character[this.relatedKey] === this.hiddenCharacter[this.relatedKey]){
//       for (let character of characters){
//         if (character[this.relatedKey] !== this.hiddenCharacter[this.relatedKey] && this.attribute === character[this.relatedKey]) {
//           charactersToEliminate.push(character);
//         };
//       };
//     };
//   };
// };
console.log('chars to elim', charactersToEliminate);
return charactersToEliminate;
};

Characters.prototype.charactersEliminateForLoop = function () {

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
