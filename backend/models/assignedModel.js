const mongoose = require('mongoose')  
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    email: {   // email is the primary key
      type: String,
      required: true,
      unique: true
    },
    password: {  // different people can have the same password
      type: String,
      required: true
    },
    role: {
      type: String,
      default: "Student",
      required: true,
    },
  },
  { timestamps: true }
);
