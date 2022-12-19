const Calendar= require('../models/calendarModel')

const User= require('../models/userModel')

const mongoose= require('mongoose')



// it requires teacher email in the url as a parameter
// it finds the one teacher through that email in the url
// then search the calendar database using assigned email of the found teacher
// at last return the calendar data(s) of the student
const getCalendar = async (req, res) => {
   const {teacheremail}= req.params

   const user= await User.findOne({email:teacheremail})

   const calendars= await Calendar.find({studentemail:user.assignedemail})
   res.status(200).json(calendars)
}

// it requires teacher email, datenumber, trainingname in the request body
// find the teacher object through teacher email
// find the assigned student email through teacher objects 'assignedemail' field
// create a calendar object with the datenumber, traningname and assignedstudent's email which is studentemail
const createCalendar= async (req, res) => {
   
    
    const { trainingname, datenumber, teacheremail }= req.body
    console.log(teacheremail)
    const teacher= await User.findOne( { email:teacheremail } )

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