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
    const ipos = await Ipo.find({ adminApproved: true });
    res.json(ipos);
  } catch (err) {
    res.status(500).json({ message: err.message });
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
    console.log("id", id)
    const company = await CompanyModel.findById(id);
    if (!company) {
      return res.status(404).json({ message: "IPO not found" });
    }
    const ipo = await Ipo.findOne({ companyId: id }).populate("companyId").exec();
    console.log("ipp", ipo)
    if (!ipo) {
      return res.status(404).json({ message: "IPO not found" });
    }
    return res.status(200).json({ message: "IPO status", data: ipo });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// Update an existing IPO
exports.updateIpo = async (req, res) => {
  try {
    const { totalShares, costPerShare, companyId, capitation } = req.body;
    const updatedIpo = await Ipo.findByIdAndUpdate(
      req.params.id,
      {
        totalShares,
        costPerShare,
        companyId,
        capitation,
      },
      { new: true }
    );
    if (!updatedIpo) {
      return res.status(404).json({ message: "IPO not found" });
    }
    res.json(updatedIpo);
    await Ipo.findByIdAndUpdate(
      { _id: req.params.id },
      { adminApproved: false }
    );
  } catch (err) {
    res.status(500).json({ message: err.message });
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

    const ipo = await Ipo.findById(req.params.id);
    if (!ipo) {
      return res.status(404).json({ message: "IPO not found" });
    }
    res.json(ipo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.approveIPOById = async (req, res) => {
  try {
    const ipo = await Ipo.findByIdAndUpdate(
      { _id: req.params.id },
      { adminApproved: true }
    );
    if (!ipo) {
      return res.status(404).json({ message: "IPO not found" });
    }
    res.json(ipo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
