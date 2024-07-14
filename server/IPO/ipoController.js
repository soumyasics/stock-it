const Ipo = require("./ipoSchema.js");
const CompanyModel = require("../Company/companySchema.js");
// Controller functions

// Create a new IPO
exports.createIpo = async (req, res) => {
  try {
    const { totalShares, costPerShare, companyId, capitation } = req.body;

    if (!totalShares || !costPerShare || !companyId || !capitation) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const alreadyIpo = await Ipo.findOne({ companyId });
    if (alreadyIpo) {
      const isPending = alreadyIpo.adminApproved === false;
      if (isPending) {
        return res
          .status(409)
          .json({ message: "Your IPO request is already pending." });
      }
      return res
        .status(409)
        .json({ message: "Your companies already listed." });
    }

    const newIpo = new Ipo({
      totalShares,
      costPerShare,
      currentMarketPrice: costPerShare,
      availableShares: totalShares,
      capitation,
      companyId,
    });
    await newIpo.save();
    res.status(201).json(newIpo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all IPOs
exports.getIpos = async (req, res) => {
  try {
    const ipos = await Ipo.find().populate("companyId").exec();
    return res.status(200).json({ message: "All IPOs", data: ipos });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
// Get all IPOs
exports.getIposForAdminApproval = async (req, res) => {
  try {
    const ipos = await Ipo.find({ adminApproved: false });
    res.json(ipos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// Get a single IPO by ID
exports.getIpoByCompanyId = async (req, res) => {
  try {
    const { id } = req.params;
    const company = await CompanyModel.findById(id);
    if (!company) {
      return res.status(404).json({ message: "IPO not found" });
    }
    const ipo = await Ipo.findOne({ companyId: id })
      .populate("companyId")
      .exec();
    if (!ipo) {
      return res.status(404).json({ message: "IPO not found" });
    }
    return res.status(200).json({ message: "IPO status", data: ipo });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

exports.getAllPendingIPOs = async (req, res) => {
  try {
    const ipos = await Ipo.find({ adminApproved: "pending" })
      .populate("companyId")
      .exec();
    return res.json({ message: "All pending IPOs", data: ipos });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAllApprovedIPOs = async (req, res) => {
  try {
    const ipos = await Ipo.find({ adminApproved: "approved" })
      .populate("companyId")
      .exec();
    return res.json({ message: "All approved IPOs", data: ipos });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

exports.getAllRejectedIPOs = async (req, res) => {
  try {
    const ipos = await Ipo.find({ adminApproved: "rejected" })
      .populate("companyId")
      .exec();
    return res.json({ message: "All rejected IPOs", data: ipos });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
// Delete an IPO
exports.deleteIpo = async (req, res) => {
  try {
    const deletedIpo = await Ipo.findByIdAndDelete(req.params.id);
    if (!deletedIpo) {
      return res.status(404).json({ message: "IPO not found" });
    }
    res.json({ message: "IPO deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single IPO by ID
exports.getIpoById = async (req, res) => {
  try {
    const id = req.params.id;

    const ipo = await Ipo.findById(id).populate("companyId").exec();
    if (!ipo) {
      return res.status(404).json({ message: "IPO not found" });
    }
    return res.status(200).json({ data: ipo, message: "IPO details" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

exports.approveIPOById = async (req, res) => {
  const id = req.params.id;
  try {
    const ipo = await Ipo.findById(id);
    if (!ipo) {
      return res.status(404).json({ msg: "IPO not found" });
    }

    const updateIPO = await Ipo.findByIdAndUpdate(
      id,
      { adminApproved: "approved" },
      { new: true }
    );
    return res.json({ msg: "IPO approved.", data: updateIPO });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
exports.rejectIPOById = async (req, res) => {
  const id = req.params.id;
  try {
    const ipo = await Ipo.findById(id);
    if (!ipo) {
      return res.status(404).json({ msg: "IPO not found" });
    }

    const updateIPO = await Ipo.findByIdAndUpdate(
      id,
      { adminApproved: "rejected" },
      { new: true }
    );
    return res.json({ msg: "IPO rejected.", data: updateIPO });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
