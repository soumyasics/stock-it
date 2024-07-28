const mongoose = require("mongoose");

const ipoSchema = mongoose.Schema(
  {
    totalShares: {
      type: Number,
      require: true,
    },
    availableShares: {
      type: Number,
      require: true,
    },
    costPerShare: {
      type: Number,
      require: true,
    },
    currentMarketPrice: {
      type: Number, // this value will change when user buy/sell
      require: true,
    },
    cmpArr: [
      {
        value: Number,
        date: Date,
      },
    ],
    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "companies",
      required: true,
    },
    capitation: {
      type: Number,
      require: true,
    },
    adminApproved: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("ipos", ipoSchema);
