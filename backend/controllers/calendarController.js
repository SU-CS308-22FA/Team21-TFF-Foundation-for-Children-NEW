const Calendar= require('../models/calendarModel')

const User= require('../models/userModel')

const mongoose= require('mongoose')




const getCalendar = async (req, res) => {
   console.log("getCalendar is called!")
   const {teacheremail}= req.params
   console.log("teacheremail is: ",teacheremail)
   const user= await User.findOne({email:teacheremail})
   console.log("assigned email is: ", user.assignedemail)
   const calendars= await Calendar.find({studentemail:user.assignedemail})
   res.status(200).json(calendars)
}

const createCalendar= async (req, res) => {
    console.log("creating calendar..")
    
    const { trainingname, datenumber, teacheremail }= req.body
    
    //console.log(specificUser.assignedEmail)
    const teacher= await User.findOne( { email:teacheremail } )
    console.log("assigned email is: ", teacher.assignedemail)
    const studentemail= teacher.assignedemail
    let emptyFields= []
    if(!trainingname){
        emptyFields.push('training')
    }

    if(!datenumber){
        emptyFields.push('day')
    }

    if(emptyFields.length!=0) { // if there was missing field
        return res.status(400).json({error:'Please fill the field(s): ', emptyFields})
    }

    try{
        
        const calendar= await Calendar.create({trainingname, datenumber, studentemail})
        
        
        res.status(200).json(calendar)
    }
    catch(error){
        res.status(400).json({ error: error.message })
    }
}

module.exports= {
    createCalendar,
    getCalendar
   
}