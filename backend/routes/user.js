const express = require('express')


// controller functions
<<<<<<< Updated upstream
const { loginUser, signupUser } = require('../controllers/userController') // import the handler functions
=======
const { loginUser, signupUser, getUsers, updateUser, addToEventsList, getUser } = require('../controllers/userController') // import the handler functions
>>>>>>> Stashed changes


const router = express.Router()
/*
router.get('/', (req,res) => {
    res.json({mssg: "GET all users"})
})*/



<<<<<<< Updated upstream
=======
//get user route
//update user
router.patch('/update', updateUser)
>>>>>>> Stashed changes
// login route
router.post('/login', loginUser)  // send data in a request
// loginUser is the request handler function

// signup route
router.post('/signup', signupUser)
<<<<<<< Updated upstream

=======
router.patch('/addtoeventslist', addToEventsList)
router.get('/getusers', getUsers)
router.get('/getusers/:id', getUser)
>>>>>>> Stashed changes
//student page
//router.get('/getuserevents', getUserEvents)

module.exports = router