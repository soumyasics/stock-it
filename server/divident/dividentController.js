const mongoose = require("mongoose");
const DividnetModel = require("./dividentSchema");

const addDivident = async (req, res) => {
  try {
    const {
      IPOId,
      companyId,
      dividentPerShare,
      totalDividentAmount,
      paymentDate,
    } = req.body;

    if (!IPOId || !companyId || !dividentPerShare || !totalDividentAmount) {
      return res.status(400).json({ msg: "Please fill all the fields" });
    }
    if (!mongoose.Types.ObjectId.isValid(IPOId)) {
      return res.status(400).json({ msg: "Invalid IPO Id" });
    }
    if (!mongoose.Types.ObjectId.isValid(companyId)) {
      return res.status(400).json({ msg: "Invalid company Id" });
    }
    const isDividnentAlreadyExist = await DividnetModel.findOne({
      IPOId,
      companyId,
      paymentDate,
    });
    if (isDividnentAlreadyExist) {
      return res
        .status(400)
        .json({ msg: "Divident already added for this date" });
    }

    const newDivident = new DividnetModel({
      IPOId,
      companyId,
      dividentPerShare,
      totalDividentAmount,
      paymentDate,
    });
    await newDivident.save();
    return res
      .status(200)
      .json({ msg: "Divident added successfully", data: newDivident });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ msg: "Something went wrong", error: error.message });
  }
};

const getAllDividents = async (req, res) => {
  try {
    const dividents = await DividnetModel.find();
    return res.status(200).json({ msg: "All dividnets", data: dividents });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ msg: "Something went wrong", error: error.message });
  }
};

const getDividentById = async (req, res) => {
  try {
    const divident = await DividnetModel.findById(req.params.id);
    return res.status(200).json({ msg: "Divident", data: divident });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ msg: "Something went wrong", error: error.message });
  }
};

const getDividentsByIPOId = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ msg: "Invalid IPO Id" });
    }
    const dividents = await DividnetModel.find({ IPOId: id })
      .populate("companyId")
      .populate("IPOId")
      .exec();
    return res.status(200).json({ msg: "All dividnets", data: dividents });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ msg: "Something went wrong", error: error.message });
  }
};

module.exports = {
  addDivident,
  getAllDividents,
  getDividentById,
  getDividentsByIPOId,
};
