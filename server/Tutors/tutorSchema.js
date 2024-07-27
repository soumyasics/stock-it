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
    default: true,
  },
  adminApproved: {
    type: String,
    enum: ["pending", "approve", "reject"],
    default: "pending",
  },
  rating: {
    type: Number,
    default: 0
  }
});

const TutorModel = mongoose.model("tutors", tSchema);

module.exports = { TutorModel };
