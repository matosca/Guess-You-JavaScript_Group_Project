const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require("../helpers/request_helper.js");

const GuessWho = function(url){
  this.url = url;
  this.request = new RequestHelper(this.url);
};

GuessWho.prototype.bindEvents = function () {
  PubSub.subscribe('SelectView:question-selected', (evt) => {
    this.getResult(evt.detail);
  });
};
