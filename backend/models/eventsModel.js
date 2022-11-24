const mongoose = require('mongoose')  

const Schema = mongoose.Schema

const eventSchema = new Schema(
  {
    title: {   // email is the primary key
        type: String,
        required: true,
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
    }
    }, { timestamps: true });

eventSchema.statics.addevent = async function(eventtitle,eventlocation,eventbody,eventquota) {  // create a function name with signup 
// bc we are using this keyword, we cannot use arrow func. we need to use asyncrh. regular function.

    // validation
    if (!eventtitle || !eventlocation || !eventbody) {
    throw Error('Title, city, description and start date should be filled')  // thrown errors will be catched in eventController.js
    }

    const exists = await this.findOne({ title }) // check if a email is given by the user.
//because we created a static method, instead of using the model nanme(User), use this. it refers to the model

    if (exists) {
    throw Error('Use another title')
    }

    const event = await this.create({ eventtitle,eventlocation,eventbody,eventquota }) // swap password and hashed password

    return event
}

module.exports = mongoose.model('Event', eventSchema)