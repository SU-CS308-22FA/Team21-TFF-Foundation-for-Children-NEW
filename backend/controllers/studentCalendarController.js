const studentcalendarSchema = require("../models/studentcalendarModel");
const mongoose = require("mongoose");
const userSchema= require("../models/userModel")


//controller functions

// get a students calendars
const getStudentCalendar= async (req, res)=> {
  
  const {email2}= req.params
 
  const studentId= await userSchema.findOne({email:email2})

  
  const calendars= await studentcalendarSchema.find({userId:studentId._id})

  res.status(200).json(calendars)

}

const addStudentCalendar = async (req,res) => {
 
  // Create a new studentCalendar object
  const { userId, type, eventId, trainingId, eventDate, trainingDate, skills } = req.body 
  
  const calendar = {
    userId,
    type
  };

  // Set the eventId or trainingId depending on the type
  if (type === 'event') {
    calendar.eventId = eventId;
    calendar.eventDate = eventDate;
  } else if (type === 'training') {
    calendar.trainingId = trainingId;
    calendar.trainingDate = trainingDate;
    calendar.skills = skills;
  }

  // Use the .create() method to save the studentCalendar object to the database
  try {
    const studentcalendar = await studentcalendarSchema.create(calendar)
   
    res.status(200).json(studentcalendar)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
};





module.exports = {
    addStudentCalendar,
    getStudentCalendar
 
}
