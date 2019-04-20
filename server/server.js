const path =  require('path');
const bodyParser =  require('body-parser');
const express = require('express')
const app = express();
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

const publicPath = path.join(__dirname, '../client/public')
app.use(express.static(publicPath));

app.use(parser.json());

MongoClient.connect('mongodb://localhost:27017')
  .then((client) => {
    const db = client.db('guesswho');
    const guesswhoCollection = db.collection('guesswho');
    const guesswhoRouter = db.createRouter(guesswhoCollection);
    app.use('/api/guesswho', guesswhoRouter);
  });

  app.listen(3000, function () {
  console.log(`Listening on Port ${ this.address().port}`);
});
