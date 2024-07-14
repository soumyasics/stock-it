const { BuyStocksModel } = require("./buyStocksSchema");
const IPOModel = require("../IPO/ipoSchema");

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
    stock.currentMarketPrice = Math.round(onePercentageOfCMP + stock.currentMarketPrice);
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
    return res.status(500).json({ msg: "Server error",error: error.message });
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
    const boughtStock = await BuyStocksModel.findById(req.params.id);
    return res
      .status(200)
      .json({ msg: "Bought stock by id", data: boughtStock })
      .populate("userId")
      .populate("IPOId")
      .populate("companyId")
      .exec();
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
};
