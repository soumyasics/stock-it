const Company = require("./companySchema");
const jwt = require("jsonwebtoken");
const multer = require("multer");

const secret = "yourSecretKey";

const storage = multer.diskStorage({
  destination: function (req, res, cb) {
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

const upload = multer({ storage: storage }).array("files");
// Register Company
const registerCompany = async (req, res) => {
  try {
    const {
      name,
      pincode,
      companyType,
      year,
      password,
      website,
      state,
      contact,
      district,
      email,
      description,
      regNo,
    } = req.body;
    if (
      !name ||
      !pincode ||
      !companyType ||
      !year ||
      !password ||
      !website ||
      !state ||
      !contact ||
      !district ||
      !email ||
      !description ||
      !regNo
    ) {
      return res.json({ status: 400, msg: "All fields are required" });
    }
    const newCompany = new Company({
      name,
      pincode,
      companyType,
      year,
      password,
      website,
      state,
      contact,
      district,
      email,
      logo: req.files[0],
      license: req.files[1],
      description,
      regNo,
    });

    let existingCompany = await Company.findOne({ email });
    if (existingCompany) {
      return res.json({ status: 409, msg: "Email already registered" });
    }

    await newCompany.save();
    res.json({
      status: 200,
      msg: "Company registered successfully",
      data: newCompany,
    });
  } catch (error) {
    console.log(error);
    res.json({ status: 500, msg: error });
  }
};

const addTicker = async (req, res) => {
  try {
    const { companyId, ticker } = req.body;

    const company = await Company.findById(companyId);
    if (!company) {
      return res.status(404).json({ msg: "Company not found" });
    }
    company.ticker = ticker;
    await company.save();
    return res.status(200).json({ msg: "Ticker added successfully" });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
// View all Companies
const viewCompanies = async (req, res) => {
  try {
    const companies = await Company.find();
    return res.json({
      status: 200,
      msg: "Companies retrieved successfully",
      data: companies,
    });
  } catch (error) {
    res.json({ status: 500, msg: "Failed to retrieve companies", error });
  }
};
const viewPendingCompanies = async (req, res) => {
  try {
    const companies = await Company.find({
      adminApproved: false,
    });
    return res.json({
      status: 200,
      msg: "Pending Companies retrieved successfully",
      data: companies,
    });
  } catch (error) {
    res.json({ status: 500, msg: "Failed to retrieve companies", error });
  }
};

// View Company by ID
const viewCompanyById = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);
    if (!company) {
      return res.status(404).json({ msg: "Company not found" });
    }
    return res
      .status(200)
      .json({ msg: "Company retrieved successfully", data: company });
  } catch (error) {
    return res.status(500).json({ msg: "Failed to retrieve company", error });
  }
};

// Update Company by ID
const updateCompanyById = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ msg: "File upload error", err });
    }
    try {
      const updates = req.body;
      if (req.files["logo"]) {
        updates.logo = req.files["logo"][0];
      }
      if (req.files["license"]) {
        updates.license = req.files["license"][0];
      }

      const company = await Company.findByIdAndUpdate(req.params.id, updates, {
        new: true,
      });
      if (!company) {
        return res.status(404).json({ msg: "Company not found" });
      }
      res
        .status(200)
        .json({ msg: "Company updated successfully", data: company });
    } catch (error) {
      res.status(500).json({ msg: "Failed to update company", error });
    }
  });
};

// Delete Company by ID
const deleteCompanyById = async (req, res) => {
  try {
    const company = await Company.findByIdAndDelete(req.params.id);
    if (!company) {
      return res.json({ status: 500, msg: "Company not found" });
    }
    res.json({
      status: 200,
      msg: "Company removed successfully",
      data: company,
    });
  } catch (error) {
    res.json({ status: 500, msg: "Failed to delete company", error });
  }
};

// accept Company by ID
const acceptCompanyById = async (req, res) => {
  try {
    const company = await Company.findByIdAndUpdate(
      req.params.id,
      { adminApproved: true },
      { new: true }
    );

    if (!company) {
      return res.json({ status: 500, msg: "Company not found" });
    }
    res.json({
      status: 200,
      msg: "Company Updated successfully",
      data: company,
    });
  } catch (error) {
    res.json({ status: 500, msg: "Failed to delete company", error });
  }
};

// accept Company by ID
const activateCompanyById = async (req, res) => {
  try {
    const id = req.params.id;
    const company = await Company.findByIdAndUpdate(
      id,
      {
        isActive: true,
      },
      { new: true }
    );
    if (!company) {
      return res.json({ status: 500, msg: "Company not found" });
    }
    res.json({
      status: 200,
      msg: "Company Updated successfully",
      data: company,
    });
  } catch (error) {
    res.json({ status: 500, msg: "Failed to delete company", error });
  }
};
const deActivateCompanyById = async (req, res) => {
  try {
    const id = req.params.id;
    const company = await Company.findByIdAndUpdate(
      id,
      {
        isActive: false,
      },
      { new: true }
    );
    if (!company) {
      return res.json({ status: 500, msg: "Company not found" });
    }
    res.json({
      status: 200,
      msg: "Company Deativated successfully",
      data: company,
    });
  } catch (error) {
    res.json({ status: 500, msg: "Failed to delete company", error });
  }
};

// Login Company
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const company = await Company.findOne({ email });

    if (!company) {
      return res.status(404).json({ msg: "Company not found" });
    }
    if (company.password !== password) {
      return res.status(401).json({ msg: "Password mismatch" });
    }
    if (company.adminApproved === false) {
      return res.status(401).json({ msg: "Company not approved by admin" });
    }
    if (company.isActive === false) {
      return res.status(401).json({ msg: "Your account is deactivated by admin." });
    }
    const token = jwt.sign({ companyId: company._id }, secret, {
      expiresIn: "1h",
    });
    res.status(200).json({ msg: "Login successful", token, data: company });
  } catch (error) {
    res.status(500).json({ msg: "Something went wrong", error });
  }
};

// Authentication Middleware
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
    req.companyId = decoded.companyId;
    next();
  });
};
const searchcompanyByName = (req, res) => {
  Company.find({ name: { $regex: req.params.name, $options: "i" } })
    .then((data) => {
      if (data.length === 0) {
        return res
          .status(409)
          .json({ message: "No Company found with the specified Name." });
      }
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: "Server Error" });
    });
};

const forgotPassword = async (req, res) => {
  try {
    const { email, newPassword } = req.body;
    if (!email) {
      return res.status(400).json({ msg: "All fields are required" });
    }
    const user = await Company.findOne({ email });
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

const editCompanyById = async (req, res) => {
  try {
    const {name, pincode, companyType, password, website, state, contact, email, description, regNo} = req.body;
    const company = await Company.findById(req.params.id);
    if (!company) {
      return res.status(404).json({ msg: "Company not found" });
    }
    const obj = {};
    if (name) obj.name = name;
    if (pincode) obj.pincode = pincode;
    if (companyType) obj.companyType = companyType;
    if (password) obj.password = password;
    if (website) obj.website = website;
    if (state) obj.state = state;
    if (contact) obj.contact = contact;
    if (email) obj.email = email;
    if (description) obj.description = description;
    if (regNo) obj.regNo = regNo;
    const updatedCompany = await Company.findByIdAndUpdate(req.params.id, obj, {
      new: true,
    });
    res.status(200).json({ msg: "Company updated successfully", data: updatedCompany });
  } catch (error) {
    return res.status(500).json({msg: "Server error", error: error.message});
  }
}

module.exports = {
  registerCompany,
  login,
  viewCompanies,
  viewCompanyById,
  updateCompanyById,
  deleteCompanyById,
  requireAuth,
  upload,
  activateCompanyById,
  deActivateCompanyById,
  acceptCompanyById,
  deleteCompanyById,
  searchcompanyByName,
  forgotPassword,
  viewPendingCompanies,
  addTicker,

  editCompanyById
};
