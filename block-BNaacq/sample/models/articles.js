const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema(
  {
    title: String,
    description: String,
    tags: [String],
    likes: { type: Number, default: 0 },
    author: Schema.Types.ObjectId,
    comments: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.connect("Article", articleSchema);
