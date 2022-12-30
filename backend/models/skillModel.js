const mongoose= require('mongoose')
const User = require('./userModel');
const Schema= mongoose.Schema

const skillSchema= new Schema(
    {
        userId: {       
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        skillName:{
            type:String,
            require:true
        },
        level: {   // level of proficiency in the skill
            type: Number,
            min: 0
        },
        skillDate : {       // same as the time of the training
            type: Date,
            required: true
        }
    }, { timestamps: true });

module.exports = mongoose.model('Skill', skillSchema);