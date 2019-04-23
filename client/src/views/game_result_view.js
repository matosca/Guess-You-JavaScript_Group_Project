const PubSub = require('../helpers/pub_sub.js');

const GameResultView = function (container) {
  this.container = container;
  this.hiddenCharacter = null;
};

GameResultView.prototype.bindEvents = function () {
  PubSub.subscribe('Characters:guessed-card-result', (evt) => {
    const resultedCard = evt.detail;
    console.log('resulted card', resultedCard);
    const gameContainer = document.querySelector('#game-container');
    gameContainer.innerHTML = "";
    console.log('hidden card', this.hiddenCharacter);
    this.renderResult(resultedCard);
  });
  PubSub.subscribe('Characters:hidden-character-selected', (evt) => {
    this.hiddenCharacter = evt.detail;
  });
};

GameResultView.prototype.renderResult = function (guessedCard) {
  if (guessedCard == this.hiddenCharacter){
    const resultMessage = this.createElement('h2', `Congratulations, you won! It was ${guessedCard.name}!`);
    this.container.appendChild(resultMessage);

    const resultBox = document.createElement('div');
    resultBox.classList.add('result');

    const resultCharacter = document.createElement('img');
    resultCharacter.src = guessedCard.image_url;
    resultBox.appendChild(resultCharacter);

    this.container.appendChild(resultBox);
  }
  else {
    const resultMessage = this.createElement('h2', `You guessed wrong! It was ${this.hiddenCharacter.name}. You lose!`);
    this.container.appendChild(resultMessage);
  };

};

GameResultView.prototype.createElement = function (elementType, text) {
  const element = document.createElement(elementType);
  element.textContent = text;
  return element;
};

module.exports = GameResultView;
