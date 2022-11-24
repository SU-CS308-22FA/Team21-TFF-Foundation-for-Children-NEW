require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user"); // import the user router
const eventRoutes = require("./routes/event");
const announcementRoutes = require("./routes/announcement")

// create an express app
const app = express();

// middleware
app.use(express.json()); // gets the request

// routes
app.use("/api/user", userRoutes); // register the router (routes)
app.use("/api/event", eventRoutes);
app.use("/api/announcement", announcementRoutes)
// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests only in case of the connection to the db
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });

// import mongodb and use destructuring to get the MongoClient function
const { MongoClient } = require("mongodb");
//the connection URL and the database that we intend to connect to
const connectionURL =
  "mongodb+srv://Tunahan:Tunahan291@users.qk7pe2r.mongodb.net/?retryWrites=true&w=majority";
const databaseName = "test";
//using the connect function on the MongoClient to connect to the MongoDB server
MongoClient.connect(
  connectionURL,
  { useUnifiedTopology: true },
  (error, client) => {
    //check if connection was established
    if (error) {
      return console.log("Could not connect to database");
    }
    //access the user-manager database
    const db = client.db(databaseName);
    //insert one user into the database
    db.collection("notes").insertOne(
      {
        title: "J<<<<<ohn Do>>>>>e",
        content: "hebele",
      },
      (error, result) => {
        if (error) {
          return console.log("Could not create user");
        }
        console.log(result.ops);
      }
    );
  }
);