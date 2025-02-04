const express = require("express");
const User = require("../models/user");
const { protectRoute, restrictTo } = require("../middlewares/protect");
const {
  createEvent,
  updateEvent,
  getAllEvents,
  getCategories,
  getEventById,
  deleteEvent,
  getEventsAround,
  getUpcomingEvents,

  getEventByCategory,
} = require("./../controllers/event");

const router = express.Router();

router.use(protectRoute);
router.post("/create-event", createEvent);

router.get("/all-events", getAllEvents);
router.get("/events-around", getEventsAround);
router.get("/upcoming", getUpcomingEvents);
router.get("/categories", getCategories);
router.get("/categories/:category", getEventByCategory);

router
  .route("/:eventId")
  .get(getEventById)
  .patch(updateEvent)
  .delete(deleteEvent);

module.exports = router;
