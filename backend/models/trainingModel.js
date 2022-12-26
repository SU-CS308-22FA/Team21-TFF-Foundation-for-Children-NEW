const mongoose= require('mongoose')
const Skill = require('./skillModel');  // require the Event model
const Schema= mongoose.Schema

const trainingSchema= new Schema(
    {
        trainingName:{
            type:String,
            require:true
        },
        start: {       // start time of the training
            type: Date,
            required: true
        },
        end: {          // end time of the training
            type: Date,
            required: true
        },
        studentEmail:{
            type:String,
            require:true
        },
        skills: [{      // array of skills
            type: skillSchema
        }]

    }, { timestamps: true });

module.exports = mongoose.model('Training', trainingSchema);
  

