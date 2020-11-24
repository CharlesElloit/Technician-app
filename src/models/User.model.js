const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const shared = {
  type: String,
  trim: true,
  required: true
};

const userSchema = mongoose.Schema({
  createdAt: { type: Date, default: Date.now },
  name: { ...shared },
  email: { ...shared, unique: true, lowercase: true },
  isTechnician: { type: Boolean, default: false },
  location: {
    type: { type: String, default: "Point", trim: true },
    coordinates: [{ type: Number }],
    address: { type: String }
  },
  password: { ...shared },
  phoneNumber: { type: String, trim: true },
  profilePic: String
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
