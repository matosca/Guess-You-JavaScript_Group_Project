const GuessWho = require('./models/guess_who.js');
const SelectView = require('.views/select_view.js');
const CardsGridView = require('./views/cards_grid_view.js');
const GameResultView = require('./views/game_result_view.js');


document.addEventListener("DOMContentLoaded", () => {

  const questionSelectForm = document.querySelector('form#select-form');
  const selectView = new SelectView(questionSelectForm);
  selectView.bindEvents();

  const characterGridDiv = document.querySelector('div#character-grid');
  const cardsGridView = new CardsGridView(characterGridDiv);
  cardsGridView.bindEvents();

  const url = "http://localhost:3000";
  const newGame = new GuessWho(url);
  newGame.bindEvents();
  newGame.getData();
  
});
