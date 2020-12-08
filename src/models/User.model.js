const mongoose = require("mongoose");
const md5 = require("md5")
const passportLocalMongoose = require("passport-local-mongoose")
const uniqueValidator = require("mongoose-unique-validator");

const shared = {
  type: String,
  trim: true,
  required: true
};

const userSchema = mongoose.Schema({
  name: { ...shared },
  email: { ...shared, unique: true, lowercase: true },
  isTechnician: { type: Boolean, default: false },
  password: { ...shared },
  createdAt: { type: Date, default: Date.now },
  resetPasswordToken: String,
  resetPasswordExpires: Date
});

userSchema.virtual("gravatar").get(function() {
  const hashed_email = md5(this.email)
  return `https://gravatar.com/avatar/${hashed_email}?s=200`
})

userSchema.plugin(uniqueValidator);
userSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model("User", userSchema);
