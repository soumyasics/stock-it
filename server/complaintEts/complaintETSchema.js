const mongoose = require("mongoose");
const EtComplaintSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    etId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "tutors",
      required: true,
    },
    complaint: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "Pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("EtComplaint", EtComplaintSchema);
