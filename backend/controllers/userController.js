const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
console.log(User, ' in userController');
const mongoose = require('mongoose');
const Event= require('../models/eventsModel')


const createToken = (_id) => {
  // after the tokens are created,
  //they will be used in loginUser and signupUser controller functions.
  //_id will be a part of the payload of the token.
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' }); // user stays logged in for 3 days. then the token expires.
};

const getUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such user' });
  }

  const user = await User.findById(id);

  if (!user) {
    return res.status(404).json({ error: 'No such user' });
  }

  res.status(200).json(user);
};


const getSomeUsers = async (req, res) => {
  
  //console.log("getSomeUsers called");

  const { userIds  } = req.query;
  console.log(userIds )
  if (!userIds) {
    return setError("The 'userIds' array is required.");
  }

  // Convert the userIds to an array of ObjectIds
  const objectIds = userIds.split(',').map(userId => mongoose.Types.ObjectId(userId));
  //console.log("objectIds: ",  objectIds)

  // Find the user documents with the given userIds
  const users = await User.find({ _id: { $in: objectIds } });

  res.status(200).json(users);
};

const searchUserByEmail = async (req, res) => {
  //console.log("girildi!")
  //console.log("req: ", req.params)
  try {
    // Get the email to search for from the request parameters
    const { email } = req.params;
    console.log(email)

    // Search the database for an object with the matching email
    const foundObject = await User.findOne({ email });

    // If a match is found, send the object as a response
    if (foundObject) {
      return res.send(foundObject);
    }

    // If no match is found, send a 404 response
    return res.sendStatus(404);
  } catch (error) {
    // If an error occurs, send a 500 response
    return res.sendStatus(500);
  }
};

const getStudentUsers= async (req,res) => {
  const {email}= req.params
  
  const teacher= await User.findOne({email:email})
  const studentEmails= teacher.students;
  const studentList=[];
  for(const email of studentEmails){
    const student= await User.findOne({email:email})
    if(student){
      studentList.push(student);
    }
  }
  /*
  studentEmails.forEach( async (email)=>{
    
    const student= await User.findOne({email:email})
    console.log(student);
    studentList.push(student);
  })*/
  console.log(studentList);
  res.status(200).send(studentList)
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

const getEventsList = async (req, res) => {
  const { email } = req.params;
  

  // Validate id field
  if (!email) {
    return res.status(400).send({ error: 'Missing required field: id' });
  }

  // Find user by id
  try {
    const user = await User.findOne({ email: email });
    console.log(user)
    if (!user) {
      return res.status(404).send({ error: 'User not found' });
    }

    res.status(200).send(user.eventsList);
  } catch (error) {
    res.status(500).send({ error: 'Error fetching events list' });
  }
};


const updateUser = async (req, res) => {
  console.log('ok');
  const { studentEmail, teacherEmail } = req.body;
  console.log('in updateUser ', studentEmail, teacherEmail);
  const query1 = { email: teacherEmail };
  try {
    console.log(User);
    const user = await User.findOne(query1);
    console.log('user: ', user);
    const studentIndex = user.students.findIndex(
      (item) => item === studentEmail
    );
    console.log('studentIndex: ', studentIndex);
    let message;
    if (studentIndex !== -1) {
      message = 'Student has already been added to your students list!';
      res.status(200).json({ message: message, user: user });
    } else {
      console.log('new error gecildi');
      // create a query object to search for the user by email
      const query2 = { email: studentEmail };
      // retrieve the user object by searching for the email field
      const student = await User.findOne(query2);
      const newvalues = { $push: { students: student.email } };
      console.log('new values: ', newvalues);
      const updatedUser = await User.findOneAndUpdate(query1, newvalues, {
        new: true,
      }); // search for the user by email
      console.log('update user: ', updateUser);
      message = 'Student added to your students list!';
      res.status(200).json({ message: message, user: updatedUser });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateSkillLevel = async (req, res) => {
  console.log("updateSkillLevel was called!")
  const {level, email} = req.body
  console.log("level: ", level)
  console.log("email: ", email)
  

}

const addToEventsList = async (req, res) => {
  //console.log('addToEventsArray was called!');
  const { event, email } = req.body;
  //console.log(req.body.event.eventtitle);
  //console.log('event and email in addToEventsArray: ', event, email);
  try {
    // search for a user with the specified email and an eventsList field that contains an element with a matching eventtitle field
    const query = { email };
    const user = await User.findOne(query);
    console.log('user: ', user);
    // check if the event object is already in the eventsList array
    /*const newvalues = {$push:{eventsList: event}}
    console.log("new values: ", newvalues)*/
    const eventIndex = user.eventsList.findIndex(
      (item) => item.eventtitle === event.eventtitle
    );
    console.log('eventIndex: ', eventIndex);
    let message;
    if (eventIndex !== -1) {
      message = 'Event has already been added to your events list!';
      res.status(200).json({ message: message, user: user });
    } else {
      console.log('new error gecildi');
      // add the event object to the eventsList array of the user
      const newvalues = { $push: { eventsList: event } };
      console.log('new values: ', newvalues);
      const updatedUser = await User.findOneAndUpdate(query, newvalues, {
        new: true,
      }); // search for the user by email
      console.log('update user: ', updateUser);
      message = 'Event added to your events list!';
      res.status(200).json({ message: message, user: updatedUser });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const loginUser = async (req, res) => {
  // async function bc it will communicate with the db
  const { email, password } = req.body;
  console.log('loginuser girildi');
  try {
    const user = await User.login(email, password);
    // create a token

    const token = createToken(user._id);
    const role = user.role;
    const userName = user.userName;
    res.status(200).json({ email, userName, token, role });
  } catch (error) {
    if (error.message != 'role is not defined') {
      res.status(400).json({ error: error.message });
    }
  }
};

// signup a user
const signupUser = async (req, res) => {
  const { email, userName, password, role, assignedemail } = req.body; // pull the email and password and role of the user from req. and name them email and password
  console.log('signup user girildi');
  console.log(assignedemail);
  try {
    console.log('role:', role);
    console.log('debug1');
    const user = await User.signup(
      email,
      userName,
      password,
      role,
      assignedemail
    );
    // create a token
    const token = createToken(user._id);
    console.log(user._id);
    res.status(200).json({ email, token, userName, role });
  } catch (error) {
    // error is coming from userModel.js. or if it is related to creating db, mongodb can also give an error message.
    res.status(400).json({ error: error.message });
  }

}


module.exports = { signupUser, loginUser, searchUserByEmail, getEventsList, updateSkillLevel, getStudentUsers, updateUser,  addToEventsList, getUser, getSomeUsers}