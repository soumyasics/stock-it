const ETComplaint = require("./complaintETSchema");

const createComplaintET = async (req, res) => {
  try {
    const { userId, etId, complaint } = req.body;

    if (!userId || !etId || !complaint) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    const newCompalaint = new ETComplaint({
      userId,
      etId,
      complaint,
    });

    await newCompalaint.save();
    return res
      .status(200)
      .json({ msg: "Complaint created successfully", newCompalaint });
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Failed to create complaint", error: error.message });
  }
};

const getAllComplaintsET = async (req, res) => {
  try {
    const complaints = await ETComplaint.find()
      .populate("userId")
      .populate("etId")
      .exec();
    return res.status(200).json({ msg: "All complaints", data: complaints });
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Failed to get complaints", error: error.message });
  }
};

const getComplaintByIdET = async (req, res) => {
  try {
    const { id } = req.params;
    const complaint = await ETComplaint.findById(id)
      .populate("userId")
      .populate("etId")
      .exec();
    if (!complaint) {
      return res.status(404).json({ msg: "Complaint not found" });
    }
    return res.status(200).json({ msg: "Complaint found", data: complaint });
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Failed to get complaint", error: error.message });
  }
};

module.exports = { createComplaintET, getAllComplaintsET, getComplaintByIdET };
