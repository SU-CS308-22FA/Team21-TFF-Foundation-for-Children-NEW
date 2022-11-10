require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/user.js')  // import the user router

// create an express app
const app = express()

/*// middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
  })
*/
  
// middleware
//app.use(express.json()) // gets the request

// routes
app.use('/api/user', userRoutes) // register the router (routes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests only in case of the connection to the db
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })

/*
app.get('/', (req,res) => {
    res.json({mssg: "Welcome"})
})
*/
