const assert = require('assert');
const GuessWho = require('../guess_who.js');

describe('Guess Who', function() {

  let characters = [
    {
      name: 'Anita',
      inplay: 'true',
      image_url: '../images/anita.png',
      hair_colour: 'blonde',
      eye_colour: 'blue',
      gender: 'f',
      hat: 'false',
      glasses: 'false',
      facial_hair: 'false',
      daddy_disappointed: 'false'
    },
    {
      name: 'Robert',
      inplay: 'true',
      image_url: '../images/robert.png',
      hair_colour: 'brown',
      eye_colour: 'blue',
      gender: 'm',
      hat: 'false',
      glasses: 'false',
      facial_hair: 'false',
      daddy_disappointed: ''
    },
    {
      name: 'George',
      inplay: 'true',
      image_url: '../images/george.png',
      hair_colour: 'white',
      eye_colour: 'brown',
      gender: 'm',
      hat: 'true',
      glasses: 'false',
      facial_hair: 'false',
      daddy_disappointed: ''
    }
  ];

  let questions = [
    {
      question: "Is the character a male?",
      related_key: "gender",
      attribute: "m"
    },
    {
      question: "Does the character have brunette hair?",
      related_key: "hair_colour",
      attribute: "brown"
    },
    {
      question: "Does the character have blue eyes?",
      related_key: "eye_colour",
      attribute: "blue"
    }
  ];

  let url = 'http://localhost:3000/api/guess-who'

  beforeEach( function () {
    guessWho = new GuessWho(url, characters);
  });

  it('should have characters', function () {
    const actual = guessWho.characters;
    const expected = characters;
    assert.strictEqual(actual, expected);
  });






});
