const Skill = require("../models/skillModel");
const mongoose = require("mongoose");



//controller functions

//create a skill object
const addSkill = async (req, res) => {
  console.log("add skill girildi")
    const {userId, skillName, level, skillDate} = req.body 
    console.log(userId, skillName, level, skillDate)
  
    if(!skillName) {
        return res.status(400).json({ error: 'Please give the name of the skill'})
    }
    if(!userId) {
      return res.status(400).json({ error: 'Please give the student of the skill'})
    }
    if(!skillDate) {
      return res.status(400).json({ error: 'Please give the date of the skill'})
    }
    // add doc to db
    try {
      const skill = await Skill.create({userId, skillName, level, skillDate})
      res.status(200).json(skill)
    } catch (error) {
      res.status(400).json({error: error.message})
    }
  }

// get a skill by id 
const getSkill = async (req, res) => {
  console.log("get skill called!")
    const { id } = req.params
    console.log("id: ", id)

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such skill" });
    }

    const skill = await Skill.findById(id);

    if (!skill) {
        return res.status(404).json({ error: "No such skill" });
    }
    console.log("skill is: ", skill)

    res.status(200).json(skill);
};
  
// get all the skills. put the latest to the top
const getSkills = async (req, res) => {
    const skills = await Skill.find({}).sort({createdAt: -1})
  
    res.status(200).json(skills)
  
  }


// delete a skill by id
const deleteSkill = async (req, res) => {
    const { id } = req.params
    console.log("id:" , id)

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such skill" });
  }

  const skill = await Skill.findOneAndDelete({ _id: id });

  if (!skill) {
    return res.status(400).json({ error: "No such skill" });
  }

  res.status(200).json(skill);
};

  

// update a skill by its id. 
//This function will be used when the level of the student is measured and should be released by the teacher. 
const updateSkill = async (req, res) => {
  console.log("in update skill")
    const { id, level } = req.body
    const objectId = mongoose.Types.ObjectId(id);
    console.log(id, level)
    //const skillobj= await Skill.findOne({_id:objectId})
    const skill= await Skill.findOneAndUpdate({_id:objectId},{level:level})
    console.log(skill);
  res.status(200)
};


module.exports = {
    addSkill,
    getSkill,
    getSkills,
    deleteSkill,
    updateSkill
 
}
