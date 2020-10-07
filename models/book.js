const mongoose = require("mongoose");

const bookSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    img: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("book", bookSchema);
