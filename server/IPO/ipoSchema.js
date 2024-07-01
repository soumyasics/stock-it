const mongoose = require("mongoose");

const ipoSchema = mongoose.Schema({
  totalShares: {
    type: String,
    require: true,
  },
  costPerShare: {
    type: Number,
    require: true,
  },
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
    type: Boolean,
    default: false,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
});
module.exports = mongoose.model("ipos", ipoSchema);
