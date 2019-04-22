const GuessWho = require('./models/guess_who.js');
const SelectView = require('./views/select_view.js');
const CardsGridView = require('./views/cards_grid_view.js');
const GameResultView = require('./views/game_result_view.js');


document.addEventListener("DOMContentLoaded", () => {
  console.log('JS loaded');

  const questionSelectForm = document.querySelector('.select-form');
  const selectView = new SelectView(questionSelectForm);
  selectView.bindEvents();

  const characterGridDiv = document.querySelector('div#character-grid');
  const cardsGridView = new CardsGridView(characterGridDiv);
  cardsGridView.bindEvents();

  const apiUrl = 'http://localhost:3000/api';
  const charactersGame = new GuessWho( 'characters', `${apiUrl}/characters` );
  charactersGame.bindEvents();
  charactersGame.getData();

  const questionsGame = new GuessWho( 'questions', `${apiUrl}/questions` );
  questionsGame.bindEvents();
  questionsGame.getData();

});
