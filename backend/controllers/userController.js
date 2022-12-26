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

const getStudentUsers= async (req,res) => {
  console.log("get Users girildi!")
  const users= await User.find({role:"Student"})
  res.status(200).json(users)
}

/*
const getUserEvents = async (req,res) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such user'})
    }
    const user = await User.findById(id)
    if (!user) {
    return res.status(404).json({error: 'No such user'})
    }
    const events = await User.eventsList.forEach(element => {
      element.getStuEvent(element.id);
    });
    res.status(200).json(events)
    
}
*/

/*
const teacherAssignStudentYourself = async (req,res) =>{
  console.log("called teacherAssignStudentYourself")
  const {stuEmail} = req.body
  console.log("stuEmail in called teacherAssignStudentYourself: ", stuEmail)

}
*/

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
  const {event, email} = req.body
  console.log(req.body.event.eventtitle) 
  console.log("event and email in addToEventsArray: ", event, email)
  const query= { email:req.body.email  }
  try {
    const exists = await User.findOne({ eventsList: { $elemMatch: { eventtitle: req.body.event.eventtitle } } });
    if (exists) {
      throw new Error('Event has already been added to your events list!')
    }
    const newvalues = {$push:{eventsList: req.body.event}}
    console.log("new values: ", newvalues)
    const user = await User.findOneAndUpdate(query, newvalues, { new: true });
    res.status(200).json(user)

  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

const loginUser = async (req, res) => { // async function bc it will communicate with the db
  const {email, password} = req.body
  console.log("loginuser girildi")
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
  const {email, userName, password, role, assignedemail} = req.body // pull the email and password and role of the user from req. and name them email and password
  console.log("signup user girildi")
  console.log(assignedemail)
  try {
    console.log("role:", role )
    console.log("debug1")
    const user = await User.signup(email, userName, password, role, assignedemail)
    console.log("debug1")
    // create a token
    const token = createToken(user._id)
    console.log(user._id)
    res.status(200).json({email, token})
  } catch (error) { // error is coming from userModel.js. or if it is related to creating db, mongodb can also give an error message.
      res.status(400).json({error: error.message})
    
  }
}


module.exports = { signupUser, loginUser, getStudentUsers, updateUser,  addToEventsList, getUser}