const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

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



const updateUser= async (req,res) =>{
 
  const { studentEmail, teacherEmail } = req.body
  
  const query1= { email:teacherEmail };
  try{
   
    const user = await User.findOne(query1);
   
    const studentIndex = user.students.findIndex((item) => item === studentEmail);
    
    let message;
    if (studentIndex !== -1) {
      message = 'Student has already been added to your students list!';
      res.status(200).json({message: message, user: user});
    }
    else{
    
      // create a query object to search for the user by email
      const query2 = { email:studentEmail };
      // retrieve the user object by searching for the email field
      const student = await User.findOne(query2);
      const newvalues = {$push:{students: student.email}}
      
      const updatedUser = await User.findOneAndUpdate(query1, newvalues, { new: true });  // search for the user by email
      
      message = 'Student added to your students list!';
      res.status(200).json({message: message, user: updatedUser});

    }
  }catch (error) {
    res.status(400).json({error: error.message})
  }

}

const addToEventsList = async (req, res) => {
  
  const {event, email} = req.body
  
  try {
    // search for a user with the specified email and an eventsList field that contains an element with a matching eventtitle field
    const query = { email };
    const user = await User.findOne(query);
   
    // check if the event object is already in the eventsList array
    /*const newvalues = {$push:{eventsList: event}}
    console.log("new values: ", newvalues)*/
    const eventIndex = user.eventsList.findIndex((item) => item.eventtitle === event.eventtitle);
    
    let message;
    if (eventIndex !== -1) {
      message = 'Event has already been added to your events list!';
      res.status(200).json({message: message, user: user});
    }
    else{
   
      // add the event object to the eventsList array of the user
      const newvalues = {$push:{eventsList: event}}
      
      const updatedUser = await User.findOneAndUpdate(query, newvalues, { new: true });  // search for the user by email
      
      message = 'Event added to your events list!';
      res.status(200).json({message: message, user: updatedUser});

    }
    

  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

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
  const {email, userName, password, role, assignedemail} = req.body // pull the email and password and role of the user from req. and name them email and password
  
  try {
    
    const user = await User.signup(email, userName, password, role, assignedemail)
    
    // create a token
    const token = createToken(user._id)
   
    res.status(200).json({email, token})
  } catch (error) { // error is coming from userModel.js. or if it is related to creating db, mongodb can also give an error message.
      res.status(400).json({error: error.message})
    
  }
}


module.exports = { signupUser, loginUser, getStudentUsers, updateUser,  addToEventsList, getUser}