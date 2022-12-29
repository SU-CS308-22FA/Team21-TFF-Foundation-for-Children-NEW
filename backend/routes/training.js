const express = require('express')
const {  addTraining, getTrainings, getTraining /*, deleteTraining, updateTraining*/ } = require('../controllers/trainingController') // import the handler functions
const router = express.Router()

router.post('/addTraining', addTraining)
router.get('/getTrainings', getTrainings)
router.get('/getTraining/:id', getTraining)

/*
router.get('/getTraining/:id', getTraining)
router.delete('/deleteTraining/:id', deleteTraining)
router.patch('/getTraining/:id', updateTraining)
*/

module.exports = router