const { TutorModel } = require("./tutorSchema");
const jwt = require("jsonwebtoken");
const multer = require("multer");

const secret = "yourSecretKey";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./upload");
  },
  filename: function (req, file, cb) {
    const uniquePrefix = "prefix-";
    const originalname = file.originalname;
    const extension = originalname.split(".").pop();
    const filename =
      uniquePrefix +
      originalname.substring(0, originalname.lastIndexOf(".")) +
      "-" +
      Date.now() +
      "." +
      extension;
    cb(null, filename);
  },
});

const upload = multer({ storage: storage }).single("photo");

// Register Tutor
const registerTutor = async (req, res) => {
  try {
    const {
      fullName,
      gender,
      qualification,
      specification,
      experience,
      contactNumber,
      email,
      password,
    } = req.body;

    if (
      !fullName ||
      !gender ||
      !qualification ||
      !specification ||
      !experience ||
      !contactNumber ||
      !email ||
      !password
    ) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    let existingTutor = await TutorModel.findOne({ email });
    if (existingTutor) {
      return res.status(409).json({ msg: "Email already registered" });
    }

    const newTutor = new TutorModel({
      fullName,
      gender,
      qualification,
      specification,
      experience,
      contactNumber,
      email,
      password,
      photo: req.file,
    });

    await newTutor.save();
    return res.status(201).json({
      msg: "Tutor registered successfully",
      data: newTutor,
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Get all tutors
const getAllTutors = async (req, res) => {
  try {
    const tutors = await TutorModel.find();
    return res.status(200).json({ msg: "All tutors", data: tutors });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
const getAllApprovedTutors = async (req, res) => {
  try {
    const tutors = await TutorModel.find({ adminApproved: "approve" });
    return res.status(200).json({ msg: "All tutors", data: tutors });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
const getAllPendingTutors = async (req, res) => {
  try {
    const tutors = await TutorModel.find({ adminApproved: "pending" });
    return res.json({ message: "All pending tutuors", data: tutors });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Get tutor by ID
const getTutorById = async (req, res) => {
  try {
    const tutor = await TutorModel.findById(req.params.id);
    if (!tutor) {
      return res.status(404).json({ msg: "Tutor not found" });
    }
    return res.status(200).json({ msg: "Tutorial by id", data: tutor });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Update tutor by ID
const updateTutorById = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ msg: "File upload error", err });
    }
    try {
      const updates = req.body;
      if (req.file) {
        updates.photo = req.file;
      }

      const updatedTutor = await TutorModel.findByIdAndUpdate(
        req.params.id,
        updates,
        { new: true }
      );
      if (!updatedTutor) {
        return res.status(404).json({ msg: "Tutor not found" });
      }
      res.json(updatedTutor);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  });
};

// Delete tutor by ID
const deleteTutorById = async (req, res) => {
  try {
    const deletedTutor = await TutorModel.findByIdAndDelete(req.params.id);
    if (!deletedTutor) {
      return res.status(404).json({ msg: "Tutor not found" });
    }
    res.json({ msg: "Tutor deleted successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Activate tutor by ID
const activateTutorById = async (req, res) => {
  try {
    const tutor = await TutorModel.findByIdAndUpdate(
      req.params.id,
      { isActive: true },
      { new: true }
    );
    if (!tutor) {
      return res.status(404).json({ msg: "Tutor not found" });
    }
    res.json({ msg: "Tutor activated successfully", data: tutor });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Deactivate tutor by ID
const deactivateTutorById = async (req, res) => {
  try {
    const tutor = await TutorModel.findByIdAndUpdate(
      req.params.id,
      { isActive: false },
      { new: true }
    );
    if (!tutor) {
      return res.status(404).json({ msg: "Tutor not found" });
    }
    res.json({ msg: "Tutor deactivated successfully", data: tutor });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Approve tutor by ID
const adminApproveTutorById = async (req, res) => {
  try {
    const tutor = await TutorModel.findByIdAndUpdate(
      req.params.id,
      { adminApproved: "approve" },
      { new: true }
    );
    if (!tutor) {
      return res.status(404).json({ msg: "Tutor not found" });
    }
    res.json({ msg: "Tutor approved successfully", data: tutor });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
const adminRejectTutorById = async (req, res) => {
  try {
    const tutor = await TutorModel.findByIdAndUpdate(
      req.params.id,
      { adminApproved: "reject" },
      { new: true }
    );
    if (!tutor) {
      return res.status(404).json({ msg: "Tutor not found" });
    }
    res.json({ msg: "Tutor rejected successfully", data: tutor });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Tutor login
const loginTutor = async (req, res) => {
  try {
    const { email, password } = req.body;
    const tutor = await TutorModel.findOne({ email });

    if (!tutor) {
      return res.status(404).json({ msg: "Tutor not found" });
    }
    if (tutor.password !== password) {
      return res.status(401).json({ msg: "Password mismatch" });
    }
    if (tutor.adminApproved === "pending") {
      return res.status(401).json({ msg: "Tutor not approved by admin" });
    }
    if (tutor.adminApproved === "reject") {
      return res.status(401).json({ msg: "Your account rejected by admin" });
    }
    if (!tutor.isActive) {
      return res.status(401).json({ msg: "Your account is deactivated" });
    }
    const token = jwt.sign({ tutorId: tutor._id }, secret, {
      expiresIn: "1h",
    });
    res.status(200).json({ msg: "Login successful", token, data: tutor });
  } catch (error) {
    res.status(500).json({ msg: "Something went wrong", error });
  }
};

// Authentication middleware
const requireAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ msg: "No token provided" });
  }

  const token = authHeader.split(" ")[1];
  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ msg: "Token verification failed", err });
    }
    req.tutorId = decoded.tutorId;
    next();
  });
};

// Search tutors by name
const searchTutorByName = async (req, res) => {
  try {
    const tutors = await TutorModel.find({
      firstName: { $regex: req.params.name, $options: "i" },
    });
    if (tutors.length === 0) {
      return res
        .status(404)
        .json({ msg: "No tutor found with the specified name" });
    }
    res.status(200).json(tutors);
  } catch (error) {
    res.status(500).json({ msg: "Server error", error });
  }
};
const forgotPassword = async (req, res) => {
  try {
    const { email, newPassword } = req.body;
    if (!email) {
      return res.status(400).json({ msg: "All fields are required" });
    }
    const user = await TutorModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "User does not exist" });
    }
    user.password = newPassword;
    await user.save();
    return res
      .status(200)
      .json({ msg: "Password reset successfully.", data: user });
  } catch (error) {
    return res.status(500).json({ msg: "Server error", error: error.message });
  }
};
const editTutorById = async (req, res) => {
  try {
    const id = req.params.id;
    
    const tutor = await TutorModel.findById(id);
    if (!tutor) {
      return res.status(404).json({ msg: "Tutor not found" });
    }
    const {
      fullName,
      qualification,
      specification,
      experience,
      email,
      password,
      contactNumber,
    } = req.body;
    const obj = {};

    if (fullName) obj.fullName = fullName;
    if (qualification) obj.qualification = qualification;
    if (specification) obj.specification = specification;
    if (experience) obj.experience = experience;
    if (email) {
      const emailExists = await TutorModel.findOne({ email });
      if (emailExists && email !== tutor.email) {
        return res.status(400).json({ msg: "Email already exists" });
      }
      obj.email = email
    };
    if (password) obj.password = password;
    if (contactNumber) obj.contactNumber = contactNumber;

    const updatedTutor = await TutorModel.findByIdAndUpdate(id, obj, {
      new: true,
    });
    return res
      .status(200)
      .json({ msg: "Tutor updated successfully", data: updatedTutor });
  } catch (error) {
    return res.status(500).json({ msg: "Server error", error: error.message });
  }
};

module.exports = {
  registerTutor,
  loginTutor,
  getAllTutors,
  getTutorById,
  updateTutorById,
  deleteTutorById,
  activateTutorById,
  deactivateTutorById,
  adminApproveTutorById,
  adminRejectTutorById,
  requireAuth,
  upload,
  getAllPendingTutors,
  searchTutorByName,
  forgotPassword,
  editTutorById,
  getAllApprovedTutors
};
