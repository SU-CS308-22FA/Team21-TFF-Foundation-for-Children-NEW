require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user'); // import the user router
const eventRoutes = require('./routes/event');
const announcementRoutes = require('./routes/announcement');
const evaluationRoutes = require('./routes/evaluation');
const eventRoutes = require('./routes/event')
const calendarRoutes= require('./routes/calendar')
// create an express app
const app = express();

// middleware
app.use(express.json()); // gets the request
var cors = require('cors');
const PORT = process.env.PORT || 5000;
app.use(cors());

app.get('/products/:id', function (req, res, next) {
  res.json({ msg: 'This is CORS-enabled for all origins!' });
});

app.listen(5000, function () {
  console.log('CORS-enabled web server listening on port 5000');
});
// routes
app.use('/api/user', userRoutes); // register the router (routes)
app.use('/api/event', eventRoutes);
app.use('/api/announcement', announcementRoutes);
app.use('/api/evaluation', evaluationRoutes);
app.use('/api/calendar', calendarRoutes)
app.use('/api/user', userRoutes) // register the router (routes)
app.use('/api/event', eventRoutes)

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests only in case of the connection to the db
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
