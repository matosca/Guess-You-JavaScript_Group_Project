const express = require('express');
const app = express();
const path = require('path');
const parser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

const publicPath = path.join(__dirname, '../client/public')
app.use(express.static(publicPath));

app.use(parser.json());


//DeprecationWarning: current URL string parser is deprecated, and will be removed in a future version. To use the new parser, pass option { useNewUrlParser: true } to MongoClient.connect
MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true })
  .then((client) => {
    const db = client.db('guessWho'); //accessing the database

    //accessing the collection of characters from 'guessWho' database
    const charactersCollection = db.collection('characters');
    //creating router for collection of characters
    const charactersRouter = createRouter(charactersCollection);
    app.use('/api/characters', charactersRouter);

    //accessing the collectin of questions from 'guessWho' database
    const questionsCollection = db.collection('questions');
    //creating router for collection of questions
    const questionsRouter = createRouter(questionsCollection);
    app.use('/api/questions', questionsRouter);

    //redirecting info with method GET from both router to the send file and so same path
    app.get('/', (req, res) => {
      res.sendFile('index.html');
    });

  })
  .catch((err) => {
    console.error('Failed to connect to DB');
    console.error(err);
  });


  app.listen(3000, function () {
    console.log(`Listening on port ${ this.address().port }`);
});
