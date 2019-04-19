const PubSub = require('../helpers/pub_sub.js');

const CardsGridView = function (container) {
  this.container = container;
};

CardsGridView.prototype.bindEvents = function () {
  PubSub.subscribe('Guesswho:character-data-ready', (evt) => {
    const charactersData = evt.detail;
    this.render(charactersData);
  });
};

CardsGridView.prototype.render = function () {
  
}
