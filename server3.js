const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

const url = "mongodb://localhost:27017";
const dbName = "db3";  // <<== Make sure this matches your actual MongoDB database name
let db;

MongoClient.connect(url, { useUnifiedTopology: true })
  .then(client => {
    db = client.db(dbName);
    console.log("✅ Connected to MongoDB");

    // Attach DB to all requests
    app.use((req, res, next) => {
      req.db = db;
      next();
    });

    // Routes
    app.use("/menu", require("./routes/menuf"));
    app.use("/contact", require("./routes/contact"));
    app.use("/feedback", require("./routes/feedback"));

    // Serve homepage at "/"
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "task02.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
  });