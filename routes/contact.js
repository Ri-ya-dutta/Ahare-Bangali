// routes/contact.js
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const result = await req.db.collection("contactInfo").insertOne(req.body);
    res.send({ success: true, data: result });
  } catch (err) {
    console.error("Error inserting contact info:", err);
    res.status(500).send({ success: false, error: "Failed to save contact information" });
  }
});

module.exports = router;
