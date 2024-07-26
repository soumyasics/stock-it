const { BuyStocksModel } = require("./buyStocksSchema");
const IPOModel = require("../IPO/ipoSchema");
const mongoose = require("mongoose");
const buyStocks = async (req, res) => {
  try {
    const {
      userId,
      IPOId,
      companyId,
      totalQuantity,
      numberOfSharesBought,
      costPerShare,
      totalCost,
      cardHolderName,
      cardNumber,
      cvv,
      expiry,
    } = req.body;
    if (
      !userId ||
      !IPOId ||
      !companyId ||
      !totalQuantity ||
      !numberOfSharesBought ||
      !costPerShare ||
      !totalCost ||
      !cardHolderName ||
      !cardNumber ||
      !cvv ||
      !expiry
    ) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    let stock = await IPOModel.findById(IPOId);
    if (!stock) {
      return res.status(404).json({ msg: "Stock not found" });
    }
    if (totalQuantity > stock.availableShares) {
      return res
        .status(400)
        .json({ msg: "You can't buy more shares than available" });
    }

    // when user buy stocks decrease the available shares
    stock.availableShares = stock.availableShares - totalQuantity;

    // increase the currentMarketPrice of the stock
    const onePercentageOfCMP = Math.round(stock.currentMarketPrice * 0.01);
    stock.currentMarketPrice = Math.round(
      onePercentageOfCMP + stock.currentMarketPrice
    );
    await stock.save();

    const buyStocks = new BuyStocksModel({
      userId,
      IPOId,
      companyId,
      totalQuantity,
      costPerShare,
      totalCost,
      numberOfSharesBought,
      cardHolderName,
      cardNumber,
      cvv,
      expiry,
    });
    await buyStocks.save();
    return res
      .status(201)
      .json({ msg: "Stock bought successfully", data: buyStocks });
  } catch (error) {
    return res.status(500).json({ msg: "Server error", error: error.message });
  }
};

const sellStocksById = async (req, res) => {
  try {
    const { id } = req.params;
    const { sellingQuantity } = req.body;
    if (!sellingQuantity) {
      return res.status(400).json({ msg: "All fields are required" });
    }
    const holdings = await BuyStocksModel.findById(id)
      .populate("IPOId")
      .populate("userId")
      .populate("companyId")
      .exec();

    if (!holdings) {
      return res.status(404).json({ msg: "Sell stocks not found" });
    }

    if (sellingQuantity > holdings.totalQuantity) {
      return res
        .status(400)
        .json({ msg: "You can't sell more shares than you have" });
    }

    const stock = holdings.IPOId;
    // 1. profit or loss calculation
    const currentMarketValueOfSellingQuantity =
      stock.currentMarketPrice * sellingQuantity;
    console.log("current market value", currentMarketValueOfSellingQuantity);
    const totalCostForSellingQuantity = sellingQuantity * holdings.costPerShare;
    console.log("total cost", totalCostForSellingQuantity);
    const profitOrLoss =
      currentMarketValueOfSellingQuantity - totalCostForSellingQuantity;
    if (profitOrLoss < 0) {
      holdings.currentLoss += profitOrLoss;
    } else {
      holdings.currentProfit += profitOrLoss;
    }

    //  2 reduce avalible quantity
    holdings.totalQuantity -= sellingQuantity;

    // 3. reduce current market price
    const onePercentageOfCMP = Math.round(stock.currentMarketPrice * 0.01);
    stock.currentMarketPrice = Math.round(
      stock.currentMarketPrice - onePercentageOfCMP
    );

    // await stock.save();

    // 4. increase availble shares of stocks
    stock.availableShares += sellingQuantity;

    await holdings.save();
    await stock.save();

    return res.status(200).json({
      msg: "Sell stocks found",
      profitOrLoss: profitOrLoss,
      currentAvailbleQty: holdings.totalQuantity,
      CMP: stock.currentMarketPrice,
      stock,
      holdings,
    });
  } catch (error) {
    return res.status(500).json({ msg: "Server error", error: error.message });
  }
};

const allBuyStocks = async (req, res) => {
  try {
    const buyStocks = await BuyStocksModel.find()
      .populate("userId")
      .populate("IPOId")
      .populate("companyId")
      .exec();
    return res.status(200).json({ msg: "All bought stocks", data: buyStocks });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllBoughtStocksByUserId = async (req, res) => {
  try {
    const buyStocks = await BuyStocksModel.find({ userId: req.params.id })
      .populate("userId")
      .populate("IPOId")
      .populate("companyId")
      .exec();
    return res
      .status(200)
      .json({ msg: "All bought stocks by user id", data: buyStocks });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllBoughtStocksByCompanyId = async (req, res) => {
  try {
    const buyStocks = await BuyStocksModel.find({ companyId: req.params.id })
      .populate("userId")
      .populate("IPOId")
      .populate("companyId")
      .exec();
    return res
      .status(200)
      .json({ msg: "All bought stocks by company id", data: buyStocks });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getBoughtStockById = async (req, res) => {
  try {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ msg: "Id is required" });
    }
    const boughtStock = await BuyStocksModel.findById(req.params.id)
      .populate("userId")
      .populate("IPOId")
      .populate("companyId")
      .exec();

    return res
      .status(200)
      .json({ msg: "Bought stock by id", data: boughtStock });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
module.exports = {
  buyStocks,
  allBuyStocks,
  getBoughtStockById,
  getAllBoughtStocksByUserId,
  getAllBoughtStocksByCompanyId,
  sellStocksById,
};
