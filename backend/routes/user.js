const express = require('express')


// controller functions
const { loginUser, signupUser } = require('../controllers/userController') // import the handler functions


const router = express.Router()
/*
router.get('/', (req,res) => {
    res.json({mssg: "GET all users"})
})*/



// login route
router.post('/login', loginUser)  // send data in a request
// loginUser is the request handler function

// signup route
router.post('/signup', signupUser)

//deneme
module.exports = router