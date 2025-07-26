// db_task02.js
const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbName = "db3";

async function connectDB() {
  await client.connect();
  console.log("Connected to MongoDB");
  return client.db(dbName);
}

module.exports = connectDB;
