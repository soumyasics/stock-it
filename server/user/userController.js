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

const upload = multer({ storage: storage }).single("photo");

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
      photo,
      contactNumber,
      email,
      password,
    } = req.body;

    console.log("req body", req.body);
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
      !password
    ) {
      return res.status(400).json({ msg: "All fields are required" });
    }
    if (pincode.length !== 6) {
      return res.status(400).json({ msg: "Invalid pincode" });
    }

    if (contactNumber.length !== 10) {
      return res.status(400).json({ msg: "Invalid contact number" });
    }

    const user = await UserModel.create({
      firstName,
      lastName,
      gender,
      dob,
      address,
      city,
      state,
      pincode,
      photo: req.file,
      contactNumber,
      email,
      password,
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
    return res
      .status(200)
      .json({ msg: "User logged in successfully", data: user });
  } catch (error) {
    return res.status(500).json({ msg: "Failed to login user", error });
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

module.exports = {
  upload,
  createUser,
  loginUser,
  getAllUsers,
  getUserById,
};
