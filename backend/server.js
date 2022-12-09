require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/user')  // import the user router
const eventRoutes = require('./routes/event')

// create an express app
const app = express()
  
// middleware
app.use(express.json()) // gets the request

// routes
app.use('/api/user', userRoutes) // register the router (routes)
app.use('/api/event', eventRoutes)

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

