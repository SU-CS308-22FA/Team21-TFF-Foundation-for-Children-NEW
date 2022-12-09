const Event = require('../models/eventsModel')
/*
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

*/

const { MongoClient } = require('mongodb');


const getStuEvent = (req, res) => {
  MongoClient.connect(
    process.env.MONGO_URI,
    { useUnifiedTopology: true },
    (error, client) => {
      if (error) {
        return console.log('Could not connect to database');
      }
      const db = client.db('test');
      db.collection('events')
        .find({})
        .toArray((error, result) => {
          if (error) {
            return console.log('Could not get connected to the events collection');
          }
          res.json(result);
        });
    }
  );
};

const addStuEvent = async (req, res) => {
  const {eventtitle,eventlocation,eventbody,eventquota} = req.body 
  console.log("titleli controller: ", eventtitle, eventlocation,eventbody,eventquota)
  console.log("titlesiz controller: ", eventlocation,eventbody,eventquota)
  console.log("controller body:", req.body)

  try {
    const event = await Event.addevent({eventtitle,eventlocation,eventbody,eventquota}) 
    res.status(200).json({eventtitle})
  } catch (error) { // error is coming from userModel.js. or if it is related to creating db, mongodb can also give an error message.
    if (error.message){
      res.status(400).json({error: error.message})
    }
  }
}




module.exports = {addStuEvent,getStuEvent}