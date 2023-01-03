const express = require("express");

// controller functions
const { loginUser, signupUser, searchUserByEmail, updateSkillLevel, getStudentUsers, updateUser, addToEventsList, getUser, getSomeUsers } = require('../controllers/userController') // import the handler functions

const router = express.Router();
/*
router.get('/', (req,res) => {
    res.json({mssg: "GET all users"})
})*/



//get user route
//update user
router.patch('/update', updateUser)
// login route
router.post("/login", loginUser); // send data in a request
// loginUser is the request handler function

// signup route
router.post('/signup', signupUser)
router.patch('/addtoeventslist', addToEventsList)
router.patch('/updateskills', updateSkillLevel)
router.get('/getstudents', getStudentUsers)
router.get('/getusers/:id', getUser)
router.get('/getsomeusers', getSomeUsers);

router.get('/getuserbyemail/:email', searchUserByEmail)


module.exports = router;
