use guesswho;

db.questions.insertMany(
[
  {
  id: 1,
  question: "Do they have Brunette Hair?",
  related_key: "hair_colour",
  attribute: "brown"
},
{
id: 2,
question: "Do they have Blonde Hair?",
related_key: "hair_colour",
attribute: "blonde"
},
{
id: 3,
question: "Do they have Red Hair?",
related_key: "hair_colour",
attribute: "red"
},
{
id: 4,
question: "Do they have White Hair,
related_key: "hair_colour",
attribute: "white"
},
{
id: 5,
question: "Do they have Blue Eyes,
related_key: "eye_colour",
attribute: "blue"
},
{
id: 6,
question: "Do they have Brown Eyes?",
related_key: "eye_colour",
attribute: "brown"
}
]);
