const mongoose = require('mongoose');
const Event = require('./eventsModel');  // require the Event model
const User = require('./userModel');  // require the User model
const Training = require('./trainingModel');
const Skill = require('./skillModel');
const Schema = mongoose.Schema;

const studentcalendarSchema = new mongoose.Schema({
  userId: {       // ID of the student to whom the calendar event belongs
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  type: {         // field to distinguish between regular events, training events, and other types of events
    type: String,
    required: true
  },
  eventId: {    // ID of the Event document
    type: Schema.Types.ObjectId,
    ref: 'Event'
  },
  trainingId: {   // ID of the Training document
    type: Schema.Types.ObjectId,
    ref: 'Training'
  },
  eventDate: {
    type: Date
  },
  trainingDate: {
    type: Date,
    required: true
  },
  skills: [{       
    type: Schema.Types.ObjectId,
    ref: 'Skill',
    required: true
  }]
});

module.exports = mongoose.model('Studentcalendar', studentcalendarSchema);