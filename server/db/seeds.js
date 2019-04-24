use guessWho;
db.dropDatabase();

db.characters.insertMany(
  [
    {
      name: 'Amy',
      inplay: 'true',
<<<<<<< HEAD
      image_url: '../e29_imgages/amy.png',
=======
      image_url: '../images/amy.jpg',
>>>>>>> a8fcacae6943f160b79b8832e921671b2e5aa619
      hair_colour: 'brunette',
      gender: 'f',
      glasses: 'false',
      facial_hair: 'false',
      uk: 'true',
      singer: 'false',
      vape: 'false',
      nickname: 'false',
      standup: 'false',
      model: 'false',
      pubquiz: 'true',
      crumbs: 'true',
      noise: 'false'
    },
    {
      name: 'Maria',
      inplay: 'true',
<<<<<<< HEAD
      image_url: '../e29_imgages/maria.png',
=======
      image_url: '../images/maria.jpg',
>>>>>>> a8fcacae6943f160b79b8832e921671b2e5aa619
      hair_colour: 'brunette',
      gender: 'f',
      glasses: 'true',
      facial_hair: 'false',
      uk: 'false',
      singer: 'false',
      vape: 'false',
      nickname: 'false',
      standup: 'true',
      model: 'false',
      pubquiz: 'false',
      crumbs: 'true',
      noise: 'false'
    },
    {
      name: 'Mark King',
      inplay: 'true',
<<<<<<< HEAD
      image_url: '.../e29_imgages/markk.png',
=======
      image_url: '../images/markk.jpg',
>>>>>>> a8fcacae6943f160b79b8832e921671b2e5aa619
      hair_colour: 'brunette',
      gender: 'm',
      glasses: 'true',
      facial_hair: 'true',
      uk: 'true',
      singer: 'true',
      vape: 'false',
      nickname: 'false',
      standup: 'true',
      model: 'false',
      pubquiz: 'false',
      crumbs: 'true',
      noise: 'false'
    },
    {
      name: 'David',
      inplay: 'true',
<<<<<<< HEAD
      image_url: '../e29_imgages/david.png',
=======
      image_url: '../images/david.jpg',
>>>>>>> a8fcacae6943f160b79b8832e921671b2e5aa619
      hair_colour: 'brunette',
      gender: 'm',
      glasses: 'false',
      facial_hair: 'false',
      uk: 'true',
      singer: 'false',
      vape: 'false',
      nickname: 'false',
      standup: 'true',
      model: 'false',
      pubquiz: 'true',
      crumbs: 'true',
      noise: 'true'
    },
    {
      name: 'Pim',
      inplay: 'true',
<<<<<<< HEAD
      image_url: '../e29_imgages/pim.png',
=======
      image_url: '../images/pim.jpg',
>>>>>>> a8fcacae6943f160b79b8832e921671b2e5aa619
      hair_colour: 'brunette',
      gender: 'f',
      glasses: 'false',
      facial_hair: 'false',
      uk: 'false',
      singer: 'true',
      vape: 'false',
      nickname: 'true',
      standup: 'true',
      model: 'false',
      pubquiz: 'true',
      crumbs: 'false',
      noise: 'false'
    },
    {
      name: 'Eric',
      inplay: 'true',
<<<<<<< HEAD
      image_url: '../e29_imgages/eric.png',
=======
      image_url: '../images/eric.jpg',
>>>>>>> a8fcacae6943f160b79b8832e921671b2e5aa619
      hair_colour: 'blonde',
      gender: 'm',
      glasses: 'false',
      facial_hair: 'true',
      uk: 'false',
      singer: 'false',
      vape: 'false',
      nickname: 'false',
      standup: 'true',
      model: 'false',
      pubquiz: 'true',
      crumbs: 'false',
      noise: 'false'
    },
    {
      name: 'Grant',
      inplay: 'true',
<<<<<<< HEAD
      image_url: '../e29_imgages/grant.png',
=======
      image_url: '../images/grant.jpg',
>>>>>>> a8fcacae6943f160b79b8832e921671b2e5aa619
      hair_colour: 'red',
      gender: 'm',
      glasses: 'false',
      facial_hair: 'true',
      uk: 'true',
      singer: 'false',
      vape: 'true',
      nickname: 'false',
      standup: 'true',
      model: 'false',
      pubquiz: 'true',
      crumbs: 'false',
      noise: 'false'
    },
    {
      name: 'Alasdair',
      inplay: 'true',
<<<<<<< HEAD
      image_url: '../e29_imgages/alasdair.png',
=======
      image_url: '../images/alasdair.jpg',
>>>>>>> a8fcacae6943f160b79b8832e921671b2e5aa619
      hair_colour: 'brunette',
      gender: 'm',
      glasses: 'false',
      facial_hair: 'true',
      uk: 'true',
      singer: 'false',
      vape: 'false',
      nickname: 'false',
      standup: 'true',
      model: 'false',
      pubquiz: 'true',
      crumbs: 'false',
      noise: 'true'
    },
    {
      name: 'Emily',
      inplay: 'true',
<<<<<<< HEAD
      image_url: '../e29_imgages/emily.png',
=======
      image_url: '../images/emily.jpg',
>>>>>>> a8fcacae6943f160b79b8832e921671b2e5aa619
      hair_colour: 'brunette',
      gender: 'f',
      glasses: 'false',
      facial_hair: 'false',
      uk: 'true',
      singer: 'false',
      vape: 'false',
      nickname: 'false',
      standup: 'true',
      model: 'true',
      pubquiz: 'false',
      crumbs: 'false',
      noise: 'false'
    },
    {
      name: 'Mark Mackay',
      inplay: 'true',
<<<<<<< HEAD
      image_url: '../e29_imgages/markm.png',
=======
      image_url: '../images/markm.jpg',
>>>>>>> a8fcacae6943f160b79b8832e921671b2e5aa619
      hair_colour: 'shaved',
      gender: 'm',
      glasses: 'false',
      facial_hair: 'false',
      uk: 'true',
      singer: 'false',
      vape: 'false',
      nickname: 'false',
      standup: 'true',
      model: 'false',
      pubquiz: 'false',
      crumbs: 'false',
      noise: 'false'
    },
    {
      name: 'Charlie',
      inplay: 'true',
<<<<<<< HEAD
      image_url: '../e29_imgages/charlie.png',
=======
      image_url: '../images/charlie.jpg',
>>>>>>> a8fcacae6943f160b79b8832e921671b2e5aa619
      hair_colour: 'brunette',
      gender: 'm',
      glasses: 'false',
      facial_hair: 'false',
      uk: 'true',
      singer: 'true',
      vape: 'false',
      nickname: 'false',
      standup: 'true',
      model: 'false',
      pubquiz: 'true',
      crumbs: 'false',
      noise: 'false'
    },
    {
      name: 'Rory',
      inplay: 'true',
<<<<<<< HEAD
      image_url: '../e29_imgages/rory.png',
=======
      image_url: '../images/rory.jpg',
>>>>>>> a8fcacae6943f160b79b8832e921671b2e5aa619
      hair_colour: 'shaved',
      gender: 'm',
      glasses: 'false',
      facial_hair: 'true',
      uk: 'true',
      singer: 'true',
      vape: 'false',
      nickname: 'true',
      standup: 'false',
      model: 'false',
      pubquiz: 'true',
      crumbs: 'false',
      noise: 'false'
    },
    {
      name: 'Stephen',
      inplay: 'true',
<<<<<<< HEAD
      image_url: '../e29_imgages/stephen.png',
=======
      image_url: '../images/stephen.jpg',
>>>>>>> a8fcacae6943f160b79b8832e921671b2e5aa619
      hair_colour: 'shaved',
      gender: 'm',
      glasses: 'false',
      facial_hair: 'true',
      uk: 'true',
      singer: 'false',
      vape: 'false',
      nickname: 'true',
      standup: 'false',
      model: 'false',
      pubquiz: 'false',
      crumbs: 'false',
      noise: 'false'
    },
    {
      name: 'Colin',
      inplay: 'true',
      image_url: '../images/colin.jpg',
      hair_colour: 'brunette',
      gender: 'm',
      glasses: 'true',
      facial_hair: 'false',
      uk: 'true',
      singer: 'false',
      vape: 'false',
      nickname: 'false',
      standup: 'true',
      model: 'false',
      pubquiz: 'false',
      crumbs: 'false',
      noise: 'false'
    },
    {
      name: 'Lidia',
      inplay: 'true',
<<<<<<< HEAD
      image_url: '../e29_imgages/lidia.png',
=======
      image_url: '../images/lidia.jpg',
>>>>>>> a8fcacae6943f160b79b8832e921671b2e5aa619
      hair_colour: 'red',
      gender: 'f',
      glasses: 'false',
      facial_hair: 'false',
      uk: 'false',
      singer: 'false',
      vape: 'false',
      nickname: 'false',
      standup: 'false',
      model: 'false',
      pubquiz: 'true',
      crumbs: 'false',
      noise: 'false'
    },
    {
      name: 'Pawel',
      inplay: 'true',
      image_url: '../images/pawel.jpg',
      hair_colour: 'red',
      gender: 'm',
      glasses: 'false',
      facial_hair: 'true',
      uk: 'false',
      singer: 'false',
      vape: 'false',
      nickname: 'false',
      standup: 'true',
      model: 'false',
      pubquiz: 'false',
      crumbs: 'false',
      noise: 'true'
    },
    {
      name: 'Ben',
      inplay: 'true',
<<<<<<< HEAD
      image_url: '../e29_imgages/ben.png',
=======
      image_url: '../images/ben.jpg',
>>>>>>> a8fcacae6943f160b79b8832e921671b2e5aa619
      hair_colour: 'red',
      gender: 'm',
      glasses: 'false',
      facial_hair: 'false',
      uk: 'false',
      singer: 'false',
      vape: 'true',
      nickname: 'false',
      standup: 'true',
      model: 'false',
      pubquiz: 'true',
      crumbs: 'false',
      noise: 'false'
    },
    {
      name: 'Jon',
      inplay: 'true',
<<<<<<< HEAD
      image_url: '../e29_imgages/jon.png',
=======
      image_url: '../images/jon.jpg',
>>>>>>> a8fcacae6943f160b79b8832e921671b2e5aa619
      hair_colour: 'brunette',
      gender: 'm',
      glasses: 'false',
      facial_hair: 'false',
      uk: 'true',
      singer: 'true',
      vape: 'true',
      nickname: 'false',
      standup: 'true',
      model: 'false',
      pubquiz: 'true',
      crumbs: 'false',
      noise: 'false'
    },
    {
      name: 'Jarrod',
      inplay: 'true',
      image_url: '../images/jarrod.jpg',
      hair_colour: 'red',
      gender: 'm',
      glasses: 'false',
      facial_hair: 'false',
      uk: 'true',
      singer: 'false',
      vape: 'true',
      nickname: 'false',
      standup: 'true',
      model: 'false',
      pubquiz: 'false',
      crumbs: 'false',
      noise: 'false'
    },
    {
      name: 'Rob',
      inplay: 'true',
<<<<<<< HEAD
      image_url: '../e29_imgages/rob.png',
=======
      image_url: '../images/rob.jpg',
>>>>>>> a8fcacae6943f160b79b8832e921671b2e5aa619
      hair_colour: 'brunette',
      gender: 'm',
      glasses: 'false',
      facial_hair: 'false',
      uk: 'true',
      singer: 'false',
      vape: 'false',
      nickname: 'false',
      standup: 'false',
      model: 'true',
      pubquiz: 'false',
      crumbs: 'false',
      noise: 'false'
    },
    {
      name: 'Jenn',
      inplay: 'true',
<<<<<<< HEAD
      image_url: '../e29_imgages/jenn.png',
=======
      image_url: '../images/jen.jpg',
>>>>>>> a8fcacae6943f160b79b8832e921671b2e5aa619
      hair_colour: 'brunette',
      gender: 'f',
      glasses: 'true',
      facial_hair: 'false',
      uk: 'true',
      singer: 'false',
      vape: 'false',
      nickname: 'false',
      standup: 'true',
      model: 'false',
      pubquiz: 'true',
      crumbs: 'false',
      noise: 'false'
    },
    {
      name: 'Matt',
      inplay: 'true',
<<<<<<< HEAD
      image_url: '.../e29_imgages/matt.png',
=======
      image_url: '../images/matt.jpg',
>>>>>>> a8fcacae6943f160b79b8832e921671b2e5aa619
      hair_colour: 'brunette',
      gender: 'm',
      glasses: 'true',
      facial_hair: 'false',
      uk: 'false',
      singer: 'true',
      vape: 'false',
      nickname: 'false',
      standup: 'true',
      model: 'false',
      pubquiz: 'false',
      crumbs: 'false',
      noise: 'false'
    },
    {
      name: 'Annabel',
      inplay: 'true',
<<<<<<< HEAD
      image_url: '../e29_imgages/annabel.png',
=======
      image_url: '../images/annabel.jpg',
>>>>>>> a8fcacae6943f160b79b8832e921671b2e5aa619
      hair_colour: 'red',
      gender: 'f',
      glasses: 'false',
      facial_hair: 'false',
      uk: 'true',
      singer: 'false',
      vape: 'false',
      nickname: 'false',
      standup: 'false',
      model: 'false',
      pubquiz: 'false',
      crumbs: 'false',
      noise: 'false'
    },
    {
      name: 'Juan',
      inplay: 'true',
      image_url: '../images/juan.jpg',
      hair_colour: 'brunette',
      gender: 'm',
      glasses: 'true',
      facial_hair: 'false',
      uk: 'false',
      singer: 'false',
      vape: 'false',
      nickname: 'false',
      standup: 'true',
      model: 'false',
      pubquiz: 'false',
      crumbs: 'false',
      noise: 'false'
    },
    {
      name: 'Kat',
      inplay: 'true',
<<<<<<< HEAD
      image_url: '../e29_imgages/kat.png',
=======
      image_url: '../images/kat.jpg',
>>>>>>> a8fcacae6943f160b79b8832e921671b2e5aa619
      hair_colour: 'brunette',
      gender: 'f',
      glasses: 'false',
      facial_hair: 'false',
      uk: 'false',
      singer: 'false',
      vape: 'false',
      nickname: 'false',
      standup: 'true',
      model: 'true',
      pubquiz: 'false',
      crumbs: 'false',
      noise: 'false'
    },
    {
      name: 'Myriam',
      inplay: 'true',
<<<<<<< HEAD
      image_url: '../e29_imgages/myriam.png',
=======
      image_url: '../images/myriam.jpg',
>>>>>>> a8fcacae6943f160b79b8832e921671b2e5aa619
      hair_colour: 'brunette',
      gender: 'f',
      glasses: 'true',
      facial_hair: 'false',
      uk: 'false',
      singer: 'false',
      vape: 'true',
      nickname: 'false',
      standup: 'true',
      model: 'false',
      pubquiz: 'true',
      crumbs: 'false',
      noise: 'false'
    },
    {
      name: 'Becky',
      inplay: 'true',
<<<<<<< HEAD
      image_url: '../e29_imgages/becky.png',
=======
      image_url: '../images/becky.jpg',
>>>>>>> a8fcacae6943f160b79b8832e921671b2e5aa619
      hair_colour: 'blonde',
      gender: 'f',
      glasses: 'false',
      facial_hair: 'false',
      uk: 'true',
      singer: 'false',
      vape: 'false',
      nickname: 'false',
      standup: 'true',
      model: 'false',
      pubquiz: 'false',
      crumbs: 'false',
      noise: 'false'
    }
  ]
);

db.questions.insertMany(
  [
    {
      id: 1,
      question: "Is the character a female?",
      related_key: "gender",
      attribute: "f"
    },
    {
      id: 2,
      question: "Is the character a male?",
      related_key: "gender",
      attribute: "m"
    },
    {
      id: 3,
      question: "Does the character have brunette hair?",
      related_key: "hair_colour",
      attribute: "brunette"
    },
    {
      id: 4,
      question: "Does the character have blonde hair?",
      related_key: "hair_colour",
      attribute: "blonde"
    },
    {
      id: 5,
      question: "Does the character have red hair?",
      related_key: "hair_colour",
      attribute: "red"
    },
    {
      id: 6,
      question: "Does the character shave their hair",
      related_key: "hair_colour",
      attribute: "shaved"
    },
    {
      id: 7,
      question: "Is the character wearing glasses?",
      related_key: "glasses",
      attribute: "true"
    },
    {
      id: 8,
      question: "Does the character have facial hair?",
      related_key: "facial_hair",
      attribute: "true"
    },
    {
      id: 9,
      question: "Does the character come from the UK?",
      related_key: "UK",
      attribute: "true"
    },
    {
      id: 10,
      question: "Is the character a member of crumbsCollaborate?",
      related_key: "crumbs",
      attribute: "true"
    },
    {
      id: 11,
      question: "Does the character get into the pubquiz rivalry with e28?",
      related_key: "pubquiz",
      attribute: "true"
    },
    {
      id: 12,
      question: "Does the character have a secret doublelife as a singer?",
      related_key: "singer",
      attribute: "true"
    },
    {
      id: 13,
      question: "Does the character have vape between classes?",
      related_key: "vape",
      attribute: "true"
    },
    {
      id: 14,
      question: "Does the character have a class nickname?",
      related_key: "nickname",
      attribute: "true"
    },
    {
      id: 15,
      question: "Is the character on time for standup?",
      related_key: "standup",
      attribute: "true"
    },
    {
      id: 16,
      question: "Does the character have a model photo?",
      related_key: "model",
      attribute: "true"
    },
    {
      id: 17,
      question: "Does your character express themselves in strange noises?",
      related_key: "noises",
      attribute: "true"
    },
    //strange noises, earrings, code clan employee, smiley?
  ]
);
