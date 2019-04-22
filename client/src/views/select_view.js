const PubSub = require('../helpers/pub_sub.js');

const SelectView = function (form) {
  this.form = form;
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('GuessWho:questions-data-loaded', (evt) => {
    const questionsData = evt.detail;
    const selectDropdown = document.querySelector('select#questions');
    selectDropdown.populateSelect(questionsData);
  });

  this.form.addEventListener('submit', (evt) => {

    const selectedQuestion = evt.target.questions.value;

    PubSub.publish('SelectView:question-selected', selectedQuestion);
  });
};

SelectView.prototype.populateSelect = function (questionsData) {
  questionsData.forEach( (question, index) => {
    const selectDropdown = document.querySelector('#questions'); //selects the element 'select' from the DOM
    const option = this.createQuestionOption(question, index);//creates the options to populate the select
    selectDropdown.appendChild(option); //appending all the options in the dropdown select
  });
};

SelectView.prototype.createQuestionOption = function (question, index) {
  const option = document.createElement('option'); //creates a tag option for the select
  option.textContent = question; //sets the textContent to be a question
  option.value = index; //sets the value to be whatever index the question is
  return option;
};

module.exports = SelectView;
