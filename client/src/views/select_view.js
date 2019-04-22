const PubSub = require('../helpers/pub_sub.js');

const SelectView = function (select) {
  this.select = select;
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe(`GuessWho:questions-data-loaded`, (evt) => {
    const questionsData = evt.detail;
    console.log('Moo!', questionsData);
    this.populateSelect(questionsData);
    //A: there's something wrong with the way we're calling populateSelect
  });

  const questionForm = document.querySelector('.select-form');
  questionForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const selectedQuestion = evt.target.questions.value;

    PubSub.publish('SelectView:question-selected', selectedQuestion);
  });
};

SelectView.prototype.populateSelect = function (questionsData) {
  questionsData.forEach( (question, index) => {
    // const selectDropdown = document.querySelector('select#questions'); //selects the element 'select' from the DOM
    const option = this.createQuestionOption(question, index);
    this.select.appendChild(option);//creates the options to populate the select
    // selectDropdown.appendChild(option); //appending all the options in the dropdown select
  });
};

SelectView.prototype.createQuestionOption = function (question, index) {
  const option = document.createElement('option'); //creates a tag option for the select
  option.textContent = question.question; //sets the textContent to be a question
  option.value = question.question; //sets the value to be whatever index the question is
  return option;
};

module.exports = SelectView;
