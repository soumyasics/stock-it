const { BuyStocksModel } = require("./buyStocksSchema");

const buyStocks = async (req, res) => {
  try {
    const {
      userId,
      IPOId,
      companyId,
      quantity,
      costPerShare,
      totalCost,
      numberOfSharesBought,
      cardHolderName,
      cardNumber,
      cvv,
      expiry,
    } = req.body;
    if (
      !userId ||
      !IPOId ||
      !companyId ||
      !quantity ||
      !costPerShare ||
      !totalCost ||
      !numberOfSharesBought ||
      !cardHolderName ||
      !cardNumber ||
      !cvv ||
      !expiry
    ) {
      return res.status(400).json({ msg: "All fields are required" });
    }
    const buyStocks = new BuyStocksModel({
      userId,
      IPOId,
      companyId,
      quantity,
      costPerShare,
      totalCost,
      numberOfSharesBought,
      currentProfit,
      currentLoss,
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
    return res.status(500).json({ error: error.message });
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
