const Event = require("../models/eventsModel");

const express = require("express");

const {
  getEvents,
  getEvent,
  createEvent,
  deleteEvent,
  updateEvent,
} = require("../controllers/eventsController"); // import the handler functions
//const requireAuth = require('../middleware/requireAuth')

const router = express.Router();

// require auth for all event routes
//router.use(requireAuth)

// GET all events
router.get("/", getEvents);

router.get("/add-event", (req, res) => {
  const newEvent = new Event({
    title: "Antalya Winter Camp 2023",
    quota: "400",
    location: "Rixos Premium Belek",
    body: "15-19 Ocak tarihleri arasinda, Fenerbahçe oyunculariyla gerçekleştireceğimiz eğitim kampimiza davetlisiniz. Katilim ücreti 1000 TL'dir.",
    date: "2023-15-01",
  });
  newEvent
    .save()
    .then((result) => {
      res.send(res);
    })
    .catch((err) => {
      console.log(err);
    });
});

//GET a single event
router.get("/:id", getEvent);

// POST a new event
router.post("/", createEvent);

// DELETE a event
router.delete("/:id", deleteEvent);

// UPDATE a event
router.patch("/:id", updateEvent);

module.exports = router;
