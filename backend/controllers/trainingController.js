const Training = require("../models/trainingModel");
const mongoose = require("mongoose");



//controller functions

//create a skill object
const addTraining = async (req, res) => {
    const {trainingName, date, skills} = req.body 
    if(!date) {
        return res.status(400).json({ error: 'Please give the date of the training'})
    }
    try {
        const training = await Training.create({trainingName, date, skills})
        res.status(200).json(training)
      } catch (error) {
        res.status(400).json({error: error.message})
      }
  }


// get all the skills. put the latest to the top
const getTrainings = async (req, res) => {
  const trainings = await Training.find({}).sort({createdAt: -1})

  res.status(200).json(trainings)

}

// get a training by id 
const getTraining = async (req, res) => {
  console.log("get training called!")
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such training" });
  }

  const training = await Training.findById(id);

  if (!training) {
      return res.status(404).json({ error: "No such training" });
  }

  res.status(200).json(training);
};


  
  
  
  
  

/*



// delete a skill by id
const deleteTraining = async (req, res) => {
    const { id } = req.params
    console.log("id:" , id)

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such training" });
  }

  const training = await Training.findOneAndDelete({ _id: id });

  if (!training) {
    return res.status(400).json({ error: "No such training" });
  }

  res.status(200).json(training);
};

  

// update a skill by its id. 
//This function will be used when the level of the student is measured and should be released by the teacher. 
const updateTraining = async (req, res) => {
    const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such training" });
  }

  const training = await Training.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!training) {
    return res.status(400).json({ error: "No such training" });
  }

  res.status(200).json(training);
};
*/


module.exports = {
    addTraining,
    getTrainings,
    getTraining
/*
    deleteTraining,
    updateTraining*/
 
}

