const { deActivateCompanyById } = require("../Company/companyController");
const { UserModel } = require("./userSchema");

const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./upload");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage }).any();

// Create User
const createUser = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      gender,
      dob,
      address,
      city,
      state,
      pincode,
      contactNumber,
      email,
      password,
      dematACNumber,
      bankName,
      branchName,
      ifscCode,
    } = req.body;

    if (
      !firstName ||
      !lastName ||
      !gender ||
      !dob ||
      !address ||
      !city ||
      !state ||
      !pincode ||
      !contactNumber ||
      !email ||
      !password ||
      !dematACNumber ||
      !bankName ||
      !branchName ||
      !ifscCode
    ) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    if (pincode.length !== 6) {
      return res.status(400).json({ msg: "Invalid pincode" });
    }

    if (contactNumber.length !== 10) {
      return res.status(400).json({ msg: "Invalid contact number" });
    }

    const photo = req.files.find(
      (file) => file.fieldname === "photo"
    )?.filename;
    const idProof = req.files.find(
      (file) => file.fieldname === "idProof"
    )?.filename;
    const user = await UserModel.create({
      firstName,
      lastName,
      gender,
      dob,
      address,
      city,
      state,
      pincode,
      photo,
      idProof,
      contactNumber,
      email,
      password,
      dematACNumber,
      bankName,
      branchName,
      ifscCode,
    });
    return res
      .status(200)
      .json({ msg: "User created successfully", data: user });
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Failed to create user", error: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ msg: "All fields are required" });
    }
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "User does not exist" });
    }
    if (user.password !== password) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }
    if (!user.isActive) {
      return res.status(400).json({ msg: "Your account is deactivated" });
    }
    return res
      .status(200)
      .json({ msg: "User logged in successfully", data: user });
  } catch (error) {
    return res.status(500).json({ msg: "Failed to login user", error });
  }
};

const forgotPassword = async (req, res) => {
  try {
    const { email, newPassword } = req.body;
    if (!email) {
      return res.status(400).json({ msg: "All fields are required" });
    }
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "User does not exist" });
    }
    user.password = newPassword;
    await user.save();
    return res
      .status(200)
      .json({ msg: "Password reset successfully", data: user });
  } catch (error) {
    return res.status(500).json({ msg: "Server error", error: error.message });
  }
};
const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    return res
      .status(200)
      .json({ msg: "Users retrieved successfully", data: users });
  } catch (error) {
    return res.status(500).json({ msg: "Failed to retrieve users", error });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    return res
      .status(200)
      .json({ msg: "User retrieved successfully", data: user });
  } catch (error) {
    return res.status(500).json({ msg: "Failed to retrieve user", error });
  }
};

const activateUserById = async (req, res) => {
  try {
    const user = await UserModel.findByIdAndUpdate(
      { _id: req.params.id },
      { isActive: true }
    );
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    return res
      .status(200)
      .json({ msg: "User retrieved successfully", data: user });
  } catch (error) {
    return res.status(500).json({ msg: "Failed to retrieve user", error });
  }
};

const deActivateUserById = async (req, res) => {
  try {
    const user = await UserModel.findByIdAndUpdate(
      { _id: req.params.id },
      { isActive: false }
    );
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    return res
      .status(200)
      .json({ msg: "User retrieved successfully", data: user });
  } catch (error) {
    return res.status(500).json({ msg: "Failed to retrieve user", error });
  }
};

// Edit User by ID
const editUserById = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      address,
      city,
      state,
      pincode,
      contactNumber,
      email,
      password,
    } = req.body;

    if (pincode.length !== 6) {
      return res.status(400).json({ msg: "Invalid pincode" });
    }

    if (contactNumber.length !== 10) {
      return res.status(400).json({ msg: "Invalid contact number" });
    }

    const obj = {};
    if (firstName) {
      obj.firstName = firstName;
    }
    if (lastName) {
      obj.lastName = lastName;
    }
    if (address) {
      obj.address = address;
    }
    if (city) {
      obj.city = city;
    }
    if (state) {
      obj.state = state;
    }
    if (pincode) {
      obj.pincode = pincode;
    }
    if (contactNumber) {
      obj.contactNumber = contactNumber;
    }
    if (email) {
      obj.email = email;
    }
    if (password) {
      obj.password = password;
    }

    const updatedUser = await UserModel.findByIdAndUpdate(
      req.params.id,
      obj,
      { new: true } // To return the updated document
    );

    if (!updatedUser) {
      return res.status(404).json({ msg: "User not found" });
    }

    return res
      .status(200)
      .json({ msg: "User updated successfully", data: updatedUser });
  } catch (error) {
    return res.status(500).json({ msg: "Failed to update user", error });
  }
};

module.exports = {
  upload,
  createUser,
  loginUser,
  getAllUsers,
  getUserById,
  editUserById,
  deActivateUserById,
  activateUserById,
  forgotPassword,
};
