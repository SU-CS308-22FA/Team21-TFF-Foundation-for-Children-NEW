const express = require("express");

// controller functions


const { loginUser, signupUser, searchUserByEmail, updateSkillLevel, getStudentUsers, updateUser, addToEventsList, getUser, getSomeUsers } = require('../controllers/userController') // import the handler functions
const { MongoClient, ObjectId } = require('mongodb');
const databaseName = 'test';
const router = express.Router();
/*
router.get('/', (req,res) => {
    res.json({mssg: "GET all users"})
})*/


const deleteUser = (req, res) => {
    MongoClient.connect(
      process.env.MONGO_URI,
      { useUnifiedTopology: true },
      (error, client) => {
        if (error) {
          return console.log('Could not connect to database');
        }
        const db = client.db(databaseName);
        db.collection('users').deleteOne(
          {
            email: req.body.email,
          },
          (error, result) => {
            if (error) {
              return console.log('Could not delete user');
            }
            res.json(result);
          }
        );
      }
    );
  };

//get user route
//update user
router.patch('/update', updateUser)
// login route
router.post("/login", loginUser); // send data in a request
// loginUser is the request handler function
router.delete('/delete', deleteUser)
// signup route
router.post('/signup', signupUser)
router.patch('/addtoeventslist', addToEventsList)
router.patch('/updateskills', updateSkillLevel)
router.get('/getstudents', getStudentUsers)
router.get('/getusers/:id', getUser)
router.get('/getsomeusers', getSomeUsers);

router.get('/getuserbyemail/:email', searchUserByEmail)


module.exports = router;
