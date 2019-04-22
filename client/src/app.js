const GuessWho = require('./models/guess_who.js');
const SelectView = require('./views/select_view.js');
const CardsGridView = require('./views/cards_grid_view.js');
const GameResultView = require('./views/game_result_view.js');


document.addEventListener("DOMContentLoaded", () => {

  const characterGridDiv = document.querySelector('div#character-grid');
  const newCharactersGridView = new CardsGridView(characterGridDiv);
  newCharactersGridView.bindEvents();

  const questionSelect = document.querySelector('#questions');
  const selectView = new SelectView(questionSelect);
  selectView.bindEvents();

  const apiUrl = 'http://localhost:3000/api';

  const questionsGame = new GuessWho( 'questions', `${apiUrl}/questions` );
  questionsGame.bindEvents();
  questionsGame.getData();

  const charactersGame = new GuessWho( 'characters', `${apiUrl}/characters` );
  charactersGame.bindEvents();
  charactersGame.getData();

});
