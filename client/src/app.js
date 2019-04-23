const Characters = require('./models/characters.js');
const Questions = require('./models/questions.js');
const SelectView = require('./views/select_view.js');
const CardsGridView = require('./views/cards_grid_view.js');
const GameResultView = require('./views/game_result_view.js');


document.addEventListener("DOMContentLoaded", () => {

  const characterGridDiv = document.querySelector('div.character-grid');
  const newCharactersGridView = new CardsGridView(characterGridDiv);
  newCharactersGridView.bindEvents();

  const questionSelect = document.querySelector('#questions');
  const selectView = new SelectView(questionSelect);
  selectView.bindEvents();

  const apiUrl = 'http://localhost:3000/api';

  const charactersGame = new Characters(`${apiUrl}/characters` );
  charactersGame.bindEventsCharacters();
  charactersGame.getData();

  const questionsGame = new Questions( `${apiUrl}/questions` );
  questionsGame.bindEventsQuestions();
  questionsGame.getData();
  
});
