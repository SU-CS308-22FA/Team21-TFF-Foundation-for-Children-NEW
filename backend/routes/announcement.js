const express = require('express');

const router = express.Router();

const { MongoClient, ObjectId } = require('mongodb');
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
          permitted: req.body.permitted,
        },
        (error, result) => {
          if (error) {
            return console.log('Could not create announcement');
          }
          res.json(result);
        }
      );
    }
  );
};

const deleteAnnouncement = (req, res) => {
  MongoClient.connect(
    process.env.MONGO_URI,
    { useUnifiedTopology: true },
    (error, client) => {
      if (error) {
        return console.log('Could not connect to database');
      }
      const db = client.db(databaseName);
      db.collection('announcements').deleteOne(
        {
          _id: ObjectId(req.body.id),
        },
        (error, result) => {
          if (error) {
            return console.log('Could not delete announcement');
          }
          res.json(result);
        }
      );
    }
  );
};

const updateAnnouncement = (req, res) => {
  MongoClient.connect(
    process.env.MONGO_URI,
    { useUnifiedTopology: true },
    (error, client) => {
      if (error) {
        return console.log('Could not connect to database');
      }
      const db = client.db(databaseName);
      db.collection('announcements').updateOne(
        {
          _id: ObjectId(req.body.id),
        },
        {
          $set: {
            title: req.body.title,
            content: req.body.content,
          },
        },
        (error, result) => {
          if (error) {
            return console.log('Could not update announcement');
          }
          res.json(result);
        }
      );
    }
  );
};

router.get('/', getAnnouncements);
router.post('/', createAnnouncement);
router.delete('/', deleteAnnouncement);
router.put('/', updateAnnouncement);

module.exports = router;
