const { UserModel } = require('./tutorSchema');
const jwt = require('jsonwebtoken');
const multer = require('multer');

const secret = 'yourSecretKey';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './upload');
  },
  filename: function (req, file, cb) {
    const uniquePrefix = 'prefix-';
    const originalname = file.originalname;
    const extension = originalname.split('.').pop();
    const filename =
      uniquePrefix +
      originalname.substring(0, originalname.lastIndexOf('.')) +
      '-' +
      Date.now() +
      '.' +
      extension;
    cb(null, filename);
  },
});

const upload = multer({ storage: storage }).single('photo');

// Register Tutor
const registerTutor = async (req, res) => {
  console.log("file",req.file,"",req.body);
  
    try {
      const {
        firstName,
        lastName,
        qualification,
        background,
        address,
        specialization,
        experience,
        city,
        state,
        pincode,
        contactNumber,
        email,
        password,
      } = req.body;

      if (
        !firstName ||
        !lastName ||
        !qualification ||
        !background ||
        !address ||
        !specialization ||
        !experience ||
        !city ||
        !state ||
        !pincode ||
        !contactNumber ||
        !email ||
        !password 

      ) {
        return res.status(400).json({ msg: 'All fields are required' });
      }

      const newTutor = new UserModel({
        firstName,
        lastName,
        qualification,
        background,
        address,
        specialization,
        experience,
        city,
        state,
        pincode,
        photo: req.file,
        contactNumber,
        email,
        password,
        photo:req.file
      });

      let existingTutor = await UserModel.findOne({ email });
      if (existingTutor) {
        return res.status(409).json({ msg: 'Email already registered' });
      }

      await newTutor.save();
      res.status(201).json({
        msg: 'Tutor registered successfully',
        data: newTutor,
      });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
};

// Get all tutors
const getAllTutors = async (req, res) => {
  try {
    const tutors = await UserModel.find();
    res.json(tutors);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Get tutor by ID
const getTutorById = async (req, res) => {
  try {
    const tutor = await UserModel.findById(req.params.id);
    if (!tutor) {
      return res.status(404).json({ msg: 'Tutor not found' });
    }
    res.json(tutor);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Update tutor by ID
const updateTutorById = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ msg: 'File upload error', err });
    }
    try {
      const updates = req.body;
      if (req.file) {
        updates.photo = req.file;
      }

      const updatedTutor = await UserModel.findByIdAndUpdate(
        req.params.id,
        updates,
        { new: true }
      );
      if (!updatedTutor) {
        return res.status(404).json({ msg: 'Tutor not found' });
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
    const deletedTutor = await UserModel.findByIdAndDelete(req.params.id);
    if (!deletedTutor) {
      return res.status(404).json({ msg: 'Tutor not found' });
    }
    res.json({ msg: 'Tutor deleted successfully' });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Activate tutor by ID
const activateTutorById = async (req, res) => {
  try {
    const tutor = await UserModel.findByIdAndUpdate(
      req.params.id,
      { isActive: true },
      { new: true }
    );
    if (!tutor) {
      return res.status(404).json({ msg: 'Tutor not found' });
    }
    res.json({ msg: 'Tutor activated successfully', data: tutor });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Deactivate tutor by ID
const deactivateTutorById = async (req, res) => {
  try {
    const tutor = await UserModel.findByIdAndUpdate(
      req.params.id,
      { isActive: false },
      { new: true }
    );
    if (!tutor) {
      return res.status(404).json({ msg: 'Tutor not found' });
    }
    res.json({ msg: 'Tutor deactivated successfully', data: tutor });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Approve tutor by ID
const approveTutorById = async (req, res) => {
  try {
    const tutor = await UserModel.findByIdAndUpdate(
      req.params.id,
      { adminApproved: true },
      { new: true }
    );
    if (!tutor) {
      return res.status(404).json({ msg: 'Tutor not found' });
    }
    res.json({ msg: 'Tutor approved successfully', data: tutor });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Tutor login
const loginTutor = async (req, res) => {
  try {
    const { email, password } = req.body;
    const tutor = await UserModel.findOne({ email });

    if (!tutor) {
      return res.status(404).json({ msg: 'Tutor not found' });
    }
    if (tutor.password !== password) {
      return res.status(401).json({ msg: 'Password mismatch' });
    }
    if (!tutor.adminApproved) {
      return res.status(401).json({ msg: 'Tutor not approved by admin' });
    }
    const token = jwt.sign({ tutorId: tutor._id }, secret, {
      expiresIn: '1h',
    });
    res.status(200).json({ msg: 'Login successful', token, data: tutor });
  } catch (error) {
    res.status(500).json({ msg: 'Something went wrong', error });
  }
};

// Authentication middleware
const requireAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ msg: 'No token provided' });
  }

  const token = authHeader.split(' ')[1];
  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ msg: 'Token verification failed', err });
    }
    req.tutorId = decoded.tutorId;
    next();
  });
};

// Search tutors by name
const searchTutorByName = async (req, res) => {
  try {
    const tutors = await UserModel.find({
      firstName: { $regex: req.params.name, $options: 'i' },
    });
    if (tutors.length === 0) {
      return res.status(404).json({ msg: 'No tutor found with the specified name' });
    }
    res.status(200).json(tutors);
  } catch (error) {
    res.status(500).json({ msg: 'Server error', error });
  }
};

module.exports = {
  registerTutor,
  getAllTutors,
  getTutorById,
  updateTutorById,
  deleteTutorById,
  activateTutorById,
  deactivateTutorById,
  approveTutorById,
  loginTutor,
  requireAuth,
  upload,
  searchTutorByName,
};
