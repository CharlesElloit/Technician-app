const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const technicianSchema = mongoose.Schema({
  name: { type: String, trim: true, required: true },
  phoneNum: { type: String, trim: true, required: true },
  email: { type: String, trim: true, required: true, unique: true },
  rate: Number,
  status: { type: String, required: true },
  rating: Number,
  profilePic: String,
  occupation: { type: String, trim: true, required: true },
  slug: String,
  createdAt: {
    type: Date,
    default: Date.now()
  },
  location: {
    type: {
      type: String,
      default: "Point",
      trim: true
    },
    coordinates: [
      {
        type: Number,
        required: true
      }
    ],
    address: { type: String, required: true }
  }
});

technicianSchema.pre("save", function(next) {
  if (!this.isModified("name")) return next();
  this.slug = slug(this.name);
  next();
});

technicianSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Techian", technicianSchema);
