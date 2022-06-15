const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const articleSchema = new Schema({
  name: String,
  age: Number,
});
