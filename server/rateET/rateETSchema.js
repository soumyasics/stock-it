const mongoose = require("mongoose");
const RateETSchema =  mongoose.Schema(
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
    rating: {
      type: Number,
      required: true,
    },
    review: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);


const RateETModel = mongoose.model("RateET", RateETSchema);
module.exports = { RateETModel };
