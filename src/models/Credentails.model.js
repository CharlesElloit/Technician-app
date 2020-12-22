const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const CredentialSchema = mongoose.Schema({
  name: {type: String, required: true, trim: true, lowercase: true},
  profilePic: {type: String, required: true},
  isTechnician: {type: Boolean, default: false},
  userId: {
    type: mongoose.Schema.Types.ObjectId, ref: "User"
  },
  contact: {
    phone: {type: String, required: true}, 
    mobile: {type: String, required: true}
  },
  location: {
    coordinates: [
      {type: Number, default: 'Point'}
    ],
    address: {type: String, required: true}
  }
});

CredentialSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Credentials", CredentialSchema);
