const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    city: { type: String },
    state: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", userSchema);
