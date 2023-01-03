const express = require('express');

const router = express.Router();

const { MongoClient, ObjectId } = require('mongodb');
const databaseName = 'test';

const getIssue = (req, res) => {
  MongoClient.connect(
    process.env.MONGO_URI,
    { useUnifiedTopology: true },
    (error, client) => {
      if (error) {
        return console.log('Could not connect to database');
      }
      const db = client.db(databaseName);
      db.collection('issue')
        .find({})
        .toArray((error, result) => {
          if (error) {
            return console.log('Could not get issues');
          }
          res.json(result);
        });
    }
  );
};

const createIssue = (req, res) => {
  MongoClient.connect(
    process.env.MONGO_URI,
    { useUnifiedTopology: true },
    (error, client) => {
      if (error) {
        return console.log('Could not connect to database');
      }
      const db = client.db(databaseName);
      db.collection('issue').insertOne(
        {
          title: req.body.title,
          content: req.body.content,
          issueType: req.body.issueType,
          date: req.body.date,
        },
        (error, result) => {
          if (error) {
            return console.log('Could not create issues');
          }
          res.json(result);
        }
      );
    }
  );
};

router.get('/', getIssue);
router.post('/', createIssue);

module.exports = router;
