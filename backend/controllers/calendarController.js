const Calendar= require('../models/calendarModel')

const User= require('../models/userModel')

const mongoose= require('mongoose')


// it requires teacher email in the url as a parameter
// it finds the one teacher through that email in the url
// then search the calendar database using assigned email of the found teacher
// at last return the calendar data(s) of the student

const getCalendar = async (req, res) => {
    const { id }= req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such calendar'})
    }

    const calendar= await Calendar.findById(id)

    if(!calendar){
        return res.status(404).json({error: 'No such calendar'})
    }

    res.status(200).json(calendar)
}

const createCalendar= async (req, res) => {
    console.log("creating calendar..")
    
    const { trainingname, datenumber, teacheremail }= req.body
    
   

    //console.log(specificUser.assignedEmail)
    
   
    
    
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
        
        const calendar= await Calendar.create({trainingname, datenumber})
        console.log(calendar.trainingname, calendar.datenumber)
       
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