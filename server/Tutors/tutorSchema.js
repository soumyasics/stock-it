const mongoose = require("mongoose");
const { Schema } = mongoose;

const tSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },

  gender: {
    type: String,
    required: true,
  },
  qualification: {
    type: String,
    required: true,
  },

  specification: {
    type: String,
    required: true,
  },
  experience: {
    type: Number,
    required: true,
  },

  photo: {
    type: Object,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },

  isActive: {
    type: Boolean,
    default: false,
  },
  adminApproved: {
    type: String,
    default: false,
  },
});

const TutorModel = mongoose.model("tutors", tSchema);

module.exports = { TutorModel };
