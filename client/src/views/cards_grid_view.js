const PubSub = require('../helpers/pub_sub.js');

const CardsGridView = function (container) {
  this.container = container;
};

CardsGridView.prototype.bindEvents = function () {
  PubSub.subscribe('Characters:characters-data-loaded', (evt) => {
    const charactersData = evt.detail;
    this.render(charactersData);
  });
  // PubSub.subscribe('Characters:updated-characters-data-loaded', (evt) => {
  //   const updatedCharactersData = evt.detail;
  //   console.log('updated chars', updatedCharactersData);
  //   this.render(updatedCharactersData);
  // });
  PubSub.subscribe('Questions:turns-remainging', (evt) => {
    const turnRemaining = evt.detail;// this subscribe collect the remaining turn limit from questions.js
    this.renderTurnLimit(turnRemaining); //a function to render the remainging turn limit on screen
  });
};

CardsGridView.prototype.render = function (charactersData) {
  this.container.innerHTML = "";
  charactersData.forEach( (card) => {
    const cardContainer = this.createCards(card); //this creates every card in the format from below
    this.container.appendChild(cardContainer); //appending each card into the main container
  });
};

CardsGridView.prototype.renderTurnLimit = function(turnsRemaining) {
  this.turnContainer.innerHTML = "";
  const turnContainer = this.createTurnContainer(turnsRemaining)
  this.container.appendChild(turnContainer)
}

CardsGridView.prototype.createCards = function (card) {
  const cardContainer = document.createElement('div'); //creating container for allocating the img
  cardContainer.classList.add('card');

  const characterImg = document.createElement('img');//creating tag img in html
  characterImg.src = card.image_url;//setting the src to be the card's url from the database
  characterImg.addEventListener('click', (evt) => {
    evt.preventDefault();
    const guessedCard = card;
    PubSub.publish('Characters:guessed-card-result', guessedCard);
  })

  cardContainer.appendChild(characterImg); //appending the img into the container
  return cardContainer;
};

CardsGridView.prototype.createTurnContainer = function (turnsRemaining) {
  const turnContainer = document.createElement('div');
  turnContainer.classList.add('turnRemaining');
  const turnNumber= document.createElement('h2');
  turnNumber.textContent = `You have ${turnRemaining} turn remaining`
  turnContainer.appendChild(turnNumber)
  return turnContainer
};

module.exports = CardsGridView;
