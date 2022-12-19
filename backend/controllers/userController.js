const User = require('../models/userModel')

const jwt = require('jsonwebtoken')


const createToken = (_id) => { // after the tokens are created, 
//they will be used in loginUser and signupUser controller functions.
//_id will be a part of the payload of the token.
  return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' }) // user stays logged in for 3 days. then the token expires.
}


const getStudents= async (req,res) => {
  console.log("get Users girildi!")
  const users= await User.find({role:"Student"})
  res.status(200).json(users)
}

const updateUser= async (req,res) =>{
  console.log("ok")
  const { studentEmail, teacheremail } =req.body
  console.log("in updateUser ", studentEmail, teacheremail)
  const query= { email:teacheremail }
  const newvalues= { $set:{assignedemail:studentEmail}}

  await User.findOneAndUpdate(query, newvalues)
  const user= await User.find(query)
  res.status(200).json(user)

}

const loginUser = async (req, res) => { // async function bc it will communicate with the db
  const {email, password} = req.body
  console.log("loginuser girildi")
  try {
    const user = await User.login(email, password)
    // create a token

    const token = createToken(user._id)
    const userrole = user.role
    res.status(200).json({email, token, userrole})
  } catch (error) {
    if (error.message != "role is not defined"){
      res.status(400).json({error: error.message})
    }
  }
}

// signup a user
const signupUser = async (req, res) => {
  const {email, password, role, assignedemail} = req.body // pull the email and password and role of the user from req. and name them email and password
  console.log("signup user girildi")
  console.log(assignedemail)
  try {
    console.log("role:", role )
    console.log("debug1")
    const user = await User.signup(email, password, role, assignedemail)
    console.log("debug1")
    // create a token
    const token = createToken(user._id)
    console.log(user._id)
    res.status(200).json({email, token})
  } catch (error) { // error is coming from userModel.js. or if it is related to creating db, mongodb can also give an error message.
    if (error.message != "role is not defined"){
      res.status(400).json({error: error.message})
    }
  }
}


module.exports = { signupUser, loginUser, getStudents, updateUser }