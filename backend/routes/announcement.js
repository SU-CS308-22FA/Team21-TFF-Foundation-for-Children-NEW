const express = require('express');

const router = express.Router();

const { MongoClient } = require('mongodb');
const databaseName = 'test';

const getAnnouncements = (req, res) => {
  MongoClient.connect(
    process.env.MONGO_URI,
    { useUnifiedTopology: true },
    (error, client) => {
      if (error) {
        return console.log('Could not connect to database');
      }
      const db = client.db(databaseName);
      db.collection('announcements')
        .find({})
        .toArray((error, result) => {
          if (error) {
            return console.log('Could not get announcements');
          }
          res.json(result);
        });
    }
  );
};

const createAnnouncement = (req, res) => {
  MongoClient.connect(
    process.env.MONGO_URI,
    { useUnifiedTopology: true },
    (error, client) => {
      if (error) {
        return console.log('Could not connect to database');
      }
      const db = client.db(databaseName);
      db.collection('announcements').insertOne(
        {
          title: req.body.title,
          content: req.body.content,
        },
        (error, result) => {
          if (error) {
            return console.log('Could not create announcement');
          }
          res.json(result.ops);
        }
      );
    }
  );
};

router.get('/', getAnnouncements);
router.post('/', createAnnouncement);

module.exports = router;
