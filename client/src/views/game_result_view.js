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
  PubSub.subscribe('CardsGridView:no-turns_left', (evt) => {
    const gameContainer = document.querySelector('#game-container');
    gameContainer.innerHTML = "";
    const noTurnsRemaining = evt.detail;
    this.outOfTurns(noTurnsRemaining)
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

    const playAgainButton = document.createElement('a');
    playAgainButton.setAttribute("href", "http://localhost:3000");
    playAgainButton.innerHTML = "PLAY AGAIN!";
    playAgainButton.classList.add("play");
    this.container.appendChild(playAgainButton);
  }
  else {
    const resultMessage = this.createElement('h2', `${guessedCard.name} is wrong! It was ${this.hiddenCharacter.name}. You lose!`);
    this.container.appendChild(resultMessage);

    const hiddenCharacter = document.createElement('img');
    hiddenCharacter.src = this.hiddenCharacter.image_url;
    this.container.appendChild(hiddenCharacter);

    const playAgainButton = document.createElement('a');
    playAgainButton.setAttribute("href", "http://localhost:3000");
    playAgainButton.innerHTML = "PLAY AGAIN!";
    playAgainButton.classList.add("play");
    this.container.appendChild(playAgainButton);
  };

};

GameResultView.prototype.createElement = function (elementType, text) {
  const element = document.createElement(elementType);
  element.textContent = text;
  return element;
};

GameResultView.prototype.outOfTurns = function () {
  const resultMessage = this.createElement('h2', `You're Out of Turns. It was ${this.hiddenCharacter.name}. Get it Together!`);
  this.container.appendChild(resultMessage);

  const hiddenCharacter = document.createElement('img');
  hiddenCharacter.src = this.hiddenCharacter.image_url;
  this.container.appendChild(hiddenCharacter);

  const playAgainButton = document.createElement('a');
  playAgainButton.setAttribute("href", "http://localhost:3000");
  playAgainButton.innerHTML = "PLAY AGAIN!";
  playAgainButton.classList.add("play");
  this.container.appendChild(playAgainButton);
};

module.exports = GameResultView;
