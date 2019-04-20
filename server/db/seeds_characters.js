use guessWho;
db.dropDatabase();

db.characters.insertMany(
  [
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
    },
    {
      name: 'Paul',
      inplay: 'true',
      image_url: '../images/paul.png',
      hair_colour: 'white',
      eye_colour: 'brown',
      gender: 'm',
      hat: 'false',
      glasses: 'true',
      facial_hair: 'false',
      daddy_disappointed: ''
    },
    {
      name: 'Claire',
      inplay: 'true',
      image_url: '../images/claire.png',
      hair_colour: 'red',
      eye_colour: 'brown',
      gender: 'f',
      hat: 'true',
      glasses: 'true',
      facial_hair: 'false',
      daddy_disappointed: ''
    },
    {
      name: 'Alfred',
      inplay: 'true',
      image_url: '../images/alfred.png',
      hair_colour: 'red',
      eye_colour: 'blue',
      gender: 'm',
      hat: 'false',
      glasses: 'false',
      facial_hair: 'true',
      daddy_disappointed: ''
    },
    {
      name: 'Susan',
      inplay: 'true',
      image_url: '../images/susan.png',
      hair_colour: 'white',
      eye_colour: 'brown',
      gender: 'f',
      hat: 'false',
      glasses: 'false',
      facial_hair: 'false',
      daddy_disappointed: ''
    },
    {
      name: 'Maria',
      inplay: 'true',
      image_url: '../images/maria.png',
      hair_colour: 'brown',
      eye_colour: 'brown',
      gender: 'f',
      hat: 'true',
      glasses: 'false',
      facial_hair: 'false',
      daddy_disappointed: ''
    },
    {
      name: 'David',
      inplay: 'true',
      image_url: '../images/david.png',
      hair_colour: 'blonde',
      eye_colour: 'brown',
      gender: 'm',
      hat: 'false',
      glasses: 'false',
      facial_hair: 'true',
      daddy_disappointed: ''
    },
    {
      name: 'Eric',
      inplay: 'true',
      image_url: '../images/eric.png',
      hair_colour: 'blonde',
      eye_colour: 'brown',
      gender: 'm',
      hat: 'true',
      glasses: 'false',
      facial_hair: 'false',
      daddy_disappointed: ''
    },
    {
      name: 'Herman',
      inplay: 'true',
      image_url: '../images/herman.png',
      hair_colour: 'red',
      eye_colour: 'brown',
      gender: 'm',
      hat: 'false',
      glasses: 'false',
      facial_hair: 'false',
      daddy_disappointed: ''
    },
    {
      name: 'Anne',
      inplay: 'true',
      image_url: '../images/anne.png',
      hair_colour: 'brown',
      eye_colour: 'brown',
      gender: 'f',
      hat: 'false',
      glasses: 'false',
      facial_hair: 'false',
      daddy_disappointed: ''
    }
  ]
);
