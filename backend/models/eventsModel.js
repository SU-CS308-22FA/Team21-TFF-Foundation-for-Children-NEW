const mongoose = require('mongoose')  

const Schema = mongoose.Schema

const eventsSchema = new Schema(
  {
    title: {   // email is the primary key
        type: String,
        required: true,
        unique: true
    },
    quota: {  // different people can have the same password
        type: String
    },
    location: {
        type: String,
        required: true
    },
    body: {

        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }


    }, { timestamps: true });




module.exports = mongoose.model('Event', eventsSchema)