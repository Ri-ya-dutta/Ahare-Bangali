// routes/feedback.js
const express = require("express");
const router = express.Router();

// POST /feedback
router.post("/", async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields." });
  }

  const feedbackEntry = {
    name,
    email,
    phone,
    message,
    submittedAt: new Date()
  };

  try {
    const result = await req.db.collection("feedback").insertOne(feedbackEntry);
    console.log("✅ Feedback inserted:", result.insertedId);
    res.status(200).json({ success: true, message: "Feedback submitted!" });
  } catch (err) {
    console.error("❌ Error inserting feedback:", err);
    res.status(500).json({ error: "Internal server error." });
  }
});

module.exports = router;
