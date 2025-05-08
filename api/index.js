const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
app.use(express.json());

const url = process.env.MONGO_URL;
mongoose.connect(url).then(() => {
  console.log("✅ Connected to MongoDB");
});

app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));

const coursesRouter = require("../routes/courseRoute");
app.use("/api/courses", coursesRouter);

module.exports = app;
