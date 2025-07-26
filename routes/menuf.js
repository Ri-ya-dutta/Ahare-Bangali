// routes/menuf.js
const express = require("express");
const router = express.Router();

// GET all menu items
router.get("/all", async (req, res) => {
  try {
    const menuItems = await req.db.collection("menuItems").find().toArray();
    res.send(menuItems);
  } catch (err) {
    console.error("Error fetching menu:", err);
    res.status(500).send({ success: false, error: "Failed to fetch menu items" });
  }
});

// POST new menu item (optional for admin panel)
router.post("/add", async (req, res) => {
  try {
    const result = await req.db.collection("menuItems").insertOne(req.body);
    res.send({ success: true, data: result });
  } catch (err) {
    console.error("Error adding menu item:", err);
    res.status(500).send({ success: false, error: "Failed to add menu item" });
  }
});

module.exports = router;
