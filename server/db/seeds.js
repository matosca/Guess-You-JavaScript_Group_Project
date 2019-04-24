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
    },
    {
      name: 'Alex',
      inplay: 'true',
      image_url: '../images/alex.png',
      hair_colour: 'brown',
      eye_colour: 'brown',
      gender: 'm',
      hat: 'false',
      glasses: 'false',
      facial_hair: 'true',
      daddy_disappointed: ''
    },
    {
      name: 'Bernard',
      inplay: 'true',
      image_url: '../images/bernard.png',
      hair_colour: 'brown',
      eye_colour: 'brown',
      gender: 'm',
      hat: 'true',
      glasses: 'false',
      facial_hair: 'false',
      daddy_disappointed: ''
    },
    {
      name: 'Bill',
      inplay: 'true',
      image_url: '../images/bill.png',
      hair_colour: 'red',
      eye_colour: 'brown',
      gender: 'm',
      hat: 'false',
      glasses: 'false',
      facial_hair: 'true',
      daddy_disappointed: ''
    },
    {
      name: 'Charles',
      inplay: 'true',
      image_url: '../images/charles.png',
      hair_colour: 'blonde',
      eye_colour: 'brown',
      gender: 'm',
      hat: 'false',
      glasses: 'false',
      facial_hair: 'true',
      daddy_disappointed: ''
    },
    {
      name: 'Frans',
      inplay: 'true',
      image_url: '../images/frans.png',
      hair_colour: 'red',
      eye_colour: 'brown',
      gender: 'm',
      hat: 'false',
      glasses: 'false',
      facial_hair: 'false',
      daddy_disappointed: ''
    },
    {
      name: 'Joe',
      inplay: 'true',
      image_url: '../images/jon2.png',
      hair_colour: 'blonde',
      eye_colour: 'brown',
      gender: 'm',
      hat: 'false',
      glasses: 'true',
      facial_hair: 'false',
      daddy_disappointed: ''
    },
    {
      name: 'Max',
      inplay: 'true',
      image_url: '../images/max.png',
      hair_colour: 'brown',
      eye_colour: 'brown',
      gender: 'm',
      hat: 'false',
      glasses: 'false',
      facial_hair: 'true',
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
      name: 'Peter',
      inplay: 'true',
      image_url: '../images/peter.png',
      hair_colour: 'white',
      eye_colour: 'blue',
      gender: 'm',
      hat: 'false',
      glasses: 'false',
      facial_hair: 'false',
      daddy_disappointed: ''
    },
    {
      name: 'Philip',
      inplay: 'true',
      image_url: '../images/philip.png',
      hair_colour: 'brown',
      eye_colour: 'brown',
      gender: 'm',
      hat: 'false',
      glasses: 'false',
      facial_hair: 'true',
      daddy_disappointed: ''
    },
    {
      name: 'Richard',
      inplay: 'true',
      image_url: '../images/richard.png',
      hair_colour: 'brown',
      eye_colour: 'brown',
      gender: 'm',
      hat: 'false',
      glasses: 'false',
      facial_hair: 'true',
      daddy_disappointed: ''
    },
    {
      name: 'Sam',
      inplay: 'true',
      image_url: '../images/sam.png',
      hair_colour: 'white',
      eye_colour: 'brown',
      gender: 'm',
      hat: 'false',
      glasses: 'true',
      facial_hair: 'false',
      daddy_disappointed: ''
    },
    {
      name: 'Tom',
      inplay: 'true',
      image_url: '../images/tom.png',
      hair_colour: 'brown',
      eye_colour: 'blue',
      gender: 'm',
      hat: 'false',
      glasses: 'true',
      facial_hair: 'false',
      daddy_disappointed: ''
    }
  ]
);

db.questions.insertMany(
  [
    {
      id: 1,
      question: "Does the character have brunette hair?",
      related_key: "hair_colour",
      attribute: "brown"
    },
    {
      id: 2,
      question: "Does the character have blonde hair?",
      related_key: "hair_colour",
      attribute: "blonde"
    },
    {
      id: 3,
      question: "Does the character have red hair?",
      related_key: "hair_colour",
      attribute: "red"
    },
    {
      id: 4,
      question: "Does the character have white hair?",
      related_key: "hair_colour",
      attribute: "white"
    },
    {
      id: 5,
      question: "Does the character have blue eyes?",
      related_key: "eye_colour",
      attribute: "blue"
    },
    {
      id: 6,
      question: "Does the character have brown eyes?",
      related_key: "eye_colour",
      attribute: "brown"
    },
    {
      id: 7,
      question: "Is the character a female?",
      related_key: "gender",
      attribute: "f"
    },
    {
      id: 8,
      question: "Is the character a male?",
      related_key: "gender",
      attribute: "m"
    },
    {
      id: 9,
      question: "Is the character Wearing a hat?",
      related_key: "hat",
      attribute: "true"
    },
    {
      id: 10,
      question: "Is the character wearing glasses?",
      related_key: "glasses",
      attribute: "true"
    },
    {
      id: 11,
      question: "Does the character have facial hair?",
      related_key: "facial_hair",
      attribute: "true"
    },
    {
      id: 12,
      question: "Does the character look like he/she is a disappointment to his/her father?",
      related_key: "daddy_disappointed",
      attribute: "true"
    }
  ]
);
