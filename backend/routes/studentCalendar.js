const express = require('express')
const { addStudentCalendar
} = require('../controllers/studentcalendarController') // import the handler functions

const router = express.Router()

router.post('/addStudentCalendar', addStudentCalendar)

module.exports = router