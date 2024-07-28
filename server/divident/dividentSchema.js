const mongoose = require("mongoose");

const dividentSchema = mongoose.Schema(
  {
    IPOId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ipos",
      required: true,
    },
    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "companies",
      required: true,
    },
    dividentPerShare: {
      type: Number,
      required: true,
    },
    totalDividentAmount: {
      type: Number,
      required: true,
    },
    paymentDate: {
      type: Date,
      required: true,
    },
    declarationDate: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    timestamps: true,
  }
);
const DividentModel = mongoose.model("divident", dividentSchema);
module.exports = DividentModel;
