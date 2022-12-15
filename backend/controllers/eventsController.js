const Event = require("../models/eventsModel");
const mongoose = require("mongoose");



// get a single event
const getStuEvent = async (req, res) => {
    const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such event" });
  }

  const event = await Event.findById(id);

  if (!event) {
    return res.status(404).json({ error: "No such event" });
  }

  res.status(200).json(event);
};

/*
// create a new event and add the document to db
const createEvent = async (req, res) => {
  const { title, quota, location, body } = req.body;
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
*/

// delete an event
const deleteStuEvent = async (req, res) => {
    const { id } = req.params
    console.log("id:" , id)

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such event" });
  }

  const event = await Event.findOneAndDelete({ _id: id });

  if (!event) {
    return res.status(400).json({ error: "No such event" });
  }

  res.status(200).json(event);
};

// update an event
const updateStuEvent = async (req, res) => {
    const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such event" });
  }

  const event = await Event.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!event) {
    return res.status(400).json({ error: "No such event" });
  }

  res.status(200).json(event);
};

const getStuEvents = async (req, res) => {
  const events = await Event.find({}).sort({createdAt: -1})

  res.status(200).json(events)

}

const addStuEvent = async (req, res) => {
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
  getStuEvents,
  addStuEvent,
  deleteStuEvent,
  updateStuEvent
}
