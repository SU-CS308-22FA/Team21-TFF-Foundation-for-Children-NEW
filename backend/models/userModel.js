// file for creating a schema and a model for data.
// mongoose will create the models and schemas 
//for our data in the mongodb, because mongodb alone is schema-less.
const mongoose = require('mongoose')  
//const bcrypt = require('bcrypt')
//const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
  email: {   // email is the primary key
    type: String,
    required: true,
    unique: true
  },
  password: {  // different people can have the same password
    type: String,
    required: true
  }
})
/*
// make a model based on the schema
// schema defines the stucture of a type of document inside our db.
// model applies that schema to a particular model

// static signup method
userSchema.statics.signup = async function(email, password) {  // create a function name with signup 

  // validation
  if (!email || !password) {
    throw Error('All fields must be filled')
  }
  if (!validator.isEmail(email)) {
    throw Error('Email not valid')
  }
  if (!validator.isStrongPassword(password)) {
    throw Error('Password not strong enough')
  }

  const exists = await this.findOne({ email })

  if (exists) {
    throw Error('Email already in use')
  }

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)

  const user = await this.create({ email, password: hash })

  return user
}

// static login method
userSchema.statics.login = async function(email, password) {

  if (!email || !password) {
    throw Error('All fields must be filled')
  }

  const user = await this.findOne({ email })
  if (!user) {
    throw Error('Incorrect email')
  }

  const match = await bcrypt.compare(password, user.password)
  if (!match) {
    throw Error('Incorrect password')
  }

  return user
}

*/

module.exports = mongoose.model('User', userSchema)
// User model was exported. I will use that to interact with the users collection.