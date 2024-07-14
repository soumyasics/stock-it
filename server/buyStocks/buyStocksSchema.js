const mongoose = require("mongoose");
const buyStocksSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
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
    totalQuantity: {
      type: Number,
      requied: true,
    },
    costPerShare: {
      type: Number,
      requied: true,
    },
    totalCost: {
      type: Number,
      requied: true,
    },
    numberOfSharesBought: {
      type: Number,
      requied: true,
    },

    cardHolderName: {
      type: String,
      required: true,
    },
    cardNumber: {
      type: String,
      required: true,
    },
    cvv: {
      type: String,
      required: true,
    },
    expiry: {
      type: String,
      required: true,
    },
    currentProfit: {
      type: Number,
      default: 0,
    },
    currentLoss: {
      type: Number,
      default: 0,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);
const BuyStocksModel = mongoose.model("buyStocks", buyStocksSchema);
module.exports = { BuyStocksModel };
