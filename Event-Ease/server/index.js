// server/index.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import authRoutes from "./routes/auth.js";
import eventRoutes from "./routes/events.js";
import bookingRoutes from "./routes/bookings.js";
import User from "./models/User.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Debug route - remove after testing
app.get("/api/debug/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.post("/api/debug/login-test", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(401).json({ msg: "User not found", email });
  }

  const isMatch = await user.comparePassword(password);
  res.json({
    email,
    passwordProvided: password,
    passwordHash: user.password,
    isMatch,
    msg: isMatch ? "Password correct!" : "Password incorrect!",
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/bookings", bookingRoutes);

app.get("/", (req, res) => {
  res.send("EventEase API is running");
});

mongoose
  .connect(process.env.MONGO_URI, { dbName: "eventEase" })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
