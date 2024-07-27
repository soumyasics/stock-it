const mongoose = require("mongoose");
const { Schema } = mongoose;

const subscribeSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    ETId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "tutors",
      required: true,
    },
    date: {
      type: Date,
      default: Date.now(),
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const SubscribeModel = mongoose.model("subscribe", subscribeSchema);

module.exports = { SubscribeModel };
