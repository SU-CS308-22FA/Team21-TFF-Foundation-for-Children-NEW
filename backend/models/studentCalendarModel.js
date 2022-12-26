const mongoose = require('mongoose');
const Event = require('./eventsModel');  // require the Event model
const User = require('./userModel');  // require the User model
const Training = require('./trainingModel');
const Schema = mongoose.Schema;

const mongoose = require('mongoose');

const studentCalendarSchema = new mongoose.Schema({
  userId: {       // ID of the student to whom the calendar event belongs
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdBy: {    // ID of the user who created the event (could be either a teacher or a student)
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  type: {         // field to distinguish between regular events, training events, and other types of events
    type: String,
    required: true
  },
  eventId: {      // ID of the Event document
    type: Schema.Types.ObjectId,
    ref: 'Event'
  },
  trainingId: {   // ID of the Training document
    type: Schema.Types.ObjectId,
    ref: 'Training'
  }
});

module.exports = mongoose.model('Stucalendar', studentCalendarSchema);