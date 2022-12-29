const Studentcalendar = require("../models/studentcalendarModel");
const mongoose = require("mongoose");



//controller functions

const addStudentCalendar = async (req,res) => {
  console.log("add student cal called.")
  // Create a new studentCalendar object
  const { userId, type, eventId, trainingId, eventDate, trainingDate, skills } = req.body 
  console.log("req.body: ", userId, type, eventId, trainingId, eventDate, trainingDate, skills)
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
    const studentcalendar = await Studentcalendar.create(calendar)
    console.log('Student calendar created successfully!');
    res.status(200).json(studentcalendar)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
};





module.exports = {
    addStudentCalendar
 
}
