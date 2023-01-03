const express = require('express')
const { addSkill, getSkill, getSkills, deleteSkill, updateSkill, getSkillList
} = require('../controllers/skillController') // import the handler functions
const router = express.Router()

router.post('/addSkill', addSkill)
router.get('/getSkill/:id', getSkill)
router.get('/getSkillList', getSkillList)
router.delete('/deleteSkill/:id', deleteSkill)
router.patch('/updateSkill/:id', updateSkill)
router.get('/getSkills', getSkills)

module.exports = router