import express from "express";

const router = express.Router();

// temporary mock data
const events = [
  { _id: "1", title: "React Workshop", description: "Learn React", date: "25-Nov-2025" },
  { _id: "2", title: "Tech Summit", description: "Industry insights", date: "05-Dec-2025" },
];

router.get("/", (req, res) => {
  res.json(events);
});

export default router;
