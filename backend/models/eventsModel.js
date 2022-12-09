const mongoose = require('mongoose')  

const Schema = mongoose.Schema

const eventSchema = new Schema(
  {
    title: {   // email is the primary key
        type: String,
        required: true,
        unique: true
    },
    location: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    quota: {  // different people can have the same password
        type: Number
    },
    }, { timestamps: true });

eventSchema.statics.addevent = async function(eventtitle,eventlocation,eventbody,eventquota) {  // create a function name with signup 
// bc we are using this keyword, we cannot use arrow func. we need to use asyncrh. regular function.
    console.log("loc, body",eventlocation,eventbody)
    // validation
    /*if (!eventtitle || !eventlocation || !eventbody) {
    throw Error('Title, city, description and start date should be filled')  // thrown errors will be catched in eventController.js
    }*/
    console.log("events model title: ", eventtitle)
    if (!eventtitle) {
        throw Error('All required fields must be filled')  // thrown errors will be catched in userController.js
    }
    const exists = await this.findOne({ eventtitle}) // check if a email is given by the user.
//because we created a static method, instead of using the model nanme(User), use this. it refers to the model

    if (exists) {
    throw Error('Use another title')
    }
    const event = await this.create({ eventtitle,eventlocation,eventbody,eventquota })
    return event
}

module.exports = mongoose.model('Event', eventSchema)
/*

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
*/