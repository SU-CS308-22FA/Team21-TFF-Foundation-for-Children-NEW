const express = require('express');

const router = express.Router();

const { MongoClient, ObjectId } = require('mongodb');
const databaseName = 'test';

const getStudents = (req, res) => {
  MongoClient.connect(
    process.env.MONGO_URI,
    { useUnifiedTopology: true },
    (error, client) => {
      if (error) {
        return console.log('Could not connect to database');
      }
      const db = client.db(databaseName);
      db.collection('users')
        .find({
          role: 'Student',
          userName: { $exists: true },
        })
        .toArray((error, result) => {
          if (error) {
            return console.log('Could not get students');
          }
          res.json(result);
        });
    }
  );
};

const getStudentEvaluation = (req, res) => {
  MongoClient.connect(
    process.env.MONGO_URI,
    { useUnifiedTopology: true },
    (error, client) => {
      if (error) {
        return console.log('Could not connect to database');
      }
      const db = client.db(databaseName);
      db.collection('users')
        .find({
          email: req.body.email,
        })
        .toArray((error, result) => {
          if (error) {
            return console.log('Could not get student evaluation');
          }
          res.json(result);
        });
    }
  );
};

const addEvaluationToUser = (req, res) => {
  MongoClient.connect(
    process.env.MONGO_URI,
    { useUnifiedTopology: true },
    (error, client) => {
      if (error) {
        return console.log('Could not connect to database');
      }
      const db = client.db(databaseName);
      db.collection('users').updateOne(
        { _id: ObjectId(req.body.id) },
        { $set: { evaluations: req.body.evaluation } },
        (error, result) => {
          if (error) {
            return console.log('Could not add evaluation to user');
          }
          res.json(result);
        }
      );
    }
  );
};

const updateEvaluation = (req, res) => {
  MongoClient.connect(
    process.env.MONGO_URI,
    { useUnifiedTopology: true },
    (error, client) => {
      if (error) {
        return console.log('Could not connect to database');
      }
      const db = client.db(databaseName);
      db.collection('users').updateOne(
        { email: req.body.email },
        { $set: { evaluations: req.body.evaluation } },
        (error, result) => {
          if (error) {
            return console.log('Could not update evaluation');
          }
          res.json(result);
        }
      );
    }
  );
};

const deleteEvaluationFromUser = (req, res) => {
  MongoClient.connect(
    process.env.MONGO_URI,
    { useUnifiedTopology: true },
    (error, client) => {
      if (error) {
        return console.log('Could not connect to database');
      }
      const db = client.db(databaseName);
      db.collection('users').updateOne(
        { _id: ObjectId(req.body.id) },
        { $unset: { evaluations: req.body.evaluation } },
        (error, result) => {
          if (error) {
            return console.log('Could not delete evaluation from user');
          }
          res.json(result);
        }
      );
    }
  );
};

router.get('/', getStudents);
router.post('/', addEvaluationToUser);
router.delete('/', deleteEvaluationFromUser);
router.put('/', updateEvaluation);
router.post('/student', getStudentEvaluation);

module.exports = router;
