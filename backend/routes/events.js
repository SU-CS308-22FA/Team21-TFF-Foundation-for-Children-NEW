const express = require('express')
const {
    getEvents,
    getEvent,
    createEvent,
    deleteEvent,
    updateEvent
} = require('../controllers/eventsController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all event routes
router.use(requireAuth)

// GET all events
router.get('/', getEvents)

//GET a single event
router.get('/:id', getEvent)

// POST a new event
router.post('/', createEvent)

// DELETE a event
router.delete('/:id', deleteEvent)

// UPDATE a event
router.patch('/:id', updateEvent)


module.exports = router