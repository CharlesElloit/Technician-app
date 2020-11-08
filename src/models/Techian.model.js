const { Schema, model } = require("mongoose");

const techianScheam = Schema({
  name: { type: String, trim: true, required: true },
  phoneNum: { type: String, required: true },
  email: { type: String, required: true },
  rate: Number,
  status: { type: String, required: true },
  rating: Number,
  profilePic: String,
  occupation: { type: String, trim: true, required: true },
  location: {
    type: {
      type: String,
      default: "Point"
    },
    coordinates: [
      {
        type: Number,
        required: "You must supply coordinates"
      }
    ],
    address: { type: String, required: true }
  }
});

module.exports = model("Techian", techianScheam);

/*  
This is a model for a techian who 
*/
