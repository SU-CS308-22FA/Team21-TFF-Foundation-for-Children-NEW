const Event = require('../models/eventsModel')
const mongoose = require('mongoose')
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
  console.log("fonksiyon cagrildi!!")
  const {eventtitle,eventlocation,eventbody,eventquota} = req.body 
  console.log(eventtitle)
  let emptyFields = []

  if(!eventtitle) {
    emptyFields.push('eventtitle')
  }
  if(!eventlocation) {
    emptyFields.push('eventlocation')
  }
  if(!eventbody) {
    emptyFields.push('eventbody')
  }
  if(!eventquota) {
    emptyFields.push('eventquota')
  }

  if(emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
  }
  console.log(emptyFields)
  // add doc to db
  try {
    //const user_id = req.user._id
    const event = await Event.create({eventtitle,eventlocation,eventbody,eventquota})
    // const event = await Event.create({eventtitle,eventlocation,eventbody,eventquota, user_id})
    res.status(200).json(event)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}




module.exports = {
  getStuEvent,
  addStuEvent,
}