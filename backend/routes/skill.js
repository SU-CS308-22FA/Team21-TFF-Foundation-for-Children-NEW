const express = require('express')
const { addSkill, getSkill, getSkills, deleteSkill, updateSkill
} = require('../controllers/skillController') // import the handler functions
const router = express.Router()

router.post('/addSkill', addSkill)
router.get('/getSkill/:id', getSkill)
router.delete('/deleteSkill/:id', deleteSkill)
router.patch('/getSkill/:id', updateSkill)
router.get('/getSkills', getSkills)

module.exports = router