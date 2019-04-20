const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = function (collection) {

  const router = expresss.Router();

  router.get('/', (req, res) => {
    collection
      .find()
      .toArray()
      .then( (docs) => res.json(docs) )
      .catch( (err) => {
        console.error(err);
        res.status(500);
        res.json({ status:500, error: err });
      });
  });

  router.put('/:id', (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;

    collection
      .updateOne(
        { _id: ObjectID(id) },
        { $set: updatedData }
      )
      .then( () => {
        collection
          .find()
          .toArray()
          .then( (docs) => res.json(docs) );
      })
      .catch( (err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
  });

  return router;

};

module.exports = createRouter;
