const PubSub = require('../helpers/pub_sub.js');

const GameResultView = function (container) {
  this.container = container;
};

GameResultView.prototype.bindEvents = function () {
  PubSub.subscribe('GuessWho:guessed-card-result', (evt) => {
    const resultedCard = evt.detail;
    this.renderResult(resultedCard);
  });
  //PubSub.subscribe('Questions:turn-limit', (evt) => {
    //const turnLimit = evt.detail;
    //this.renderTurnLimit
  //});
};

GameResultView.prototype.renderResult = function (guessedCard) {

  const resultMessage = this.createElement('h2', `Congratulations! You Guessed ${guessedCard.name}`);
  this.container.appendChild(resultMessage);

  const resultBox = document.createElement('div');
  resultBox.classList.add('result');

  const resultCharacter = document.createElement('img');
  resultCharacter.src = guessedCard.image_url;
  resultBox.appendChild(resultCharacter);

  this.container.appendChild(resultBox);
};

GameResultView.prototype.createElement = function (elementType, text) {
  const element = document.createElement(elementType);
  element.textContent = text;
  return element;
};

module.exports = GameResultView;
