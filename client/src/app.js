const GuessWho = require('./models/guess_who.js');
const SelectView = require('.views/select_view.js');
const CardsGridView = require('./views/cards_grid_view.js');
const GameResultView = require('./views/game_result_view.js');

const url = "http://localhost:3000";
  const activities = new BucketList(url);
  activities.bindEvents();
  activities.getData();
