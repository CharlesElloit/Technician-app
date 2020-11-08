const { Schema, model } = require("mongoose");

const userSchema = Schema({
  name: { type: String, required: true, trim: true },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    required: true
  },
  password: { type: String, required: true }
});

module.exports = model("User", userSchema);
