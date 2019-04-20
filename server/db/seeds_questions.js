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
},
{
id: 6
question: "Do they have Brown Eyes?"
related_key: "eye_colour"
attribute: "brown"
},{
id: 7
question: "Are they Female?"
related_key: "gender"
attribute: "f"
},
{
id: 8
question: "Are they Male?"
related_key: "gender"
attribute: "m"
},
{
id: 9
question: "Are they Wearing a Hat?"
related_key: "hat"
attribute: "true"
},
{
id: 10
question: "Are they Wearing Glasses?"
related_key: "glasses"
attribute: "true"
},
{
id: 11
question: "Do they have Facial Hair?"
related_key: "facial_hair"
attribute: "true"
},
{
id: 12
question: "Do they look like they are Disappointment to their Father?"
related_key: "daddy_disappointed"
attribute: "true"
}
]);
