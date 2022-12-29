const mongoose= require('mongoose')
const Skill = require('./skillModel');  // require the Event model
const Schema= mongoose.Schema

const trainingSchema= new Schema(
    {
        trainingName:{
            type:String
        },
        date : {       // time of the training
            type: Date,
            required: true
        },
        skills: [{
            type:String
        }]

    }, { timestamps: true });

module.exports = mongoose.model('Training', trainingSchema);
  

