const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const name = { type: String, required: true, trim: true, lowercase: true };

const CredentialSchema = mongoose.Schema({
  fname: { ...name },
  lname: { ...name },
  profilePic: { type: String, required: true },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  technician: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Technician"
  },
  contact: {
    phone: { type: String, required: true },
    mobile: { type: String, required: true }
  },
  location: {
    type: {
      type: String,
      default: "Point",
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    },

    address: { type: String, required: true, trim: true, lowercase: true }
  }
});

CredentialSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Credentials", CredentialSchema);
