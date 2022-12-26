const mongoose= require('mongoose')

const Schema= mongoose.Schema

const skillSchema= new Schema(
    {
        skillName:{
            type:String,
            require:true
        },
        level: {   // level of proficiency in the skill
            type: Number,
            min: 0,
            default: 0
        }
    }, { timestamps: true });

module.exports = mongoose.model('Skill', skillSchema);