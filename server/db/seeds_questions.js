use guesswho;

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
