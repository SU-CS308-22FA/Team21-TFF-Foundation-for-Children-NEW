const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
console.log(User, " in userController")
const mongoose = require('mongoose')

const createToken = (_id) => { // after the tokens are created, 
//they will be used in loginUser and signupUser controller functions.
//_id will be a part of the payload of the token.
  return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' }) // user stays logged in for 3 days. then the token expires.
}

const getUser = async (req,res) => {
  const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such user'})
    }

    const user = await User.findById(id)

    if (!user) {
    return res.status(404).json({error: 'No such user'})
    }

    res.status(200).json(user)
}

<<<<<<< Updated upstream
=======
const getUsers= async (req,res) => {
  const users = await User.find({}).sort({createdAt: -1})

  res.status(200).json(users)

}

const getUserEvents = async (req,res) => {
  /*const {email} = req.body
  const
  console.log("getUserEvents called")
  const query= { eventsList  }
  const events = await User.eventsList.find({}).sort({createdAt: -1})

  res.status(200).json(events)*/
  
}

const updateUser= async (req,res) =>{
  console.log("ok")
  const { studentEmail, teacheremail } =req.body
  console.log("in updateUser ", studentEmail, teacheremail)
  const query= { email:teacheremail }
  const newvalues= { $set:{assignedemail:studentEmail}}

  const user= await User.findOneAndUpdate(query, newvalues)
  res.status(200).json(user)

}

const addToEventsList = async (req, res) => {
  console.log("addToEventsArray was called!")
  const {event, email} = req.body 
  console.log("event and email in addToEventsArray: ", event, email)
  const query= { email:req.body.email  }
  //const {eventitle} = event.eventitle
  //const exists = await User.eventsList.findOne({ event.eventtitle: req.body.event.eventtitle })
  try {
    /*if (exists) {
      throw Error('Events has already been added to your events!')
    }*/
    const newvalues = {$push:{eventsList: event}}
    const user= await User.findOneAndUpdate(query, newvalues)
    res.status(200).json(user)

  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

>>>>>>> Stashed changes
const loginUser = async (req, res) => { // async function bc it will communicate with the db
  const {email, password} = req.body

  try {
    const user = await User.login(email, password)
    // create a token

    const token = createToken(user._id)
    const role = user.role
    res.status(200).json({email, token, role})
  } catch (error) {
    if (error.message != "role is not defined"){
      res.status(400).json({error: error.message})
    }
  }
}

// signup a user
const signupUser = async (req, res) => {
  const {email, password, role} = req.body // pull the email and password and role of the user from req. and name them email and password

  try {
    console.log("role:", role )
    const user = await User.signup(email, password, role)
    console.log("user in signup function ", user)
    // create a token
    console.log("before creating token")
    const token = createToken(user._id)
    console.log("after creating token")
    console.log("check, ",token, " is token")
    res.status(200).json({email, token})
  } catch (error) { // error is coming from userModel.js. or if it is related to creating db, mongodb can also give an error message.
      res.status(400).json({error: error.message})
    
  }
}


<<<<<<< Updated upstream
module.exports = { signupUser, loginUser }
=======
module.exports = { signupUser, loginUser, getUsers, updateUser,  addToEventsList, getUser}
>>>>>>> Stashed changes
