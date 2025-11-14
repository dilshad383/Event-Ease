import express from "express";
import jwt from "jsonwebtoken";
import Booking from "../models/Booking.js";

const router = express.Router();

// middleware to verify JWT
function auth(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ msg: "No token" });
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    res.status(403).json({ msg: "Invalid token" });
  }
}

// book event
router.post("/", auth, async (req, res) => {
  try {
    const { eventId, seats = 1 } = req.body;

    // check if already booked
    const existing = await Booking.findOne({ user: req.user.id, event: eventId });
    if (existing) return res.status(400).json({ msg: "Already booked this event" });

    const booking = await Booking.create({
      user: req.user.id,
      event: eventId,
      seats,
    });
    res.json(booking);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Booking failed" });
  }
});

// get all bookings of current user
router.get("/", auth, async (req, res) => {
  const bookings = await Booking.find({ user: req.user.id }).populate("event");
  res.json(bookings);
});

export default router;
