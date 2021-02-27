const mongoose = require("mongoose");
const slug = require("slug");
const uniqueValidator = require("mongoose-unique-validator");

const technicianSchema = mongoose.Schema({
  rate: Number,
  status: { type: String, required: true },
  rating: Number,
  occupation: { type: String, trim: true, required: true },
  experience: { type: String, trim: true, required: true },
  createdAt: {
    type: Date,
    default: Date.now
  },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

technicianSchema.pre("save", function(next) {
  if (!this.isModified("name")) return next();
  this.slug = slug(this.name);
  next();
});

technicianSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Technician", technicianSchema);
