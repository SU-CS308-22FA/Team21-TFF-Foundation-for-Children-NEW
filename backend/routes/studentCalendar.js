const express = require('express')
const { addStudentCalendar, getStudentCalendar
} = require('../controllers/studentcalendarController') // import the handler functions

const router = express.Router()

router.post('/addStudentCalendar', addStudentCalendar)

router.get('/getStudentCalendar/:email2', getStudentCalendar)

module.exports = router