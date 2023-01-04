const express = require('express')
const { addStudentCalendar, getStudentCalendar, searchCalendarsWithTraningIdX
} = require('../controllers/studentcalendarController') // import the handler functions

const router = express.Router()

router.post('/addStudentCalendar', addStudentCalendar)

router.get('/getStudentCalendar/:email2', getStudentCalendar)
router.get('/getcalendarswithtraningId/:trainingId', searchCalendarsWithTraningIdX)

module.exports = router