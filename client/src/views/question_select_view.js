const PubSub = require('../helpers/pub_sub.js');

const QuestionSelectView = function (form) {
  this.form = form;
};

QuestionSelectView.prototype.bindEvents = function () {
  PubSub.subscribe('GuessWho:all-questins-ready', (evt) => {
    const questionsData = evt.detail;
  });

  PubSub.publish('QuestionSelectView:question-selected', )
};

QuestionSelectView.prototype.populateSelect = function (questions) {
  
}
