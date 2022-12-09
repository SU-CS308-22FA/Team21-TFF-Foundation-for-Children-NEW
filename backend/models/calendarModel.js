const mongoose= require('mongoose')

const Schema= mongoose.Schema

const calendarSchema= new Schema(
    {
        training:{
            type:String,
            require:true
        },
        day:{
            type:String,
            require:true
        },
        email:{
            type:String,
            require:true
        }
    }
    , { timestamps: true });

module.exports = mongoose.model('Calendar', calendarSchema)