const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  age: Number,
  marks: [Number],
  password: { type: String, maxlength: 15, minlength: 5 },
});

module.exports = mongoose.model("User", userSchema);
