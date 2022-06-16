const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const today = new Date();
const userSchema = new Schema({
  name: String,
  age: Number,
  password: { type: String, minlength: 5, maxlength: 15 },
  createdAt: {
    type: Date,
    default:
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate(),
  },
});
