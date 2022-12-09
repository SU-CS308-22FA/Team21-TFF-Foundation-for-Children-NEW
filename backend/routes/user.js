const express = require('express')


// controller functions
const { loginUser, signupUser, getUsers } = require('../controllers/userController') // import the handler functions


const router = express.Router()
/*
router.get('/', (req,res) => {
    res.json({mssg: "GET all users"})
})*/



//get user route
router.get('/getusers', getUsers)

// login route
router.post('/login', loginUser)  // send data in a request
// loginUser is the request handler function

// signup route
router.post('/signup', signupUser)

//student page

module.exports = router