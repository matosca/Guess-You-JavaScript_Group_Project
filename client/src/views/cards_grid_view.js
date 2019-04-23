const PubSub = require('../helpers/pub_sub.js');

const CardsGridView = function (container) {
  this.container = container;
};

CardsGridView.prototype.bindEvents = function () {
  PubSub.subscribe('Characters:characters-data-loaded', (evt) => {
    const charactersData = evt.detail;
    this.render(charactersData);
  });
  PubSub.subscribe('Characters:updated-characters-data-loaded', (evt) => {
    const updatedCharactersData = evt.detail;
    console.log('updated chars', updatedCharactersData);
    this.render(updatedCharactersData);
  });
};

CardsGridView.prototype.render = function (charactersData) {
  charactersData.forEach( (card) => {
    const cardContainer = this.createCards(card); //this creates every card in the format from below
    this.container.appendChild(cardContainer); //appending each card into the main container
  });
};


CardsGridView.prototype.createCards = function (card) {
  const cardContainer = document.createElement('div'); //creating container for allocating the img
  cardContainer.classList.add('card');

  const characterImg = document.createElement('img');//creating tag img in html
  characterImg.src = card.image_url;//setting the src to be the card's url from the database

  cardContainer.appendChild(characterImg); //appending the img into the container
  return cardContainer;
};

module.exports = CardsGridView;
