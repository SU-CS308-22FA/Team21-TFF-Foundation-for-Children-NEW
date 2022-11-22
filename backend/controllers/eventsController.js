const Event = require('../models/eventsModel')
const mongoose = require('mongoose')

// get all events
const getEvents = async (req, res) => {
    const events = await Event.find({}).sort({createdAt: -1})

    res.status(200).json(events)
}

// get a single event
const getEvent = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such event'})
    }

    const event = await Event.findById(id)

    if (!event) {
    return res.status(404).json({error: 'No such event'})
    }

    res.status(200).json(event)
}

// create a new event and add the document to db
const createEvent = async (req, res) => {
    const {title, quota, location, body } = req.body
    try {  
		let event = new Event();
		event.title = title;
		event.quota = quota;
        event.location = location;
        event.body = body;

		await event.save();

		res.json({
			successMessage: `${title} was created`,
			event,
		});
	} catch (err) {
		console.log(err, 'eventController.create error');
		res.status(500).json({
			errorMessage: 'Please try again later',
		});
	}
}

// delete an event
const deleteEvent = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'No such event'})
    }
  
    const event = await Event.findOneAndDelete({_id: id})
  
    if (!event) {
      return res.status(400).json({error: 'No such event'})
    }
  
    res.status(200).json(event)

}

// update an event
const updateEvent = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'No such event'})
    }
  
    const event = await Event.findOneAndUpdate({_id: id}, {
      ...req.body
    })
  
    if (!event) {
      return res.status(400).json({error: 'No such event'})
    }
  
    res.status(200).json(event)

}

module.exports = {
    getEvents,
    getEvent,
    createEvent,
    deleteEvent,
    updateEvent
}