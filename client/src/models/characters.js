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
    this.getCharactersToEliminate();
    PubSub.publish('Characters:characters-data-loaded', this.characters);
  });
};

Characters.prototype.finalCard = function () {
  let inplayCounter = 0;
  for (let character of this.characters)  {
    console.log('character in finalCArd', character);
    if (character.inplay === 'true'){
      inplayCounter += 1;
      console.log('inplay counter', inplayCounter);
    };
  };

  if ( inplayCounter === 1 ){
    PubSub.publish('Characters:guessed-card-result', this.hiddenCharacter);
  };
};

Characters.prototype.getData = function () {
  this.request.get()
  .then((gameData) => {
    this.characters = gameData;
    PubSub.publish('Characters:characters-data-loaded', gameData);
    const hiddenCharacter = this.getHiddenCharacter();
    this.hiddenCharacter = hiddenCharacter;
    PubSub.publish('Characters:hidden-character-selected', hiddenCharacter);
    console.log('hidden char', hiddenCharacter);
  })
  .catch( (err) => console.error(err) );
};

// ALERT BOX
function CustomAlert(){

  this.ok = function(){
    document.getElementById('dialogbox').style.display = "none";
    document.getElementById('dialogoverlay').style.display = "none";
  };

  this.render = function(dialog){
    var winW = window.innerWidth;
    var winH = window.innerHeight;
    var dialogoverlay = document.getElementById('dialogoverlay');
    var dialogbox = document.getElementById('dialogbox');
    dialogoverlay.style.display = "block";
    dialogoverlay.style.height = winH+"px";
    dialogbox.style.left = (winW/2) - (550 * .5)+"px";
    dialogbox.style.top = "100px";
    dialogbox.style.display = "block";
    // document.getElementById('dialogboxhead').innerHTML = "";
    document.getElementById('dialogboxbody').innerHTML = dialog;
    document.getElementById('dialogboxfoot').innerHTML = '<button onclick="Alert.ok()">OK</button>';
  };
};

Characters.prototype.getCharactersToEliminate = function () {
  const characters = this.characters;
  if (this.attribute === this.hiddenCharacter[this.relatedKey]){
    // const Alert = new CustomAlert();
    // Alert.render(`Yes! The hidden character does have ${this.relatedKey} ${this.attribute}.`)
    alert(`Yes! The hidden character does have ${this.relatedKey} ${this.attribute}.`);
    for (let character of characters){
      if (character[this.relatedKey] !== this.hiddenCharacter[this.relatedKey]){
        character.inplay = "false";
        character.image_url = "../images/monster.png";
      };
    };
  }
  else {
    // const Alert = new CustomAlert();
    // Alert.render(`No! The hidden character does not have ${this.relatedKey} ${this.attribute}.`);
    alert(`No! The hidden character does not have ${this.relatedKey} ${this.attribute}.`);
    for (let character of characters){
      if (character[this.relatedKey] === this.attribute){
        character.inplay = "false";
        character.image_url = "../images/monster.png";
      };
    };
  };
  this.finalCard();
};

Characters.prototype.getHiddenCharacter = function() {
  let hiddenCharacter = this.characters[Math.floor(Math.random()*this.characters.length)];
  return hiddenCharacter;
};


module.exports = Characters;
