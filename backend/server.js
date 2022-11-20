require('dotenv').config()
const path= require('path')
const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/user')  // import the user router

// create an express app
const app = express()

/*// middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
  })
*/
const uri = process.env.MONGODB_URI;
// middleware
app.use(express.json()) // gets the request

// routes
app.use('/api/user', userRoutes) // register the router (routes)
app.use('/static',express.static(path.join(__dirname, "/frontend")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/frontend/build', 'index.html'));
});
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
