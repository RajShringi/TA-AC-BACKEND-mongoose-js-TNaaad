const express = require("express");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/sample", (err) => {
  console.log(err ? err : "Connected to Database");
});

const app = express();

app.listen(4000, () => {
  console.log("server is listening on port 4k");
});
