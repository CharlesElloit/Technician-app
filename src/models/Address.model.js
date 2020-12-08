const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const locationSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
  },
  address: {
    type: String,
    require: true,
  }
});

locationSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Location", locationSchema);
