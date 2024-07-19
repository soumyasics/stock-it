const UserComplaintModel = require("./complaintUsersSchema");

const createComplaint = async (req, res) => {
  try {
    const { userId, companyId, complaint } = req.body;

    if (!userId || !companyId || !complaint) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    const newCompalaint = new UserComplaintModel({
      userId,
      companyId,
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

const getAllComplaints = async (req, res) => {
  try {
    const complaints = await UserComplaintModel.find()
      .populate("userId")
      .populate("companyId")
      .exec();
    return res.status(200).json({ msg: "All complaints", data: complaints });
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Failed to get complaints", error: error.message });
  }
};

const getComplaintById = async (req, res) => {
  try {
    const { id } = req.params;
    const complaint = await UserComplaintModel.findById(id)
      .populate("userId")
      .populate("companyId")
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

module.exports = { createComplaint, getAllComplaints, getComplaintById };
