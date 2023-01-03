

const Skill = require("../models/skillModel");
const mongoose = require("mongoose");
//const { default: continuousColorLegend } = require("react-vis/dist/legends/continuous-color-legend");
const ObjectId = require('mongoose').Types.ObjectId;



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
  const getSkillList = async (req, res) => {
    //let skillArray=[]
    //console.log("in getSkillList route")
    const calendars = req.query.skills;
    
    //console.log(calendars);
    
    // Split calendars string into array
    const calendarArray = calendars.split(',').map(String);
    //console.log(calendarArray)
    
    let count=5;
    
    const skillPromises = calendarArray.map(async calendar => {
      try {
        const calendarId = ObjectId(calendar);
        const skill = await Skill.findOne({ _id: calendarId });
        skill.level = count++;
        if (skill !== null) {
          return skill;
        }
      } catch (error) {
        console.error(error);
      }
    });
    
    const skillArray = await Promise.all(skillPromises);
    console.log(skillArray);
    /*
    calendarArray.forEach( async calendar  =>  {
      //const calendar= String(calendar2);
      
      try{
        const calendarId = ObjectId(calendar)
        console.log(calendarId)
        const skill = await Skill.findOne({ _id: calendarId });
        
        skill.level= count++;
        //console.log(skill)
        if(skill!==null){
          skillArray.push(skill)
          //console.log(skillArray)
        }
      } catch(error){
        console.error(error)
      }
      
    });
    console.log(skillArray)*/
    const groupedData= skillArray.reduce((groups, item)=>{
      //console.log(item.skillDate);
      const date = new Date(item.skillDate);
      const val = date.getDate();
      //console.log(val)
      groups[val]= groups[val] || [];
      groups[val].push(item);
      return groups
      
    },{})
    //console.log(groupedData);
    
    
    //console.log(skillArray)
    //console.log("first json is: ", calendarArray[0])
    res.status(200).send('OK');
  }
// get a skill by id 
const getSkill = async (req, res) => {
    const { id } = req.params
  console.log(id)
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such skill" });
    }

    const skill = await Skill.findById(id);
   
    if (!skill) {
        return res.status(404).json({ error: "No such skill" });
    }

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
    const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such skill" });
  }

  const skill = await Skill.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!skill) {
    return res.status(400).json({ error: "No such skill" });
  }

  res.status(200).json(skill);
};



module.exports = {
    addSkill,
    getSkill,
    getSkills,
    deleteSkill,
    updateSkill,
    getSkillList
 
}
