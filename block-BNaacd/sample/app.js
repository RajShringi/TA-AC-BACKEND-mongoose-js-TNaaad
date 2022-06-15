const express = require("express");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/sample", (err) => {
  console.log(err ? err : "Connected to database");
});

const app = express();

app.get("/", (req, res) => {
  res.send("welcome");
});

app.listen(4000, () => {
  console.log("server is listening on port 4k");
});
