// file for creating a schema and a model for data.
// mongoose will create the models and schemas
//for our data in the mongodb, because mongodb alone is schema-less.
const mongoose = require('mongoose')  
const bcryptjs = require('bcryptjs')
const validator = require('validator')
const Schema = mongoose.Schema
// deneme

const eventSchema = new Schema(
  {
    eventtitle: {   // email is the primary key
        type: String,
        required: true
        
    },
    eventlocation: {
        type: String,
        required: true
    },
    eventbody: {
        type: String,
        required: true
    },
    eventquota: {  // different people can have the same password
        type: String,
        required: true
    }
}, { timestamps: true });

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true
    },
    userName: {
      //  idk what primary key is, but I think it's the same as unique key
      type: String,
      required: true
    },
    password: {  // different people can have the same password
      type: String,
      required: true
    },
    role: {
      type: String,
      default: "Student",
      required: true
    },
    assignedemail:{
      type: String,
      required:true
    },
    students: [
      {
        type: Schema.Types.ObjectId,
        ref: "User"
      }
    ],
    teachers: [
      {
        type: Schema.Types.ObjectId,
        ref: "User"
      }
    ],
    eventsList: [eventSchema],
  },
  { timestamps: true }
);
// make a model based on the schema
// schema defines the stucture of a type of document inside our db.
// model applies that schema to a particular model

// static signup method
/*
A static method (or static function) is a method defined as a member of an object 
but is accessible directly from an API object's constructor, 
rather than from an object instance created via the constructor.
*/
userSchema.statics.signup = async function(email, userName, password, role, assignedemail) {  // create a function name with signup 
  // bc we are using this keyword, we cannot use arrow func. we need to use asyncrh. regular function.
    // validation
    if (!email || !password) {
      throw Error('All fields must be filled')  // thrown errors will be catched in userController.js
    }
    if (!validator.isEmail(email)) {
      throw Error('Email not valid')
    }
    if (!validator.isStrongPassword(password)) {
      throw Error('Password not strong enough')
    }
  
    const exists = await this.findOne({ email }) // check if a email is given by the user.
  //because we created a static method, instead of using the model nanme(User), use this. it refers to the model
  
    if (exists) {
      throw Error('Email already in use')
    }
  
    const salt = await bcryptjs.genSalt(10) //in order to add additional characters to the passwords for security purposes.
    const hash = await bcryptjs.hash(password, salt)
  
    const user = await this.create({ email, userName, password: hash, role,assignedemail }) // swap password and hashed password
  
    return user
  }
  
// static login method
userSchema.statics.login = async function(email, password) {

  if (!email || !password) { // password is the plain text password
    throw Error('All fields must be filled')
  }

  const user = await this.findOne({ email })
  if (!user) {
    throw Error('Incorrect email')
  }

  const match = await bcryptjs.compare(password, user.password) // user.password is the hashed password
  if (!match) {
    throw Error('Incorrect password')
  }

  return user
}



module.exports = mongoose.model('User', userSchema)
// User model was exported. I will use that to interact with the users collection.
